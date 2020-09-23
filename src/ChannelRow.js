import React from 'react';
import './ChannelRow.css';
import { Avatar } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

function ChannelRow({
  image,
  channel,
  subs,
  noOfVideos,
  description,
  verified,
  logo,
}) {
  return (
    <div className='channelRow'>
      <Avatar className='channelRow__logo' alt={channel} src={logo} />
      <div className='channelRow__text'>
        <h4>
          {channel} {verified && <CheckCircleOutlineIcon />}
        </h4>
        <p>
          {subs} subscribers • {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
