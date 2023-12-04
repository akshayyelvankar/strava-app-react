import NavBar from "components/navBar/NavBar";
import SideBar from "components/sideBar/SideBar";
import React, { useEffect } from "react";
import "./login.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const authStatus = useSelector((state) => state.token.status);
  const navigate = useNavigate();
  
  // useEffect(() => {
  //   if (authStatus === "success") {
  //     navigate("/");
  //   }
  // }, []);

  //const redirectUrl = "https://strava-react-dashboard.netlify.app/redirect";
  const redirectUrl ="http://localhost:3000/redirect";
  const scope = "activity:read_all,profile:read_all,activity:write";
  const CLIENT_ID ="116117"
  //80161
  //116117
 const  client_secret="7f89a27c089e141e58680835f46530d5ae34b0d6"
  const refreshToken = "12b5606900d078cff2435c7617e95c37d4318912";

  const handleLogin = () => {
    window.location = `http://www.strava.com/oauth/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${redirectUrl}/exchange_token&approval_prompt=force&scope=${scope}`;
    //window.location = `https://www.strava.com/oauth/token?client_id=${CLIENT_ID}&client_secret=${client_secret}&refresh_token=${refreshToken}&grant_type=refresh_token`
  };

  return (
    <div className="login">
      <SideBar />
      <div className="loginContainer">
        <NavBar />
        <div className="content">
          <div >
            <h1 className="top">Get Started With Strava Dashboard</h1>
            <button onClick={handleLogin} className="bottom">Connect with Strava</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
