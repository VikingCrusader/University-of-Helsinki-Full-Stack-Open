import { useState } from "react";
const App1 = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  //定义左右两个按钮的状态值

  const [allClicks, setAll] = useState([]);
  //定义一个数组来存储点击记录，在这里usestate的初始值是一个空数组

  const handleLeftClick = () => {
    setAll(allClicks.concat("L")); //使用concat方法向数组中添加一个“L”，不要使用push方法，因为push会修改原数组，而React状态值不允许直接修改
    setLeft(left + 1);
  }; //每次点击左边按钮时，调用该函数，向数组中添加一个“L”，并且左边的计数加1

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  }; //每次点击右边按钮时，调用该函数，向数组中添加一个“R”，并且右边的计数加1

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(" ")}</p>{" "}
      {/*使用join方法将数组转换为字符串，并用空格分隔每个元素*/}
    </div>
  );
};
export default App1;
