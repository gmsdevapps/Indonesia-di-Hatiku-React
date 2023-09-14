import React from 'react'

import PropTypes from 'prop-types'

const Banner = (props) => {
  return (
    <>
      <div className={`banner-banner ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="banner-image"
        />
      </div>
      <style jsx>
        {`
          .banner-banner {
            flex: 0 0 auto;
            width: 100%;
            height: 840px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .banner-image {
            width: 100%;
            height: 100%;
            align-self: center;
            object-fit: cover;
          }
        `}
      </style>
    </>
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
