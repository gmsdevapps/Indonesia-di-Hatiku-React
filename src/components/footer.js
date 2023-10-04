import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <div className={`footer-container ${props.rootClassName} `}>
      <div className="footer-support">
        <h1 className="footer-text">{props.heading}</h1>
        <div className="footer-container1">
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="footer-image"
          />
          <img
            alt={props.image_alt2}
            src={props.image_src2}
            className="footer-image1"
          />
          <img
            alt={props.image_alt3}
            src={props.image_src3}
            className="footer-image2"
          />
          <img
            alt={props.image_alt4}
            src={props.image_src4}
            className="footer-image3"
          />
          <img
            alt={props.image_alt5}
            src={props.image_src5}
            className="footer-image4"
          />
          <img
            alt={props.image_alt6}
            src={props.image_src6}
            className="footer-image5"
          />
        </div>
      </div>
      <div className="footer-footer">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="footer-image6"
        />
        <span className="footer-text1">{props.text}</span>
      </div>
    </div>
  )
}

Footer.defaultProps = {
  image_src4: '/Logo Gereja/logo%20gbt%20kao%201-200h.png',
  image_src6: '/Logo Gereja/logo%20papua-200h.jpeg',
  image_src3: '/Logo Gereja/bethany-2%201-200h.png',
  image_alt1: 'image',
  image_src1: '/Logo Gereja/logo%20gms%20hitam%201-200h.png',
  image_alt2: 'image',
  image_src2: '/Logo Gereja/gbi%201-200h.png',
  image_alt4: 'image',
  text: 'Indonesia di Hatiku',
  image_alt: 'image',
  image_src5: '/Logo Gereja/picsart-22-12-06-10-44-07-901%201-200h.png',
  image_src: '/Asset/%C3%B0%C2%9F%C2%A6%C2%86%20icon%20_copyright_-200h.png',
  rootClassName: '',
  image_alt5: 'image',
  image_alt3: 'image',
  heading: 'Supported by',
  image_alt6: 'image',
}

Footer.propTypes = {
  image_src4: PropTypes.string,
  image_src6: PropTypes.string,
  image_src3: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt2: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt4: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
  image_src5: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt5: PropTypes.string,
  image_alt3: PropTypes.string,
  heading: PropTypes.string,
  image_alt6: PropTypes.string,
}

export default Footer
