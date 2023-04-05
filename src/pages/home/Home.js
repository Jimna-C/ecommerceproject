import React from 'react';

import Slider from '../../components/slider/Slider';
  import { imageSliderList } from '../../components/slider/slider-data';
  import BestSeller from '../../components/bestseller/BestSeller';

const Home = () => {
  return(
    <div>
     <Slider slides={imageSliderList} />
      <BestSeller/>
      </div>
  ) 
}

export default Home