import React from 'react';
import './mp.css'

const MyPageView = () => {
    return (
        <div className="mypage-container">
            <div className="mypage-section">
                <h3>회원정보</h3>
                <div className="mypage-info">
                    <div className="info-row">
                        <label>아이디</label>
                        <input type="text" value="queen" readOnly />
                        <label>휴대폰번호</label>
                        <input type="text" value="01015157575" readOnly />
                    </div>
                    <div className="info-row">
                        <label>이름</label>
                        <input type="text" value="퀸" readOnly />
                        <label>예금주</label>
                        <input type="text" value="퀸" readOnly />
                    </div>
                    <div className="info-row">
                        <label>은행</label>
                        <input type="text" value="대구은행" readOnly />
                        <label>계좌번호</label>
                        <input type="text" value="01015157757" readOnly />
                    </div>
                </div>
            </div>

            <div className="mypage-section">
                <h3>로그인 비밀번호 변경</h3>
                <div className="mypage-password">
                    <div className="info-row">
                        <label>기존 비밀번호</label>
                        <input type="password" />
                    </div>
                    <div className="info-row">
                        <label>새로운 비밀번호</label>
                        <input type="password" />
                        <label>비밀번호 확인</label>
                        <input type="password" />
                    </div>
                </div>
            </div>

            <div className="mypage-footer">
                <button className="mypage-button">비밀번호 수정하기</button>
            </div>
        </div>
    );
};

export default MyPageView;
