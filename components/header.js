import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <>
      <div className={`header-header ${props.rootClassName} `}>
        <div className="header-logo">
          <Link href="/">
            <a className="header-link">
              <img
                alt={props.image_alt}
                src={props.image_src}
                className="header-image"
              />
            </a>
          </Link>
        </div>
        <div className="header-button">
          <span className="header-home">Beranda</span>
          <span className="header-hub-kami">Hubungi Kami</span>
          <div
            data-thq="thq-dropdown"
            className="header-thq-dropdown list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="header-dropdown-toggle"
            >
              <svg viewBox="0 0 1024 1024" className="header-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
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
              <li
                data-thq="thq-dropdown"
                className="header-dropdown1 list-item"
              >
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
      <style jsx>
        {`
          .header-header {
            flex: 0 0 auto;
            width: 100%;
            height: 71px;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: space-between;
          }
          .header-logo {
            flex: 0 0 auto;
            width: auto;
            height: 100%;
            display: flex;
            align-self: flex-end;
            align-items: center;
            justify-content: center;
          }
          .header-link {
            display: contents;
          }
          .header-image {
            width: 93px;
            height: 100%;
            align-self: flex-start;
            margin-top: 0px;
            object-fit: cover;
            transition: 0.3s;
            margin-left: 112px;
            text-decoration: none;
          }
          .header-image:hover {
            cursor: pointer;
          }
          .header-button {
            gap: 35px;
            flex: 0 0 auto;
            width: 70%;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: flex-end;
          }
          .header-home {
            font-size: 20px;
            align-self: center;
            font-style: normal;
            transition: 0.3s;
            font-family: Lato;
            font-weight: 700;
          }
          .header-home:hover {
            cursor: pointer;
          }
          .header-hub-kami {
            font-size: 20px;
            font-style: normal;
            transition: 0.3s;
            font-family: Lato;
            font-weight: 700;
            margin-right: 159px;
          }
          .header-hub-kami:hover {
            cursor: pointer;
          }
          .header-thq-dropdown {
            cursor: pointer;
            display: none;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .header-dropdown-toggle {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius2);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .header-icon {
            width: 24px;
            height: 24px;
          }
          .header-dropdown-list {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-gray-white);
            list-style-position: inside;
          }
          .header-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .header-dropdown-toggle1 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .header-dropdown-toggle1:hover {
            fill: #fff;
            color: #fff;
            background-color: var(--dl-color-danger-700);
          }
          .header-text {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .header-dropdown1 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .header-dropdown-toggle2 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .header-dropdown-toggle2:hover {
            fill: #fff;
            color: #fff;
            background-color: var(--dl-color-danger-700);
          }
          .header-text1 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }

          @media (max-width: 1440px) {
            .header-thq-dropdown {
              display: none;
            }
          }
          @media (max-width: 1024px) {
            .header-logo {
              margin-left: 5%;
            }
            .header-image {
              margin: 0%;
            }
            .header-button {
              width: 70%;
            }
            .header-hub-kami {
              margin-right: 5%;
            }
            .header-thq-dropdown {
              display: none;
            }
          }
          @media (max-width: 768px) {
            .header-button {
              width: auto;
              align-self: center;
              align-items: center;
              justify-content: flex-end;
            }
            .header-home {
              display: none;
            }
            .header-hub-kami {
              display: none;
            }
            .header-thq-dropdown {
              width: 152px;
              display: inline-block;
              margin-right: var(--dl-space-space-unit);
            }
            .header-dropdown-toggle {
              justify-content: flex-end;
            }
            .header-icon {
              align-self: flex-end;
            }
            .header-dropdown-list {
              left: 0%;
              display: none;
            }
            .header-dropdown-toggle1 {
              align-items: center;
              justify-content: flex-end;
            }
            .header-text {
              font-size: 14px;
              font-style: normal;
              font-weight: 700;
              justify-content: flex-end;
            }
            .header-text1 {
              font-size: 14px;
              font-style: normal;
              font-weight: 700;
              justify-content: flex-end;
            }
            .header-root-class-name {
              height: auto;
            }
          }
          @media (max-width: 425px) {
            .header-header {
              height: auto;
            }
            .header-image {
              width: var(--dl-size-size-small);
              height: auto;
              align-self: center;
            }
            .header-button {
              align-self: center;
            }
            .header-home {
              font-size: 1rem;
            }
            .header-hub-kami {
              font-size: 1rem;
            }
            .header-thq-dropdown {
              width: auto;
            }
            .header-dropdown-toggle {
              width: var(--dl-size-size-large);
            }
            .header-dropdown-list {
              left: 0%;
            }
            .header-root-class-name1 {
              height: auto;
            }
          }
          @media (max-width: 375px) {
            .header-image {
              width: var(--dl-size-size-small);
            }
            .header-button {
              align-self: center;
            }
          }
        `}
      </style>
    </>
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
