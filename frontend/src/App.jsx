import "./App.css";
import Login from "./pages/login/Login";
import { BrowserRouter } from "react-router-dom";
function App() {
  function handleClick() {
    return;
  }

  return (
    // <div className="container">
    //   hi

    // </div>
    <BrowserRouter>
      {" "}
      <Login />
    </BrowserRouter>
  );
}

export default App;
