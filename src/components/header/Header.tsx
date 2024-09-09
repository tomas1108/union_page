"use client";
import React, { useState } from "react";

const Header: React.FC = () => {
  // State để quản lý việc hiển thị menu
  const [isCompanyMenuOpen, setIsCompanyMenuOpen] = useState(false);
  const [isDepositMenuOpen, setIsDepositMenuOpen] = useState(false);
  const [isSupportMenuOpen, setIsSupportMenuOpen] = useState(false);

  // Hàm để quản lý việc mở từng menu và đóng menu khác
  const handleCompanyMenu = () => {
    setIsCompanyMenuOpen(!isCompanyMenuOpen);
    setIsDepositMenuOpen(false); // Đóng các menu khác
    setIsSupportMenuOpen(false); // Đóng các menu khác
  };

  const handleDepositMenu = () => {
    setIsDepositMenuOpen(!isDepositMenuOpen);
    setIsCompanyMenuOpen(false); // Đóng các menu khác
    setIsSupportMenuOpen(false); // Đóng các menu khác
  };

  const handleSupportMenu = () => {
    setIsSupportMenuOpen(!isSupportMenuOpen);
    setIsCompanyMenuOpen(false); // Đóng các menu khác
    setIsDepositMenuOpen(false); // Đóng các menu khác
  };

  return (
    <div className="top">
      <div className="top_containner flex items-center justify-between py-4 px-6 lg:px-12">
        <a
          href="/"
          aria-current="page"
          className="logo_btn w-inline-block w--current"
        >
          <img
            src="https://kr-union.com/bitcall/bitcall_short1.png"
            loading="lazy"
            alt=""
            className="logoicon"
          />
        </a>
        <div className="topmenuframe ">
          <div className="topmeuwrap">
            <a href="chart" className="topmenubtn w-inline-block">
              <div className="topmenu">거래하기</div>
            </a>
          </div>

          {/* Menu Công Ty */}
          <div className="topmeuwrap hidden lg:flex">
            <div
              className="topmenubtn w-inline-block"
              onClick={handleCompanyMenu}
            >
              <div className="topmenu">
                회사소개<span className="text-span-14">▼</span>
              </div>
            </div>
            {isCompanyMenuOpen && (
              <div className="menuboxwrap active">
                <a href="company" className="menubtn w-inline-block">
                  <div className="menubox _2">
                    <div className="m_txt">UINON 소개</div>
                    <div className="m_txt2">
                      UINON은 독일의 본사를 둔<br />
                      세계적인펀드 기업입니다.
                    </div>
                  </div>
                </a>
              </div>
            )}
          </div>

          {/* Menu Giao Dịch */}
          <div className="topmeuwrap">
            <div
              className="topmenubtn w-inline-block"
              onClick={handleDepositMenu}
            >
              <div className="topmenu">
                입출금<span className="text-span-14">▼</span>
              </div>
            </div>
            {isDepositMenuOpen && (
              <div className="menuboxwrap active">
                <a href="exchange_in.php" className="menubtn w-inline-block">
                  <div className="menubox _3">
                    <div className="m_txt">입금</div>
                    <div className="m_txt2">
                      입금 방법이 궁금하신가요?
                      <br />
                      보다 편한 입금 서비스를 이용해보세요.
                    </div>
                  </div>
                </a>
                <a href="exchange_out.php" className="menubtn w-inline-block">
                  <div className="menubox _3">
                    <div className="m_txt">출금</div>
                    <div className="m_txt2">
                      출금 방법이 궁금하신가요?
                      <br />
                      보다 편한 출금 서비스를 이용해보세요.
                    </div>
                  </div>
                </a>
              </div>
            )}
          </div>

          {/* Menu Hỗ Trợ Khách Hàng */}
          <div className="topmeuwrap">
            <div
              className="topmenubtn w-inline-block"
              onClick={handleSupportMenu}
            >
              <div className="topmenu">
                고객지원<span className="text-span-14">▼</span>
              </div>
            </div>
            {isSupportMenuOpen && (
              <div className="menuboxwrap active">
                <a href="qna.php" className="menubtn w-inline-block">
                  <div className="menubox _4">
                    <div className="m_txt">1:1문의하기</div>
                    <div className="m_txt2">
                      궁금한 점이 있으신가요?
                      <br />
                      신속하고 정확하게 답변드리겠습니다.
                    </div>
                  </div>
                </a>
                <a href="message.php" className="menubtn w-inline-block">
                  <div className="menubox _4">
                    <div className="m_txt">메세지</div>
                    <div className="m_txt2">
                      회원님의 회원님의 개인 중요 메세지
                    </div>
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="userinfobox">
          {/* Chỉ hiển thị trên màn hình lớn */}
          <div className="hidden lg:flex items-center">
            <a
              href="login"
              className="flex items-center justify-center w-[160px] h-[40px] ml-[25px] rounded-md bg-[#f8e39e] text-black transition-colors duration-400 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
              로그인
            </a>
            <a
              href="register"
              className="flex items-center justify-center w-[160px] h-[40px] ml-[25px] rounded-md bg-[#f8e39e] text-black transition-colors duration-400 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
              회원가입
            </a>
          </div>

          {/* Chỉ hiển thị trên màn hình nhỏ */}
          <div className="lg:hidden">
            <div className="mobilemenuframe">
              <a href="#" className="mobilebtn w-inline-block">
                <img
                  src="https://kr-union.com/bitcall/menuicon.svg"
                  loading="lazy"
                  alt="Menu icon"
                  className="menucion w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
