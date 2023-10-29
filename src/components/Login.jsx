import React from "react";
import { WindowStyle } from "./Styles/Window.styled";
import { GridLayOut } from "./Styles/Grid.styled";
import { ImgStyle } from "./Styles/Img.styled";
import { FormStyle } from "./Styles/Form.styled";
import { Flex } from "./Styles/Flex.styled";
import { BtnStyle } from "./Styles/Btn.styled";
import { InputPass } from "./Styles/InputPass.styled";

const Login = () => {
  const handleSubmit = () => {
    console.log("Working");
  };

  return (
    <WindowStyle>
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
            <form onSubmit={handleSubmit} action="">
              <label htmlFor="login">Username</label> <br />
              <input type="text" name="Username" />
              <br />
              <label htmlFor="password">Password</label> <br />
              <InputPass>
                <input type="password" />
                <button>👀</button>
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
                  <input type="checkbox" name="terms&cond" />
                  <span>
                    Agree to <a href="#">Terms & Conditions</a>
                  </span>
                </label>
              </div>
              <BtnStyle>
                <button>Submit</button>
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
