import React from 'react'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
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
          </div>
        </div>
        <div className="footer-footer">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="footer-image5"
          />
          <span className="footer-text1">{props.text}</span>
        </div>
      </div>
      <style jsx>
        {`
          .footer-container {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-support {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .footer-text {
            align-self: center;
            margin-top: 33px;
            margin-bottom: 45px;
          }
          .footer-container1 {
            gap: 80px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin-bottom: 66px;
            justify-content: center;
          }
          .footer-image {
            width: 150px;
            object-fit: cover;
          }
          .footer-image1 {
            width: 100px;
            object-fit: cover;
          }
          .footer-image2 {
            width: 100px;
            object-fit: cover;
          }
          .footer-image3 {
            width: 100px;
            object-fit: cover;
          }
          .footer-image4 {
            width: 100px;
            object-fit: cover;
          }
          .footer-footer {
            gap: 7px;
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            background-color: #000000;
          }
          .footer-image5 {
            width: 23px;
            object-fit: cover;
            margin-left: var(--dl-space-space-sixunits);
          }
          .footer-text1 {
            color: #f7f6f6;
          }

          @media (max-width: 1440px) {
            .footer-image5 {
              margin-left: var(--dl-space-space-fiveunits);
            }
          }
          @media (max-width: 1024px) {
            .footer-container1 {
              gap: var(--dl-space-space-fiveunits);
            }
            .footer-image {
              width: 100px;
            }
            .footer-image1 {
              width: 60px;
            }
            .footer-image2 {
              width: 60px;
            }
            .footer-image3 {
              width: 60px;
            }
            .footer-image4 {
              width: 60px;
            }
            .footer-image5 {
              margin-left: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 768px) {
            .footer-text {
              font-size: 1rem;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .footer-container1 {
              gap: var(--dl-space-space-threeunits);
              flex-wrap: wrap;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .footer-image {
              width: 50px;
            }
            .footer-image1 {
              width: 40px;
            }
            .footer-image2 {
              width: 40px;
            }
            .footer-image3 {
              width: 40px;
            }
            .footer-image4 {
              width: 40px;
            }
            .footer-footer {
              height: auto;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .footer-image5 {
              width: 20px;
              margin-left: var(--dl-space-space-twounits);
            }
            .footer-text1 {
              font-size: 14px;
            }
            .footer-root-class-name {
              left: 0px;
              bottom: 0px;
              position: static;
            }
          }
          @media (max-width: 425px) {
            .footer-text {
              margin-top: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .footer-container1 {
              gap: var(--dl-space-space-twounits);
              margin-top: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .footer-footer {
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .footer-image5 {
              width: 20px;
              margin-left: var(--dl-space-space-threeunits);
            }
            .footer-text1 {
              font-size: 0.8rem;
            }
            .footer-root-class-name {
              left: 0px;
              bottom: 0px;
              position: static;
              align-self: center;
            }
          }
          @media (max-width: 375px) {
            .footer-root-class-name {
              position: static;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  image_src4: '/Logo Gereja/logo%20gbt%20kao%201-200h.png',
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
}

Footer.propTypes = {
  image_src4: PropTypes.string,
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
}

export default Footer
