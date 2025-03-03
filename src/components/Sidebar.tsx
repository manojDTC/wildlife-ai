import { ListItemIcon, MenuItem, MenuList, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import homeIcon from "../../src/assets/images/homeIcon.svg";
import AlertsIcon from "../../src/assets/images/alerts-icon.svg";

const Sidebar = () => {
  return (
    // <nav style={{ background: "#041802" }}>
    //   <ul>
    //     <li>
    //       <Link to="/">Dashboard</Link>
    //     </li>
    //     <li>
    //       <Link to="/profile">Profile</Link>
    //     </li>
    //     <li>
    //       <Link to="/settings">Settings</Link>
    //     </li>
    //   </ul>
    // </nav>
    <MenuList
      sx={{
        position: "absolute",
        top: "52px",
        left: "0px",
        background: "black",
        width: "50px",
        height: "calc(100vh - 52px)",
        padding: "0",
      }}
    >
      <MenuItem
        sx={{
          justifyContent: "center",
          padding: "15px 0",
          // background: " #53FF5391",
        }}
      >
        <Link to="/">
          <img src={homeIcon} alt="homeIcon"></img>
        </Link>
      </MenuItem>
      <MenuItem sx={{ justifyContent: "center", padding: "15px 0" }}>
        <Link to="/alerts">
          <img src={AlertsIcon} alt="ticketsIcon"></img>
        </Link>
      </MenuItem>
    </MenuList>
  );
};

export default Sidebar;
