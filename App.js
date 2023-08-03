import React from 'react';
import videoSample from './src/assets/video/video2.mp4';
import Banner from './src/components/banner/banner';

function App() {
  return (
    <Banner
      img1={
        'https://cdn.pixabay.com/photo/2017/04/26/10/33/tram-2262256_640.jpg'
      }
      img2={
        'https://cdn.pixabay.com/photo/2019/03/10/18/31/hong-kong-4046913_1280.jpg'
      }
      img3={
        'https://cdn.pixabay.com/photo/2016/11/29/10/01/vw-bulli-1868890_640.jpg'
      }
      text={
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      }
      video={videoSample}
    />
  );
}

export default App;
