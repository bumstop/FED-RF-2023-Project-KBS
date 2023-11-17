import React, { useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";

// Import CSS
import "./css/index_style.css";
import { TopBanner } from "./components/top_banner";
import { Gnb } from "./components/gnb";
import { QuickMenu } from "./components/quick_menu";
import { MainSlideContainer } from "./components/main_slide_container";
import { CircleBannerContainer } from "./components/circle_banner_container";
import { SeasonSlideContainer } from "./components/season_slide_container";
import { SubSlideContainer } from "./components/sub_slide_container";
import { MainItemContainer } from "./components/main_item_container";
import { Footer } from "./components/footer";
import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

function App() {
  const hideTopBanner = () => {
    const gnb = document.querySelector(".gnb-wrapper");
    console.log(gnb);
  };
  useLayoutEffect(() => {
    // 페이지 이동시 스크롤위치 상단이동
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div id="header">
        <TopBanner />
        <Gnb />
      </div>
      <QuickMenu />
      <div id="main">
        <MainSlideContainer />
        <CircleBannerContainer />
        <SeasonSlideContainer />
        <SubSlideContainer />
        <MainItemContainer />
      </div>
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
