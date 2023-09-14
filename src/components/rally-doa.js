import React from 'react'

import PropTypes from 'prop-types'

import './rally-doa.css'

const RallyDoa = (props) => {
  return (
    <div className={`rally-doa-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="rally-doa-image"
      />
      <img
        alt={props.image_alt1}
        src={props.image_src1}
        className="rally-doa-image1"
      />
      <img
        alt={props.image_alt2}
        src={props.image_src2}
        className="rally-doa-image2"
      />
    </div>
  )
}

RallyDoa.defaultProps = {
  image_alt: 'image',
  image_alt2: 'image',
  image_src2: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  image_src1: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  image_alt1: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  rootClassName: '',
}

RallyDoa.propTypes = {
  image_alt: PropTypes.string,
  image_alt2: PropTypes.string,
  image_src2: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default RallyDoa
