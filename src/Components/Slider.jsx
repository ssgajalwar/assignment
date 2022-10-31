import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Slider.css'
import ImageSlide1 from '../images/client1.png';
import ImageSlide2 from '../images/client2.png';
import ImageSlide3 from '../images/client3.png';
import ImageSlide4 from '../images/client4.png';
import ImageSlide5 from '../images/client5.png';
import ImageSlide6 from '../images/client66.png';
import ImageSlide8 from '../images/client8.png';
import ImageSlide9 from '../images/client9.png';
import ImageSlide10 from '../images/client10.png';
import ImageSlide11 from '../images/client11.png';

const Slider = () => {
  return (
    <div className='slider-main'> 
    <div className="slider-text">
      <h1 className='slider-text-normal'>
        Our
      </h1>
      <h1 className='slider-text-design'>
        Clients
      </h1>
    </div>
    <Carousel className='carousel' showThumbs={false} autoPlay={true} showStatus={false} infiniteLoop={true} interval={5000} emulateTouch={true}>
    <div className='slider-page'>
        <img className='slider-image' src={ImageSlide1} alt="slider"/>
    </div>
    <div className='slider-page'>
        <img className='slider-image' src={ImageSlide2} alt="slider"/>
    </div>
    <div className='slider-page'>
        <img className='slider-image' src={ImageSlide3} alt="slider"/>
    </div>
    <div className='slider-page'>
        <img className='slider-image' src={ImageSlide4} alt="slider"/>
    </div>
    <div className='slider-page'>
        <img className='slider-image' src={ImageSlide5} alt="slider"/>
    </div>
    <div className='slider-page'>
        <img className='slider-image' src={ImageSlide6} alt="slider"/>
    </div>
    <div className='slider-page'>
        <img className='slider-image' src={ImageSlide8} alt="slider"/>
    </div>
    <div className='slider-page'>
        <img className='slider-image' src={ImageSlide9} alt="slider"/>
    </div>
    <div className='slider-page'>
        <img className='slider-image' src={ImageSlide10} alt="slider"/>
    </div>
    <div className='slider-page'>
        <img className='slider-image' src={ImageSlide11} alt="slider"/>
    </div>
</Carousel>
    </div>
  )
}

export default Slider