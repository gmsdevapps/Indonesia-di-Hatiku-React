import React from 'react'

import PropTypes from 'prop-types'

import './kota.css'

const Kota = (props) => {
  return (
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
