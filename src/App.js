import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./Containers/AppRouter";

function App() {
  return (
    <div
      className="App"
      style={{
        justifyContent: "center",
        alignContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Hi Meet, All is well!!</h1>
      <AppRouter />
    </div>
  );
}

export default App;
