import { useState } from "react";
import { MenuItem, MenuList } from "@mui/material";
import homeIcon from "../../src/assets/images/homeIcon.svg";
import alertsIcon from "../../src/assets/images/alerts-icon.svg";
import { SidebarItemProps } from "../types/interface/SidebarItemProps.interface";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const [activeItem, setActiveItem] = useState<string>("");

  const sideBarItems: SidebarItemProps[] = [
    { title: "Home", icon: homeIcon, link: "" },
    { title: "Alerts", icon: alertsIcon, link: "alerts" },
  ];

  const handleClick = (link: string) => {
    navigate(`/${link}`);
    setActiveItem(link);
  };

  return (
    <MenuList
      sx={{
        position: "fixed",
        top: "52px",
        left: "0px",
        background: "black",
        width: "50px",
        height: "calc(100vh - 52px)",
        padding: "0",
      }}
    >
      {sideBarItems?.map((item, index) => {
        return (
          <MenuItem
            onClick={() => handleClick(item.link)}
            key={index}
            sx={{
              justifyContent: "center",
              padding: "15px 0",
              backgroundColor:
                item.link === `${activeItem}`
                  ? "rgb(116, 96, 171)"
                  : "transparent",
              borderLeft:
                item.link === `${activeItem}`
                  ? "5px rgb(169, 167, 174)"
                  : "5px solid transparent",
              "&:hover": { backgroundColor: "transparent" },
            }}
          >
            <img src={item.icon} alt="Icon"></img>
          </MenuItem>
        );
      })}
    </MenuList>
  );
};

export default Sidebar;
