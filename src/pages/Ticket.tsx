import React, { useState } from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
  Typography,
  Box,
  Tabs,
  Tab,
  Avatar,
  MenuItem,
  Select,
  Stack,
  ListItemButton,
  Chip,
} from "@mui/material";
import filterIcon from "../assets/images/filter.svg";
import avatarImage from "../assets/images/user-image.svg";
import enterArrow from "../assets/images/enterArrow.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

//import moment from "moment";

const tickets = [
  {
    id: 1,
    userImage: avatarImage,
    location: "STR Check Post",
    updatedAt: "today",
    title: "Fix Login Bug",
    category: "General",
    details: "Users cannot log in with Google OAuth.",
  },
  {
    id: 2,
    userImage: avatarImage,
    location: "STR Check Post",
    updatedAt: "today",
    title: "Design Homepage",
    category: "General",
    details: "Create a new UI layout for the homepage.",
  },
  {
    id: 3,
    userImage: avatarImage,
    location: "STR Check Post",
    updatedAt: "today",
    title: "Wildlife Poaching Alert",
    category: "Wildlife",
    details: "Illegal hunting spotted in Zone 3.",
  },
  {
    id: 4,
    userImage: avatarImage,
    location: "STR Check Post",
    updatedAt: "today",
    title: "Forest Fire Warning",
    category: "Wildlife",
    details: "Smoke detected in northern forest.",
  },
];

