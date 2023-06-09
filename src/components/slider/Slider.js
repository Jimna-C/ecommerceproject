import React,{useState} from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai';
import {imageSliderList} from './slider-data';
import './Slider.css'

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  
    if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
    }
  return (
    <section className='slider'>
      <AiOutlineArrowLeft className='left-arrow' onClick={prevSlide} />
      <AiOutlineArrowRight className='right-arrow' onClick={nextSlide} />
      {imageSliderList.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='imageslider' />
            )}
          </div>
        );
      })}
    </section>
  )
}

export default Slider