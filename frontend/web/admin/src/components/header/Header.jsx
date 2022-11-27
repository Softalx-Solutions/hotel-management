import React from "react";
// import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Notifications, Language } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import {Badge} from "@mui/material";

import "./Header.css";

export default function Header({ isOpen, toggle }) {
  return (
    <div className="container">
      <Typography className="brand" color="purple" variant="h6">
        Admin Panel
      </Typography>
      <Toolbar>
        <IconButton>
          <Language className="icons" color="#d5d5d5" />
        </IconButton>
        <Badge overlap='circular' badgeContent={1} color="error">
          <IconButton>
            <Notifications className="icons" color="#d5d5d5" />
          </IconButton>
        </Badge>
        <IconButton sx={{marginLeft:5}}>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </IconButton>
      </Toolbar>
    </div>
  );
}
