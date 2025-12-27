// 1. 导入必要的库
import ReactDOM from "react-dom/client";
import App from "./App";

// 2. 创建一个普通变量
let counter = 1;

// 3. 创建 React 根节点（只创建一次）
const root = ReactDOM.createRoot(document.getElementById("root"));

// 4. 定义刷新函数
const refresh = () => {
  root.render(<App counter={counter} />); // 每次调用都会重新渲染
};

// 5. 每隔 1 秒执行一次
setInterval(() => {
  refresh(); // 先用当前的 counter 值渲染
  counter += 1; // 然后 counter 加 1（为下次渲染准备）
}, 1000);
