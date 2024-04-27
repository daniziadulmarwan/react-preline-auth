import { Component } from "react";
import AuthImg from "@/assets/auth-img.png";
import LoginForm from "./login-form";

export default class Login extends Component {
  render() {
    return (
      <div className="w-screen h-screen flex">
        <div className="w-1/2 h-full">
          <div className="px-[100px]">
            <LoginForm />
          </div>
        </div>
        <div className="w-1/2 h-full bg-gradient-to-b from-[#3730A3] to-[#312E81] grid place-items-center">
          <img src={AuthImg} alt="auth-icon-image" />
        </div>
      </div>
    );
  }
}
