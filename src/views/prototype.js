import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import RallyDoa from '../components/rally-doa'
import './prototype.css'

const Prototype = (props) => {
  return (
    <div className="prototype-container">
      <Helmet>
        <title>Prototype - Indonesia di Hatiku</title>
        <meta property="og:title" content="Prototype - Indonesia di Hatiku" />
      </Helmet>
      <header data-role="Header" className="prototype-header">
        <div className="prototype-container01">
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            className="prototype-image"
          />
        </div>
        <div className="prototype-container02">
          <Link to="/prototype" className="prototype-beranda button">
            Beranda
          </Link>
          <a
            href="https://wa.me/62816516805"
            target="_blank"
            rel="noreferrer noopener"
            className="prototype-hub-kami button"
          >
            Hubungi Kami
          </a>
        </div>
      </header>
      <div className="prototype-banner">
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
          className="prototype-image1"
        />
      </div>
      <div className="prototype-container03">
        <div className="prototype-container04">
          <svg viewBox="0 0 950.8571428571428 1024" className="prototype-icon">
            <path d="M438.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714zM950.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714z"></path>
          </svg>
        </div>
        <div className="prototype-container05">
          <span className="prototype-text">
            Karena itu pergilah, jadikanlah semua bangsa murid-Ku dan baptislah
            mereka dalam nama Bapa dan Anak dan Roh Kudus, dan ajarlah mereka
            melakukan segala sesuatu yang telah Kuperintahkan kepadamu. Dan
            ketahuilah, Aku menyertai kamu senantiasa sampai kepada akhir
            zaman.”
          </span>
          <span className="prototype-text01">Matius 28:19-20 TB</span>
        </div>
      </div>
      <div className="prototype-visi-misi">
        <div className="prototype-visi">
          <div className="prototype-header1">
            <h1 className="prototype-text02">VISI</h1>
            <div className="prototype-container06"></div>
          </div>
          <span className="prototype-text03">
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
              dicta quisquam ut rem sapiente nulla adipisci eveniet, enim
              temporibus odit aliquid labore facere, provident quae delectus?
              Illo sed quaerat culpa neque nobis ipsum aperiam, velit quas
              possimus doloremque ab assumenda ratione
            </span>
            <br></br>
          </span>
        </div>
        <div className="prototype-misi">
          <div className="prototype-header-misi">
            <div className="prototype-container07"></div>
            <h1 className="prototype-text06">MISI</h1>
          </div>
          <span className="prototype-text07">
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
              dicta quisquam ut rem sapiente nulla adipisci eveniet, enim
              temporibus odit aliquid labore facere, provident quae delectus?
              Illo sed quaerat culpa neque nobis ipsum aperiam, velit quas
              possimus doloremque ab assumenda ratione
            </span>
            <br></br>
            <br></br>
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
              dicta quisquam ut rem sapiente nulla adipisci eveniet, enim
              temporibus
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
          </span>
        </div>
      </div>
      <div className="prototype-rally-doa">
        <h1 className="prototype-text13">Rally Doa</h1>
        <RallyDoa rootClassName="rally-doa-root-class-name3"></RallyDoa>
        <RallyDoa rootClassName="rally-doa-root-class-name"></RallyDoa>
        <RallyDoa rootClassName="rally-doa-root-class-name1"></RallyDoa>
        <RallyDoa rootClassName="rally-doa-root-class-name2"></RallyDoa>
      </div>
      <div className="prototype-container08">
        <span className="prototype-text14">Supported By</span>
        <div className="prototype-container09">
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            className="prototype-image2"
          />
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            className="prototype-image3"
          />
        </div>
      </div>
    </div>
  )
}

export default Prototype
