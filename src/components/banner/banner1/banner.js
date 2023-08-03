import React from 'react';
import BannerHorizontal from './bannerHorizontal';
import BannerVertical from './bannerVertical';
import {useOrientation} from '../../../hooks/useOrientation';

const Banner = ({img1, img2, img3, video, text}) => {
  const orientation = useOrientation();
  return orientation === 'PORTRAIT' ? (
    <BannerVertical
      img1={img1}
      img2={img2}
      img3={img3}
      text={text}
      video={video}
    />
  ) : (
    <BannerHorizontal
      img1={img1}
      img2={img2}
      img3={img3}
      text={text}
      video={video}
    />
  );
};

export default Banner;
