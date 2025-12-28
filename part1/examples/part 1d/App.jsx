import { useState } from "react";
//每次点击按钮时，都会调用相应的处理函数，这些函数会创建一个新的clicks对象，并使用setClicks函数来更新状态，从而触发组件的重新渲染。
const App = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });
  //在这里，useState被用来创建一个名为clicks的状态变量，它是一个对象，包含left和right两个属性，初始值都为0。
  // setClicks是一个函数，用于更新clicks状态。
  //这个编程思想体现了React中状态管理的基本概念，通过使用useState钩子，我们可以轻松地在函数组件中管理和更新状态。
  //react和原生js的区别在于react中状态的更新是通过setState函数来完成的，而不是直接修改状态变量。
  //setstate是react中最常用的状态更新方法，它确保组件在状态变化时正确地重新渲染。
  //在这个例子中，每次点击按钮时，都会调用相应的处理函数，这些函数会创建一个新的clicks对象，并使用setClicks函数来更新状态，从而触发组件的重新渲染。
  //这种方式确保了状态的不可变性，这是React性能优化和正确渲染的关键。
  const handleLeftClick = () => {
    const newClicks = {
      left: clicks.left + 1,
      right: clicks.right,
    };
    setClicks(newClicks);
  };
  //处理左按钮点击事件的函数。它创建一个新的clicks对象，将left属性加1，right属性保持不变，然后调用setClicks更新状态。
  //问题：为什么不直接修改clicks.left？
  //回答：在React中，状态应该被视为不可变的。直接修改clicks.left不会触发组件的重新渲染，因为React无法检测到状态的变化。通过创建一个新的对象并使用setClicks更新状态，可以确保React正确地识别状态的变化并重新渲染组件。
  //问题：为什么right不变但是也要包含在newClicks对象中？
  //回答：在JavaScript中，对象是通过引用传递的。如果我们只更新left属性而不包含right属性，新的对象将不会包含right属性，从而导致丢失该值。通过显式地包含right属性，我们确保了新对象完整地反映了当前状态。
  const handleRightClick = () => {
    const newClicks = {
      left: clicks.left,
      right: clicks.right + 1,
    };
    setClicks(newClicks);
  };
  //处理右按钮点击事件的函数同理。

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
    //react中花括号{}用于在JSX中嵌入JavaScript表达式。在这个例子中，{clicks.left}和{clicks.right}用于显示当前的点击次数。
    //onClick={handleLeftClick}中的花括号表示将JavaScript函数handleLeftClick作为事件处理程序传递给按钮的onClick属性。
  );
  //这个return语句定义了组件的UI结构。它显示了左侧和右侧的点击次数，并包含两个按钮，分别用于处理左侧和右侧的点击事件。
  //React组件的return部分定义了组件的UI结构。它使用JSX语法来描述组件应该如何渲染。
};
export default App;
