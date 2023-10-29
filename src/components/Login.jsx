import React, { useState } from "react";
import { WindowStyle } from "./Styles/Window.styled";
import { GridLayOut } from "./Styles/Grid.styled";
import { ImgStyle } from "./Styles/Img.styled";
import { FormStyle } from "./Styles/Form.styled";
import { Flex } from "./Styles/Flex.styled";
import { BtnStyle } from "./Styles/Btn.styled";
import { InputPass } from "./Styles/InputPass.styled";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [pass, SetShowPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const user = form.username.value;
    const pass = form.password.value;
    const info = {
      user,
      pass,
    };

    /*  const value = JSON.stringify(info);
    localStorage.setItem("data", value); */
  };

  const toggler = (e) => {
    e.preventDefault();
    SetShowPass(!pass);
  };

  /*  const notify = () => {
    const userData = JSON.parse(localStorage.getItem("data"));
    if (userData.user){

    } 
  }; */

  return (
    <WindowStyle>
      <Toaster />
      <GridLayOut>
        <ImgStyle>
          <img
            src="https://i.pinimg.com/originals/9c/4a/80/9c4a809da8dbbb6c814deaff6a113181.gif"
            alt=""
          />
        </ImgStyle>
        <FormStyle>
          <div>
            <h1>
              Great to see you <br /> again 👋
            </h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="login">Username</label> <br />
              <input type="text" name="username" required />
              <br />
              <label htmlFor="password">Password</label> <br />
              <InputPass>
                <input
                  type={pass ? "text" : "password"}
                  name="password"
                  required
                />
                <button onClick={toggler}>👀</button>
              </InputPass>
              <Flex>
                <div>
                  <label htmlFor="">
                    Remeber Me
                    <input type="checkbox" name="remeber" />
                  </label>
                </div>
                <a href="#">Change Password</a>
              </Flex>
              <div>
                <label htmlFor="">
                  <input type="checkbox" name="terms&con" />
                  <span>
                    Agree to <a href="#">Terms & Conditions</a>
                  </span>
                </label>
              </div>
              <BtnStyle>
                <button onClick={""}>Submit</button>
              </BtnStyle>
            </form>
            <div>
              <h1>
                Didn't have an account? <a href="#">Register Now</a>
              </h1>
            </div>
          </div>
        </FormStyle>
      </GridLayOut>
    </WindowStyle>
  );
};

export default Login;
