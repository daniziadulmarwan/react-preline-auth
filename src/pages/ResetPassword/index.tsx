import { Component } from "react";
import ResetPasswordForm from "./reset-password-form";
import ResetPasswordImg from "@/assets/images/reset-password-img.png";

export default class ResetPassword extends Component {
  render() {
    return (
      <div className="w-screen h-screen flex">
        <div className="w-full md:w-1/2 h-full overflow-y-auto">
          <div className="px-8 md:px-[80px] 2xl:px-[140px]">
            <ResetPasswordForm />
          </div>
        </div>
        <div className="hidden w-1/2 h-full bg-gradient-to-b from-[#3730A3] to-[#312E81] md:flex flex-col justify-center">
          <img src={ResetPasswordImg} alt="reset-password-img" />
          <div className="px-[140px] mt-14">
            <h5 className="uppercase text-sm text-white/70 font-semibold tracking-widest">
              daniziadulmarwan.io
            </h5>
            <p className="mt-3 text-[28px] text-white w-[537px] font-normal">
              Biar nanti nggak lupa lagi sama kata sandinya, disimpen di
              password manager ya, bang!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
