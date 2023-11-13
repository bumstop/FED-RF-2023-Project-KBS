const subSlideItems = [
  "bikershorts",
  "joggerpants",
  "newyoga",
  "tennislook",
  "windbreaker",
];

function SubSlideItem() {
  return subSlideItems.map((v, i) => (
    <div class="sub-slide-item" data-index={i}>
      <img src={"./images/sub_slide/sub_slide_" + v + ".jpg"} alt="" />
    </div>
  ));
}

export function SubSlideContainer() {
  return (
    <div class="sub-slide-container">
      <div class="sub-slide-box-wrap">
        <div class="sub-slide-box">
          <SubSlideItem />
        </div>
      </div>
    </div>
  );
}