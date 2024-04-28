import { Component } from "react";
import AuthImg from "@/assets/auth-img.png";
import LoginForm from "./login-form";

export default class Login extends Component {
  render() {
    return (
      <div className="w-screen h-screen flex">
        <div className="w-1/2 h-full">
          <div className="px-[140px]">
            <LoginForm />
          </div>
        </div>
        <div className="w-1/2 h-full bg-gradient-to-b from-[#3730A3] to-[#312E81] flex flex-col justify-center">
          <img src={AuthImg} alt="auth-icon-image" />
          <div className="px-[140px] mt-14">
            <h5 className="uppercase text-sm text-white/70 font-semibold tracking-widest">
              daniziadulmarwan.io
            </h5>
            <p className="mt-3 text-[28px] text-white w-[537px] font-normal">
              Belajar secara online semakin mudah – tetep belajar walaupun pake
              kuota dari Kemendikbud hehe~
            </p>
          </div>
        </div>
      </div>
    );
  }
}
