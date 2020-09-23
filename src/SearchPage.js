import React from 'react';
import './SearchPage.css';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import NELK from './assets/NELK.jpg';
import Nelk_logo from './assets/nelk_logo.png';
import NELK_bigfoot from './assets/bigfoot_nelk.jpg';
import Endgame from './assets/endgame.jpg';
import fakeID from './assets/fake_id.jpg';

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__filter'>
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image=''
        channel='NELK'
        verified
        subs='5.55M'
        noOfVideos={221}
        description='We prank people sometimes. Toronto, Canada.'
        logo={Nelk_logo}
      />
      <hr />
      <VideoRow
        views='2.3M'
        subs='5.55M'
        description='SUBSCRIBE TO NELK FOR VIDEOS EVERY MONDAY'
        timestamp='1 week ago'
        verified
        channel='NELK'
        title='Drinking Fake Beer in a Self-Driving Tesla!'
        image={NELK}
      />
      <VideoRow
        views='4.1M'
        subs='5.55M'
        description='SUBSCRIBE TO NELK FOR VIDEOS EVERY MONDAY'
        timestamp='6 days ago'
        verified
        channel='NELK'
        title='We Pranked a Big Foot Expert with a Fake Big Foot!'
        image={NELK_bigfoot}
      />
      <VideoRow
        views='6.4M'
        subs='5.55M'
        description='SUBSCRIBE TO NELK FOR VIDEOS EVERY MONDAY'
        timestamp='1 year ago'
        verified
        channel='NELK'
        title='Spoling Avengers: Endgame At The Movie Theatres'
        image={Endgame}
      />
      <VideoRow
        views='5.1M'
        subs='5.55M'
        description='SUBSCRIBE TO NELK FOR VIDEOS EVERY MONDAY'
        timestamp='1 year ago'
        verified
        channel='NELK'
        title='Using Obviously Fake IDs at Bars!'
        image={fakeID}
      />
    </div>
  );
}

export default SearchPage;
