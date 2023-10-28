import React from "react";
import { WindowStyle } from "./Styles/Window.styled";
import { FlexBox } from "./Styles/Flexbox.styled";
import { ImgStyle } from "./Styles/Img.styled";
import { FormStyle } from "./Styles/Grid.styled";
import { Flex } from "./Styles/Flex.styled";
import { BtnStyle } from "./Styles/Btn.styled";

const Login = () => {
  return (
    <WindowStyle>
      <FlexBox>
        <ImgStyle></ImgStyle>
        <FormStyle>
          <div>
            <h1>
              Great to see you <br /> again 👋
            </h1>
            <form action="">
              <label htmlFor="login">Username</label> <br />
              <input type="text" name="Username" />
              <br />
              <label htmlFor="password">Password</label> <br />
              <input type="password" name="password" />
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
                  <input type="checkbox" name="terms&cond" />
                  <span>
                    Agree to <a href="#">Terms & Conditions</a>
                  </span>
                </label>
              </div>
              <BtnStyle>Submit</BtnStyle>
            </form>
            <div>
              <h1>Didn't have an account? Register Now</h1>
            </div>
          </div>
        </FormStyle>
      </FlexBox>
    </WindowStyle>
  );
};

export default Login;
