import { useEffect, useRef } from "react";
import { useDidMountEffect } from "../func/useDidMountEffect";

/** 상품 수량 및 가격 표시 박스 컴포넌트 */
export const ProductOrderedList = (props) => {
  console.log("ProductOrderedList 랜더링됨");

  const countInputRef = useRef();
  const changeCountObject = (key, value) => props.changeCountObject(key, value);
  const price = (countInputRef.current?.value || 1) * props.price;

  useDidMountEffect(() => {
    const count = countInputRef.current.value;
    const isWrongCount =
      count <= 0 || isNaN(count) || Number.isInteger(Number(count)) === false;

    // count가 0보다 작거나 숫자가 아니거나 정수가 아니면 1로 변경
    if (isWrongCount) {
      changeCountObject(props.selectRefText, (countInputRef.current.value = 1));
    }
  });

  return (
    <div className="product-ordered-list">
      <span className="option-name">{props.selectRefText}</span>
      <div className="option-counter">
        <div
          className="minus-btn"
          onClick={() =>
            changeCountObject(props.selectRefText, --countInputRef.current.value)
          }></div>
        <div className="count-box">
          <input
            ref={countInputRef}
            className="count-input"
            type="text"
            defaultValue={1}
            onChange={() =>
              changeCountObject(props.selectRefText, Number(countInputRef.current.value))
            }
          />
        </div>
        <div
          className="plus-btn"
          onClick={() =>
            changeCountObject(props.selectRefText, ++countInputRef.current.value)
          }></div>
      </div>
      <span className="option-price">{price.toLocaleString()}원</span>
      <div className="product-close-btn"></div>
    </div>
  );
}; // const ProductOrderedList
