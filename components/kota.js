import React from 'react'

import PropTypes from 'prop-types'

const Kota = (props) => {
  return (
    <>
      <div className={`kota-kota ${props.rootClassName} `}>
        <div className="kota-image1">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="kota-image"
          />
          <button type="button" className="kota-btn1 button">
            <span className="kota-text">{props.text}</span>
            <img
              alt={props.image_alt3}
              src={props.image_src3}
              className="kota-image1"
            />
          </button>
        </div>
        <div className="kota-image2">
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="kota-image2"
          />
          <button type="button" className="kota-btn2 button">
            <span className="kota-text1">{props.text1}</span>
            <img
              alt={props.image_alt31}
              src={props.image_src31}
              className="kota-image3"
            />
          </button>
        </div>
        <div className="kota-image3">
          <img
            alt={props.image_alt2}
            src={props.image_src2}
            className="kota-image4"
          />
          <button type="button" className="kota-btn3 button">
            <span className="kota-text2">{props.text11}</span>
            <img
              alt={props.image_alt311}
              src={props.image_src311}
              className="kota-image5"
            />
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .kota-kota {
            gap: 20px;
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .kota-image1 {
            width: 520px;
            height: 280px;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .kota-image {
            width: auto;
            align-self: stretch;
            object-fit: cover;
          }
          .kota-btn1 {
            left: 115px;
            bottom: 25px;
            position: absolute;
            border-width: 0px;
            border-radius: 100px;
          }
          .kota-text {
            color: #343434;
            font-size: 24px;
            font-style: normal;
            font-family: Lato;
            font-weight: 700;
            line-height: auto;
            margin-right: 6px;
          }
          .kota-image1 {
            width: 25px;
            margin-top: 2px;
            object-fit: cover;
          }
          .kota-image2 {
            width: 520px;
            height: 280px;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .kota-image2 {
            width: auto;
            align-self: stretch;
            object-fit: cover;
          }
          .kota-btn2 {
            left: 115px;
            width: auto;
            bottom: 25px;
            display: flex;
            position: absolute;
            transition: 0.3s;
            padding-top: 4px;
            border-width: 0px;
            padding-left: 20px;
            border-radius: 100px;
            padding-right: 15px;
            flex-direction: row;
            padding-bottom: 7px;
            background-color: #f7f6f6;
          }
          .kota-btn2:focus {
            transform: scale(0.96);
          }
          .kota-btn2:hover {
            cursor: pointer;
            transform: scale(1.15);
            background-color: var(--dl-color-gray-900);
          }
          .kota-text1 {
            color: #343434;
            font-size: 24px;
            font-style: normal;
            font-family: Lato;
            font-weight: 700;
            line-height: auto;
            margin-right: 6px;
          }
          .kota-image3 {
            width: 25px;
            margin-top: 2px;
            object-fit: cover;
          }
          .kota-image3 {
            width: 520px;
            height: 280px;
            display: flex;
            position: relative;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .kota-image4 {
            width: auto;
            align-self: stretch;
            object-fit: cover;
          }
          .kota-btn3 {
            left: 115px;
            width: auto;
            bottom: 25px;
            margin: auto;
            display: flex;
            position: absolute;
            transition: 0.3s;
            padding-top: 4px;
            border-width: 0px;
            padding-left: 20px;
            border-radius: 100px;
            padding-right: 15px;
            flex-direction: row;
            padding-bottom: 7px;
            background-color: #f7f6f6;
          }
          .kota-btn3:focus {
            transform: scale(0.96);
          }
          .kota-btn3:hover {
            cursor: pointer;
            transform: scale(1.15);
            background-color: var(--dl-color-gray-900);
          }
          .kota-text2 {
            color: #343434;
            font-size: 24px;
            font-style: normal;
            font-family: Lato;
            font-weight: 700;
            line-height: auto;
            margin-right: 6px;
          }
          .kota-image5 {
            width: 25px;
            margin-top: 2px;
            object-fit: cover;
          }
          @media (max-width: 1440px) {
            .kota-text {
              font-size: 26px;
            }
            .kota-text1 {
              font-size: 26px;
            }
            .kota-text2 {
              font-size: 26px;
            }
          }
        `}
      </style>
    </>
  )
}

Kota.defaultProps = {
  text: '10 November 2023',
  image_alt: 'image',
  image_alt3: 'image',
  image_src2: '/RallyDoaNew/bandung-300h.webp',
  image_alt31: 'image',
  rootClassName: '',
  image_alt1: 'image',
  text1: '13 November 2023',
  text11: '14 November 2023',
  image_src: '/RallyDoaNew/bali-300h.webp',
  image_src31: '/external/pastedimage-ufqa-300h.png',
  image_src311: '/external/pastedimage-ufqa-300h.png',
  image_alt311: 'image',
  image_src3: '/external/pastedimage-ufqa-300h.png',
  image_alt2: 'image',
  image_src1: '/RallyDoaNew/tasik-300h.webp',
}

Kota.propTypes = {
  text: PropTypes.string,
  image_alt: PropTypes.string,
  image_alt3: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt31: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt1: PropTypes.string,
  text1: PropTypes.string,
  text11: PropTypes.string,
  image_src: PropTypes.string,
  image_src31: PropTypes.string,
  image_src311: PropTypes.string,
  image_alt311: PropTypes.string,
  image_src3: PropTypes.string,
  image_alt2: PropTypes.string,
  image_src1: PropTypes.string,
}

export default Kota
