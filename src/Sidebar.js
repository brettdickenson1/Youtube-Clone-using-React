import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import HomeIcon from '@material-ui/icons/Home';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow selected Icon={HomeIcon} title='Home' />
      <SidebarRow Icon={WhatshotIcon} title='Trending' />
      <SidebarRow Icon={SubscriptionsIcon} title='Subscription' />
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title='My Memories' />
      <SidebarRow Icon={HistoryIcon} title='History' />
      <SidebarRow Icon={OndemandVideoIcon} title='Your videos' />

      <SidebarRow Icon={ThumbUpAltOutlinedIcon} title='Liked videos' />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title='Show more' />
      <hr />
    </div>
  );
}

export default Sidebar;
