import { Component } from "react";
import ForgotPasswordForm from "./forgot-password-form";
import ForgotPasswordImg from "@/assets/images/forgot-password-img.png";

export default class ForgotPassword extends Component {
  render() {
    return (
      <div className="w-screen h-screen flex">
        <div className="w-1/2 h-full">
          <div className="px-[140px]">
            <ForgotPasswordForm />
          </div>
        </div>
        <div className="w-1/2 h-full bg-gradient-to-b from-[#3730A3] to-[#312E81] flex flex-col justify-center">
          <img src={ForgotPasswordImg} alt="auth-icon-image" />
          <div className="px-[140px] mt-14">
            <h5 className="uppercase text-sm text-white/70 font-semibold tracking-widest">
              daniziadulmarwan.io
            </h5>
            <p className="mt-3 text-[28px] text-white w-[537px] font-normal">
              Nggak apa-apa lupa sama kata sandi, asalkan kita jangan sampe lupa
              sama jasa para pahlawan.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
