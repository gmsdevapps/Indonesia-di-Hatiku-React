import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './image-slider.css'

const ImageSlider = (props) => {
  const [slideNumber, setSlideNumber] = useState(1)
  return (
    <div className={`image-slider-container ${props.rootClassName} `}>
      {slideNumber === 1 && (
        <div className="image-slider-slide1">
          <img
            alt={props.image_alt1}
            src={props.image1}
            className="image-slider-image"
          />
          <div className="image-slider-dots">
            <div className="image-slider-container1"></div>
            <div className="image-slider-container2"></div>
          </div>
          <div
            onClick={() => setSlideNumber(2)}
            className="image-slider-left-btn"
          >
            <svg viewBox="0 0 1024 1024" className="image-slider-icon">
              <path
                d="M658 708l-60 60-256-256 256-256 60 60-196 196z"
                className=""
              ></path>
            </svg>
          </div>
          <div
            onClick={() => setSlideNumber(2)}
            className="image-slider-right-btn"
          >
            <svg viewBox="0 0 1024 1024" className="image-slider-icon2">
              <path
                d="M366 708l196-196-196-196 60-60 256 256-256 256z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
      )}
      {slideNumber === 2 && (
        <div className="image-slider-slide2">
          <img
            alt={props.image_alt2}
            src={props.image2}
            className="image-slider-image1"
          />
          <div className="image-slider-dots1">
            <div className="image-slider-container3"></div>
            <div className="image-slider-container4"></div>
          </div>
          <div
            onClick={() => setSlideNumber(1)}
            className="image-slider-left-btn1"
          >
            <svg viewBox="0 0 1024 1024" className="image-slider-icon4">
              <path
                d="M658 708l-60 60-256-256 256-256 60 60-196 196z"
                className=""
              ></path>
            </svg>
          </div>
          <div
            onClick={() => setSlideNumber(1)}
            className="image-slider-right-btn1"
          >
            <svg viewBox="0 0 1024 1024" className="image-slider-icon6">
              <path
                d="M366 708l196-196-196-196 60-60 256 256-256 256z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}

ImageSlider.defaultProps = {
  rootClassName: '',
  image2: '/Asset/banner-2-1500w.webp',
  image_alt2: 'image',
  image_src: '81a6bb2a-c148-4739-8e4b-29224707a8c0',
  image1: '/Asset/banner-1500w.webp',
  image_alt1: 'image',
}

ImageSlider.propTypes = {
  rootClassName: PropTypes.string,
  image2: PropTypes.string,
  image_alt2: PropTypes.string,
  image_src: PropTypes.string,
  image1: PropTypes.string,
  image_alt1: PropTypes.string,
}

export default ImageSlider
