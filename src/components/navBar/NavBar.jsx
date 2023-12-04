import './NavBar.scss';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { Avatar } from '@mui/material';
import { useContext } from 'react';


const NavBar = () => {
  

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="title">Strava App</div>
        <div className="items">
        
          <div className="item">
            <Avatar
              className="avatar"
              style={
                
                   {
                      backgroundColor: 'gray',
                    }
              }
            >
              
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
