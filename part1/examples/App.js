//组件的辅助函数
const Hello = ({ name, age }) => {
  //语法糖：解构 现在用的是终极解构版本！
  // const {name, age} = props version 1

  // const name = props.name; version 2
  // const age = props.age;

  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - age;
  };

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>

      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};

const App = () => {
  const name = "Peter";
  const age = 10;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  );
};
export default App;
