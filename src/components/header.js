import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './header.css'

const Header = (props) => {
  return (
    <div className={`header-header ${props.rootClassName} `}>
      <div className="header-logo">
        <Link to="/" className="header-navlink">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="header-image"
          />
        </Link>
      </div>
      <div className="header-button">
        <span className="header-home">Beranda</span>
        <span className="header-hub-kami">Hubungi Kami</span>
        <div data-thq="thq-dropdown" className="header-thq-dropdown list-item">
          <div
            data-thq="thq-dropdown-toggle"
            className="header-dropdown-toggle"
          >
            <svg viewBox="0 0 1024 1024" className="header-icon">
              <path
                d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"
                className=""
              ></path>
            </svg>
          </div>
          <ul data-thq="thq-dropdown-list" className="header-dropdown-list">
            <li data-thq="thq-dropdown" className="header-dropdown list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle1"
              >
                <span className="header-text">Beranda</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="header-dropdown1 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle2"
              >
                <span className="header-text1">Hubungi Kami</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = {
  image_alt: 'image',
  rootClassName: '',
  Home: 'Beranda',
  Hub_Kami: 'Hubungi Kami',
  image_src: '/Asset/logo-200h.webp',
}

Header.propTypes = {
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  Home: PropTypes.string,
  Hub_Kami: PropTypes.string,
  image_src: PropTypes.string,
}

export default Header
