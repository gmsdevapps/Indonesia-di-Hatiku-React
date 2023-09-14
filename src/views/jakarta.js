import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import ImageSlider from '../components/image-slider'
import Footer from '../components/footer'
import './jakarta.css'

const Jakarta = (props) => {
  return (
    <div className="jakarta-container">
      <Helmet>
        <title>Jakarta - Indonesia di Hatiku</title>
        <meta property="og:title" content="Jakarta - Indonesia di Hatiku" />
      </Helmet>
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
  )
}

export default Jakarta
