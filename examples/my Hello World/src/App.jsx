function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "20px",
        fontWeight: "bold",
        color: "#646cff",
      }}
    >
      Hello World!
      I finished my first REACT APP!
      <App1 />
      <App1 />
    </div>
  );
}

const App1 = () => {
  console.log('hello from component')
  const now = new Date()
  const a = 10
  const b = 20

  return (
    <div>
      <p>The first ES6 component!</p>
      <p>It is {now.toString()}</p>
      <p>
        {a} plus {b} is {a+b}
      </p>
    </div>
  );
}


export default App;
export { App1 };
