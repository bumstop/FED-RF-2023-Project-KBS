import slideInfo from "./item_info/main_slide_info.jsx";

const slideInfoValues = Object.values(slideInfo);

function SlideItem() {
    return slideInfoValues.map((v) => (
        <div class="main-slide-item" data-index={v.index}>
            <a href="#">
                <div class="main-slide-item-img-box">
                    <img src={v.imgSrc} />
                </div>
                <div class="main-slide-item-txt-box">
                    <div class="main-slide-item-category">{v.category}</div>
                    <div class="main-slide-item-title">
                        <p>
                            {v.title[0]}
                            <br />
                            {v.title[1]}
                        </p>
                    </div>
                    <div class="main-slide-item-desc">{v.desc}</div>
                </div>
            </a>
        </div>
    ));
}

function MainSlideContainer() {
    return (
        <React.Fragment>
            <div class="main-slide-box">
                <SlideItem />
            </div>
            <div class="main-slide-btn-prev">
                <img src="./images/main_btn_prev.png" alt="btn_prev" />
            </div>
            <div class="main-slide-btn-next">
                <img src="./images/main_btn_next.png" alt="btn_prev" />
            </div>
            <div class="main-slide-pagination">
                <span class="main-slide-pagination-focus">1</span>
                <span> / </span>
                <span class="main-slide-pagination-total">8</span>
            </div>
            <div class="main-slide-btn-pause"></div>
        </React.Fragment>
    );
}

ReactDOM.render(<MainSlideContainer />, document.querySelector(".main-slide-container"));
