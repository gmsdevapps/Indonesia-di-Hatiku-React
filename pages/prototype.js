import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import RallyDoa from '../components/rally-doa'

const Prototype = (props) => {
  return (
    <>
      <div className="prototype-container">
        <Head>
          <title>Prototype - Indonesia di Hatiku</title>
          <meta property="og:title" content="Prototype - Indonesia di Hatiku" />
        </Head>
        <header data-role="Header" className="prototype-header">
          <div className="prototype-container01">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              className="prototype-image"
            />
          </div>
          <div className="prototype-container02">
            <Link href="/prototype">
              <a className="prototype-link button">Beranda</a>
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
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="prototype-icon"
            >
              <path d="M438.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714zM950.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714z"></path>
            </svg>
          </div>
          <div className="prototype-container05">
            <span className="prototype-text">
              Karena itu pergilah, jadikanlah semua bangsa murid-Ku dan
              baptislah mereka dalam nama Bapa dan Anak dan Roh Kudus, dan
              ajarlah mereka melakukan segala sesuatu yang telah Kuperintahkan
              kepadamu. Dan ketahuilah, Aku menyertai kamu senantiasa sampai
              kepada akhir zaman.”
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
      <style jsx>
        {`
          .prototype-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .prototype-header {
            width: 100%;
            display: flex;
            position: relative;
            max-width: auto;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .prototype-container01 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .prototype-image {
            width: 96px;
            height: 30px;
            object-fit: cover;
          }
          .prototype-container02 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 30%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .prototype-link {
            padding: 1rem;
            font-size: 1.5em;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            border-width: 0px;
            text-decoration: none;
          }
          .prototype-hub-kami {
            font-size: 1.5em;
            align-self: center;
            font-style: normal;
            font-weight: 700;
            border-width: 0px;
            text-decoration: none;
          }
          .prototype-banner {
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .prototype-image1 {
            height: 500px;
            align-self: stretch;
            object-fit: cover;
          }
          .prototype-container03 {
            width: 100%;
            height: 300px;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            position: relative;
            align-items: center;
            justify-content: flex-start;
          }
          .prototype-container04 {
            flex: 0 0 auto;
            width: 40%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .prototype-icon {
            width: auto;
            height: 80%;
            align-self: center;
          }
          .prototype-container05 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 60%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .prototype-text {
            font-size: 1.5em;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            text-align: justify;
          }
          .prototype-text01 {
            font-size: 1.5em;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-weight: 700;
          }
          .prototype-visi-misi {
            width: 100%;
            height: 500px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: flex-start;
            background-color: #dcdcdc;
          }
          .prototype-visi {
            flex: 0 0 auto;
            width: 100%;
            height: 50%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-left: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .prototype-header1 {
            width: 100%;
            height: 84px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: 0px;
            flex-direction: row;
            justify-content: center;
          }
          .prototype-text02 {
            font-size: 3.5em;
            align-self: flex-start;
          }
          .prototype-container06 {
            width: 100%;
            height: 2px;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-oneandhalfunits);
            background-color: #000000;
          }
          .prototype-text03 {
            width: 50%;
            height: 50%;
            font-size: 1.3em;
            align-self: flex-start;
            margin-top: 0px;
            text-align: justify;
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: 0px;
          }
          .prototype-misi {
            flex: 0 0 auto;
            width: 100%;
            height: 50%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .prototype-header-misi {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-end;
          }
          .prototype-container07 {
            flex: 0 0 auto;
            width: 100%;
            height: 2px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-right: var(--dl-space-space-unit);
            background-color: #000000;
          }
          .prototype-text06 {
            font-size: 3.5em;
            align-self: flex-start;
            text-align: left;
          }
          .prototype-text07 {
            font-size: 1.3em;
            text-align: justify;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-threeunits);
          }
          .prototype-rally-doa {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: flex-start;
          }
          .prototype-text13 {
            font-size: 3em;
          }
          .prototype-container08 {
            flex: 0 0 auto;
            width: 100%;
            height: 200px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #d9d9d9;
          }
          .prototype-text14 {
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 600;
          }
          .prototype-container09 {
            gap: var(--dl-space-space-threeunits);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            justify-content: center;
          }
          .prototype-image2 {
            width: 100px;
            object-fit: cover;
          }
          .prototype-image3 {
            width: 70px;
            align-self: stretch;
            object-fit: cover;
          }
          @media (max-width: 1024px) {
            .prototype-container02 {
              width: auto;
            }
            .prototype-image1 {
              height: 350px;
            }
            .prototype-icon {
              width: auto;
              height: 80%;
            }
            .prototype-container05 {
              padding: 0px;
            }
            .prototype-visi-misi {
              height: auto;
            }
            .prototype-visi {
              height: auto;
            }
            .prototype-header1 {
              height: auto;
              padding-top: var(--dl-space-space-unit);
            }
            .prototype-text03 {
              font-size: 1em;
            }
            .prototype-misi {
              height: auto;
              margin-top: var(--dl-space-space-unit);
            }
            .prototype-text07 {
              font-size: 1em;
            }
          }
          @media (max-width: 768px) {
            .prototype-container02 {
              gap: var(--dl-space-space-unit);
              width: 50%;
            }
            .prototype-link {
              padding: 0.5rem;
              font-size: 1rem;
            }
            .prototype-hub-kami {
              padding: 0.5px;
              font-size: 1em;
              align-self: center;
              text-align: left;
            }
            .prototype-image1 {
              height: 300px;
            }
            .prototype-container03 {
              height: 200px;
            }
            .prototype-container04 {
              width: 30%;
            }
            .prototype-icon {
              height: 70%;
              align-self: center;
            }
            .prototype-container05 {
              width: 70%;
              padding: var(--dl-space-space-halfunit);
            }
            .prototype-text {
              margin-top: 0px;
            }
            .prototype-text01 {
              font-size: 1em;
            }
            .prototype-visi-misi {
              height: 350px;
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .prototype-header1 {
              height: auto;
              padding-top: var(--dl-space-space-halfunit);
            }
            .prototype-text02 {
              font-size: 2.5em;
            }
            .prototype-container06 {
              margin-left: var(--dl-space-space-halfunit);
            }
            .prototype-text03 {
              font-size: 1em;
            }
            .prototype-container07 {
              margin-right: var(--dl-space-space-halfunit);
            }
            .prototype-text06 {
              font-size: 2.5em;
            }
            .prototype-text07 {
              font-size: 1em;
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .prototype-rally-doa {
              padding-top: var(--dl-space-space-threeunits);
            }
            .prototype-text13 {
              font-size: 2em;
            }
            .prototype-container08 {
              height: auto;
            }
            .prototype-text14 {
              font-size: 1.2rem;
              margin-top: var(--dl-space-space-unit);
            }
            .prototype-container09 {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .prototype-image2 {
              width: 60px;
            }
            .prototype-image3 {
              width: 40px;
            }
          }
          @media (max-width: 425px) {
            .prototype-header {
              padding: var(--dl-space-space-halfunit);
            }
            .prototype-image {
              width: auto;
              height: 15px;
            }
            .prototype-container02 {
              width: 50%;
            }
            .prototype-link {
              font-size: 0.5em;
            }
            .prototype-hub-kami {
              padding: 0.5rem;
              font-size: 0.5em;
            }
            .prototype-image1 {
              height: 150px;
              align-self: stretch;
            }
            .prototype-container03 {
              height: 150px;
            }
            .prototype-container04 {
              width: 30%;
            }
            .prototype-icon {
              height: 50%;
            }
            .prototype-container05 {
              padding: var(--dl-space-space-halfunit);
              align-self: center;
            }
            .prototype-text {
              font-size: 0.5rem;
            }
            .prototype-text01 {
              font-size: 0.5rem;
            }
            .prototype-visi-misi {
              height: 250px;
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .prototype-header1 {
              height: 45%;
              padding-top: var(--dl-space-space-unit);
            }
            .prototype-text02 {
              font-size: 2em;
            }
            .prototype-container06 {
              margin-top: -0.5rem;
              align-items: center;
              margin-left: var(--dl-space-space-halfunit);
              justify-content: center;
            }
            .prototype-text03 {
              height: 50px;
              font-size: 0.45rem;
            }
            .prototype-text06 {
              font-size: 2em;
            }
            .prototype-text07 {
              font-size: 0.45rem;
              padding-top: 5px;
              padding-left: 2px;
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: 5px;
            }
            .prototype-rally-doa {
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .prototype-text13 {
              font-size: 1.5em;
            }
            .prototype-container08 {
              height: auto;
            }
            .prototype-text14 {
              font-size: 1rem;
              margin-top: var(--dl-space-space-unit);
            }
            .prototype-container09 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .prototype-image2 {
              width: 50px;
            }
            .prototype-image3 {
              width: 35px;
            }
          }
          @media (max-width: 375px) {
            .prototype-header {
              padding: var(--dl-space-space-unit);
            }
            .prototype-image {
              width: var(--dl-size-size-small);
              height: auto;
            }
            .prototype-container02 {
              gap: var(--dl-space-space-halfunit);
            }
            .prototype-link {
              font-size: 0.6rem;
              padding-top: 0.5 rem;
              padding-left: 0.5rem;
              padding-right: 0.5rem;
              padding-bottom: 0.5 rem;
            }
            .prototype-hub-kami {
              font-size: 0.6rem;
              padding-top: 0.5 rem;
              padding-left: 0 5rem;
              padding-right: 0 5rem;
              padding-bottom: 0.5 rem;
            }
            .prototype-banner {
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .prototype-image1 {
              height: 150px;
              border-radius: var(--dl-radius-radius-radius4);
            }
            .prototype-container03 {
              height: 100px;
              padding: var(--dl-space-space-halfunit);
            }
            .prototype-container04 {
              width: 30%;
            }
            .prototype-icon {
              height: 50%;
            }
            .prototype-container05 {
              width: 70%;
              padding: var(--dl-space-space-halfunit);
            }
            .prototype-text {
              font-size: 0.5rem;
            }
            .prototype-text01 {
              font-size: 0.5rem;
              align-self: flex-start;
              margin-top: -0.3rem;
            }
            .prototype-visi-misi {
              height: auto;
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .prototype-visi {
              height: auto;
            }
            .prototype-header1 {
              height: auto;
              align-items: center;
              padding-top: 0px;
              justify-content: center;
            }
            .prototype-text02 {
              font-size: 1em;
            }
            .prototype-container06 {
              width: 100%;
              align-items: flex-start;
              margin-left: var(--dl-space-space-halfunit);
              justify-content: flex-start;
            }
            .prototype-text03 {
              width: 70%;
              height: auto;
              font-size: 0.4rem;
            }
            .prototype-misi {
              flex: 1;
              height: 50%;
              margin-top: var(--dl-space-space-halfunit);
            }
            .prototype-header-misi {
              width: 45%;
            }
            .prototype-text06 {
              font-size: 1em;
            }
            .prototype-text07 {
              width: auto;
              height: 100%;
              font-size: 0.4rem;
              align-self: flex-start;
              padding-top: 3px;
              padding-left: 2px;
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 0px;
            }
            .prototype-rally-doa {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .prototype-text13 {
              font-size: 1.3em;
            }
            .prototype-container08 {
              height: 100px;
            }
            .prototype-text14 {
              font-size: 0.7em;
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
            .prototype-container09 {
              margin-top: var(--dl-space-space-halfunit);
            }
            .prototype-image2 {
              width: 50px;
            }
            .prototype-image3 {
              width: 30px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Prototype
