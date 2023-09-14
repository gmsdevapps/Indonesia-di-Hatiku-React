import React from 'react'

import PropTypes from 'prop-types'

import './banner.css'

const Banner = (props) => {
  return (
    <div className={`banner-banner ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="banner-image"
      />
    </div>
  )
}

Banner.defaultProps = {
  image_src: '/Asset/banner-900h.webp',
  image_alt: 'image',
  rootClassName: '',
}

Banner.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Banner
