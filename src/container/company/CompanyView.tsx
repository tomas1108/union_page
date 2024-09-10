import Image from "next/image";
import React from "react";
import "./company.css";

const Company: React.FC = () => {
  return (
    <>
      <section id="A0" className="pageHeaderCom">
        <div className="contents">
          <div className="container com">
            <div className="row">
              <div className="col-12">
                <dl>
                  <dt>회사 소개</dt>
                  {/* <dd>코봇은 혁신을 창조하고 혁신을 제공하는 <br /> 기술중심의 핀테크 기업입니다.</dd> */}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="A3">
        <div className="container com">
          <div className="row" style={{ height: "auto" }}>
            <div className="col-12">
              <div className="sectionTitle">
                <h5>[UNION 간략 소개]</h5>
              </div>
            </div>
            <div className="col-12">
              <figure>
                <Image
                  className="desktop"
                  src="https://kr-union.com/img/pc-1.png"
                  alt=""
                  width={800}
                  height={600}
                />
                {/* <Image className="mobile" src="https://kr-union.com/img/%EB%AA%A8%EB%B0%94%EC%9D%BC-1.png" alt="" width={800} height={600} /> */}
              </figure>
            </div>
            <div className="col-12">
              <figure>
                <Image
                  className="desktop"
                  src="https://kr-union.com/img/pc-2.png"
                  alt=""
                  width={800}
                  height={600}
                />
                {/* <Image className="mobile" src="https://kr-union.com/img/%EB%AA%A8%EB%B0%94%EC%9D%BC-2.png" alt="" width={800} height={600} /> */}
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section id="A3" style={{ borderTop: "1px solid rgba(0, 0, 0, 0.1)" }}>
        <div className="container com">
          <div className="row" style={{ height: "auto" }}>
            <div className="sectionTitle">
              <h5>UNION 알고리즘 트레이딩</h5>
            </div>
            <div className="col-12">
              <figure>
                <Image
                  className="desktop"
                  src="https://kr-union.com/comm_k/img/main/pciw2.jpg"
                  alt=""
                  width={800}
                  height={600}
                />
                {/* <Image className="mobile" src="https://kr-union.com/comm_k/img/main/pcim2.jpg" alt="" width={800} height={600} /> */}
              </figure>
            </div>
          </div>
        </div>
      </section>

      <div
        data-spy="scroll"
        data-target="#list-example"
        data-offset=""
        className="scrollspy-example scrollArea"
        style={{ paddingBottom: "0" }}
      >
        <section id="A1">
          <div className="container com">
            <div className="row" style={{ height: "auto" }}>
              <div className="text col-12 col-md-6">
                <div className="textWrap">
                  <div className="sectionTitle">
                    <h5>
                      가치있는 상품을 개발하고 <br /> 최고의 서비스로 제공한다.
                    </h5>
                  </div>
                  <div className="">
                    <br />
                  </div>
                  <div className="body">
                    1956년에 설립된 &apos;Union Investment&apos;은 국내 최초
                    재정거래 시스템 트레이딩 기업으로 각국의 통화를 거래하고
                    있습니다. 우리는 <b>재정거래</b>를 중심으로,
                    <b>퀀트 전략, 마켓 메이킹, 시장중립 전략</b> 등 다양한
                    거래방식을 채택하여 사용하고 있으며, 이중 몇몇 서비스를
                    소수의 VIP회원을 대상으로 제공하고 있습니다.
                  </div>

                  <div className="body">
                    우리는 독자적으로 개발한 원천기술을 보유하고 있으며, 전세계
                    다양한 회원을 대상으로 서비스를 제공하고 있습니다. 모든 우리
                    회원과 파트너사가 세계시장에서 <b>장기적으로 성장</b>할 수
                    있도록 최선을 다해 돕고 있습니다.
                  </div>
                </div>
              </div>
              <div className="img col-12 col-md-6">
                <figure>
                  <Image
                    src="https://kr-union.com/comm_k/img/photo/A1/01.jpg"
                    alt=""
                    width={800}
                    height={600}
                  />
                </figure>
                <figure>
                  <Image
                    src="https://kr-union.com/comm_k/img/photo/A1/02c4ca.jpg?1"
                    alt=""
                    width={800}
                    height={600}
                  />
                </figure>
                <figure>
                  <Image
                    src="https://kr-union.com/comm_k/img/photo/A1/03.jpg"
                    alt=""
                    width={800}
                    height={600}
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section id="A2">
          <div className="container com">
            <div className="row" style={{ height: "auto" }}>
              <div className="img col-12 col-md-6">
                <figure>
                  <Image
                    src="https://kr-union.com/comm_k/img/photo/A1/03.jpg"
                    alt=""
                    width={800}
                    height={600}
                  />
                </figure>
                <figure>
                  <Image
                    src="https://kr-union.com/comm_k/img/photo/A2/01.jpg"
                    alt=""
                    width={800}
                    height={600}
                  />
                </figure>
              </div>
              <div className="text col-12 col-md-6">
                <div className="textWrap">
                  <div className="sectionTitle">
                    <h5>
                      &apos;UNION&apos;을 운영하는 사람들 <br /> 그리고 우리의
                      가치
                    </h5>
                  </div>
                  <div className="body row">
                    <dl className="col-12 col-sm-6">
                      <dt>신뢰 및 보안</dt>
                      <dd>
                        우리는 신뢰를 가장 중요한 가치로 생각하며, 높은 수준의
                        보안을 통해 고객정보와 자산을 보호합니다.
                      </dd>
                    </dl>
                    <dl className="col-12 col-sm-6">
                      <dt>결과 중심주의</dt>
                      <dd>
                        우리는 고객과 회사에 도움이 되는 결과를 만드는 것을
                        최우선의 가치로 두고 업무를 실행합니다.
                      </dd>
                    </dl>
                    <dl className="col-12 col-sm-6">
                      <dt>가족같은 분위기</dt>
                      <dd>
                        서로의 경험과 기술을 공유하며 학습하고, 각종 행사를 통해
                        가족같은 단단한 관계를 형성하고 있습니다.
                      </dd>
                    </dl>
                    <dl className="col-12 col-sm-6">
                      <dt>정보력과 대응능력</dt>
                      <dd>
                        새로운 정보를 빠르게 습득하여 고객과 회사에 도움을 줄 수
                        있는 능력을 지닌 인재를 찾고 있습니다.
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Company;
