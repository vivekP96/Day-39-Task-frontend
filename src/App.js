import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./Conponents/Signup";
import ForgotPassword from "./Conponents/ForgotPassword";
import ResetPassword from "./Conponents/ResetPassword";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/forgotpassword"
          exact
          element={<ForgotPassword />}
        ></Route>
        <Route path="/signup" exact element={<Signup />}></Route>
        <Route
          path="/resetpassword/:string"
          exact
          element={<ResetPassword />}
        ></Route>
        <Route path="/" exact element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
