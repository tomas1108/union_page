"use client";
import React, { useEffect } from "react";
import Swal from "sweetalert2";

const TradingPage: React.FC = () => {
  const gourl = (url: string) => {
    window.location.href = url;
  };

  const typeSelect = () => {
    const element = document.getElementById("typeSelect");
    if (element) {
      element.style.display =
        element.style.display === "none" ? "flex" : "none";
    }
  };

  const setBetAmount = (amount: number) => {
    const betAmountInput = document.getElementById(
      "betAmount"
    ) as HTMLInputElement;
    if (betAmountInput) {
      betAmountInput.value = (
        parseInt(betAmountInput.value) + amount
      ).toString();
      const betAmount2Input = document.getElementById(
        "betAmount2"
      ) as HTMLInputElement;
      if (betAmount2Input) {
        betAmount2Input.value = betAmountInput.value;
      }
    }
  };

  const resetBet = () => {
    const betAmountInput = document.getElementById(
      "betAmount"
    ) as HTMLInputElement;
    if (betAmountInput) {
      betAmountInput.value = "0";
    }
    const betAmount2Input = document.getElementById(
      "betAmount2"
    ) as HTMLInputElement;
    if (betAmount2Input) {
      betAmount2Input.value = "0";
    }
  };

  const placeBet = (type: string) => {
    const betAmountInput = document.getElementById(
      "betAmount"
    ) as HTMLInputElement;
    const betTypeInput = document.getElementById("betType") as HTMLInputElement;
    const betAmountHiddenInput = document.getElementById(
      "betAmountHidden"
    ) as HTMLInputElement;

    const betAmount = parseInt(betAmountInput.value);
    if (isNaN(betAmount) || betAmount <= 0) {
      Swal.fire("오류", "올바른 배팅 금액을 입력해주세요.", "error");
      return;
    }

    var userBalance = 12200000;

    // Assuming userBalance is available
    if (betAmount > userBalance) {
      Swal.fire("오류", "잔고가 부족합니다.", "error");
      return;
    }

    if (betTypeInput) betTypeInput.value = type;
    if (betAmountHiddenInput) betAmountHiddenInput.value = betAmount.toString();

    //   $.ajax({
    //     url: 'process_usd_bet.php',
    //     type: 'POST',
    //     data: $('#betForm').serialize(),
    //     dataType: 'json',
    //     success: function (response) {
    //       if (response.success) {
    //         Swal.fire('성공', '배팅이 성공적으로 처리되었습니다.', 'success');
    //         userBalance = response.newBalance;
    //         updateBalance();
    //         resetBet();
    //       } else {
    //         Swal.fire('오류', '배팅 처리 중 오류가 발생했습니다: ' + response.message, 'error');
    //       }
    //     },
    //     error: function () {
    //       Swal.fire('오류', '서버와의 통신 중 오류가 발생했습니다.', 'error');
    //     }
    //   });
  };

  const updateBalance = () => {
    const currentBalanceElement = document.getElementById("currentBalance");
    const topDepositElement = document.getElementById("topDeposit");
    const userBalance = 12200000; // Declare and initialize the 'userBalance' variable
    if (currentBalanceElement)
      currentBalanceElement.textContent = userBalance.toLocaleString();
    if (topDepositElement)
      topDepositElement.textContent = userBalance.toLocaleString();
  };

  const updateOrderHistory = () => {
    $.ajax({
      url: "get_order_history_usd.php",
      type: "GET",
      dataType: "json",
      success: function (response) {
        if (response.success) {
          $("#listContent").empty();
          $.each(response.data, function (index, betHistory) {
            let resultClass = "";
            let BettingClass = "";
            let resultText = betHistory.result;

            if (betHistory.bet_type === "LONG") {
              BettingClass = "type-success";
            } else if (betHistory.bet_type === "SHORT") {
              BettingClass = "type-cancel";
            }

            if (betHistory.result === "실현") {
              resultClass = "result-success";
              resultText = "익절";
            } else if (betHistory.result === "실격") {
              resultClass = "result-failure";
              resultText = "손절";
            } else if (betHistory.result === "취소") {
              resultClass = "result-cancel";
              resultText = "취소";
            }

            const formattedAmount = parseFloat(
              betHistory.amount
            ).toLocaleString();
            const newRow = `
                <div class='t_table'>
                  <div class='t_toptxt'>${betHistory.betAccountTime}</div>
                  <div class='t_toptxt'>USD/KRW</div>
                  <div class='t_toptxt'>${formattedAmount}원</div>
                  <div class='t_toptxt _3 ${BettingClass}'>${betHistory.bet_type}</div>
                  <div class='t_toptxt ${resultClass}'>
                    ${resultText}
                  </div>
                </div>`;
            $("#listContent").append(newRow);
          });
        } else {
          console.log("No data received or failed to fetch");
        }
      },
      error: function () {
        console.log("Failed to fetch order history");
      },
    });
  };
  useEffect(() => {
    // Initialize TradingView widget
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      new (window as any).TradingView.widget({
        autosize: true,
        symbol: "FX_IDC:USDKRW",
        interval: "2",
        timezone: "Asia/Seoul",
        theme: "dark",
        style: "1",
        locale: "kr",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        hide_side_toolbar: false,
        allow_symbol_change: true,
        details: true,
        show_popup_button: true,
        popup_width: "1000",
        popup_height: "650",
        container_id: "tradingview_70cf2",
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  // const updateTime = () => {
  //   const now = new Date().getTime();
  //   const serverTime = 0; // Declare and initialize the 'serverTime' variable
  //   const timeDiff = now - serverTime;
  //   const currentServerTime = new Date(serverTime + timeDiff);

  //   secondsLeft--;
  //   if (secondsLeft < 0) {
  //     secondsLeft = 119;
  //     const nextMinute = new Date(currentServerTime.getTime() + 120000);
  //     nextContractTime = nextMinute.getHours().toString().padStart(2, '0') + ':' +
  //       nextMinute.getMinutes().toString().padStart(2, '0');
  //     document.getElementById('contractTime').textContent = nextContractTime;

  //     loadPreviousPositions();
  //     updatePosition();
  //   }
  //   document.getElementById('nextLeftTime').textContent = secondsLeft;
  // };

  // const synchronizeServerTime = () => {
  //   $.ajax({
  //     url: 'get_server_time.php',
  //     type: 'GET',
  //     dataType: 'json',
  //     success: function (response) {
  //       serverTime = response.serverTime * 1000;
  //       secondsLeft = response.secondsLeft;
  //       nextContractTime = response.nextContractTime;
  //       document.getElementById('contractTime').textContent = nextContractTime;
  //     },
  //     error: function () {
  //       console.log('Failed to synchronize with server time');
  //     }
  //   });
  // };

  const loadPreviousPositions = () => {
    $.ajax({
      url: "get_usd_2min.php",
      type: "GET",
      dataType: "json",
      success: function (response) {
        $("#resultContent").empty();
        response.forEach(function (item: any) {
          addPositionRow(item);
        });
      },
      error: function () {
        console.log("Failed to fetch previous positions");
      },
    });
  };

  const addPositionRow = (item: any) => {
    if (!item || !item.position || !item.local_timestamp) {
      console.error("Invalid item:", item);
      return;
    }

    const date = new Date(item.local_timestamp * 1000);
    const formattedDate =
      date.getFullYear() +
      "-" +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + date.getDate()).slice(-2) +
      " " +
      ("0" + date.getHours()).slice(-2) +
      ":" +
      ("0" + date.getMinutes()).slice(-2) +
      ":00";

    const newRow = `
        <div class='t_table ${item.position === "LONG" ? "" : "_2"}'>
          <div class='t_toptxt'>${formattedDate}</div>
          <div class='t_toptxt _2'>USD</div>
          <div class='t_toptxt ${item.position.toLowerCase()}'>
            ${item.position}
          </div>
        </div>`;

    $("#resultContent").append(newRow);

    while ($("#resultContent").children().length > 30) {
      $("#resultContent").children().first().remove();
    }
  };

  // const updatePosition = () => {
  //   $.ajax({
  //     url: 'update_usd_2min.php',
  //     type: 'GET',
  //     dataType: 'json',
  //     success: function (response) {
  //       if (response.success && Array.isArray(response.positions)) {
  //         response.positions.forEach(function (item: { local_timestamp: any; position: any; usd_price: any; }) {
  //           addPositionRow({
  //             local_timestamp: item.local_timestamp,
  //             position: item.position,
  //             usd_price: item.usd_price
  //           });
  //         });

  //         Swal.fire({
  //           title: '새로운 포지션',
  //           text: `현재 포지션: ${response.positions[0].position}, 가격: $${response.positions[0].usd_price}`,
  //           icon: 'info',
  //           toast: true,
  //           position: 'top-end',
  //           showConfirmButton: false,
  //           timer: 3000
  //         });
  //       } else {
  //         console.log('No position data found');
  //       }
  //     },
  //     error: function () {
  //       console.log('Failed to fetch position');
  //     }
  //   });
  // };

  useEffect(() => {
    const updateBalanceInterval = setInterval(updateBalance, 5000);
    //   const updateTimeInterval = setInterval(updateTime, 1000);
    //   const updatePositionInterval = setInterval(updatePosition, 120000);
    //   const synchronizeServerTimeInterval = setInterval(synchronizeServerTime, 1200000);

    //   $(document).ready(() => {
    //     updateBalance();
    //     loadPreviousPositions();
    //     setTimeout(updatePosition, 1000); // First position update after page load
    //     updateOrderHistory();
    //     setInterval(updateOrderHistory, 1000); // Update order history every second
    //   });

    return () => {
      clearInterval(updateBalanceInterval);
      // clearInterval(updateTimeInterval);
      // clearInterval(updatePositionInterval);
      // clearInterval(synchronizeServerTimeInterval);
    };
  }, []);

  return (
    <>
      <div className="w-mod-js wf-notosanskr-n1-active wf-notosanskr-n3-active wf-notosanskr-n4-active wf-notosanskr-n5-active wf-notosanskr-n7-active wf-notosanskr-n9-active wf-active">
        <body className="body-2">
          <div className="all_blue">
            <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
            <div className="top _2">
              <div className="top_right">
                <div
                  className="logo_block"
                  style={{ cursor: "pointer" }}
                  onClick={() => (window.location.href = "/")}
                >
                  <img
                    src="https://kr-union.com/bitcall/bitcall_short1.png"
                    loading="lazy"
                    alt=""
                    className="logo"
                  />
                </div>
                <div className="btnlist" id="top_menu_bar">
                  <a href="chart" className="blue_topbtn w-button click">
                    거래소
                  </a>
                  <a href="deposit" className="blue_topbtn w-button">
                    자산 입출금
                  </a>
                  <a href="qna" className="blue_topbtn w-button">
                    고객센터
                  </a>
                </div>
              </div>
              <div className="top_left">
                <div id="keepmoney">
                  <span id="topDeposit">12,200,000</span> 원
                </div>
                <div
                  className="top_myprofile"
                  onClick={() => (window.location.href = "mypage.php")}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src="https://kr-union.com/img/user-user-circle.svg"
                    loading="lazy"
                    alt=""
                    className="image-30"
                  />
                  <div>test 님</div>
                </div>
                <a href="logout.php" className="loginregist login w-button">
                  로그아웃
                </a>
                <a href="mypage.php" className="momenuclick2-n w-inline-block">
                  <img
                    src="img/user-user-circle.svg"
                    loading="lazy"
                    alt=""
                    className="menuprofile"
                  />
                </a>
              </div>
            </div>
            <div className="main_bottombtn" style={{ zIndex: 9999 }}>
              <div className="btnlist footer" id="bottom_menu_bar">
                <a href="btc.php" className="blue_topbtn w-button click">
                  거래소
                </a>
                <a href="exchange_in.php" className="blue_topbtn w-button">
                  자산 입출금
                </a>
                <a href="qna.php" className="blue_topbtn w-button">
                  고객센터
                </a>
              </div>
            </div>
            <div className="frame33">
              <section className="section">
                <div className="box1">
                  <div className="dbox">
                    <div className="timebox">
                      <div className="infobox">
                        <div className="coinbox">
                          <img
                            src="https://kr-union.com/img/usd_icon.png"
                            loading="lazy"
                            alt=""
                            className="image-15"
                          />
                        </div>
                        <div className="div-block-86">
                          <h2
                            className="cname itemName"
                            style={{ margin: 0, color: "white" }}
                          >
                            USD 2분
                          </h2>
                        </div>
                        <div className="div-block-88">
                          <a
                            onClick={typeSelect}
                            className="link-block w-inline-block"
                          >
                            <img
                              src="https://kr-union.com/img/more_coin.svg"
                              loading="lazy"
                              alt=""
                            />
                          </a>
                          <a
                            href="https://www.binance.com/en/delivery/btcusd_perpetual"
                            target="_blank"
                            className="link-block w-inline-block"
                            id="binanceLink"
                          >
                            <img
                              src="https://kr-union.com/img/icon1.svg"
                              loading="lazy"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="timebox">
                      <div
                        className="infobox"
                        style={{
                          padding: "10px",
                          display: "flex",
                          flexWrap: "wrap",
                          justifyContent: "space-around",
                          textAlign: "center",
                        }}
                      >
                        <div
                          onClick={() => gourl("usd.php")}
                          className="time1"
                          style={{ width: "30%" }}
                        >
                          <button
                            style={{
                              padding: "5px",
                              fontSize: "18px",
                              borderStyle: "solid",
                              borderWidth: "1px",
                              borderColor: "#07ca8d",
                              borderRadius: "3px",
                              backgroundColor: "transparent",
                              color: "#07ca8d",
                            }}
                          >
                            1min
                          </button>
                        </div>
                        <div
                          onClick={() => gourl("usd2.php")}
                          className="time2"
                          style={{ width: "30%" }}
                        >
                          <button
                            style={{
                              padding: "5px",
                              fontSize: "18px",
                              borderStyle: "solid",
                              borderWidth: "1px",
                              borderColor: "#07ca8d",
                              borderRadius: "3px",
                              backgroundColor: "transparent",
                              color: "#07ca8d",
                            }}
                          >
                            2min
                          </button>
                        </div>
                        <div
                          onClick={() => gourl("usd5.php")}
                          className="time5"
                          style={{ width: "30%" }}
                        >
                          <button
                            style={{
                              padding: "5px",
                              fontSize: "18px",
                              borderStyle: "solid",
                              borderWidth: "1px",
                              borderColor: "#07ca8d",
                              borderRadius: "3px",
                              backgroundColor: "transparent",
                              color: "#07ca8d",
                            }}
                          >
                            5min
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="timebox">
                      <div className="titlebox">
                        <img
                          src="images/more_icon_ON.svg"
                          loading="lazy"
                          alt=""
                          className="moreicon"
                        />
                        <div className="t_txt">시간</div>
                      </div>
                      <div className="container">
                        <div className="trow">
                          <div className="t_text">계약 시간</div>
                          <div
                            className="t_text _2 contracttime"
                            id="contractTime"
                          >
                            21:47
                          </div>
                        </div>
                        <div className="trow">
                          <div className="t_text">남은 시간</div>
                          <div
                            className="t_text _2 timecount"
                            style={{ color: "white" }}
                            id="nextLeftTime"
                          >
                            99
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tradebox">
                      <div className="titlebox">
                        <img
                          src="images/more_icon_ON.svg"
                          loading="lazy"
                          alt=""
                          className="moreicon"
                        />
                        <div className="t_txt">거래</div>
                      </div>
                      <div className="container">
                        <div className="rrow">
                          <div className="text-block-14">
                            <input
                              type="text"
                              className="text-field5 w-input"
                              maxLength={256}
                              name="betAmount"
                              id="betAmount"
                              defaultValue="0"
                            />
                          </div>
                          <button
                            onClick={resetBet}
                            className="resetbtn w-button"
                            id="btnReset"
                          >
                            초기화
                          </button>
                        </div>
                        <div className="dealbox">
                          <div className="d_wrap">
                            <div>
                              현재 잔고:{" "}
                              <span id="currentBalance">12,200,000</span> 원
                            </div>
                          </div>
                        </div>
                        <div className="amount-buttons">
                          <button
                            onClick={() => setBetAmount(500000)}
                            className="amount-btn w-button"
                          >
                            50만원
                          </button>
                          <button
                            onClick={() => setBetAmount(1000000)}
                            className="amount-btn w-button"
                          >
                            100만원
                          </button>
                          <button
                            onClick={() => setBetAmount(2000000)}
                            className="amount-btn w-button"
                          >
                            200만원
                          </button>
                          <button
                            onClick={() => setBetAmount(3000000)}
                            className="amount-btn w-button"
                          >
                            300만원
                          </button>
                          <button
                            onClick={() => setBetAmount(5000000)}
                            className="amount-btn w-button"
                          >
                            500만원
                          </button>
                          <button
                            onClick={() => setBetAmount(10000000)}
                            className="amount-btn w-button"
                          >
                            1000만원
                          </button>
                        </div>
                        <div className="bsbox-n">
                          <button
                            id="btnLong"
                            onClick={() => placeBet("LONG")}
                            className="buy-btn-n w-inline-block"
                          >
                            <div className="text-block-8-n">LONG(상승)</div>
                          </button>
                          <button
                            id="btnShort"
                            onClick={() => placeBet("SHORT")}
                            className="sell-btn-n w-inline-block"
                          >
                            <div className="text-block-8-n">SHORT(하락)</div>
                          </button>
                        </div>
                      </div>
                      <form action="process_bet.php" method="post" id="betForm">
                        <input
                          type="hidden"
                          name="betType"
                          id="betType"
                          value=""
                        />
                        <input
                          type="hidden"
                          name="betAmount"
                          id="betAmountHidden"
                          value=""
                        />
                        <input
                          type="hidden"
                          name="betAccountTime"
                          id="contractTime"
                          value="21:47"
                        />
                      </form>
                    </div>
                  </div>
                </div>

                <div className="box2">
                  <div className="chartbox banneroff">
                    <div className="chart_wrap banneroff">
                      <div className="titlebox">
                        <img
                          src="images/more_icon_ON.svg"
                          loading="lazy"
                          alt=""
                          className="moreicon"
                        />
                        <div className="t_txt">차트</div>
                      </div>
                      <div className="chart banneroff">
                        <div
                          id="tv_chart_container"
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "relative",
                          }}
                        >
                          <div
                            className="tradingview-widget-container"
                            style={{ width: "100%", height: "100%" }}
                          >
                            <div
                              id="tradingview_70cf2"
                              style={{ width: "100%", height: "100%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="section-2">
                <div className="orderhistorybox">
                  <div className="titlebox">
                    <img
                      src="images/more_icon_ON.svg"
                      loading="lazy"
                      alt=""
                      className="moreicon"
                    />
                    <div className="t_txt">구분</div>
                  </div>
                  <div className="container _2" id="gameResultGrid">
                    <div className="t_top">
                      <div className="t_toptxt">거래시간</div>
                      <div className="t_toptxt _2">종목</div>
                      <div className="t_toptxt">결과</div>
                    </div>
                    <div className="list_hidewarp">
                      <div className="list_hidewarp2" id="listContent">
                        <div className="t_table">
                          <div className="t_toptxt">2024-09-03 15:09</div>
                          <div className="t_toptxt">USD/KRW</div>
                          <div className="t_toptxt">100,000원</div>
                          <div className="t_toptxt _3 type-success">LONG</div>
                          <div className="t_toptxt result-failure">손절</div>
                        </div>
                        <div className="t_table">
                          <div className="t_toptxt">2024-09-03 17:15</div>
                          <div className="t_toptxt">USD/KRW</div>
                          <div className="t_toptxt">5,000,000원</div>
                          <div className="t_toptxt _3 type-success">LONG</div>
                          <div className="t_toptxt result-success">익절</div>
                        </div>
                        <div className="t_table">
                          <div className="t_toptxt">2024-08-19 21:52</div>
                          <div className="t_toptxt">USD/KRW</div>
                          <div className="t_toptxt">500,000원</div>
                          <div className="t_toptxt _3 type-success">LONG</div>
                          <div className="t_toptxt result-success">익절</div>
                        </div>
                        <div className="t_table">
                          <div className="t_toptxt">2024-08-19 21:49</div>
                          <div className="t_toptxt">USD/KRW</div>
                          <div className="t_toptxt">500,000원</div>
                          <div className="t_toptxt _3 type-cancel">SHORT</div>
                          <div className="t_toptxt result-success">익절</div>
                        </div>
                        <div className="t_table">
                          <div className="t_toptxt">2024-08-19 21:46</div>
                          <div className="t_toptxt">USD/KRW</div>
                          <div className="t_toptxt">500,000원</div>
                          <div className="t_toptxt _3 type-success">LONG</div>
                          <div className="t_toptxt result-success">익절</div>
                        </div>
                        <div className="t_table">
                          <div className="t_toptxt">2024-08-19 05:35</div>
                          <div className="t_toptxt">USD/KRW</div>
                          <div className="t_toptxt">1,000,000원</div>
                          <div className="t_toptxt _3 type-success">LONG</div>
                          <div className="t_toptxt result-success">익절</div>
                        </div>
                        <div className="t_table">
                          <div className="t_toptxt">2024-08-19 05:34</div>
                          <div className="t_toptxt">USD/KRW</div>
                          <div className="t_toptxt">2,000,000원</div>
                          <div className="t_toptxt _3 type-success">LONG</div>
                          <div className="t_toptxt result-failure">손절</div>
                        </div>
                        <div className="t_table">
                          <div className="t_toptxt">2024-08-19 05:32</div>
                          <div className="t_toptxt">USD/KRW</div>
                          <div className="t_toptxt">1,000,000원</div>
                          <div className="t_toptxt _3 type-success">LONG</div>
                          <div className="t_toptxt result-failure">손절</div>
                        </div>
                        <div className="t_table">
                          <div className="t_toptxt">2024-08-19 04:59</div>
                          <div className="t_toptxt">USD/KRW</div>
                          <div className="t_toptxt">1,000,000원</div>
                          <div className="t_toptxt _3 type-success">LONG</div>
                          <div className="t_toptxt result-failure">손절</div>
                        </div>
                        <div className="t_table">
                          <div className="t_toptxt">2024-08-19 04:06</div>
                          <div className="t_toptxt">USD/KRW</div>
                          <div className="t_toptxt">1,000,000원</div>
                          <div className="t_toptxt _3 type-success">LONG</div>
                          <div className="t_toptxt result-failure">손절</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="positionbox">
                  <div className="titlebox">
                    <img
                      src="images/more_icon_ON.svg"
                      loading="lazy"
                      alt=""
                      className="moreicon"
                    />
                    <div className="t_txt">주문 내역</div>
                  </div>
                  <div className="container _2" id="myTradeGrid">
                    <div className="t_top">
                      <div className="t_toptxt">거래시간</div>
                      <div className="t_toptxt">거래종류</div>
                      <div className="t_toptxt">금액</div>
                      <div className="t_toptxt _3">구분</div>
                      <div className="t_toptxt _3">결과</div>
                    </div>
                    <div className="list_hidewarp">
                      <div className="list_hidewarp2" id="listContent">
                        <div className="t_table">
                          <div className="t_toptxt">2024-09-03 15:09</div>
                          <div className="t_toptxt">USD/KRW</div>
                          <div className="t_toptxt">100,000원</div>
                          <div className="t_toptxt _3 type-success">LONG</div>
                          <div className="t_toptxt result-failure">손절</div>
                        </div>
                        <div className="t_table">
                          <div className="t_toptxt">2024-09-03 17:15</div>
                          <div className="t_toptxt">USD/KRW</div>
                          <div className="t_toptxt">5,000,000원</div>
                          <div className="t_toptxt _3 type-success">LONG</div>
                          <div className="t_toptxt result-success">익절</div>
                        </div>
                        <div className="t_table">
                          <div className="t_toptxt">2024-08-19 21:52</div>
                          <div className="t_toptxt">USD/KRW</div>
                          <div className="t_toptxt">500,000원</div>
                          <div className="t_toptxt _3 type-success">LONG</div>
                          <div className="t_toptxt result-success">익절</div>
                        </div>
                        <div className="t_table">
                          <div className="t_toptxt">2024-08-19 21:49</div>
                          <div className="t_toptxt">USD/KRW</div>
                          <div className="t_toptxt">500,000원</div>
                          <div className="t_toptxt _3 type-cancel">SHORT</div>
                          <div className="t_toptxt result-success">익절</div>
                        </div>
                        <div className="t_table">
                          <div className="t_toptxt">2024-08-19 21:46</div>
                          <div className="t_toptxt">USD/KRW</div>
                          <div className="t_toptxt">500,000원</div>
                          <div className="t_toptxt _3 type-success">LONG</div>
                          <div className="t_toptxt result-success">익절</div>
                        </div>
                        <div className="t_table">
                          <div className="t_toptxt">2024-08-19 05:35</div>
                          <div className="t_toptxt">USD/KRW</div>
                          <div className="t_toptxt">1,000,000원</div>
                          <div className="t_toptxt _3 type-success">LONG</div>
                          <div className="t_toptxt result-success">익절</div>
                        </div>
                        <div className="t_table">
                          <div className="t_toptxt">2024-08-19 05:34</div>
                          <div className="t_toptxt">USD/KRW</div>
                          <div className="t_toptxt">2,000,000원</div>
                          <div className="t_toptxt _3 type-success">LONG</div>
                          <div className="t_toptxt result-failure">손절</div>
                        </div>
                        <div className="t_table">
                          <div className="t_toptxt">2024-08-19 05:32</div>
                          <div className="t_toptxt">USD/KRW</div>
                          <div className="t_toptxt">1,000,000원</div>
                          <div className="t_toptxt _3 type-success">LONG</div>
                          <div className="t_toptxt result-failure">손절</div>
                        </div>
                        <div className="t_table">
                          <div className="t_toptxt">2024-08-19 04:59</div>
                          <div className="t_toptxt">USD/KRW</div>
                          <div className="t_toptxt">1,000,000원</div>
                          <div className="t_toptxt _3 type-success">LONG</div>
                          <div className="t_toptxt result-failure">손절</div>
                        </div>
                        <div className="t_table">
                          <div className="t_toptxt">2024-08-19 04:06</div>
                          <div className="t_toptxt">USD/KRW</div>
                          <div className="t_toptxt">1,000,000원</div>
                          <div className="t_toptxt _3 type-success">LONG</div>
                          <div className="t_toptxt result-failure">손절</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className="footer">
    <div className="footer_block1" onClick={() => (window.location.href = "index.php")}>
        <img src="images/logo_W.png" loading="lazy" alt="" className="logo_footer" />
    </div>
    <div className="footer_block2">
        <div className="footer_menu">
            <div className="footer_title">거래소</div>
            <div onClick={() => (window.location.href = "btc.php")} className="footer_text">거래소</div>
        </div>
        <div className="footer_menu">
            <div className="footer_title">자산 입출금</div>
            <div className="footer_text" onClick={() => (window.location.href = "exchange_in.php")}>입금</div>
            <div className="footer_text" onClick={() => (window.location.href = "exchange_out.php")}>출금</div>
        </div>
        <div className="footer_menu">
            <div className="footer_title">고객센터</div>
            <div className="footer_text" onClick={() => (window.location.href = "qna.php")}>문의내역</div>
        </div>
        <div className="footer_menu">
            <div className="footer_title">마이페이지</div>
            <div className="footer_text" onClick={() => (window.location.href = 'mypage.php')}>내 정보</div>
        </div>
    </div>
    <div className="form-block-3-copy w-form">
    </div>
    <div className="copyright">
        <div>Copyright ©PREMIUM All Rights Reserved.</div>
    </div>
</div>
            </div>
          </div>
        </body>
      </div>
    </>
  );
};

export default TradingPage;
