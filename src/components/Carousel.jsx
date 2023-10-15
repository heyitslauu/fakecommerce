/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
function Carousel ({slides}) {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide == slides.length - 1 ? 0 : slide + 1);
  }
  
  // const prevSlide = () => {
  //   setSlide(slide === 0 ? slides.length - 1 : slide - 1)
  // }

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds (adjust as needed).

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts.
    };
  }, [slide, slides]);
  
  return(
    <div className="relative text-white flex items-center justify-center gap-4 py-6 h-[400px]">
      {/* <FontAwesomeIcon icon={faCircleChevronLeft} className='absolute z-10 text-4xl left-10 cursor-pointer' onClick={prevSlide}/> */}
      { slides.map((item, index) => {
        return <img src={item.src} alt={item.alt} key={index} className={slide == index ? 'h-full w-full rounded-lg object-none' : "hidden" }/>
        })
      }
      {/* <FontAwesomeIcon icon={faCircleChevronRight} className='absolute z-10 text-4xl right-10 cursor-pointer' onClick={nextSlide}/> */}
    </div>
  )
}

Carousel.propTypes = {
  slides: PropTypes.array.isRequired
}

export default Carousel;