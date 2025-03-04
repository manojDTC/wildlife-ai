import React from "react";
import DetectedAnimal from "../../assets/images/detectedAnimal.png";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";

const Logs = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Box>
      <Box
        sx={{
          background: "#222D3A",
          borderRadius: "4px",
          marginTop: "8px",
          padding: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography sx={{ color: "#ffffff", fontSize: "16px" }}>
              Logs <span></span>
            </Typography>
          </Box>
          <Box>
            <Box sx={{ display: "flex", gap: "5px" }}>
              <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                <InputLabel
                  id="demo-select-small-label"
                  sx={{ color: "#ffffff" }}
                >
                  Select Location
                </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={age}
                  label="Select Location"
                  onChange={handleChange}
                  sx={{
                    height: "38px",
                    background: "#162232",
                    border: "none",
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "& .MuiSelect-select": {
                      fontSize: "14px",
                      color: "#ffffff",
                    },
                    "& .MuiSelect-icon": {
                      color: "#ffffff",
                    },
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                <InputLabel
                  id="demo-select-small-label"
                  sx={{ color: "#ffffff" }}
                >
                  Select Camera
                </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={age}
                  label="Select Camera"
                  onChange={handleChange}
                  sx={{
                    height: "38px",
                    background: "#162232",
                    border: "none",
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "& .MuiSelect-select": {
                      fontSize: "14px",
                      color: "#ffffff",
                    },
                    "& .MuiSelect-icon": {
                      color: "#ffffff",
                    },
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
        <Box sx={{ overflow: "scroll", height: "calc(100vh - 362px)" }}>
          <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <img src={DetectedAnimal} alt=""></img>
            <Box>
              <Typography sx={{ fontSize: "16px", color: "#ffffff" }}>
                Alert Name | Village Check post{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: "13px",
                  color: "#ffffff",
                }}
              >
                Tiger Detected <span>February 28, 2025 15:03:21</span>
              </Typography>
              <Box sx={{ display: "flex", gap: "15px", marginTop: "10px" }}>
                <Button
                  sx={{
                    backgroundColor: "#7646F554",
                    borderRadius: "6px",
                    padding: "6px 10px",
                    color: "white",
                    textTransform: "capitalize",
                  }}
                >
                  <span
                    style={{
                      height: "10px",
                      width: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#7646F5",
                      marginRight: "3px",
                    }}
                  ></span>
                  Animal
                </Button>

                <Button
                  sx={{
                    background: "#6FD1959C",
                    borderRadius: "6px",
                    padding: "6px 10px",
                    color: "white",
                  }}
                >
                  <span
                    style={{
                      height: "10px",
                      width: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#6FD195",
                      marginRight: "3px",
                      textTransform: "capitalize",
                    }}
                  ></span>
                  Alert Name
                </Button>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <img src={DetectedAnimal} alt=""></img>
            <Box>
              <Typography sx={{ fontSize: "16px", color: "#ffffff" }}>
                Alert Name | Village Check post{" "}
              </Typography>
              <Typography sx={{ fontSize: "13px", color: "#ffffff" }}>
                Tiger Detected <span>February 28, 2025 15:03:21</span>
              </Typography>
              <Box sx={{ display: "flex", gap: "15px", marginTop: "10px" }}>
                <Button
                  sx={{
                    backgroundColor: "#7646F554",
                    borderRadius: "6px",
                    padding: "6px 10px",
                    color: "white",
                    textTransform: "capitalize",
                  }}
                >
                  <span
                    style={{
                      height: "10px",
                      width: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#7646F5",
                      marginRight: "3px",
                    }}
                  ></span>
                  Animal
                </Button>

                <Button
                  sx={{
                    background: "#6FD1959C",
                    borderRadius: "6px",
                    padding: "6px 10px",
                    color: "white",
                  }}
                >
                  <span
                    style={{
                      height: "10px",
                      width: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#6FD195",
                      marginRight: "3px",
                      textTransform: "capitalize",
                    }}
                  ></span>
                  Alert Name
                </Button>
              </Box>
            </Box>
          </Box>{" "}
          <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <img src={DetectedAnimal} alt=""></img>
            <Box>
              <Typography sx={{ fontSize: "16px", color: "#ffffff" }}>
                Alert Name | Village Check post{" "}
              </Typography>
              <Typography sx={{ fontSize: "13px", color: "#ffffff" }}>
                Tiger Detected <span>February 28, 2025 15:03:21</span>
              </Typography>
              <Box sx={{ display: "flex", gap: "15px", marginTop: "10px" }}>
                <Button
                  sx={{
                    backgroundColor: "#7646F554",
                    borderRadius: "6px",
                    padding: "6px 10px",
                    color: "white",
                    textTransform: "capitalize",
                  }}
                >
                  <span
                    style={{
                      height: "10px",
                      width: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#7646F5",
                      marginRight: "3px",
                    }}
                  ></span>
                  Animal
                </Button>

                <Button
                  sx={{
                    background: "#6FD1959C",
                    borderRadius: "6px",
                    padding: "6px 10px",
                    color: "white",
                  }}
                >
                  <span
                    style={{
                      height: "10px",
                      width: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#6FD195",
                      marginRight: "3px",
                      textTransform: "capitalize",
                    }}
                  ></span>
                  Alert Name
                </Button>
              </Box>
            </Box>
          </Box>{" "}
          <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <img src={DetectedAnimal} alt=""></img>
            <Box>
              <Typography sx={{ fontSize: "16px", color: "#ffffff" }}>
                Alert Name | Village Check post{" "}
              </Typography>
              <Typography sx={{ fontSize: "13px", color: "#ffffff" }}>
                Tiger Detected <span>February 28, 2025 15:03:21</span>
              </Typography>
              <Box sx={{ display: "flex", gap: "15px", marginTop: "10px" }}>
                <Button
                  sx={{
                    backgroundColor: "#7646F554",
                    borderRadius: "6px",
                    padding: "6px 10px",
                    color: "white",
                    textTransform: "capitalize",
                  }}
                >
                  <span
                    style={{
                      height: "10px",
                      width: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#7646F5",
                      marginRight: "3px",
                    }}
                  ></span>
                  Animal
                </Button>

                <Button
                  sx={{
                    background: "#6FD1959C",
                    borderRadius: "6px",
                    padding: "6px 10px",
                    color: "white",
                  }}
                >
                  <span
                    style={{
                      height: "10px",
                      width: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#6FD195",
                      marginRight: "3px",
                      textTransform: "capitalize",
                    }}
                  ></span>
                  Alert Name
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Logs;
