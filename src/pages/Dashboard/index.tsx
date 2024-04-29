import { Component } from "react";

export default class Dashboard extends Component {
  logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  render() {
    return (
      <div className="mx-40 pt-40">
        <h5>Dashboard</h5>
        <button
          type="button"
          className="bg-[#4F46E5] py-3 mt-10 px-10 rounded-[6px] text-base text-white font-semibold shadow-lg"
          onClick={this.logout}
        >
          Logout
        </button>
      </div>
    );
  }
}