const Ticket = () => {
  const [selectedTicket, setSelectedTicket] = useState(tickets[0]); // Default to first ticket
  const [selectedTab, setSelectedTab] = useState(0);
  const filteredTickets =
    selectedTab === 0
      ? tickets
      : tickets.filter((ticket) => ticket.category === "Wildlife");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
    // Additional click handling logic can be added here
  };
  return (
    <>
      <Tabs
        sx={{
          background: "#2E3D4A",
          color: "#FFF",
          paddingLeft: "68px",
          "& .MuiTabs-indicator": {
            backgroundColor: "#319C30",
          },
        }}
        value={selectedTab}
        onChange={(e, newValue) => setSelectedTab(newValue)}
      >
        <Tab
          label="All"
          sx={{
            color: "#FFF",
            "&.Mui-selected": { color: "#FFF" },
          }}
        />
        <Tab
          label="Wildlife Alerts"
          sx={{
            color: "#FFF",
            "&.Mui-selected": { color: "#FFF" },
          }}
        />
      </Tabs>

      <Box sx={{ flexGrow: 1, p: 2, marginLeft: "48px" }}>
        <Grid container>
          {/* Left Panel: Ticket List */}
          <Grid
            item
            xs={12}
            sm={3}
            sx={{ minHeight: "calc(100vh-200px)", backgroundColor: "#222D3A" }}
          >
            <Card sx={{ height: "100%", overflowY: "auto" }}>
              <Typography
                component="h2"
                sx={{
                  background: "#65C565",
                  color: "#FFF",
                  fontSize: "23px",
                  padding: "10px",
                }}
              >
                Tickets
                <img
                  src={filterIcon}
                  alt="icon"
                  style={{
                    background: "#FFF",
                    float: "right",
                    padding: "10px",
                    width: "20px", // Adjust width as needed
                    height: "20px", // Adjust height as needed
                    borderRadius: "5px", // Optional styling
                  }}
                />
              </Typography>

              <List
                sx={{
                  color: "#FFF",
                  backgroundColor: "#222D3A",
                  paddingTop: "0",
                }}
              >
                {tickets.map((ticket) => (
                  <ListItem
                    key={ticket.id}
                    component="div"
                    onClick={() => setSelectedTicket(ticket)}
                    sx={{
                      backgroundColor:
                        selectedTicket.id === ticket.id
                          ? "#65C5652B"
                          : "#222D3A",
                      "&:hover": { backgroundColor: "#65C5652B" },
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    {/* Left: User Image */}
                    <Avatar
                      src={ticket.userImage} // User image URL
                      alt="User"
                      sx={{
                        width: 50,
                        height: 50,
                        marginRight: 2,
                        borderRadius: "5px",
                      }}
                    />

                    {/* Middle: Ticket Info */}
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="body2" sx={{ color: "#FFF" }}>
                        {ticket.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#AAA" }}>
                        Alert ID: #{ticket.id} <br /> Location:{" "}
                        {ticket.location}
                      </Typography>
                    </Box>

                    {/* Right: Update Time */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#777",
                        minWidth: "100px",
                        textAlign: "right",
                      }}
                    >
                      {ticket.updatedAt}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Card>
          </Grid>

          {/* Right Panel: Ticket Details */}
          <Grid
            item
            xs={12}
            sm={9}
            sx={{ backgroundColor: "#222D3A", borderLeft: " solid 4px #000" }}
          >
            <Card
              sx={{ backgroundColor: "#222D3A", color: "#FFF", padding: "0" }}
            >
              <CardContent sx={{ padding: "0" }}>
                {/* Header */}
                <Grid
                  container
                  alignItems="center"
                  sx={{
                    background:
                      "linear-gradient(to right,rgb(118, 117, 117),rgb(76, 117, 92))",
                    padding: "10px 0 0 0",
                  }}
                >
                  {/* Left: User Avatar + Ticket ID & Type */}
                  <Grid
                    item
                    xs={3}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Avatar
                      src={selectedTicket.userImage}
                      alt="User"
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: "5px",
                        marginRight: 2,
                      }}
                    />
                    <Box>
                      <Typography variant="body2" color="#FFF">
                        Ticket ID: #{selectedTicket.id}
                      </Typography>
                      <Typography variant="body2" color="#00FF63">
                        Type
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid
                    item
                    xs={4}
                    container
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Stack spacing={1} alignItems="center">
                      <Typography variant="h5" fontWeight="bold">
                        {selectedTicket.title}
                      </Typography>
                      <Typography variant="body2" color="#AAA">
                        February 28, 2025 | 14:22:01
                      </Typography>
                    </Stack>
                  </Grid>

                  {/* Right: Status Dropdown & Assign To Dropdown */}
                  <Grid
                    item
                    xs={5}
                    sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}
                  >
                    {/* Ticket Status */}
                    <Select
                      value="Closed"
                      sx={{
                        background: "#FF5151",
                        color: "#FFF",
                        minWidth: "150px",
                        height: "40px",
                      }}
                    >
                      <MenuItem value="Open">Open</MenuItem>
                      <MenuItem value="In Progress">In Progress</MenuItem>
                      <MenuItem value="Resolved">Resolved</MenuItem>
                      <MenuItem value="Closed">Closed</MenuItem>
                    </Select>
                    <Typography
                      variant="body2"
                      sx={{
                        verticalAlign: "middle",
                        alignContent: "center",
                        justifyContent: "center",
                      }}
                    >
                      Assigned to
                    </Typography>
                    {/* Assign To */}
                    <Select
                      value="siva"
                      sx={{
                        background: "#FFF",
                        color: "#444",
                        minWidth: "150px",
                        height: "40px",
                      }}
                    >
                      <MenuItem value="siva">siva</MenuItem>
                      <MenuItem value="manoj">manoj</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
                <Box sx={{ height: "calc(100vh - 350px)", overflow: "auto", margin: "20px 0 0 0", }}>
                  {/* Ticket Details */}
                  <Grid container sx={{ marginBottom: 2, display: "block", width: "90%", float:"right", textAlign:"right", marginRight:2, }}>
                    <Box
                      sx={{
                        display: "block",
                        /* minWidth: "100%",
                        maxWidth: "100%", */
                      }}
                    >
                      <Box
                        sx={{ flexDirection: "row", alignItems: "flex-end" }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                          }}
                        >
                          <Typography>Siva</Typography>
                          <Avatar
                            src={avatarImage}
                            alt=""
                            sx={{ width: 40, height: 40, margin: "0 0 0 8px" }}
                          />
                        </Box>
                        <Box
                          sx={{
                            justifyContent: "flex-end",
                            float: "right",
                            color: "#FFF",
                            padding: "8px 0 8px 12px",
                            borderRadius: "12px",
                            boxShadow: 1,
                          }}
                        >
                          <Typography variant="body1">
                            Explain quantum computing in simple terms. Lorem
                            Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{ display: "block", textAlign: "right" }}
                          >
                            02-02-2024 10:12 AM
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid container sx={{ marginBottom: 2, /* display: "block" */ }}>
                    <Box
                      sx={{
                      //  display: "block",
                        minWidth: "90%",
                        maxWidth: "90%",
                      }}
                    >
                      <Box
                        sx={{ flexDirection: "row", alignItems: "flex-start" }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Avatar
                            src={avatarImage}
                            alt=""
                            sx={{ width: 40, height: 40, margin: "0 0 0 8px" }}
                          />
                          <Typography sx={{paddingLeft:"10px"}}>You</Typography>
                        </Box>
                        <Box
                          sx={{
                            color: "#FFF",
                            padding: "8px 12px",
                            borderRadius: "12px",
                            boxShadow: 1,
                          }}
                        >
                          <Typography variant="body1">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{ display: "block", textAlign: "left" }}
                          >
                            02-02-2024 10:12 AM
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Box>
                <List sx={{ display: 'flex', flexDirection: 'row', padding: 0 }}>
      <ListItem sx={{ width: 'auto',  background:"#65C565",margin: "8px",borderRadius:"5px" }}>
        <ListItemText primary="Check Village A" />
      </ListItem>
      <ListItem sx={{ width: 'auto',  background: "#FFF", color:"#585858",margin: "8px",borderRadius:"5px" }}>
        <ListItemText primary="Tiger in Village, Please Check" />
      </ListItem>
      {/* Add more items as needed */}
    </List>
                <form /* onSubmit={handleSubmit} */ style={styles.form}>
                  <input
                    type="text"
                    /* value={message}
        onChange={handleChange} */
                    placeholder="Type your message..."
                    style={styles.input}
                  />
                  <button type="submit" style={styles.button}>
                    <img
                      src={enterArrow}
                      alt="Enter Key Icon"
                      style={styles.icon}
                    />
                    Enter
                  </button>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
const styles: { [key: string]: React.CSSProperties } = {
  form: {
    display: "flex",
    //width: "90%",
    padding: "9px 10px",
    backgroundColor: "#fff",
    borderRadius: "4px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "none",
    fontSize: "16px",
  },
  button: {
    padding: "10px 20px",
    border: "none",
    backgroundColor: "#65C565",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "8px",
  },
  icon: {
    marginRight: "8px",
  },
};

export default Ticket;
