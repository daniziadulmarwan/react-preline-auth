import { Component } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

interface IState {
  name: string;
  token: string;
}

interface IProps {}

export default class Dashboard extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      name: "",
      token: "",
    };
  }

  refreshToken = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/authenticated/refresh-token",
        { withCredentials: true }
      );
      console.log(response.data.access_token);
      const decoded = jwtDecode(response.data.token);
      console.log(decoded);
    } catch (error) {
      console.log(error);
    }
  };

  logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  componentDidMount(): void {
    this.refreshToken();
  }

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
