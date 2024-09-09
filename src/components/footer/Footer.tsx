export default function Footer() {
    return (
      <>
        <footer className="footerMain">
          <div className="fwrap">
            <div className="finfo">
              <a href="bitcall/main.html" aria-current="page" className="b_korbotbtn w-inline-block w--current">
                <img src="https://kr-union.com/bitcall/bitcall_2.png" loading="lazy" alt="" className="b_korboticon" />
              </a>
  
              <div className="text-block-5"></div>
            </div>
            <div className="fbox">
              <div className="f_wrap">
                <div className="ftxt">거래하기</div>
                <a href="chart" className="flink w-inline-block">
                  <div className="ftxt2">거래하기</div>
                </a>
              </div>
              {/* 
              <div className="f_wrap">
                <div className="ftxt">연혁</div>
                <a href="/bitcall/history.do" className="flink w-inline-block">
                  <div className="ftxt2">연혁</div>
                </a>
              </div>
              */}
              <div className="f_wrap">
                <div className="ftxt">회사소개</div>
                <a href="company.php" className="flink w-inline-block">
                  <div className="ftxt2">UINON 소개</div>
                </a>
              </div>
              <div className="f_wrap">
                <div className="ftxt">입출금</div>
                <a href="exchange_in.php" className="flink w-inline-block">
                  <div className="ftxt2">입금</div>
                </a>
                <a href="exchange_out.php" className="flink w-inline-block">
                  <div className="ftxt2">출금</div>
                </a>
                {/* 
                <a href="/bitcall/user/moneyInout.do" className="flink w-inline-block">
                  <div className="ftxt2">입출금 내역</div>
                </a>
                */}
              </div>
              <div className="f_wrap">
                <div className="ftxt">고객지원</div>
                <a href="qna.php" className="flink w-inline-block">
                  <div className="ftxt2">1:1 문의하기</div>
                </a>
                <a href="message.php" className="flink w-inline-block">
                  <div className="ftxt2">메세지</div>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
  