import Axios from "axios";
import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

function ForgotPassword() {
  const [userEmail, setUserEmail] = useState("");
  // const [err, setErr] = useState("");
  const [resp, setResp] = useState("");
  const url = "http://localhost:5000/api/forgotpassword";
  async function handleSubmit() {
    try {
      const res = await Axios.post(url, { userEmail });
      setResp(res.data.message);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container>
      <div className="signup-container">
        <div className="form-layout">
          <div className="form-input">
            <form>
              <h5>Enter registered Email Address</h5>
              <label for="userEmail">Email Address</label>
              <input
                type="email"
                name="userEmail"
                onChange={(e) => {
                  e.preventDefault();
                  setUserEmail(e.target.value);
                }}
              ></input>
              {/* {err && <div className="error_msg">{err}</div>} */}
              {resp === "email sent successfully" && (
                <div className="resp_msg">{resp}</div>
              )}
              {resp === "User email is invalid or doesnot exixts!!!" && (
                <div className="error_msg">{resp}</div>
              )}
              <Button
                className="buttons"
                onClick={() => {
                  handleSubmit();
                }}
              >
                SUBMIT
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ForgotPassword;
