import { useState } from "react";

const App = () => {
  // 在这里写你的代码
  const [upvoteCounter, setUpvoteCounter] = useState(0);

  return (
    <div>
      <h1>点赞器</h1>
      {/* 显示点赞数 */}
      <div className="upvotes-display">{upvoteCounter}</div>

      {/* 三个按钮 */}
      <button onClick={() => setUpvoteCounter(upvoteCounter + 1)}>
        UPVOTE
      </button>

      <button onClick={() => setUpvoteCounter(upvoteCounter - 1)}>
        DOWNVOTE
      </button>
      <button onClick={() => setUpvoteCounter(0)}>RESET</button>
    </div>
  );
};

export default App;
