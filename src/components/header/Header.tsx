'use client';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };

  return (
    <div className="header">
      <div className="logo">
        <a href="/">
        <img src="https://kr-union.com/bitcall/bitcall_short1.png" alt="Logo" />
        </a>
      </div>

      <div className="navbar">
        <ul>
          <li><a href="chart">거래하기</a></li>
          <li className="dropdown">
            <a href="#" onClick={toggleDropdown}>회사소개 ▾</a>
            {isOpen && (
              <ul className="dropdownMenu">
                <li><a href="#">Option 1</a></li>
                <li><a href="#">Option 2</a></li>
              </ul>
            )}
          </li>
          <li className="dropdown">
            <a href="#" onClick={toggleDropdown2}>입출금 ▾</a>
            {isOpen2 && (
              <ul className="dropdownMenu">
                <li><a href="#">Option 1</a></li>
                <li><a href="#">Option 2</a></li>
              </ul>
            )}
          </li>
          <li className="dropdown">
            <a href="#" onClick={toggleDropdown3}>고객지원 ▾</a>
            {isOpen3 && (
              <ul className="dropdownMenu">
                <li><a href="#">Option 1</a></li>
                <li><a href="#">Option 2</a></li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      <div className="userActions">
        {/* <button>12,200,000원</button>
        <button>내정보</button>
        <button>로그아웃</button> */}
        <a href='/login'>
        <button>로그인</button>
        </a>
        <a href='/register'>
        <button>회원가입</button>
        </a>
      </div>
    </div>
  );
}
