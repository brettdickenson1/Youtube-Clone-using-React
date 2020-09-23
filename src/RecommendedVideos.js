import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';
import DJ from './assets/dj.jpg';
import ME from './assets/me.jpg';
import PIANO from './assets/PIANO.jpg';
import CODE from './assets/CODE.jpg';

function RecommendedVideos() {
  return (
    <div className='recommended__videos'>
      <h2>Recommended</h2>
      <div className='recommendedVideos__videos'>
        <VideoCard
          title='DJ Tutorial'
          views='1.4K Views'
          timestamp='3 days ago'
          channelImage={ME}
          channel='CXXI'
          image={DJ}
        />
        <VideoCard
          title='Play piano in just 5 steps'
          views='4.5K Views'
          timestamp='6 days ago'
          channelImage={PIANO}
          channel='Piano Man'
          image={PIANO}
        />
        <VideoCard
          title='Learn React JS'
          views='11.2K Views'
          timestamp='1 week ago'
          channelImage={CODE}
          channel='Frontend Dev'
          image={CODE}
        />
        <VideoCard
          title='DJ Tutorial'
          views='1.4K Views'
          timestamp='3 days ago'
          channelImage={ME}
          channel='CXXI'
          image={DJ}
        />
        <VideoCard
          title='Play piano in just 5 steps'
          views='4.5K Views'
          timestamp='6 days ago'
          channelImage={PIANO}
          channel='Piano Man'
          image={PIANO}
        />
        <VideoCard
          title='Learn React JS'
          views='11.2K Views'
          timestamp='1 week ago'
          channelImage={CODE}
          channel='Frontend Dev'
          image={CODE}
        />
        <VideoCard
          title='DJ Tutorial'
          views='1.4K Views'
          timestamp='3 days ago'
          channelImage={ME}
          channel='CXXI'
          image={DJ}
        />
        <VideoCard
          title='Play piano in just 5 steps'
          views='4.5K Views'
          timestamp='6 days ago'
          channelImage={PIANO}
          channel='Piano Man'
          image={PIANO}
        />
        <VideoCard
          title='Learn React JS'
          views='11.2K Views'
          timestamp='1 week ago'
          channelImage={CODE}
          channel='Frontend Dev'
          image={CODE}
        />
        <VideoCard
          title='DJ Tutorial'
          views='1.4K Views'
          timestamp='3 days ago'
          channelImage={ME}
          channel='CXXI'
          image={DJ}
        />
        <VideoCard
          title='Play piano in just 5 steps'
          views='4.5K Views'
          timestamp='6 days ago'
          channelImage={PIANO}
          channel='Piano Man'
          image={PIANO}
        />
        <VideoCard
          title='Learn React JS'
          views='11.2K Views'
          timestamp='1 week ago'
          channelImage={CODE}
          channel='Frontend Dev'
          image={CODE}
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
