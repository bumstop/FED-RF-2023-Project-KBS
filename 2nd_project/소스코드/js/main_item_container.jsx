import manInfo from "./item_info/man_info.js";
import ItemBox from "./item_box.jsx"; // props 로 import받은 Object의 value를 넘겨준다

const manInfoValues = Object.values(manInfo); 
// props 로 import받은 Object의 value를 넘겨준다
{/* <ItemBox info={manInfoValues}/> */}

function MainItemContainer() {
    return (
        <React.Fragment>
           <ItemBox info={manInfoValues}/>
        </React.Fragment>
    );
}

ReactDOM.render(
    <MainItemContainer />,
    document.querySelector(".main-item-container")
);