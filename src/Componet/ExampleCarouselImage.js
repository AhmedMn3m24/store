
import React from 'react';
import PropTypes from 'prop-types';
import './ExampleCarouselImage.css'; 
import { Image } from 'react-bootstrap';
function ExampleCarouselImage({ text, img }) {
  return (
    <div className="example-carousel-image">
     

      <div className='exmple'>

        <img src={img} />

            <Image/>

      </div>



    </div>


  );
}

ExampleCarouselImage.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ExampleCarouselImage;
