export default function MainSection2() {
    return (
      <>
        <div className="bg-blueGray-50 py-16 overflow-x-hidden">
          <div className="my-container">
            <div className="lg:flex lg:justify-between lg:items-center max-w-1280 mx-auto">
              <div>
                <div className="text-center keep-all lg:text-left text-3xl lg:text-5xl font-bold tracking-tighter text-blueGray-700">
                  Union Invest는 <br /> 언제, 어디서나 거래가 가능합니다.
                </div>
                <div className="mt-h text-center keep-all lg:text-left text-2xl tracking-tighter text-blueGray-500 font-medium">
                  모바일 부터 패드까지! <br /> 시세를 바로 확인하고 언제, 어디서나 거래하세요!
                </div>
                <div className="mt-6 text-center lg:mt-12">
                  <a
                    href="login_form.php"
                    style={{ color: 'rgba(17, 17, 34)' }}
                    className="pyh-3 px-6 rounded-md text-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition duration-200 ease-in-out focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 mrh-2"
                  >
                    로그인
                  </a>
                 
                  <a
                    href="usd2.php"
                    style={{ border: 'solid 1px #f8e39e', color: 'white' }}
                    className="pyh-3 px-6 rounded-md text-lg font-medium bg-blue-601 text-white hover:bg-blue-700 transition duration-200 ease-in-out focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 mrh-2"
                  >
                    거래하기
                  </a>
                </div>
                <div className="lg:flex lg:items-center mt-3 justify-center lg:space-x-3 lg:justify-start">
                  <div className="flex items-center mb-3 space-x-3"></div>
                </div>
              </div>
              <div className="mt-6 lg:mt-0 flex justify-center">
                <img
                  style={{ maxWidth: '100%', maxHeight: '360px' , marginRight: '150px'}}
                  src="https://kr-union.com/bitcall/gigi2.png"
                  alt="Union Invest"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  