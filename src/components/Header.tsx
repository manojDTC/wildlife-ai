import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Logo from "../../src/assets/images/wildlife-logo.png";
import Avatar from "../../src/assets/images/Avatar.png";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "8px",
        background: "#313133",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "7px",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <span>
          <img src={Logo} alt="Logo" style={{ height: "25px" }}></img>
        </span>
        <Typography
          sx={{ color: "#FAFAFA", fontSize: "24px", userSelect: "none" }}
        >
          Wildlife AI
        </Typography>
      </Box>
      <Box sx={{ alignSelf: "center" }}>
        <Box>
          <img src={Avatar} alt=""></img>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
