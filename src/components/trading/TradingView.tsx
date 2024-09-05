'use client';
import { useEffect } from "react";

export default function TradingViewWidget() {
    useEffect(() => {
      // Kiểm tra xem script đã được gắn vào chưa
      if (!document.querySelector(".tradingview-widget-script")) {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
        script.async = true;
        script.className = "tradingview-widget-script"; // Thêm class để nhận diện script
        script.innerHTML = JSON.stringify({
          symbols: [
            [
              "USD",
              "FX_IDC:USDKRW|1D"
            ]
          ],
          chartOnly: false,
          width: "100%",
          height: "400",
          locale: "kr",
          colorTheme: "dark",
          autosize: true,
          showVolume: true,
          showMA: false,
          hideDateRanges: false,
          hideMarketStatus: false,
          hideSymbolLogo: false,
          scalePosition: "right",
          scaleMode: "Normal",
          fontFamily: "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          fontSize: "10",
          noTimeScale: false,
          valuesTracking: "1",
          changeMode: "price-and-percent",
          chartType: "area",
          maLineColor: "#2962FF",
          maLineWidth: 1,
          maLength: 9,
          headerFontSize: "medium",
          lineWidth: 2,
          lineType: 0,
          dateRanges: [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ]
        });
  
        document.querySelector(".tradingview-widget-container__widget")?.appendChild(script);
      }
    }, []);
  
    return (
      <div className="frame">
        <div className="tradingview-widget-container">
          <div className="tradingview-widget-container__widget"></div>
        </div>
      </div>
    );
  }