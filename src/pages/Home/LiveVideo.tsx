import React from "react";
import Livevideo from "../../assets/videos/video.mp4";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const LiveVideo = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ position: "relative", width: "100%", flex: "0 0 49%" }}>
      <Box
        sx={{ position: "absolute", top: "5px", zIndex: "9", width: "100%" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: "5px" }}>
            <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
              <InputLabel
                id="demo-select-small-label"
                sx={{ color: "#ffffff", fontSize: "14px" }}
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
                  background: "#0000008f",
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
                sx={{ color: "#ffffff", fontSize: "14px" }}
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
                  background: "#0000008f",
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
          <Box>
            <FormControl size="small">
              {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                //   defaultValue="Auto"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Auto"
                  control={<Radio size="small" />}
                  label="Auto"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
      </Box>
      <iframe
        title="video"
        style={{ width: "100%", height: "100%", border: "0" }}
        // height="350"
        src="https://www.youtube.com/embed/fmszZsq6CFc?autoplay=1&mute=1&modestbranding=1&rel=0&controls=1&iv_load_policy=3"
      ></iframe>
      {/* <video height="350" loop muted>
        <source src={Livevideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <Box
        sx={{
          position: "absolute",
          bottom: "10px",
          left: "10px",
          width: "98%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{ color: "white", fontSize: "16px", alignSelf: "end" }}
          >
            February 28, 2025 02:04:26 AM
          </Typography>
          <Box sx={{ background: "#0000006e" }}>
            <Button
              sx={{ display: "block", justifySelf: "center", lineHeight: "0" }}
            >
              <KeyboardArrowUpIcon sx={{ color: "white" }} />
            </Button>
            <Button>
              <KeyboardArrowUpIcon
                sx={{ transform: "rotate(-90deg)", color: "white" }}
              />
            </Button>
            <Button>
              <KeyboardArrowUpIcon
                sx={{ transform: "rotate(90deg)", color: "white" }}
              />
            </Button>
            <Button
              sx={{ display: "block", justifySelf: "center", lineHeight: "0" }}
            >
              <KeyboardArrowDownIcon sx={{ color: "white" }} />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LiveVideo;
