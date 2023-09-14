import React, { useState } from 'react'

import PropTypes from 'prop-types'

const ImageSlider = (props) => {
  const [slideNumber, setSlideNumber] = useState(1)
  return (
    <>
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
                <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
              </svg>
            </div>
            <div
              onClick={() => setSlideNumber(2)}
              className="image-slider-right-btn"
            >
              <svg viewBox="0 0 1024 1024" className="image-slider-icon2">
                <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
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
                <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
              </svg>
            </div>
            <div
              onClick={() => setSlideNumber(1)}
              className="image-slider-right-btn1"
            >
              <svg viewBox="0 0 1024 1024" className="image-slider-icon6">
                <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
              </svg>
            </div>
          </div>
        )}
      </div>
      <style jsx>
        {`
          .image-slider-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .image-slider-slide1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: flex-start;
          }
          .image-slider-image {
            width: 100%;
            height: auto;
            object-fit: cover;
          }
          .image-slider-dots {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 25px;
            margin: auto;
            display: flex;
            position: absolute;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
          }
          .image-slider-container1 {
            flex: 0 0 auto;
            width: 25px;
            height: 25px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            border-radius: 100px;
            justify-content: center;
            background-color: #ffffff;
          }
          .image-slider-container2 {
            flex: 0 0 auto;
            width: 25px;
            height: 25px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            border-radius: 100px;
            justify-content: center;
            background-color: #aaaaaa;
          }
          .image-slider-left-btn {
            top: 0px;
            flex: 0 0 auto;
            left: 1%;
            width: auto;
            bottom: 0px;
            height: auto;
            margin: auto;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            justify-content: center;
          }
          .image-slider-left-btn:hover {
            cursor: pointer;
          }
          .image-slider-icon {
            fill: #ffffff;
            width: 50px;
            height: 50px;
          }
          .image-slider-right-btn {
            top: 0px;
            flex: 0 0 auto;
            right: 1%;
            width: auto;
            bottom: 0px;
            height: auto;
            margin: auto;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            justify-content: center;
          }
          .image-slider-right-btn:hover {
            cursor: pointer;
          }
          .image-slider-icon2 {
            fill: #ffffff;
            width: 50px;
            height: 50px;
          }
          .image-slider-slide2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: flex-start;
          }
          .image-slider-image1 {
            width: 100%;
            height: auto;
            object-fit: cover;
          }
          .image-slider-dots1 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 25px;
            margin: auto;
            display: flex;
            position: absolute;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
          }
          .image-slider-container3 {
            flex: 0 0 auto;
            width: 25px;
            height: 25px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            border-radius: 100px;
            justify-content: center;
            background-color: #aaaaaa;
          }
          .image-slider-container4 {
            flex: 0 0 auto;
            width: 25px;
            height: 25px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            border-radius: 100px;
            justify-content: center;
            background-color: #ffffff;
          }
          .image-slider-left-btn1 {
            top: 0px;
            flex: 0 0 auto;
            left: 1%;
            width: auto;
            bottom: 0px;
            height: auto;
            margin: auto;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            justify-content: center;
          }
          .image-slider-left-btn1:hover {
            cursor: pointer;
          }
          .image-slider-icon4 {
            fill: #ffffff;
            width: 50px;
            height: 50px;
          }
          .image-slider-right-btn1 {
            top: 0px;
            flex: 0 0 auto;
            right: 1%;
            width: auto;
            bottom: 0px;
            height: auto;
            margin: auto;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            justify-content: center;
          }
          .image-slider-right-btn1:hover {
            cursor: pointer;
          }
          .image-slider-icon6 {
            fill: #ffffff;
            width: 50px;
            height: 50px;
          }

          @media (max-width: 1440px) {
            .image-slider-dots {
              bottom: 12px;
            }
            .image-slider-dots1 {
              bottom: 15px;
            }
          }
          @media (max-width: 1024px) {
            .image-slider-dots {
              bottom: 10px;
            }
            .image-slider-container1 {
              width: 20px;
              height: 20px;
            }
            .image-slider-container2 {
              width: 20px;
              height: 20px;
            }
            .image-slider-dots1 {
              bottom: 10px;
            }
            .image-slider-container3 {
              width: 20px;
              height: 20px;
            }
            .image-slider-container4 {
              width: 20px;
              height: 20px;
            }
          }
          @media (max-width: 768px) {
            .image-slider-dots {
              bottom: 5px;
            }
            .image-slider-container1 {
              width: 15px;
              height: 15px;
            }
            .image-slider-container2 {
              width: 15px;
              height: 15px;
            }
            .image-slider-icon {
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .image-slider-icon2 {
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .image-slider-dots1 {
              bottom: 5px;
            }
            .image-slider-container3 {
              width: 15px;
              height: 15px;
            }
            .image-slider-container4 {
              width: 15px;
              height: 15px;
            }
          }
          @media (max-width: 425px) {
            .image-slider-image {
              height: auto;
            }
            .image-slider-dots {
              gap: 5px;
              bottom: 3px;
            }
            .image-slider-container1 {
              width: 8px;
              height: 8px;
            }
            .image-slider-container2 {
              width: 8px;
              height: 8px;
            }
            .image-slider-icon {
              width: auto;
              height: var(--dl-size-size-xsmall);
            }
            .image-slider-icon2 {
              width: auto;
              height: var(--dl-size-size-xsmall);
            }
            .image-slider-dots1 {
              gap: 5px;
              bottom: 3px;
            }
            .image-slider-container3 {
              width: 8px;
              height: 8px;
            }
            .image-slider-container4 {
              width: 8px;
              height: 8px;
            }
            .image-slider-icon4 {
              width: auto;
              height: var(--dl-size-size-xsmall);
            }
            .image-slider-icon6 {
              width: auto;
              height: var(--dl-size-size-xsmall);
            }
          }
          @media (max-width: 375px) {
            .image-slider-dots {
              gap: var(--dl-space-space-halfunit);
            }
            .image-slider-container1 {
              width: 8px;
              height: 8px;
            }
            .image-slider-container2 {
              width: 8px;
              height: 8px;
            }
            .image-slider-dots1 {
              gap: var(--dl-space-space-halfunit);
            }
            .image-slider-container3 {
              width: 8px;
              height: 8px;
            }
            .image-slider-container4 {
              width: 8px;
              height: 8px;
            }
          }
        `}
      </style>
    </>
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
