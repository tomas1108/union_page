'use client'
import React, { useState } from 'react';
import "./ex_out.css";

const ExchangeOutView = () => {
  const [withdrawAmount, setWithdrawAmount] = useState(0);

  const handleWithdraw = () => {
    console.log('Withdrawal Amount:', withdrawAmount);
  };

  return (
    <div className="exchange-out-container">
      {/* Withdrawal Instructions */}
      <div className="guide-section">
        <div className="step-box">
          <h3>STEP 01</h3>
          <p>출금은 은행 업무 시간 (평일 09:30 ~ 15:00)에 가능하며 개인 거래내역에 따라 1~2일 소요될 수 있습니다.</p>
        </div>
        <div className="step-box">
          <h3>STEP 02</h3>
          <p>2일 이상 출금이 지연 될 경우에는 고객님의 입금 계좌정보를 잘못 기입한 경우가 있을 수 있으니 확인 후 고객센터로 문의주시기 바랍니다.</p>
        </div>
        <div className="step-box">
          <h3>STEP 03</h3>
          <p>다른 계좌로 출금을 원하시면 미리 고객센터로 문의 하셔야 합니다.</p>
        </div>
      </div>

      {/* Account Information */}
      <div className="account-info-section">
        <table className="account-info-table">
          <tbody>
            <tr>
              <td>거래은행</td>
              <td>대구은행</td>
              <td>계좌번호</td>
              <td>01015157757</td>
            </tr>
            <tr>
              <td>예금주</td>
              <td>퀸</td>
              <td>출금 금액</td>
              <td>
                <input
                  type="number"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(Number(e.target.value))}
                  placeholder="0"
                />
              </td>
            </tr>
            <tr>
              <td>보유 금액</td>
              <td>0</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button onClick={handleWithdraw} className="withdraw-button">출금신청</button>
        <button className="inquiry-button">문의하기</button>
      </div>

      {/* Withdrawal History */}
      <div className="withdrawal-history-section">
        <h3>출금 내역</h3>
        <table className="withdrawal-history-table">
          <thead>
            <tr>
              <th>항목</th>
              <th>신청일</th>
              <th>신청금액</th>
              <th>상태</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>7</td>
              <td>2024-08-19 02:39:48</td>
              <td>500000</td>
              <td>취소</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExchangeOutView;
