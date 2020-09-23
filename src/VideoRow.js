import React from 'react';
import './VideoRow.css';

function VideoRow({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
  verified,
}) {
  return (
    <div className='videoRow'>
      <img src={image} alt='' />
      <div className='videoRow__text'>
        <p>{title}</p>

        <p className='videoRow__headline'>
          {channel} • {views} views • {timestamp}
        </p>
        <p className='videoRow__description'>{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
