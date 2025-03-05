import React, { useState } from "react";
import DetectedAnimal from "../../assets/images/detectedAnimal.png";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { Circle, PauseRounded } from "@mui/icons-material";
import playButton from "../../assets/images/playButton.png";

const Logs = () => {
  const [age, setAge] = React.useState("");
  const [openLogModal, setOpenLogModal] = React.useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOpenLogModal = () => {
    setOpenLogModal(true);
  };
  const handleCloseLogModal = () => {
    setOpenLogModal(false);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const handleTogglePausePlay = () => {
    setIsPlaying((prevState: boolean) => !prevState);
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
            <Typography
              sx={{
                color: "#ffffff",
                fontSize: "16px",
                display: "flex",
                gap: "10px",
              }}
            >
              Logs
              <span>
                {isPlaying ? (
                  <img
                    onClick={handleTogglePausePlay}
                    src={playButton}
                    alt=""
                    style={{ height: "20px", cursor: "pointer" }}
                  ></img>
                ) : (
                  <PauseRounded
                    onClick={handleTogglePausePlay}
                    sx={{ height: "20px", cursor: "pointer" }}
                  />
                )}
              </span>
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
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              cursor: "pointer",
              padding: "6px",
              "&:hover": {
                background: "#00000080",
              },
            }}
            onClick={handleOpenLogModal}
          >
            <img
              src={DetectedAnimal}
              alt=""
              style={{
                flex: " 0 0 34%",
                width: "100%",
                height: "120px",
                objectFit: "contain",
              }}
            ></img>
            <Box>
              <Typography sx={{ fontSize: "16px", color: "#ffffff" }}>
                Alert Name | Village Check post
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
                    textTransform: "capitalize",
                  }}
                >
                  <span
                    style={{
                      height: "10px",
                      width: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#6FD195",
                      marginRight: "3px",
                    }}
                  ></span>
                  Alert Name
                </Button>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              cursor: "pointer",
              padding: "6px",
              "&:hover": {
                background: "#00000080",
              },
            }}
            onClick={handleOpenLogModal}
          >
            <img
              src={DetectedAnimal}
              alt=""
              style={{
                flex: " 0 0 34%",
                width: "100%",
                height: "120px",
                objectFit: "contain",
              }}
            ></img>
            <Box>
              <Typography sx={{ fontSize: "16px", color: "#ffffff" }}>
                Alert Name | Village Check post
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
                    textTransform: "capitalize",
                  }}
                >
                  <span
                    style={{
                      height: "10px",
                      width: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#6FD195",
                      marginRight: "3px",
                    }}
                  ></span>
                  Alert Name
                </Button>
              </Box>
            </Box>
          </Box>{" "}
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              cursor: "pointer",
              padding: "6px",
              "&:hover": {
                background: "#00000080",
              },
            }}
            onClick={handleOpenLogModal}
          >
            <img
              src={DetectedAnimal}
              alt=""
              style={{
                flex: " 0 0 34%",
                width: "100%",
                height: "120px",
                objectFit: "contain",
              }}
            ></img>
            <Box>
              <Typography sx={{ fontSize: "16px", color: "#ffffff" }}>
                Alert Name | Village Check post
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
                    textTransform: "capitalize",
                  }}
                >
                  <span
                    style={{
                      height: "10px",
                      width: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#6FD195",
                      marginRight: "3px",
                    }}
                  ></span>
                  Alert Name
                </Button>
              </Box>
            </Box>
          </Box>{" "}
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              cursor: "pointer",
              padding: "6px",
              "&:hover": {
                background: "#00000080",
              },
            }}
            onClick={handleOpenLogModal}
          >
            <img
              src={DetectedAnimal}
              alt=""
              style={{
                flex: " 0 0 34%",
                width: "100%",
                height: "120px",
                objectFit: "contain",
              }}
            ></img>
            <Box>
              <Typography sx={{ fontSize: "16px", color: "#ffffff" }}>
                Alert Name | Village Check post
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
                    textTransform: "capitalize",
                  }}
                >
                  <span
                    style={{
                      height: "10px",
                      width: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#6FD195",
                      marginRight: "3px",
                    }}
                  ></span>
                  Alert Name
                </Button>
              </Box>
            </Box>
          </Box>{" "}
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              cursor: "pointer",
              padding: "6px",
              "&:hover": {
                background: "#00000080",
              },
            }}
            onClick={handleOpenLogModal}
          >
            <img
              src={DetectedAnimal}
              alt=""
              style={{
                flex: " 0 0 34%",
                width: "100%",
                height: "120px",
                objectFit: "contain",
              }}
            ></img>
            <Box>
              <Typography sx={{ fontSize: "16px", color: "#ffffff" }}>
                Alert Name | Village Check post
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
                    textTransform: "capitalize",
                  }}
                >
                  <span
                    style={{
                      height: "10px",
                      width: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#6FD195",
                      marginRight: "3px",
                    }}
                  ></span>
                  Alert Name
                </Button>
              </Box>
            </Box>
          </Box>{" "}
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              cursor: "pointer",
              padding: "6px",
              "&:hover": {
                background: "#00000080",
              },
            }}
            onClick={handleOpenLogModal}
          >
            <Box sx={{ position: "relative" }}>
              <img
                src={DetectedAnimal}
                alt=""
                style={{
                  flex: " 0 0 34%",
                  width: "100%",
                  height: "120px",
                  objectFit: "contain",
                }}
              ></img>
              <div
                style={{
                  content: '""',
                  position: "absolute",
                  bottom: "9px" /* Adjust the position as needed */,
                  right: "5px" /* Adjust the position as needed */,
                  width: "0",
                  height: "0",
                  borderLeft: "33px solid transparent",
                  borderRight: "0px solid transparent",
                  borderBottom:
                    "33px solid #FF362791" /* Change the color of the triangle */,
                }}
              />
            </Box>

            <Box>
              <Typography sx={{ fontSize: "16px", color: "#ffffff" }}>
                Alert Name | Village Check post
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
                      backgroundColor: "#FF362791",
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
                    textTransform: "capitalize",
                  }}
                >
                  <span
                    style={{
                      height: "10px",
                      width: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#6FD195",
                      marginRight: "3px",
                    }}
                  ></span>
                  Alert Name
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Modal
        open={openLogModal}
        onClose={handleCloseLogModal}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "65%",
            bgcolor: "#272727",
            // border: "2px solid #000",
            boxShadow: 24,
            pt: 2,
            px: 2,
            pb: 2,
            height: "calc(100vh - 100px)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2
              style={{
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: "normal",
              }}
            >
              Log Number
            </h2>
            <Button onClick={handleCloseLogModal}>X</Button>
          </Box>
          <Box>
            <img
              src={DetectedAnimal}
              alt="detectedAnimal"
              style={{
                width: "100%",
                maxHeight: "450px",
                objectFit: "fill",
              }}
            ></img>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              sx={{
                flex: "0 0 33.33%",
                textAlign: "center",
                borderRight: "1px solid #FFF6F6",
              }}
            >
              <Typography sx={{ fontSize: "28px", color: "#ffffff" }}>
                Alert Name
              </Typography>
              <span style={{ fontSize: "16px", color: "#ffffffbf" }}>
                February 28, 2025 14:21:08{" "}
              </span>
            </Box>
            <Box
              sx={{
                flex: "0 0 33.33%",
                textAlign: "center",
                // borderRight: "1px solid red",
              }}
            >
              <Typography sx={{ fontSize: "28px", color: "#ffffff" }}>
                Location
              </Typography>
              <span style={{ fontSize: "16px", color: "#ffffffbf" }}>GPS </span>
            </Box>
            <Box
              sx={{
                flex: "0 0 33.33%",
                textAlign: "center",
                borderLeft: "1px solid #FFF6F6",
              }}
            >
              <Typography sx={{ fontSize: "28px", color: "#ffffff" }}>
                Animal Name
              </Typography>
              <span style={{ fontSize: "16px", color: "#ffffffbf" }}>
                Camera Name
              </span>
            </Box>
          </Box>
          <Box sx={{ marginTop: "25px", justifySelf: "right" }}>
            <Button
              sx={{
                backgroundImage:
                  "radial-gradient(circle, #ffffff -89%, #FF7715 100%)",
                color: "#ffffff",
                padding: "10px 30px",
              }}
            >
              Create Ticket
            </Button>
            <Button
              sx={{
                backgroundImage:
                  "radial-gradient(circle, #ffffff -89% , #65C565 100%)",
                color: "#ffffff",
                padding: "10px 30px",
                marginLeft: "10px",
              }}
            >
              Download
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Logs;
