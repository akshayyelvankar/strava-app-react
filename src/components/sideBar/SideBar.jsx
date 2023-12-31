import "./SideBar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PeopleIcon from "@mui/icons-material/People";
import RouteIcon from "@mui/icons-material/Route";
import LogoutIcon from "@mui/icons-material/Logout";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";


const SideBar = () => {
  const navigate = useNavigate();
  

  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">admin</span>
      </div>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li onClick={() => navigate("/")}>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          {/* <p className="title">LINKS</p> */}
          {/* <li onClick={() => navigate("/athlete")}>
            <PersonIcon className="icon" />
            <span>Me</span>
          </li> */}
          {/* <Tooltip title="Under Contruction!" placement="right">
            <li className="clubs">
              <PeopleIcon className="icon" />
              <span>Strava Clubs</span>
            </li>
          </Tooltip> */}
          {/* <Tooltip title="Under Contruction!" placement="right">
            <li className="routes">
              <RouteIcon className="icon" />
              <span>Routes</span>
            </li>
          </Tooltip> */}
          <p className="title">SETTINGS</p>
          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>
          
            <li className="logou">
              <LogoutIcon className="icon" />
              <span>Logout</span>
            </li>
          
        </ul>
      </div>
      
    </div>
  );
};

export default SideBar;
