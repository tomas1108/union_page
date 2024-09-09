'use client'
import React, { useState } from 'react';
import "./ex_in.css"

const ExchangeInView = () => {
  const [sender, setSender] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = () => {
    console.log('Sender:', sender, 'Amount:', amount);
  };

  return (
    <div className="exchange-container">
      {/* Hướng dẫn */}
      <h1 style={{ fontStyle: 'bold'}}>입금방법</h1>
      <div className="guide-section">
       
        <div className="step-box">
          <h3>STEP 01</h3>
          <p>
            입금 하실 때 등록하신 본인 실명으로 입금한 후 입금 신청하셔야 원활한 입금이 이루어집니다.
            <span>(입금 순서는 계좌번호 확인 - 본인 실명입금 - 입금 금액에 맞게 신청해주시기 바랍니다.)</span>
          </p>
        </div>
        <div className="step-box">
          <h3>STEP 02</h3>
          <p>
            입금하실 금액은 금액을 직접 입력하여 입금 신청 해주시기 바랍니다.
            <span>(아래의 입금 계좌는 변경될 수 있습니다. 입금 전 다시 한번 확인 해주시기 바랍니다.)</span>
          </p>
        </div>
        <div className="step-box">
          <h3>STEP 03</h3>
          <p>입금은 은행 업무시간(평일 09:30~15:00) 가능하며 점검시간에는 입금 서비스가 원활하지 않을 수 있습니다.</p>
        </div>
      </div>

      {/* Form nhập thông tin */}
      <div className="account-info-section">
        <h3>입금계좌정보</h3>
        <button className="inquiry-button">계좌번호 문의하기</button>
      </div>

      {/* Nhập thông tin */}
      <div className="form-section">
        <div className="form-field">
          <label htmlFor="sender">보내시는분</label>
          <input
            type="text"
            id="sender"
            value={sender}
            onChange={(e) => setSender(e.target.value)}
            placeholder="이름 입력"
          />
        </div>
        <div className="form-field">
          <label htmlFor="amount">입금금액</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="0"
          />
        </div>
        <button onClick={handleSubmit} className="submit-button">
          입금신청
        </button>
      </div>

      {/* Table section */}
      <div className="history-section">
        <h3>입출금 내역</h3>
        <p>최근 20건</p>
        <table className="history-table">
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

export default ExchangeInView;
