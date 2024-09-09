'use client';
import { useState } from "react";

const LoginPage = () => {
  // State cho từng input field
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <div className="PageIntro">
        <div className="PageIntro__wrapper iqWrapper">
          <div className="PageIntro__content">
            <div className="PageIntroContent">
              {/* <h1 className="PageIntroContent__title"><span>산업 분야</span></h1> */}
              {/* <div className="PageIntroContent__subtitle"><span>기존에 있던 기업부터 새로운 유망 기업까지, 현명한 투자 결정을 내리는 데 도움을 드리고자 모두 모았습니다.</span></div> */}
            </div>
          </div>
        </div>
        <div className="PageIntro__bg">
          <div className="PageIntro__bgGradient"></div>
          <div className="PageIntro__bgImage"></div>
        </div>
      </div>

      <div data-test-id="inner-layout-content" className="css-k8u2zv ep6b6451">
        <div className="css-rx9tub e1gz4vbm0">
          <div className="css-1aspc4a e1gz4vbm1">
            <h1 className="css-1ffs9d1 e131aulr0">
              <span>로그인 하기</span>
            </h1>
            <form
              method="post"
              name="LoginFrm"
              id="LoginFrm"
              action="login"
              autoComplete="off"
            >
              <div data-test-id="login-email-input" className="css-4k6kap e1yby6gu0">
                <div className="css-8atqhb efcvym30">
                  <div className="css-1b7kpa egzimz0">
                    <input
                      placeholder="아이디"
                      name="user_id"
                      id="memid"
                      type="text"
                      className="css-kvxi0i egzimz1"
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)} // Cập nhật giá trị userId
                    />
                  </div>
                </div>
              </div>
              <div data-test-id="login-password-input" className="css-4k6kap e1yby6gu0">
                <div className="css-8atqhb efcvym30">
                  <div className="css-1b7kpa egzimz0">
                    <input
                      placeholder="비밀 번호"
                      name="user_pw"
                      id="passwd"
                      type="password"
                      className="css-kvxi0i egzimz1"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} // Cập nhật giá trị password
                    />
                  </div>
                </div>
              </div>
              <button
                className="Button Button_green Button_big Button_fontBig css-1060k2v"
                name="login-submit"
                type="submit"
              >
                <span>로그인 하기</span>
              </button>
            </form>
            <div className="css-xi606m e12e61wf0">
              <div data-test-id="auth-link" className="css-gecade e12e61wf2">
                <span>
                  계정이 없으신가요? <a href="register" style={{color:"blue"}}>가입하기</a>
                </span>
              </div>
            </div>
            <div data-test-id="auth-warning-block" className="css-14u2jjl e1r5xcei0">
              <div className="css-y5qg2j e1r5xcei1">
                <div className="css-y8lfqj e1r5xcei2">
                  <span>[ 개인정보 보호 ]</span>
                </div>
              </div>
              <span>Union Investment는 개인정보 보호에 최선을 다하고 있습니다.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
