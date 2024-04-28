import { Component } from "react";
import RegisterForm from "./resigter-form";
import RegisterImg from "@/assets/images/register-img.png";

export default class Register extends Component {
  render() {
    return (
      <div className="w-screen h-screen flex overflow-hidden">
        <div className="w-1/2 h-full overflow-y-auto">
          <div className="px-[140px]">
            <RegisterForm />
          </div>
        </div>
        <div className="w-1/2 h-full bg-gradient-to-b from-[#3730A3] to-[#312E81] flex flex-col justify-center">
          <img src={RegisterImg} alt="auth-icon-image" />
          <div className="px-[140px] mt-14">
            <h5 className="uppercase text-sm text-white/70 font-semibold tracking-widest">
              daniziadulmarwan.io
            </h5>
            <p className="mt-3 text-[28px] text-white w-[537px] font-normal">
              Ayo mendaftar dan belajar dengan rajin di sini supaya jadi pinter
              dan nggak jadi beban kayak si Denis!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
