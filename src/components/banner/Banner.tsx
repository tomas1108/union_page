import React from 'react';

const Banner = () => {
  return (
    <div className="main_frame">
    <div className="banner">
      <div className="banner_continer2">
        <img
          src="https://kr-union.com/bitcall/bitcall_long1.png"
          loading="lazy"
          alt=""
          className="main_bannerlogo"
        />
        <div className="btxt">
          글로벌 증권 거래 플랫폼&양적 헤지 기구 및 안정성과 신뢰성을 보장하는 디지털 자산 거래 및 자산 관리 서비스 제공
        </div>
        <div className="m_btnwrap">
          <a href="usd2.php" className="service_btn w-button">
            거래하기
          </a>
        </div>
        <img
          src="bitcall/return_11.png"
          loading="lazy"
          sizes="(max-width: 479px) 87vw, (max-width: 767px) 86vw, 500.0000305175781px"
          srcSet="/bitcall/return_11-p-500.png 500w, /bitcall/return_11.png 730w"
          alt=""
          className="image-18"
        />
        <div className="main_boxwarp">
          <div className="main_box">
            <img src="https://kr-union.com/bitcall/return_24.png" loading="lazy" alt="" className="image-12" />
            <div className="m_bannertitle">시장에 대한 이해도 측정</div>
            <div>자산 시장에 대한 이해도를 측정하고 필요한 정보를 공유</div>
          </div>
          <div className="main_box">
            <img src="https://kr-union.com/bitcall/return_21.png" loading="lazy" alt="" className="image-12" />
            <div className="m_bannertitle">자산 거래 경력 측정</div>
            <div>자산 거래 경력을 진단하고 시장의 리스크 및 해결방안을 전달</div>
          </div>
          <div className="main_box">
            <img src="https://kr-union.com/bitcall/return_15.png" loading="lazy" alt="" className="image-12" />
            <div className="m_bannertitle">차익거래에 대한 이해도 측정</div>
            <div>차익거래 관리에 대한 교육 및 활용방법 과자세한 교육 제공</div>
          </div>
          <div className="main_box">
            <img src="https://kr-union.com/bitcall/return_18.png" loading="lazy" alt="" className="image-12" />
            <div className="m_bannertitle">경제적 환경 분석</div>
            <div>자산 시장 이외, 주식 부동산 적금 등 포토폴리오를 분석 후 알맞은 솔루션 제공</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
