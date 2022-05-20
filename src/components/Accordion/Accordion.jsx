import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";

export default function SimpleAccordion(props) {
  return (
    <div>
      <Accordion doctorName={props.doctorName}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div class="row">
            <div class="col">
              <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
            </div>
            <div class="col" style={{fontSize:".7rem"}}>
              <div className="row">{props &&
                          props.doctorName.length > 0 &&
                          props.doctorName[0].name}</div>
              <div className="row">Dentist</div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:".6rem"}}>lorem ipsum</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
