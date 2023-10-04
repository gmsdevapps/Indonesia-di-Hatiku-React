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
            <div
              onClick={() => setSlideNumber(1)}
              className="image-slider-container01"
            ></div>
            <div
              onClick={() => setSlideNumber(2)}
              className="image-slider-container02"
            ></div>
            <div
              onClick={() => setSlideNumber(3)}
              className="image-slider-container03"
            ></div>
          </div>
          <div
            onClick={() => setSlideNumber(3)}
            className="image-slider-left-btn"
          >
            <svg
              viewBox="0 0 1024 1024"
              onClick={() => setSlideNumber(3)}
              className="image-slider-icon"
            >
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
            <svg
              viewBox="0 0 1024 1024"
              onClick={() => setSlideNumber(2)}
              className="image-slider-icon02"
            >
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
            <div
              onClick={() => setSlideNumber(1)}
              className="image-slider-container04"
            ></div>
            <div
              onClick={() => setSlideNumber(2)}
              className="image-slider-container05"
            ></div>
            <div
              onClick={() => setSlideNumber(3)}
              className="image-slider-container06"
            ></div>
          </div>
          <div
            onClick={() => setSlideNumber(1)}
            className="image-slider-left-btn1"
          >
            <svg viewBox="0 0 1024 1024" className="image-slider-icon04">
              <path
                d="M658 708l-60 60-256-256 256-256 60 60-196 196z"
                className=""
              ></path>
            </svg>
          </div>
          <div
            onClick={() => setSlideNumber(2)}
            className="image-slider-right-btn1"
          >
            <svg viewBox="0 0 1024 1024" className="image-slider-icon06">
              <path
                d="M366 708l196-196-196-196 60-60 256 256-256 256z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
      )}
      {slideNumber === 3 && (
        <div className="image-slider-slide3">
          <img
            alt={props.image_alt21}
            src={props.image21}
            className="image-slider-image2"
          />
          <div className="image-slider-dots2">
            <div
              onClick={() => setSlideNumber(1)}
              className="image-slider-container07"
            ></div>
            <div
              onClick={() => setSlideNumber(2)}
              className="image-slider-container08"
            ></div>
            <div
              onClick={() => setSlideNumber(3)}
              className="image-slider-container09"
            ></div>
          </div>
          <div className="image-slider-left-btn2">
            <svg
              viewBox="0 0 1024 1024"
              onClick={() => setSlideNumber(2)}
              className="image-slider-icon08"
            >
              <path
                d="M658 708l-60 60-256-256 256-256 60 60-196 196z"
                className=""
              ></path>
            </svg>
          </div>
          <div className="image-slider-right-btn2">
            <svg
              viewBox="0 0 1024 1024"
              onClick={() => setSlideNumber(1)}
              className="image-slider-icon10"
            >
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
  image21: '/Asset/slide2-1500w.jpeg',
  rootClassName: '',
  image2: '/Asset/banner-2-1500w.webp',
  image_alt2: 'image',
  image_src: '81a6bb2a-c148-4739-8e4b-29224707a8c0',
  image_alt21: 'image',
  image1: '/Asset/banner-1500w.webp',
  image_alt1: 'image',
}

ImageSlider.propTypes = {
  image21: PropTypes.string,
  rootClassName: PropTypes.string,
  image2: PropTypes.string,
  image_alt2: PropTypes.string,
  image_src: PropTypes.string,
  image_alt21: PropTypes.string,
  image1: PropTypes.string,
  image_alt1: PropTypes.string,
}

export default ImageSlider
