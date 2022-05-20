import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import StickyNote2Icon from '@mui/icons-material/StickyNote2';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const get_name = (index) => {
    if (props.details.length > 0) {
      return Object.keys(props.details[0])[index];
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label={props && get_name(2)} {...a11yProps(0)} />
          <Tab label={props && get_name(1)} {...a11yProps(1)} />
          <Tab label={props && get_name(0)} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Paper style={{ maxHeight: 200, overflow: "auto" }}>
          <List>
            {props && props.details.length > 0 && (
              <div style={{fontSize:".85rem"}}>
                <ListItem>
                  <div style={{ width: "100%" }} className="card p-3">
                    <div className="row">
                      <div className="col-3">
                        <div className="row">
                          {props.details[0]["Upcoming Appointments"].Date}
                        </div>
                        <div className="row">09.00-10.00</div>
                      </div>
                      <div className="col-3">
                        <div className="row">Treatment</div>
                        <div className="row">
                          {props.details[0]["Upcoming Appointments"].Treatment}
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="row">Dentist</div>
                        <div className="row">
                          {props.details[0]["Upcoming Appointments"].Dentist}
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="row">Nurse</div>
                        <div className="row">
                          {props.details[0]["Upcoming Appointments"].Nurse}
                        </div>
                      </div>
                      <div className="col-2">
                        <StickyNote2Icon /> Note
                      </div>
                    </div>
                  </div>
                </ListItem>
                <ListItem>
                  <div style={{ width: "100%" }} className="card p-3">
                    <div className="row">
                      <div className="col-3">
                        <div className="row">
                          {props.details[0]["Upcoming Appointments"].Date}
                        </div>
                        <div className="row">09.00-10.00</div>
                      </div>
                      <div className="col-3">
                        <div className="row">Treatment</div>
                        <div className="row">
                          {props.details[0]["Upcoming Appointments"].Treatment}
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="row">Dentist</div>
                        <div className="row">
                          {props.details[0]["Upcoming Appointments"].Dentist}
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="row">Nurse</div>
                        <div className="row">
                          {props.details[0]["Upcoming Appointments"].Nurse}
                        </div>
                      </div>
                      <div className="col-2">
                        <StickyNote2Icon /> Note
                      </div>
                    </div>
                  </div>
                </ListItem>
                <ListItem>
                  <div style={{ width: "100%" }} className="card p-3">
                    <div className="row">
                      <div className="col-3">
                        <div className="row">
                          {props.details[0]["Upcoming Appointments"].Date}
                        </div>
                        <div className="row">09.00-10.00</div>
                      </div>
                      <div className="col-3">
                        <div className="row">Treatment</div>
                        <div className="row">
                          {props.details[0]["Upcoming Appointments"].Treatment}
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="row">Dentist</div>
                        <div className="row">
                          {props.details[0]["Upcoming Appointments"].Dentist}
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="row">Nurse</div>
                        <div className="row">
                          {props.details[0]["Upcoming Appointments"].Nurse}
                        </div>
                      </div>
                      <div className="col-2">
                        <StickyNote2Icon /> Note
                      </div>
                    </div>
                  </div>
                </ListItem>
              </div>
            )}
          </List>
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
