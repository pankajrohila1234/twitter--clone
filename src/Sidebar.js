import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentifyIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';
import { auth } from './firebase';
// import { Dropdown } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';

const Sidebar = () => {

    const logOut = () => {
        if (logOut) {
            alert('Press OK to sign out Twitter')
        }
        auth.signOut();
    }

    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcon" />

            <SidebarOption active Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={SearchIcon} text="Explore" />
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
            <SidebarOption Icon={MailOutlineIcon} text="Messages" />
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
            <SidebarOption Icon={ListAltIcon} text="Lists" />
            <SidebarOption Icon={PermIdentifyIcon} text="Profile" />

            <span onClick={logOut}><SidebarOption Icon={MoreHorizIcon} text="More" /></span>
            
            
            
            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>


            {/* <div className="dropdown">
                <Dropdown>
                    <Dropdown.Toggle 
                        variant="secondary btn-sm" 
                        id="dropdown-basic">
                            Language
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{backgroundColor:'#73a47'}}>
                        <Dropdown.Item href="#" >Arabic</Dropdown.Item>
                        <Dropdown.Item href="#">English</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div> */}
        </div>
    );
}

export default Sidebar;