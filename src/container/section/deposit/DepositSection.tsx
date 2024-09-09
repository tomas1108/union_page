import React from 'react';

const DepositSection: React.FC = () => {
    return (
        <>
            <div className="section dark">
                <h3 className="hd3">입금방법</h3>
                <div className="msgbox">
                    <dl className="msg_dlist">
                        <dt>STEP 01</dt>
                        <dd>
                            입금 하실 떄 등록하신 본인 실명으로 입금한 후 입금 신청하셔야 원활한 입금이 이루어집니다.<br />
                            <em className="point1">(입금 순서는 계좌번호 확인 - 본인 실명입금 - 입금 금액에 맞게 신청해주시기 바랍니다.)</em>
                        </dd>
                        <dt>STEP 02</dt>
                        <dd>
                            입금하실 금액은 금액을 직접 입력하여 입금 신청 해주시기 바랍니다.<br />
                            <em className="point1">(아래의 입금 계좌는 변경될 수 있습니다. 입금 전 다시 한번 확인 해주시기 바랍니다.)</em>
                        </dd>
                        <dt>STEP 03</dt>
                        <dd>
                            입금은 은행 업무시간(평일 09:30~15:00) 가능하며 점검시간에는 입금 서비스가 원활하지 않을 수 있습니다.
                        </dd>
                    </dl>
                </div>
                <form id="depositForm" action="deposit" method="post">
                    <div className="frm_write">
                        <ul className="frm_list" style={{ paddingLeft: 0 }}>
                            <li>
                                <div className="frm_clm col2">
                                    <dl className="dlist">
                                        <dt>입금계좌정보</dt>
                                        <dd>
                                            <a href="auto_inquiry.php" className="btn submit js_submit">계좌번호 문의하기</a>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li>
                                <div className="frm_clm col2">
                                    <dl className="dlist">
                                        <dt>보내시는분</dt>
                                        <dd>
                                            <div className="inputset css-1b7kpa">
                                                <input type="text" id="in_name" name="user_name" className="css-kvxi0i" readOnly value="test" />
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="frm_clm col2">
                                    <dl className="dlist">
                                        <dt>입금금액</dt>
                                        <dd>
                                            <div className="inputset money css-1b7kpa">
                                                <input type="text" className="text-field4 w-input" maxLength={256} style={{ height: '100%' }} name="amount" id="money" placeholder="0" />
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="btnset rt">
                        <button type="button" id="depositBtn" className="btn submit js_submit">입금신청</button>
                    </div>
                </form>
            </div>

            <div className="section dark">
                <h3 className="hd3">입출금 내역</h3>
                <div className="tb_cap">
                    <div className="f_left">
                        <p className="caption">최근 20건</p>
                    </div>
                </div>
                <div className="tb_frm" id="noticetb-nouse">
                    <table>
                        <thead>
                            <tr>
                                <th className="w200">항목</th>
                                <th className="w200">신청일</th>
                                <th>신청금액</th>
                                <th className="w100">상태</th>
                            </tr>
                        </thead>
                        <tbody id="transactionTable">
                            {/* 데이터가 여기에 삽입될 것입니다 */}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default DepositSection;
