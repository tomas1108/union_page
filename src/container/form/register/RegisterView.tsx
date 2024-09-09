"use client";

import { useState } from "react";

interface FormData {
  userId: string;
  userPw: string;
  userPwConfirmation: string;
  userName: string;
  phoneNumber: string;
  bankName: string;
  accountNumber: string;
}

interface FormErrors {
  userId?: string;
  userPw?: string;
  userPwConfirmation?: string;
  userName?: string;
  phoneNumber?: string;
  bankName?: string;
  accountNumber?: string;
}

const RegisterPage = () => {
  const [formData, setFormData] = useState<FormData>({
    userId: "",
    userPw: "",
    userPwConfirmation: "",
    userName: "",
    phoneNumber: "",
    bankName: "",
    accountNumber: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    let errors: FormErrors = {};
    if (!formData.userId.trim()) errors.userId = "아이디를 입력하세요.";
    if (!formData.userPw.trim()) errors.userPw = "비밀번호를 입력하세요.";
    if (!formData.userPwConfirmation.trim())
      errors.userPwConfirmation = "비밀번호 확인을 입력하세요.";
    if (formData.userPw !== formData.userPwConfirmation)
      errors.userPwConfirmation = "비밀번호가 일치하지 않습니다.";
    if (!formData.userName.trim()) errors.userName = "이름을 입력하세요.";
    if (!formData.phoneNumber.trim())
      errors.phoneNumber = "휴대폰 번호를 입력하세요.";
    if (!formData.bankName) errors.bankName = "은행을 선택하세요.";
    if (!formData.accountNumber.trim())
      errors.accountNumber = "계좌번호를 입력하세요.";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit the form data to the server
      console.log("Form data submitted:", formData);
    }
  };

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    let formatted = "";
    if (cleaned.length < 4) {
      formatted = cleaned;
    } else if (cleaned.length < 7) {
      formatted = `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
    } else if (cleaned.length < 11) {
      formatted = `${cleaned.slice(0, 3)}-${cleaned.slice(
        3,
        6
      )}-${cleaned.slice(6)}`;
    } else {
      formatted = `${cleaned.slice(0, 3)}-${cleaned.slice(
        3,
        7
      )}-${cleaned.slice(7)}`;
    }
    return formatted;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setFormData((prevState) => ({
      ...prevState,
      phoneNumber: formattedPhoneNumber,
    }));
  };

  const handleTermsClick =
    (message: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      alert(message);
    };

  function openWindow(arg0: string, arg1: string, arg2: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <div className="PageIntro">
        <div className="PageIntro__wrapper iqWrapper">
          <div className="PageIntro__content">
            <div className="PageIntroContent">
              {/* <h1 className="PageIntroContent__title">
                <span>산업 분야</span>
              </h1>
              <div className="PageIntroContent__subtitle">
                <span>
                  기존에 있던 기업부터 새로운 유망 기업까지, 현명한 투자 결정을
                  내리는 데 도움을 드리고자 모두 모았습니다.
                </span>
              </div> */}
            </div>
          </div>
        </div>
        <div className="PageIntro__bg">
          <div className="PageIntro__bgGradient"></div>
          <div className="PageIntro__bgImage" ></div>
        </div>
      </div>

      <div data-test-id="inner-layout-content" className="css-k8u2zv ep6b6451">
        <div className="css-1owtln6 e5g442x0">
          <div className="RegisterFormContainer css-1aspc4a e5g442x1">
            <h1 className="css-1ffs9d1 e131aulr0">
              <span>계정 생성</span>
            </h1>
            <form
              name="margin-form"
              method="post"
              action="signup"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <div
                data-test-id="register-form-name-input"
                className="css-4k6kap esmjjsw0"
              >
                <div className="css-8atqhb efcvym30">
                  <div className="css-1b7kpa egzimz0">
                    <input
                      placeholder="ID"
                      id="reg_form_id"
                      name="userId"
                      required
                      type="text"
                      className="css-kvxi0i egzimz1"
                      value={formData.userId}
                      onChange={handleChange}
                    />
                    {formErrors.userId && (
                      <span className="error">{formErrors.userId}</span>
                    )}
                  </div>
                </div>
              </div>
              <div
                data-test-id="register-password2-input"
                className="css-4k6kap esmjjsw0"
              >
                <div className="css-8atqhb efcvym30">
                  <div className="css-1b7kpa egzimz0">
                    <input
                      placeholder="비밀번호"
                      id="reg_form_pass1"
                      name="userPw"
                      required
                      type="password"
                      className="css-kvxi0i egzimz1"
                      value={formData.userPw}
                      onChange={handleChange}
                    />
                    {formErrors.userPw && (
                      <span className="error">{formErrors.userPw}</span>
                    )}
                  </div>
                </div>
              </div>
              <div
                data-test-id="register-password2-input"
                className="css-4k6kap esmjjsw0"
              >
                <div className="css-8atqhb efcvym30">
                  <div className="css-1b7kpa egzimz0">
                    <input
                      placeholder="비밀번호 확인"
                      id="reg_form_pass2"
                      name="userPwConfirmation"
                      required
                      type="password"
                      className="css-kvxi0i egzimz1"
                      value={formData.userPwConfirmation}
                      onChange={handleChange}
                    />
                    {formErrors.userPwConfirmation && (
                      <span className="error">
                        {formErrors.userPwConfirmation}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div
                data-test-id="register-form-country-wrapper"
                className="css-4k6kap esmjjsw0"
              >
                <div className="css-8atqhb efcvym30">
                  <div className="css-1b7kpa egzimz0">
                    <input
                      placeholder="이름"
                      id="reg_form_nick"
                      name="userName"
                      required
                      type="text"
                      className="css-kvxi0i egzimz1"
                      value={formData.userName}
                      onChange={handleChange}
                    />
                    {formErrors.userName && (
                      <span className="error">{formErrors.userName}</span>
                    )}
                  </div>
                </div>
              </div>
              <div
                data-test-id="register-email-input"
                className="css-4k6kap esmjjsw0"
              >
                <div className="css-8atqhb efcvym30">
                  <div className="css-1b7kpa egzimz0">
                    <input
                      placeholder="휴대폰 번호"
                      id="reg_form_mobile"
                      name="phoneNumber"
                      required
                      type="text"
                      className="css-kvxi0i egzimz1"
                      value={formData.phoneNumber}
                      onChange={handlePhoneChange}
                    />
                    {formErrors.phoneNumber && (
                      <span className="error">{formErrors.phoneNumber}</span>
                    )}
                  </div>
                </div>
              </div>
              <div
                data-test-id="register-bank-input"
                className="css-4k6kap esmjjsw0"
              >
                <div className="css-8atqhb efcvym30">
                  <div
                    className="css-1b7kpa egzimz0"
                    style={{ textAlign: "center" }}
                  >
                    <select
                      id="reg_form_bank"
                      name="bankName"
                      required
                      className="reg_selectbox"
                      value={formData.bankName}
                      onChange={handleChange}
                    >
                      <option value="">은행</option>

                      <option value="광주은행">광주은행</option>
                      <option value="경남은행">경남은행</option>
                      <option value="국민은행">국민은행</option>
                      <option value="기업은행">기업은행</option>
                      <option value="농협">농협</option>
                      <option value="대구은행">대구은행</option>
                      <option value="도이치은행">도이치은행</option>
                      <option value="뱅크오브아메리카">뱅크오브아메리카</option>
                      <option value="부산은행">부산은행</option>
                      <option value="산림조합">산림조합</option>
                      <option value="산업은행">산업은행</option>
                      <option value="상와">상와</option>
                      <option value="상호저축">상호저축</option>
                      <option value="새마을금고">새마을금고</option>
                      <option value="수협">수협</option>
                      <option value="신한은행">신한은행</option>
                      <option value="신협">신협</option>
                      <option value="씨티은행">씨티은행</option>
                      <option value="우리은행">우리은행</option>
                      <option value="우체국">우체국</option>
                      <option value="전북은행">전북은행</option>
                      <option value="제주은행">제주은행</option>
                      <option value="카카오뱅크">카카오뱅크</option>
                      <option value="케이뱅크">케이뱅크</option>
                      <option value="HSBC">HSBC</option>
                      <option value="JP모간">JP모간</option>
                      <option value="KEB하나은행">KEB하나은행</option>
                      <option value="SC제일은행">SC제일은행</option>
                      <option value="교보증권">교보증권</option>
                      <option value="농협투자증권">농협투자증권</option>
                      <option value="대신증권">대신증권</option>
                      <option value="대우증권">대우증권</option>
                      <option value="동부증권">동부증권</option>
                      <option value="동양증권">동양증권</option>
                      <option value="메리츠증권">메리츠증권</option>
                      <option value="미래에셋증권">미래에셋증권</option>
                      <option value="부국증권">부국증권</option>
                      <option value="삼성증권">삼성증권</option>
                      <option value="신영증권">신영증권</option>
                      <option value="신한금융투자">신한금융투자</option>
                      <option value="아이엠투자증권">아이엠투자증권</option>
                      <option value="우리투자증권">우리투자증권</option>
                      <option value="유안타증권">유안타증권</option>
                      <option value="유진투자증권">유진투자증권</option>
                      <option value="이베스트투자증권">이베스트투자증권</option>
                      <option value="이트레이드증권">이트레이드증권</option>
                      <option value="키움증권">키움증권</option>
                      <option value="하나대투증권">하나대투증권</option>
                      <option value="하이투자증권">하이투자증권</option>
                      <option value="한국투자증권">한국투자증권</option>
                      <option value="한화투자증권">한화투자증권</option>
                      <option value="현대증권">현대증권</option>
                      <option value="HMC투자증권">HMC투자증권</option>
                      <option value="KB증권">KB증권</option>
                      <option value="LIG투자증권">LIG투자증권</option>
                      <option value="NH투자증권">NH투자증권</option>
                      <option value="SK증권">SK증권</option>
                    </select>
                    {formErrors.bankName && (
                      <span className="error">{formErrors.bankName}</span>
                    )}
                  </div>
                </div>
              </div>
              <div
                data-test-id="register-account-input"
                className="css-4k6kap esmjjsw0"
              >
                <div className="css-8atqhb efcvym30">
                  <div className="css-1b7kpa egzimz0">
                    <input
                      placeholder="거래은행 계좌번호"
                      id="reg_form_account"
                      name="accountNumber"
                      required
                      type="text"
                      className="css-kvxi0i egzimz1"
                      value={formData.accountNumber}
                      onChange={handleChange}
                    />
                    {formErrors.accountNumber && (
                      <span className="error">{formErrors.accountNumber}</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="css-4k6kap esmjjsw0">
                <div>
                  <label className="Checkbox css-1x39cwb e1mqixhy0">
                    <input
                      type="checkbox"
                      className="Checkbox__input"
                      id="reg_form_chk1"
                      name="reg_form[chk1]"
                      value="N"
                    />
                    <span className="Checkbox__text">
                      <span>
                        <a
                          href="#"
                          className="link"
                          onClick={() =>
                            openWindow(
                              "agrement.html",
                              "사용약관",
                              "reg_form_chk1"
                            )
                          }
                        >
                          [사용약관]
                        </a>
                        에 동의합니다.
                      </span>
                    </span>
                  </label>
                </div>
              </div>
              <div className="css-4k6kap esmjjsw0">
                <div>
                  <label className="Checkbox css-1x39cwb e1mqixhy0">
                    <input
                      type="checkbox"
                      className="Checkbox__input"
                      id="reg_form_chk2"
                      name="reg_form[chk2]"
                      value="N"
                    />
                    <span className="Checkbox__text">
                      <span>
                        <a
                          href="#"
                          className="link"
                          onClick={() =>
                            openWindow(
                              "privacy.html",
                              "개인정보 보호정책",
                              "reg_form_chk2"
                            )
                          }
                        >
                          [개인정보 보호정책]
                        </a>
                        에 동의합니다.
                      </span>
                    </span>
                  </label>
                </div>
              </div>

              <button
                className="Button Button_green Button_big Button_fontBig css-o1ocgv"
                type="submit"
                name="signupSubmit"
              >
                <span>계정을 무료로 만들기</span>
              </button>
            </form>
            <div data-test-id="auth-link" className="css-13rddze eorem1v0">
              <span>
                이미 계정이 있으신가요? 지금{" "}
                <a href="login" className="link">
                  로그인하기
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
