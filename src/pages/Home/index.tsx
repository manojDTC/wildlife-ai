import React from "react";
import LiveVideo from "./LiveVideo";
import ThermalVideo from "./ThermalVideo";
import Analytics from "./Analytics";
import Logs from "./Logs";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <div
      style={{
        marginLeft: "50px",
        marginTop: "52px",
        background: "#000000e0",
        padding: "15px",
        position: "fixed",
        width: "-webkit-fill-available",
      }}
    >
      <Box sx={{ display: "flex", gap: "10px" }}>
        <Box
          sx={{
            flex: "0 0 50%",
            justifyItems: "center",
            display: "flex",
            flexDirection: "column",
            height: "calc(100vh - 86px)",
            gap: "5px",
          }}
        >
          <LiveVideo />
          <ThermalVideo />
        </Box>
        <Box sx={{ flex: "1" }}>
          <Analytics />
          <Logs />
        </Box>
      </Box>
    </div>
  );
};

export default Home;
