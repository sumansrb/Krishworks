import * as React from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PrintIcon from "@mui/icons-material/Print";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import Paper from "@mui/material/Paper";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import twitter from "../../images/twitter.png";
import { Badge, InputBase } from "@mui/material";
import Main from "../Main/Main";
import Tabs from "../Tab/Tab";
import Accordion from "../Accordion/Accordion";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 5,
  //   width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(90),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function MiniDrawer(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <PersonOutlineIcon
            style={{ fontSize: "2rem", color: "blue", marginRight: ".5rem" }}
          />
          <Typography variant="h6" noWrap component="div">
            {props &&
              props.doctorDetails.length > 0 &&
              props.doctorDetails[0].name}
          </Typography>
          <div className="row">
            <div className="col">
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </div>
            <div className="col">
              {" "}
              <AddCircleIcon
                style={{ fontSize: "2.5rem", cursor: "pointer", color: "blue" }}
              />
            </div>
            <div className="col">
              <Badge variant="dot" color="error">
                <NotificationsIcon
                  style={{
                    fontSize: "2rem",
                    paddingTop: ".5rem",
                    cursor: "pointer",
                  }}
                />
              </Badge>
            </div>
          </div>
        </Toolbar>
        <Divider />
        <div class="row" style={{ marginTop: "1rem" }}>
          <div
            class="col-1"
            style={{ marginLeft: "30px", flex: "1", height: "2rem" }}
          >
            <p style={{ fontSize: ".85rem", marginTop: ".25rem" }}>
              Patient List
            </p>
          </div>
          <div class="col" style={{ flex: "12" }}>
            <ArrowForwardIosIcon />
            <span style={{ marginLeft: "30px" }}>
              {/* {props &&
                props.doctorDetails.length > 0 &&
                props.doctorDetails[0]["Phone Number"]} */}
              {props &&
                props.doctorDetails.length > 0 &&
                props.doctorDetails[0].name}
            </span>
          </div>
          <div class="col-2">
            <PrintIcon /> <RateReviewOutlinedIcon />
            <span style={{ fontSize: ".8rem" }}>
              <span>-</span>Edit Patient
            </span>
          </div>
        </div>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <div>
            <img
              src={twitter}
              alt="twitter"
              style={{
                zIndex: "1000",
                height: "3rem",
                width: "auto",
                marginLeft: 0,
              }}
            />
          </div>
          <div className="col" style={{ marginLeft: "1rem" }}>
            <div className="row ">
              <h5>Zendenta</h5>
            </div>
            <h6
              className="row"
              style={{ fontSize: "10px", marginLeft: "0rem" }}
            >
              cabut gigi tanpa sakit
            </h6>
          </div>

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <MenuIcon /> : <MenuIcon />}
          </IconButton>
        </DrawerHeader>

        <List style={{ marginTop: "2.5rem" }}>
          {[
            "Overview",
            "Calendar",
            "Patien List",
            "Messagae",
            "Payment Information",
            "settings",
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <List style={{ marginTop: "8.7rem" }}>
          
          <div class="row" style={{marginLeft:'1px', marginBottom:".3rem"}}>
          <div className="col-2">
          <HelpOutlineIcon/>
          </div>
          <div className="col-10">
            help
          </div>
            </div>
          <div className="card">
            <Accordion doctorName={props.doctorName} />
          </div>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 2 }}
        style={{ backgroundColor: "lightgray" }}
      >
        <DrawerHeader />

        <div className="row mt-5">
          <div className="col-8">
            <Main
              doctorDetails={props.doctorDetails}
              doctorName={props.doctorName}
            />
          </div>
          <div className="col-4 ">
            <div class="card ">
              <div class="card-body ">
                <div class="row">
                  <div class="col">
                    <h5 class="card-title " style={{ fontSize: "12px" }}>
                      Card title
                    </h5>
                  </div>
                  <div class="col" style={{ marginLeft: "60%" }}>
                    <h5
                      class="card-title "
                      style={{ color: "blue", fontSize: "12px" }}
                    >
                      See all
                    </h5>
                  </div>
                </div>
                <div
                  class="card-text"
                  style={{ backgroundColor: "lightgrey", height: "163px" }}
                >
                  <ul className="list-style">
                    <br />
                    <li style={{ fontSize: ".8rem" }}>
                      This Patient is lorem ipsum
                    </li>
                    <li style={{ fontSize: ".8rem" }}>
                      Lorem ipsum lorem ipsum
                    </li>
                    <li style={{ fontSize: ".8rem" }}>
                      Lorem ipsum lorem ipsum
                    </li>
                    <li style={{ fontSize: ".8rem" }}>
                      has alergic with cactus
                    </li>
                  </ul>
                  <a
                    href="#/"
                    class="btn btn-primary"
                    style={{
                      height: "50px",
                      float: "right",
                      height: "2.5rem",
                      marginRight: ".5rem",
                    }}
                  >
                    <span style={{ fontSize: "10px" }}>save note</span>
                  </a>
                </div>
                <br />

                <div class="row">
                  <p style={{ fontSize: ".75rem" }}>
                    {" "}
                    Lorem ipsum dolor sit amet
                  </p>
                  <div class="row">
                    <div class="col-9">
                      <PersonOutlineOutlinedIcon />
                      <span style={{ fontSize: ".65rem" }}>
                        {props &&
                          props.doctorName.length > 0 &&
                          props.doctorName[0].name}
                      </span>
                    </div>
                    <div
                      class="col-3"
                      style={{ fontSize: ".65rem", marginTop: ".5rem" }}
                    >
                      20 Nov '19
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-8">
            <div className="card">
              <Tabs details={props.appointmentDetails} />
            </div>
          </div>
          <div className="col-4">
            <div className="card p-2">
              <div className="row">
                <div className="col-8">
                  <h6 class="card-title" style={{fontSize:"0.8rem"}}>Files / Documents</h6>
                </div>
                <div className="col-4" style={{fontSize:"0.8rem"}}>
                  <NoteAddIcon /> Add Files
                </div>
              </div>
              <Divider />

              <Paper style={{ maxHeight: 255, overflow: "auto", fontSize:".75rem" }}>
                <List>
                  {props &&
                    props.files.length > 0 &&
                    props.files.map((item, index) => {
                      if (index > 0) {
                        return (
                        <div class="row">
                          <div class="col-9">
                            <ListItem>
                            <PictureAsPdfIcon/>{item.name} 
                            </ListItem>
                          </div>
                          <div class="col-3">
                            123kb
                          </div>
                        </div>
                        )}
                    })}
                </List>
              </Paper>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
}
