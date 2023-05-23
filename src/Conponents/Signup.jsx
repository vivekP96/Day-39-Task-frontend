import React, { useState } from "react";
import "./styles.css";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "axios";

function Signup() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [resp, setResp] = useState("");

  const url = "http://localhost:5000/api/register";
  async function handleSubmit() {
    try {
      const res = await Axios.post(url, {
        userEmail: userEmail,
        password: password,
      });
      setResp(res.data.message);
      setErr("");
    } catch (error) {
      setErr(error.response.data.message);
    }
  }
  return (
    <Container>
      <div className="signup-container">
        <div className="form-layout">
          <div className="form-input">
            <form>
              <h4>Register</h4>
              <label for="userEmail">Email Address</label>
              <input
                type="email"
                name="userEmail"
                onChange={(e) => {
                  e.preventDefault();
                  setUserEmail(e.target.value);
                }}
              ></input>
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={(e) => {
                  e.preventDefault();
                  setPassword(e.target.value);
                }}
              ></input>
              <Link to="/forgotpassword">Forgot password</Link>
              <div>
                {err && <div className="error_msg">{err}</div>}
                {resp && <div className="resp_msg">{resp}</div>}
                <Button onClick={handleSubmit} className="buttons">
                  Register
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Signup;
