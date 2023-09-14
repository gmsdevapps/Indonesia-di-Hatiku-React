import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import ImageSlider from '../components/image-slider'
import Footer from '../components/footer'

const Jakarta = (props) => {
  return (
    <>
      <div className="jakarta-container">
        <Head>
          <title>Jakarta - Indonesia di Hatiku</title>
          <meta property="og:title" content="Jakarta - Indonesia di Hatiku" />
        </Head>
        <Header rootClassName="header-root-class-name"></Header>
        <ImageSlider
          image1="/BannerKota/banner%20acara%201-1500w.png"
          image2="/BannerKota/banner%20acara%201-1500w.png"
          image_src="/Asset/banner-2-1500h.webp"
          image_src1="/BannerKota/banner%20acara%201-1500w.png"
          rootClassName="image-slider-root-class-name1"
        ></ImageSlider>
        <div className="jakarta-container1">
          <h1 className="jakarta-text">Rally Doa - Jakarta</h1>
          <button type="button" className="jakarta-button button">
            Pesan Tiket Sekarang
          </button>
        </div>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
      <style jsx>
        {`
          .jakarta-container {
            width: 100%;
            overflow: hidden;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #f1eeee;
          }
          .jakarta-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .jakarta-text {
            font-size: 64px;
            margin-top: 121px;
            margin-bottom: 49px;
          }
          .jakarta-button {
            color: rgb(247, 246, 246);
            display: flex;
            font-size: 40px;
            align-self: center;
            transition: 0.3s;
            padding-top: 33px;
            border-color: rgba(0, 0, 0, 0);
            border-width: 0px;
            padding-left: 113px;
            border-radius: 100px;
            margin-bottom: 195px;
            padding-right: 113px;
            padding-bottom: 33px;
            background-color: var(--dl-color-danger-500);
          }
          .jakarta-button:hover {
            cursor: pointer;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-danger-300);
          }
          @media (max-width: 1024px) {
            .jakarta-text {
              font-size: 45px;
            }
            .jakarta-button {
              font-size: 25px;
            }
          }
          @media (max-width: 768px) {
            .jakarta-container {
              align-items: center;
              justify-content: flex-start;
            }
            .jakarta-text {
              font-size: 35px;
              margin-top: var(--dl-space-space-fourunits);
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .jakarta-button {
              font-size: 20px;
              margin-top: 0px;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-fourunits);
              margin-bottom: var(--dl-space-space-fiveunits);
              padding-right: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 425px) {
            .jakarta-container {
              justify-content: flex-start;
            }
            .jakarta-text {
              font-size: 25px;
              margin-top: var(--dl-space-space-sixunits);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .jakarta-button {
              font-size: 14px;
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-sixunits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 375px) {
            .jakarta-container {
              align-items: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Jakarta
