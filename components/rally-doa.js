import React from 'react'

import PropTypes from 'prop-types'

const RallyDoa = (props) => {
  return (
    <>
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
      <style jsx>
        {`
          .rally-doa-container {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 100%;
            height: 280px;
            display: flex;
            position: relative;
            align-self: center;
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            justify-content: center;
          }
          .rally-doa-image {
            width: auto;
            align-self: center;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .rally-doa-image1 {
            width: auto;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .rally-doa-image2 {
            width: auto;
            height: auto;
            align-self: center;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .rally-doa-root-class-name {
            margin-top: 0px;
          }
          .rally-doa-root-class-name1 {
            margin-top: 0px;
          }
          .rally-doa-root-class-name2 {
            margin-top: 0px;
          }
          .rally-doa-root-class-name3 {
            margin-top: var(--dl-space-space-twounits);
          }
          @media (max-width: 1024px) {
            .rally-doa-container {
              height: 220px;
            }
            .rally-doa-image {
              width: 300px;
            }
            .rally-doa-image1 {
              width: 300px;
            }
            .rally-doa-image2 {
              width: 300px;
              height: 203px;
            }
          }
          @media (max-width: 768px) {
            .rally-doa-container {
              height: 230px;
            }
            .rally-doa-image {
              width: 200px;
              margin-right: 0px;
            }
            .rally-doa-image1 {
              width: 300px;
            }
            .rally-doa-image2 {
              width: 200px;
              height: 136px;
              align-self: center;
            }
            .rally-doa-root-class-name {
              margin-top: 0px;
            }
            .rally-doa-root-class-name1 {
              margin-top: 0px;
            }
            .rally-doa-root-class-name2 {
              margin-top: 0px;
            }
          }
          @media (max-width: 425px) {
            .rally-doa-container {
              gap: var(--dl-space-space-unit);
              height: 100px;
              margin-top: 0px;
            }
            .rally-doa-image {
              width: 110px;
              margin-right: 0px;
            }
            .rally-doa-image1 {
              width: 110px;
              margin-right: 0px;
            }
            .rally-doa-image2 {
              width: 110px;
              height: 74px;
              align-self: center;
            }
            .rally-doa-root-class-name {
              margin-top: 0px;
            }
            .rally-doa-root-class-name1 {
              margin-top: 0px;
            }
            .rally-doa-root-class-name2 {
              margin-top: 0px;
            }
            .rally-doa-root-class-name3 {
              height: 50%;
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 375px) {
            .rally-doa-container {
              gap: var(--dl-space-space-halfunit);
              height: auto;
              margin-top: 0px;
              padding-top: 2px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: 2px;
              justify-content: center;
            }
            .rally-doa-image {
              width: 110px;
              margin-right: 0px;
            }
            .rally-doa-image1 {
              width: 110px;
              align-self: center;
              margin-right: 0px;
            }
            .rally-doa-image2 {
              width: 100px;
              height: auto;
              align-self: center;
            }
            .rally-doa-root-class-name {
              align-self: center;
            }
            .rally-doa-root-class-name3 {
              align-self: center;
              margin-top: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
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
