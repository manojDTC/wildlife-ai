import React from "react";
// import Livevideo from "../../assets/videos/video.mp4";
import { Box, Typography } from "@mui/material";
import triggeredAlerts from "../../assets/images/triggeredAlerts.png";
import personOnDuty from "../../assets/images/personOnDuty.png";
import speciesDetected from "../../assets/images/speciesDetected.png";
import graphrep from "../../assets/images/graphrep.png";

const Analytics = () => {
  return (
    <Box>
      <Box
        sx={{ background: " #222D3A", borderRadius: "4px", padding: "10px" }}
      >
        <Box sx={{ display: "flex", gap: "20px", padding: "10px" }}>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <span>
              <img
                src={triggeredAlerts}
                alt="triggeredAlerts"
                style={{
                  background: "#EDEEFC",
                  padding: "3px",
                  borderRadius: "4px",
                }}
              ></img>
            </span>
            <Box>
              <p style={{ margin: "0", fontSize: "14px", color: "#ffffff" }}>
                356
              </p>
              <p style={{ margin: "0", fontSize: "16px", color: "#ffffff" }}>
                Total Triggered Alerts
              </p>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <span>
              <img
                src={personOnDuty}
                alt="personOnDuty"
                style={{
                  background: "#EDEEFC",
                  padding: "3px",
                  borderRadius: "4px",
                }}
              ></img>
            </span>
            <Box>
              <p style={{ margin: "0", fontSize: "14px", color: "#ffffff" }}>
                Guards: 22 | Rangers: 39
              </p>
              <p style={{ margin: "0", fontSize: "16px", color: "#ffffff" }}>
                Personnel on Duty
              </p>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <span>
              <img
                src={speciesDetected}
                alt="specied-detected"
                style={{
                  background: "#EDEEFC",
                  padding: "3px",
                  borderRadius: "4px",
                }}
              ></img>
            </span>
            <Box>
              <p style={{ margin: "0", fontSize: "14px", color: "#ffffff" }}>
                14 (3 Endangered Species)
              </p>
              <p style={{ margin: "0", fontSize: "16px", color: "#ffffff" }}>
                Species Detected
              </p>
            </Box>
          </Box>
        </Box>
        <Box sx={{ marginTop: "10px", display: "flex", gap: "10px" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={graphrep} alt="graph-rep"></img>
            <Box>
              <Typography sx={{ color: "#FFFFFFB2", fontSize: "12px" }}>
                <span
                  style={{
                    height: "8px",
                    width: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#7646F5",
                    marginRight: "3px",
                    display: "inline-block",
                    border: "1px solid white",
                  }}
                ></span>
                Personnel
              </Typography>
              <Typography sx={{ color: "#FFFFFFB2", fontSize: "12px" }}>
                <span
                  style={{
                    height: "8px",
                    width: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#7646F5",
                    marginRight: "3px",
                    display: "inline-block",
                    border: "1px solid white",
                  }}
                ></span>
                Species
              </Typography>{" "}
              <Typography sx={{ color: "#FFFFFFB2", fontSize: "12px" }}>
                <span
                  style={{
                    height: "8px",
                    width: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#7646F5",
                    marginRight: "3px",
                    display: "inline-block",
                    border: "1px solid white",
                  }}
                ></span>
                Wild Animals I
              </Typography>{" "}
              <Typography sx={{ color: "#FFFFFFB2", fontSize: "12px" }}>
                <span
                  style={{
                    height: "8px",
                    width: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#7646F5",
                    marginRight: "3px",
                    display: "inline-block",
                    border: "1px solid white",
                  }}
                ></span>
                Wild Animals II
              </Typography>{" "}
              <Typography sx={{ color: "#FFFFFFB2", fontSize: "12px" }}>
                <span
                  style={{
                    height: "8px",
                    width: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#7646F5",
                    marginRight: "3px",
                    display: "inline-block",
                    border: "1px solid white",
                  }}
                ></span>
                Endangered Species
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={graphrep} alt="graph-rep"></img>
            <Box>
              <Typography sx={{ color: "#FFFFFFB2", fontSize: "12px" }}>
                <span
                  style={{
                    height: "8px",
                    width: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#7646F5",
                    marginRight: "3px",
                    display: "inline-block",
                    border: "1px solid white",
                  }}
                ></span>
                Personnel
              </Typography>
              <Typography sx={{ color: "#FFFFFFB2", fontSize: "12px" }}>
                <span
                  style={{
                    height: "8px",
                    width: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#7646F5",
                    marginRight: "3px",
                    display: "inline-block",
                    border: "1px solid white",
                  }}
                ></span>
                Species
              </Typography>{" "}
              <Typography sx={{ color: "#FFFFFFB2", fontSize: "12px" }}>
                <span
                  style={{
                    height: "8px",
                    width: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#7646F5",
                    marginRight: "3px",
                    display: "inline-block",
                    border: "1px solid white",
                  }}
                ></span>
                Wild Animals I
              </Typography>{" "}
              <Typography sx={{ color: "#FFFFFFB2", fontSize: "12px" }}>
                <span
                  style={{
                    height: "8px",
                    width: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#7646F5",
                    marginRight: "3px",
                    display: "inline-block",
                    border: "1px solid white",
                  }}
                ></span>
                Wild Animals II
              </Typography>{" "}
              <Typography sx={{ color: "#FFFFFFB2", fontSize: "12px" }}>
                <span
                  style={{
                    height: "8px",
                    width: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#7646F5",
                    marginRight: "3px",
                    display: "inline-block",
                    border: "1px solid white",
                  }}
                ></span>
                Endangered Species
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Analytics;
