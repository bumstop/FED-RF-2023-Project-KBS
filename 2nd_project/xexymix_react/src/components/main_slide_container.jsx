import { mainSlideInfo } from "../data/main_slide_info";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef, useState } from "react";
const mainSlideInfoValues = Object.values(mainSlideInfo);

export function MainSlideContainer() {
  const [isPlay, setIsPlay] = useState(true);
  const mainSwiperRef = useRef(null);

  function isPlayToggle() {
    const mainSwiperAutoPlay = mainSwiperRef.current.swiper.autoplay;

    isPlay ? setIsPlay(false) : setIsPlay(true);
    isPlay ? mainSwiperAutoPlay.stop() : mainSwiperAutoPlay.start();
  }

  return (
    <div className="main-slide-container">
      <Swiper
        ref={mainSwiperRef}
        slidesPerView={'auto'}
        // slidesPerView={'auto'} 사용시 CSS width 지정해줘야함
        centeredSlides={true}
        initialSlide={1}
        spaceBetween={0}
        pagination={{
          type: "fraction",
        }}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="main-slide-container">
        
        <SwiperSlide className="main-slide-item event-item">
          <a href="#!">
            {/* <img "./images/main_slide/banner_0.jpg" alt="이미지" /> */}
          </a>
        </SwiperSlide>
        {mainSlideInfoValues.map((v) => (
          <SwiperSlide className="main-slide-item" key={v.imgSrc}>
            <a href="#!">
              <img src={v.imgSrc} alt="이미지" />
              <div className="main-slide-item-txt-box">
                <div className="main-slide-item-category">{v.category}</div>
                <div className="main-slide-item-title">
                  {v.title.map((v, i, a) => (
                    <span key={i}>
                      {v}
                      {a.length === 1 ? "" : !i ? <br /> : ""}
                    </span>
                  ))}
                </div>
                <div className="main-slide-item-desc">{v.desc}</div>
              </div>
            </a>
          </SwiperSlide>
        ))}
        <div
          className={"main-slide-btn" + (isPlay ? "" : " on")}
          onClick={isPlayToggle}></div>
      </Swiper>
    </div>
  );
}
