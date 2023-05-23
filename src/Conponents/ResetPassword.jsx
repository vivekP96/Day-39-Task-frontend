import Axios from "axios";
import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
// import { useLocation } from "react-router-dom";
import { useMatch } from "react-router-dom";

function ResetPassword() {
  const match = useMatch("/:firstRoute/:secondRoute/*");
  const { secondRoute } = match.params;
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");

  const [resp, setResp] = useState("");

  const url = "http://localhost:5000/api/resetpassword/";

  function handleSubmit() {
    Axios.post(url + secondRoute, { pass1, pass2 })
      .then((res) => {
        setResp(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Container>
      <div className="signup-container">
        <div className="form-layout">
          <div className="form-input">
            <form>
              <h5>RESET YOUR PASSWORD HERE...</h5>
              <label for="password">New Password</label>
              <input
                type="password"
                name="password"
                onChange={(e) => {
                  e.preventDefault();
                  setPass1(e.target.value);
                }}
              ></input>
              <label for="confirm-password">Confirm Password</label>
              <input
                type="password"
                name="confirm-password"
                onChange={(e) => {
                  e.preventDefault();
                  setPass2(e.target.value);
                }}
              ></input>

              {/* {err && <div className="error_msg">{err}</div>} */}
              {resp === "Password Reset Successful" && (
                <div className="resp_msg">{resp}</div>
              )}
              {resp === "Password and Confirm password must be Same" && (
                <div className="error_msg">{resp}</div>
              )}
              <Button
                className="buttons"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Reset
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ResetPassword;
