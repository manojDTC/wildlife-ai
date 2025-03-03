import { ListItemIcon, MenuItem, MenuList, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import homeIcon from "../../src/assets/images/homeIcon.svg";
import AlertsIcon from "../../src/assets/images/alerts-icon.svg";

const Sidebar = () => {
  return (
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
      <Link to="/">
        <MenuItem
          sx={{
            justifyContent: "center",
            padding: "15px 0",
          }}
        >
          <img src={homeIcon} alt="homeIcon"></img>
        </MenuItem>
      </Link>
      <Link to="/alerts">
        <MenuItem sx={{ justifyContent: "center", padding: "15px 0" }}>
          <img src={AlertsIcon} alt="ticketsIcon"></img>
        </MenuItem>
      </Link>
    </MenuList>
  );
};

export default Sidebar;
