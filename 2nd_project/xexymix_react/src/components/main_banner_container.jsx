// props.page 호출한 page를 가져옴
export function MainBannerContainer(props) {
  return (
    <div className="main-banner-container">
      <img
        className={props.page === "best" ? "best-banner-img" : "new-banner-img"}
        src={`${process.env.PUBLIC_URL}/images/${props.page}_main_banner.jpg`}
        alt="메인배너"
      />
      {props.page === "new" && (
        <div className="tit-box">
          <p className="first-tit">NEW</p>
          <p className="second-tit">오늘의 신상</p>
          <p className="third-tit">
            가장 먼저 만나보는 젝시믹스 신상
            <br />
            기간 한정, 할인된 가격에 만나보세요.
          </p>
        </div>
      )}
    </div>
  );
}
