import React from "react";
import './Sidebar.css'
import Twitter from "@mui/icons-material/Twitter";
import SidebarOptions from "./SidebarOptions";
import Home from '@mui/icons-material/Home';
import Search from '@mui/icons-material/Search';
import NotificationsNone from '@mui/icons-material/NotificationsNone';
import MailOutline from '@mui/icons-material/MailOutline'
import BookmarkBorder from '@mui/icons-material/BookmarkBorder'
import ListAlt from '@mui/icons-material/ListAlt'
import PermIdentity from '@mui/icons-material/PermIdentity'
import MoreHoriz from '@mui/icons-material/MoreHoriz'
import { Button } from "@mui/material";

function Sidebar () {
    return (
        <div className="sidebar">
            <Twitter className="sidebar__twitterIcon" />

            <SidebarOptions active Icon={Home} text="Home" />
            <SidebarOptions Icon={Search} text="Explore" />
            <SidebarOptions Icon={NotificationsNone} text="Notification" />
            <SidebarOptions Icon={MailOutline} text="Messages" />
            <SidebarOptions Icon={BookmarkBorder} text="Bookmarks" />
            <SidebarOptions Icon={ListAlt} text="Lists" />
            <SidebarOptions Icon={PermIdentity} text="Profile" />
            <SidebarOptions Icon={MoreHoriz} text="More" />

            <Button variant="outlined" 
            className="sidebar__tweet"
            fullWidth
            >Tweet</Button>
        </div>
    )
}

export default Sidebar