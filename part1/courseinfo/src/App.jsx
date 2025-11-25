const App = () => {
  return (
    <div>
      <Header course="Half Stack application development" />
      <Content
        part1="Fundamentals of React"
        exercises1={10}
        part2="Using props to pass data"
        exercises2={7}
        part3="State of a component"
        exercises3={14}
      />
      <Total exercises1={10} exercises2={7} exercises3={14} />
    </div>
  );
};
const Part = (props) => {
  return (
    <p>{props.part} {props.exercise}</p>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercise={props.exercises1} />
      <Part part={props.part2} exercise={props.exercises2} />
      <Part part={props.part3} exercise={props.exercises3} />
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  );
}
export default App;
