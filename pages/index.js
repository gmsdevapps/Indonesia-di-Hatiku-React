import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import ImageSlider from '../components/image-slider'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Indonesia di Hatiku</title>
          <meta property="og:title" content="Indonesia di Hatiku" />
        </Head>
        <Header rootClassName="header-root-class-name1"></Header>
        <ImageSlider rootClassName="image-slider-root-class-name"></ImageSlider>
        <div className="home-profile-saya">
          <h1 className="home-text">Profil Saya</h1>
          <span className="home-text01">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              feugiat nibh sed odio mattis, commodo ultrices magna mattis. Nam
              eget lacus ac ipsum cursus sollicitudin id eget velit. Duis vitae
              vestibulum ante,Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Donec feugiat nibh sed odio mattis
            </span>
            <br></br>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              feugiat nibh sed odio mattis, commodo ultrices magna mattis. Nam
              eget lacus ac ipsum cursus sollicitudin id eget velit. Duis vitae
              vestibulum ante,Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Donec feugiat nibh sed odio mattis
            </span>
          </span>
        </div>
        <div className="home-ayat">
          <div className="home-image">
            <img
              alt="image"
              src="/Asset/%C3%A2%C2%80%C2%9C.svg"
              className="home-image01"
            />
          </div>
          <div className="home-isi-ayat">
            <span className="home-text05">
              Sebab Aku ini mengetahui rancangan-rancangan apa yang ada pada-Ku
              mengenai kamu, demikianlah firman TUHAN, yaitu rancangan damai
              sejahtera dan bukan rancangan kecelakaan, untuk memberikan
              kepadamu hari depan yang penuh harapan. Dan apabila kamu berseru
              dan datang untuk berdoa kepada-Ku, maka Aku akan mendengarkan
              kamu; apabila kamu mencari Aku, kamu akan menemukan Aku; apabila
              kamu menanyakan Aku dengan segenap hati, Aku akan memberi kamu
              menemukan Aku, demikianlah firman TUHAN,
            </span>
            <h1 className="home-text06">Yeremia 29:11-14B</h1>
          </div>
        </div>
        <div className="home-visi-misi">
          <div className="home-visi">
            <div className="home-header-visi">
              <h1 className="home-text07">VISI</h1>
              <div className="home-container1"></div>
            </div>
            <span className="home-text08">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              feugiat nibh sed odio mattis, commodo ultrices magna mattis. Nam
              eget lacus ac ipsum cursus sollicitudin id eget velit. Duis vitae
              vestibulum ante,
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div className="home-misi">
            <div className="home-header-misi">
              <div className="home-container2"></div>
              <h1 className="home-text09">MISI</h1>
            </div>
            <span className="home-text10">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                feugiat nibh sed odio mattis, commodo ultrices magna mattis. Nam
                eget lacus ac ipsum cursus sollicitudin id eget velit. Duis
                vitae vestibulum ante,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                feugiat nibh sed odio mattis, commodo ultrices magna mattis. Nam
                eget lacus ac ipsum cursus sollicitudin id eget velit. Duis
                vitae vestibulum ante,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
        </div>
        <div className="home-rally-doa-small">
          <h1 className="home-text15">Rally Doa</h1>
          <div className="home-row1">
            <div className="home-bali">
              <img
                alt="image"
                src="/RallyDoaNew/bali-500w.webp"
                className="home-image02"
              />
              <Link href="/jakarta">
                <a className="home-link button">
                  <span className="home-text16">
                    <span>10 November 2023</span>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="/external/pastedimage-ufqa-200h.png"
                    className="home-image03"
                  />
                </a>
              </Link>
            </div>
            <div className="home-tasik">
              <img
                alt="image"
                src="/RallyDoaNew/tasik-500w.webp"
                className="home-image04"
              />
              <Link href="/jakarta">
                <a className="home-link1 button">
                  <span className="home-text19">
                    <span>13 November 2023</span>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="/external/pastedimage-ufqa-200h.png"
                    className="home-image05"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="home-row2">
            <div className="home-bandung">
              <button type="button" className="home-btn102 button">
                <span className="home-text22">
                  <span>14 November 2023</span>
                  <br></br>
                </span>
                <img
                  alt="image"
                  src="/external/pastedimage-ufqa-200h.png"
                  className="home-image06"
                />
              </button>
              <img
                alt="image"
                src="/RallyDoaNew/bandung-500w.webp"
                className="home-image07"
              />
            </div>
            <div className="home-jakarta">
              <Link href="/jakarta">
                <a className="home-link2 button">
                  <span className="home-text25">
                    <span>17 November 2023</span>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="/external/pastedimage-ufqa-200h.png"
                    className="home-image08"
                  />
                </a>
              </Link>
              <img
                alt="image"
                src="/RallyDoaNew/jakarta-500w.webp"
                className="home-image09"
              />
            </div>
          </div>
          <div className="home-row3">
            <div className="home-manado">
              <button type="button" className="home-btn104 button">
                <span className="home-text28">
                  <span>22 November 2023</span>
                  <br></br>
                </span>
                <img
                  alt="image"
                  src="/external/pastedimage-ufqa-200h.png"
                  className="home-image10"
                />
              </button>
              <img
                alt="image"
                src="/RallyDoaNew/manado-500w.webp"
                className="home-image11"
              />
            </div>
            <div className="home-makasar">
              <button type="button" className="home-btn105 button">
                <span className="home-text31">
                  <span>22 November 2023</span>
                  <br></br>
                </span>
                <img
                  alt="image"
                  src="/external/pastedimage-ufqa-200h.png"
                  className="home-image12"
                />
              </button>
              <img
                alt="image"
                src="/RallyDoaNew/makassar-500w.webp"
                className="home-image13"
              />
            </div>
          </div>
          <div className="home-row4">
            <div className="home-medan">
              <img
                alt="image"
                src="/RallyDoaNew/medan-500w.webp"
                className="home-image14"
              />
              <button type="button" className="home-btn106 button">
                <span className="home-text34">1 Desember 2023</span>
                <img
                  alt="image"
                  src="/external/pastedimage-ufqa-200h.png"
                  className="home-image15"
                />
              </button>
            </div>
            <div className="home-serpong">
              <img
                alt="image"
                src="/RallyDoaNew/serpong-500w.webp"
                className="home-image16"
              />
              <button type="button" className="home-btn107 button">
                <span className="home-text35">5 Desember 2023</span>
                <img
                  alt="image"
                  src="/external/pastedimage-ufqa-200h.png"
                  className="home-image17"
                />
              </button>
            </div>
            <div className="home-samarinda">
              <button type="button" className="home-btn108 button">
                <span className="home-text36">
                  <span>8 Desember 2023</span>
                  <br></br>
                </span>
                <img
                  alt="image"
                  src="/external/pastedimage-ufqa-200h.png"
                  className="home-image18"
                />
              </button>
              <img
                alt="image"
                src="/RallyDoaNew/samarinda-500w.webp"
                className="home-image19"
              />
            </div>
            <div className="home-balikpapan">
              <img
                alt="image"
                src="/RallyDoaNew/balikpapan-500w.webp"
                className="home-image20"
              />
              <button type="button" className="home-btn109 button">
                <span className="home-text39">
                  <span>9 Desember 2023</span>
                  <br></br>
                </span>
                <img
                  alt="image"
                  src="/external/pastedimage-ufqa-200h.png"
                  className="home-image21"
                />
              </button>
            </div>
            <div className="home-jayapura">
              <img
                alt="image"
                src="/RallyDoaNew/jayapura-500w.webp"
                className="home-image22"
              />
              <button type="button" className="home-btn110 button">
                <span className="home-text42">
                  <span>15 Desember 2023</span>
                  <br></br>
                </span>
                <img
                  alt="image"
                  src="/external/pastedimage-ufqa-200h.png"
                  className="home-image23"
                />
              </button>
            </div>
            <div className="home-jogjakarta">
              <button type="button" className="home-btn111 button">
                <span className="home-text45">10 Januari 2024</span>
                <img
                  alt="image"
                  src="/external/pastedimage-ufqa-200h.png"
                  className="home-image24"
                />
              </button>
              <img
                alt="image"
                src="/RallyDoaNew/jogjakarta-500w.webp"
                className="home-image25"
              />
            </div>
          </div>
          <div className="home-row5">
            <div className="home-semarang">
              <img
                alt="image"
                src="/RallyDoaNew/semarang-500w.webp"
                className="home-image26"
              />
              <button type="button" className="home-btn112 button">
                <span className="home-text46">12 Januari 2024</span>
                <img
                  alt="image"
                  src="/external/pastedimage-ufqa-200h.png"
                  className="home-image27"
                />
              </button>
            </div>
            <div className="home-surabaya">
              <img
                alt="image"
                src="/RallyDoaNew/surabaya-500w.webp"
                className="home-image28"
              />
              <button type="button" className="home-btn2 button">
                <span className="home-text47">21 Januari 2024</span>
                <img
                  alt="image"
                  src="/external/pastedimage-ufqa-200h.png"
                  className="home-image29"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="home-rally-doa-large">
          <h1 className="home-text48">Rally Doa</h1>
          <div className="home-row11">
            <div className="home-bali1">
              <img
                alt="image"
                src="/RallyDoaNew/bali-500w.webp"
                className="home-image30"
              />
              <Link href="/jakarta">
                <a className="home-link3 button">
                  <span className="home-text49">
                    <span>10 November 2023</span>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="/external/pastedimage-ufqa-200h.png"
                    className="home-image31"
                  />
                </a>
              </Link>
            </div>
            <div className="home-tasik1">
              <img
                alt="image"
                src="/RallyDoaNew/tasik-500w.webp"
                className="home-image32"
              />
              <Link href="/jakarta">
                <a className="home-link4 button">
                  <span className="home-text52">
                    <span>13 November 2023</span>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="/external/pastedimage-ufqa-200h.png"
                    className="home-image33"
                  />
                </a>
              </Link>
            </div>
            <div className="home-bandung1">
              <Link href="/jakarta">
                <a className="home-link5 button">
                  <span className="home-text55">
                    <span>14 November 2023</span>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="/external/pastedimage-ufqa-200h.png"
                    className="home-image34"
                  />
                </a>
              </Link>
              <img
                alt="image"
                src="/RallyDoaNew/bandung-500w.webp"
                className="home-image35"
              />
            </div>
          </div>
          <div className="home-row21">
            <div className="home-jakarta1">
              <Link href="/jakarta">
                <a className="home-link6 button">
                  <span className="home-text58">
                    <span>17 November 2023</span>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="/external/pastedimage-ufqa-200h.png"
                    className="home-image36"
                  />
                </a>
              </Link>
              <img
                alt="image"
                src="/RallyDoaNew/jakarta-500w.webp"
                className="home-image37"
              />
            </div>
            <div className="home-manado1">
              <button type="button" className="home-btn117 button">
                <span className="home-text61">
                  <span>22 November 2023</span>
                  <br></br>
                </span>
                <img
                  alt="image"
                  src="/external/pastedimage-ufqa-200h.png"
                  className="home-image38"
                />
              </button>
              <img
                alt="image"
                src="/RallyDoaNew/manado-500w.webp"
                className="home-image39"
              />
            </div>
            <div className="home-makasar1">
              <button type="button" className="home-btn118 button">
                <span className="home-text64">
                  <span>22 November 2023</span>
                  <br></br>
                </span>
                <img
                  alt="image"
                  src="/external/pastedimage-ufqa-200h.png"
                  className="home-image40"
                />
              </button>
              <img
                alt="image"
                src="/RallyDoaNew/makassar-500w.webp"
                className="home-image41"
              />
            </div>
          </div>
          <div className="home-row31">
            <div className="home-medan1">
              <img
                alt="image"
                src="/RallyDoaNew/medan-500w.webp"
                className="home-image42"
              />
              <button type="button" className="home-btn119 button">
                <span className="home-text67">1 Desember 2023</span>
                <img
                  alt="image"
                  src="/external/pastedimage-ufqa-200h.png"
                  className="home-image43"
                />
              </button>
            </div>
            <div className="home-serpong1">
              <img
                alt="image"
                src="/RallyDoaNew/serpong-500w.webp"
                className="home-image44"
              />
              <button type="button" className="home-btn120 button">
                <span className="home-text68">5 Desember 2023</span>
                <img
                  alt="image"
                  src="/external/pastedimage-ufqa-200h.png"
                  className="home-image45"
                />
              </button>
            </div>
            <div className="home-samarinda1">
              <button type="button" className="home-btn121 button">
                <span className="home-text69">
                  <span>8 Desember 2023</span>
                  <br></br>
                </span>
                <img
                  alt="image"
                  src="/external/pastedimage-ufqa-200h.png"
                  className="home-image46"
                />
              </button>
              <img
                alt="image"
                src="/RallyDoaNew/samarinda-500w.webp"
                className="home-image47"
              />
            </div>
          </div>
          <div className="home-row41">
            <div className="home-balikpapan1">
              <img
                alt="image"
                src="/RallyDoaNew/balikpapan-500w.webp"
                className="home-image48"
              />
              <button type="button" className="home-btn122 button">
                <span className="home-text72">
                  <span>9 Desember 2023</span>
                  <br></br>
                </span>
                <img
                  alt="image"
                  src="/external/pastedimage-ufqa-200h.png"
                  className="home-image49"
                />
              </button>
            </div>
            <div className="home-jayapura1">
              <img
                alt="image"
                src="/RallyDoaNew/jayapura-500w.webp"
                className="home-image50"
              />
              <button type="button" className="home-btn123 button">
                <span className="home-text75">
                  <span>15 Desember 2023</span>
                  <br></br>
                </span>
                <img
                  alt="image"
                  src="/external/pastedimage-ufqa-200h.png"
                  className="home-image51"
                />
              </button>
            </div>
            <div className="home-jogjakarta1">
              <button type="button" className="home-btn124 button">
                <span className="home-text78">10 Januari 2024</span>
                <img
                  alt="image"
                  src="/external/pastedimage-ufqa-200h.png"
                  className="home-image52"
                />
              </button>
              <img
                alt="image"
                src="/RallyDoaNew/jogjakarta-500w.webp"
                className="home-image53"
              />
            </div>
          </div>
          <div className="home-row51">
            <div className="home-semarang1">
              <img
                alt="image"
                src="/RallyDoaNew/semarang-500w.webp"
                className="home-image54"
              />
              <button type="button" className="home-btn125 button">
                <span className="home-text79">12 Januari 2024</span>
                <img
                  alt="image"
                  src="/external/pastedimage-ufqa-200h.png"
                  className="home-image55"
                />
              </button>
            </div>
            <div className="home-surabaya1">
              <img
                alt="image"
                src="/RallyDoaNew/surabaya-500w.webp"
                className="home-image56"
              />
              <button type="button" className="home-btn21 button">
                <span className="home-text80">21 Januari 2024</span>
                <img
                  alt="image"
                  src="/external/pastedimage-ufqa-200h.png"
                  className="home-image57"
                />
              </button>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #f1eeee;
          }
          .home-profile-saya {
            flex: 0 0 auto;
            width: 100%;
            height: 586px;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #dfdfdf;
          }
          .home-text {
            font-size: 4rem;
            align-self: center;
            font-style: normal;
            margin-top: 110px;
            font-weight: 900;
          }
          .home-text01 {
            color: rgba(0, 0, 0, 0.6);
            font-size: 1.5rem;
            font-style: normal;
            margin-top: 3%;
            text-align: justify;
            font-family: Lato;
            font-weight: 400;
            line-height: auto;
            margin-left: 10%;
            margin-right: 10%;
            text-transform: none;
            text-decoration: none;
          }
          .home-ayat {
            gap: var(--dl-space-space-fourunits);
            flex: 0 0 auto;
            width: 100%;
            height: 766px;
            display: flex;
            align-self: flex-start;
            align-items: center;
            padding-left: 155px;
            padding-right: 155px;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-image {
            flex: 0 0 auto;
            width: 30%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-image01 {
            width: 100%;
            height: auto;
            align-self: center;
            object-fit: cover;
          }
          .home-isi-ayat {
            gap: var(--dl-space-space-threeunits);
            width: 70%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text05 {
            color: rgba(0, 0, 0, 0.4);
            font-size: 1.5rem;
            font-style: normal;
            text-align: justify;
            font-family: Lato;
            font-weight: 700;
            line-height: 1.5;
            padding-left: 10%;
            padding-right: 10%;
            text-transform: none;
            text-decoration: none;
          }
          .home-text06 {
            font-size: 1.5rem;
            align-self: flex-start;
            font-style: italic;
            font-weight: 900;
            padding-left: 10%;
          }
          .home-visi-misi {
            flex: 0 0 auto;
            width: 100%;
            height: 856px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #dfdfdf;
          }
          .home-visi {
            flex: 0 0 auto;
            width: 100%;
            height: 50%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-header-visi {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text07 {
            font-size: 128px;
            align-self: flex-start;
            font-style: normal;
            margin-top: 100px;
            font-weight: 800;
            margin-left: 10%;
          }
          .home-container1 {
            flex: 0 0 auto;
            width: 1452px;
            height: 8px;
            display: flex;
            align-self: center;
            margin-top: 100px;
            align-items: flex-start;
            margin-left: 30px;
            justify-content: flex-start;
            background-color: rgba(0, 0, 0, 0.4);
          }
          .home-text08 {
            color: rgba(0, 0, 0, 0.6);
            width: 750px;
            height: auto;
            font-size: 1.5rem;
            align-self: flex-start;
            font-style: normal;
            margin-top: 0%;
            text-align: justify;
            font-family: Lato;
            font-weight: 400;
            margin-left: 10%;
          }
          .home-misi {
            flex: 0 0 auto;
            width: 100%;
            height: 50%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-header-misi {
            flex: 0 0 auto;
            width: 50%;
            height: 50%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            justify-content: flex-end;
          }
          .home-container2 {
            flex: 0 0 auto;
            width: 658px;
            height: 8px;
            display: flex;
            align-items: flex-start;
            margin-right: 30px;
            background-color: rgba(0, 0, 0, 0.4);
          }
          .home-text09 {
            font-size: 128px;
            font-style: normal;
            font-weight: 900;
          }
          .home-text10 {
            color: rgba(0, 0, 0, 0.6);
            width: 50%;
            font-size: 1.5rem;
            align-self: flex-start;
            font-style: normal;
            margin-top: var(--dl-space-space-threeunits);
            text-align: justify;
            font-weight: 400;
            line-height: auto;
            margin-left: var(--dl-space-space-oneandhalfunits);
            margin-right: 9%;
          }
          .home-rally-doa-small {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: none;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text15 {
            font-size: 6rem;
            align-self: center;
            margin-top: 112px;
            text-align: center;
            margin-bottom: 55px;
          }
          .home-row1 {
            gap: 20px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-top: 15px;
            align-items: center;
            justify-content: center;
          }
          .home-bali {
            flex: 0 0 auto;
            width: 450px;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
          }
          .home-image02 {
            width: 100%;
            height: auto;
            align-self: center;
            object-fit: cover;
          }
          .home-link {
            left: 90px;
            width: 275px;
            bottom: 25px;
            height: 40px;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            padding-top: 4px;
            border-width: 0px;
            padding-left: 20px;
            border-radius: 100px;
            padding-right: 15px;
            flex-direction: row;
            padding-bottom: 7px;
            justify-content: center;
            text-decoration: none;
            background-color: #f7f6f6;
          }
          .home-link:focus {
            transform: scale(0.96);
          }
          .home-link:hover {
            cursor: pointer;
            transform: scale(1.15);
            background-color: var(--dl-color-gray-900);
          }
          .home-text16 {
            color: rgb(52, 52, 52);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Lato;
            font-weight: 700;
            line-height: auto;
            margin-right: 6px;
          }
          .home-image03 {
            width: 25px;
            align-self: center;
            margin-top: 2px;
            object-fit: cover;
          }
          .home-tasik {
            flex: 0 0 auto;
            width: 450px;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image04 {
            width: 100%;
            height: auto;
            align-self: center;
            object-fit: cover;
          }
          .home-link1 {
            left: 90px;
            width: 275px;
            bottom: 25px;
            height: 40px;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            padding-top: 4px;
            border-width: 0px;
            padding-left: 20px;
            border-radius: 100px;
            padding-right: 15px;
            flex-direction: row;
            padding-bottom: 7px;
            justify-content: center;
            text-decoration: none;
            background-color: #f7f6f6;
          }
          .home-link1:focus {
            transform: scale(0.96);
          }
          .home-link1:hover {
            cursor: pointer;
            transform: scale(1.15);
            background-color: var(--dl-color-gray-900);
          }
          .home-text19 {
            color: rgb(52, 52, 52);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Lato;
            font-weight: 700;
            line-height: auto;
            margin-right: 6px;
          }
          .home-image05 {
            width: 25px;
            align-self: center;
            margin-top: 2px;
            object-fit: cover;
          }
          .home-row2 {
            gap: 20px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-top: 15px;
            align-items: center;
            justify-content: center;
          }
          .home-bandung {
            flex: 0 0 auto;
            width: 450px;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-btn102 {
            left: 90px;
            width: 275px;
            bottom: 25px;
            height: 40px;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            padding-top: 4px;
            border-width: 0px;
            padding-left: 20px;
            border-radius: 100px;
            padding-right: 15px;
            flex-direction: row;
            padding-bottom: 7px;
            justify-content: center;
            background-color: #f7f6f6;
          }
          .home-btn102:focus {
            transform: scale(0.96);
          }
          .home-btn102:hover {
            cursor: pointer;
            transform: scale(1.15);
            background-color: var(--dl-color-gray-900);
          }
          .home-text22 {
            color: rgb(52, 52, 52);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Lato;
            font-weight: 700;
            line-height: auto;
            margin-right: 6px;
          }
          .home-image06 {
            width: 25px;
            align-self: center;
            margin-top: 2px;
            object-fit: cover;
          }
          .home-image07 {
            width: 100%;
            height: auto;
            align-self: center;
            object-fit: cover;
          }
          .home-jakarta {
            flex: 0 0 auto;
            width: 450px;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
          }
          .home-link2 {
            left: 90px;
            width: 275px;
            bottom: 25px;
            height: 40px;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            padding-top: 4px;
            border-width: 0px;
            padding-left: 20px;
            border-radius: 100px;
            padding-right: 15px;
            flex-direction: row;
            padding-bottom: 7px;
            justify-content: center;
            text-decoration: none;
            background-color: #f7f6f6;
          }
          .home-link2:focus {
            transform: scale(0.96);
          }
          .home-link2:hover {
            cursor: pointer;
            transform: scale(1.15);
            background-color: var(--dl-color-gray-900);
          }
          .home-text25 {
            color: rgb(52, 52, 52);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Lato;
            font-weight: 700;
            line-height: auto;
            margin-right: 6px;
          }
          .home-image08 {
            width: 25px;
            align-self: center;
            margin-top: 2px;
            object-fit: cover;
          }
          .home-image09 {
            width: 100%;
            height: auto;
            align-self: center;
            object-fit: cover;
          }
          .home-row3 {
            gap: 20px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-top: 15px;
            align-items: center;
            justify-content: center;
          }
          .home-manado {
            flex: 0 0 auto;
            width: 450px;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-btn104 {
            left: 90px;
            width: 275px;
            bottom: 25px;
            height: 40px;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            padding-top: 4px;
            border-width: 0px;
            padding-left: 20px;
            border-radius: 100px;
            padding-right: 15px;
            flex-direction: row;
            padding-bottom: 7px;
            justify-content: center;
            background-color: #f7f6f6;
          }
          .home-btn104:focus {
            transform: scale(0.96);
          }
          .home-btn104:hover {
            cursor: pointer;
            transform: scale(1.15);
            background-color: var(--dl-color-gray-900);
          }
          .home-text28 {
            color: rgb(52, 52, 52);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Lato;
            font-weight: 700;
            line-height: auto;
            margin-right: 6px;
          }
          .home-image10 {
            width: 25px;
            align-self: center;
            margin-top: 2px;
            object-fit: cover;
          }
          .home-image11 {
            width: 100%;
            align-self: center;
            object-fit: cover;
          }
          .home-makasar {
            flex: 0 0 auto;
            width: 450px;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-btn105 {
            left: 90px;
            width: 275px;
            bottom: 25px;
            height: 40px;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            padding-top: 4px;
            border-width: 0px;
            padding-left: 20px;
            border-radius: 100px;
            padding-right: 15px;
            flex-direction: row;
            padding-bottom: 7px;
            justify-content: center;
            background-color: #f7f6f6;
          }
          .home-btn105:focus {
            transform: scale(0.96);
          }
          .home-btn105:hover {
            cursor: pointer;
            transform: scale(1.15);
            background-color: var(--dl-color-gray-900);
          }
          .home-text31 {
            color: rgb(52, 52, 52);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Lato;
            font-weight: 700;
            line-height: auto;
            margin-right: 6px;
          }
          .home-image12 {
            width: 25px;
            align-self: center;
            margin-top: 2px;
            object-fit: cover;
          }
          .home-image13 {
            width: 100%;
            align-self: center;
            object-fit: cover;
          }
          .home-row4 {
            gap: 20px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-top: 15px;
            align-items: center;
            justify-content: center;
          }
          .home-medan {
            flex: 0 0 auto;
            width: 450px;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
          }
          .home-image14 {
            width: 100%;
            height: auto;
            align-self: center;
            object-fit: cover;
          }
          .home-btn106 {
            left: 90px;
            width: 275px;
            bottom: 25px;
            height: 40px;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            padding-top: 4px;
            border-width: 0px;
            padding-left: 20px;
            border-radius: 100px;
            padding-right: 15px;
            flex-direction: row;
            padding-bottom: 7px;
            justify-content: center;
            background-color: #f7f6f6;
          }
          .home-btn106:focus {
            transform: scale(0.96);
          }
          .home-btn106:hover {
            cursor: pointer;
            transform: scale(1.15);
            background-color: var(--dl-color-gray-900);
          }
          .home-text34 {
            color: rgb(52, 52, 52);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Lato;
            font-weight: 700;
            line-height: auto;
            margin-right: 6px;
          }
          .home-image15 {
            width: 25px;
            align-self: center;
            margin-top: 2px;
            object-fit: cover;
          }
          .home-serpong {
            flex: 0 0 auto;
            width: 450px;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image16 {
            width: 100%;
            height: auto;
            align-self: center;
            object-fit: cover;
          }
          .home-btn107 {
            left: 90px;
            width: 275px;
            bottom: 25px;
            height: 40px;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            padding-top: 4px;
            border-width: 0px;
            padding-left: 20px;
            border-radius: 100px;
            padding-right: 15px;
            flex-direction: row;
            padding-bottom: 7px;
            justify-content: center;
            background-color: #f7f6f6;
          }
          .home-btn107:focus {
            transform: scale(0.96);
          }
          .home-btn107:hover {
            cursor: pointer;
            transform: scale(1.15);
            background-color: var(--dl-color-gray-900);
          }
          .home-text35 {
            color: rgb(52, 52, 52);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Lato;
            font-weight: 700;
            line-height: auto;
            margin-right: 6px;
          }
          .home-image17 {
            width: 25px;
            align-self: center;
            margin-top: 2px;
            object-fit: cover;
          }
          .home-samarinda {
            flex: 0 0 auto;
            width: 450px;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-btn108 {
            left: 90px;
            width: 275px;
            bottom: 25px;
            height: 40px;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            padding-top: 4px;
            border-width: 0px;
            padding-left: 20px;
            border-radius: 100px;
            padding-right: 15px;
            flex-direction: row;
            padding-bottom: 7px;
            justify-content: center;
            background-color: #f7f6f6;
          }
          .home-btn108:focus {
            transform: scale(0.96);
          }
          .home-btn108:hover {
            cursor: pointer;
            transform: scale(1.15);
            background-color: var(--dl-color-gray-900);
          }
          .home-text36 {
            color: rgb(52, 52, 52);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Lato;
            font-weight: 700;
            line-height: auto;
            margin-right: 6px;
          }
          .home-image18 {
            width: 25px;
            align-self: center;
            margin-top: 2px;
            object-fit: cover;
          }
          .home-image19 {
            width: 100%;
            height: auto;
            align-self: center;
            object-fit: cover;
          }
          .home-balikpapan {
            flex: 0 0 auto;
            width: 450px;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
          }
          .home-image20 {
            width: 100%;
            height: auto;
            align-self: center;
            object-fit: cover;
          }
          .home-btn109 {
            left: 90px;
            width: 275px;
            bottom: 25px;
            height: 40px;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            padding-top: 4px;
            border-width: 0px;
            padding-left: 20px;
            border-radius: 100px;
            padding-right: 15px;
            flex-direction: row;
            padding-bottom: 7px;
            justify-content: center;
            background-color: #f7f6f6;
          }
          .home-btn109:focus {
            transform: scale(0.96);
          }
          .home-btn109:hover {
            cursor: pointer;
            transform: scale(1.15);
            background-color: var(--dl-color-gray-900);
          }
          .home-text39 {
            color: rgb(52, 52, 52);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Lato;
            font-weight: 700;
            line-height: auto;
            margin-right: 6px;
          }
          .home-image21 {
            width: 25px;
            align-self: center;
            margin-top: 2px;
            object-fit: cover;
          }
          .home-jayapura {
            flex: 0 0 auto;
            width: 450px;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image22 {
            width: 100%;
            height: auto;
            align-self: center;
            object-fit: cover;
          }
          .home-btn110 {
            left: 90px;
            width: 275px;
            bottom: 25px;
            height: 40px;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            padding-top: 4px;
            border-width: 0px;
            padding-left: 20px;
            border-radius: 100px;
            padding-right: 15px;
            flex-direction: row;
            padding-bottom: 7px;
            justify-content: center;
            background-color: #f7f6f6;
          }
          .home-btn110:focus {
            transform: scale(0.96);
          }
          .home-btn110:hover {
            cursor: pointer;
            transform: scale(1.15);
            background-color: var(--dl-color-gray-900);
          }
          .home-text42 {
            color: rgb(52, 52, 52);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Lato;
            font-weight: 700;
            line-height: auto;
            margin-right: 6px;
          }
          .home-image23 {
            width: 25px;
            align-self: center;
            margin-top: 2px;
            object-fit: cover;
          }
          .home-jogjakarta {
            flex: 0 0 auto;
            width: 450px;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-btn111 {
            left: 90px;
            width: 275px;
            bottom: 25px;
            height: 40px;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            padding-top: 4px;
            border-width: 0px;
            padding-left: 20px;
            border-radius: 100px;
            padding-right: 15px;
            flex-direction: row;
            padding-bottom: 7px;
            justify-content: center;
            background-color: #f7f6f6;
          }
          .home-btn111:focus {
            transform: scale(0.96);
          }
          .home-btn111:hover {
            cursor: pointer;
            transform: scale(1.15);
            background-color: var(--dl-color-gray-900);
          }
          .home-text45 {
            color: rgb(52, 52, 52);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Lato;
            font-weight: 700;
            line-height: auto;
            margin-right: 6px;
          }
          .home-image24 {
            width: 25px;
            align-self: center;
            margin-top: 2px;
            object-fit: cover;
          }
          .home-image25 {
            width: 100%;
            align-self: center;
            object-fit: cover;
          }
          .home-row5 {
            gap: 20px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-top: 15px;
            align-items: center;
            margin-bottom: 300px;
            justify-content: center;
          }
          .home-semarang {
            width: 450px;
            height: auto;
            display: flex;
            position: relative;
          }
          .home-image26 {
            width: 100%;
            align-self: center;
            object-fit: cover;
          }
          .home-btn112 {
            left: 90px;
            right: right;
            width: 275px;
            bottom: 25px;
            height: 40px;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            padding-top: 4px;
            border-width: 0px;
            padding-left: 20px;
            border-radius: 100px;
            padding-right: 15px;
            flex-direction: row;
            padding-bottom: 7px;
            justify-content: center;
            background-color: #f7f6f6;
          }
          .home-btn112:focus {
            transform: scale(0.96);
          }
          .home-btn112:hover {
            cursor: pointer;
            transform: scale(1.15);
            background-color: var(--dl-color-gray-900);
          }
          .home-text46 {
            color: rgb(52, 52, 52);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Lato;
            font-weight: 700;
            line-height: auto;
            margin-right: 6px;
          }
          .home-image27 {
            width: 25px;
            align-self: center;
            margin-top: 2px;
            object-fit: cover;
          }
          .home-surabaya {
            width: 450px;
            height: auto;
            display: flex;
            position: relative;
          }
          .home-image28 {
            width: 100%;
            align-self: center;
            object-fit: cover;
          }
          .home-btn2 {
            top: top;
            left: 90px;
            right: right;
            width: 275px;
            bottom: 25px;
            height: 40px;
            display: flex;
            position: absolute;
            transition: 0.3s;
            align-items: center;
            padding-top: 4px;
            border-width: 0px;
            padding-left: 20px;
            border-radius: 100px;
            padding-right: 15px;
            flex-direction: row;
            padding-bottom: 7px;
            justify-content: center;
            background-color: #f7f6f6;
          }
          .home-btn2:focus {
            transform: scale(0.96);
          }
          .home-btn2:hover {
            cursor: pointer;
            transform: scale(1.15);
            background-color: var(--dl-color-gray-900);
          }
          .home-text47 {
            color: rgb(52, 52, 52);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Lato;
            font-weight: 700;
            line-height: auto;
            margin-right: 6px;
          }
          .home-image29 {
            width: 25px;
            align-self: center;
            margin-top: 2px;
            object-fit: cover;
          }
          .home-rally-doa-large {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text48 {
            font-size: 6rem;
            align-self: center;
            margin-top: 112px;
            text-align: center;
            margin-bottom: 55px;
          }
          .home-row11 {
            gap: 20px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-top: 15px;
            align-items: center;
            justify-content: center;
          }
          .home-bali1 {
            flex: 0 0 auto;
            width: 450px;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
          }
          .home-image30 {
            width: 100%;
            height: auto;
            align-self: center;
            object-fit: cover;
          }
          .home-link3 {
            left: 90px;
            width: 275px;
            bottom: 25px;
            height: 40px;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            padding-top: 4px;
            border-width: 0px;
            padding-left: 20px;
            border-radius: 100px;
            padding-right: 15px;
            flex-direction: row;
            padding-bottom: 7px;
            justify-content: center;
            text-decoration: none;
            background-color: #f7f6f6;
          }
          .home-link3:focus {
            transform: scale(0.96);
          }
          .home-link3:hover {
            cursor: pointer;
            transform: scale(1.15);
            background-color: var(--dl-color-gray-900);
          }
          .home-text49 {
            color: rgb(52, 52, 52);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Lato;
            font-weight: 700;
            line-height: auto;
            margin-right: 6px;
          }
          .home-image31 {
            width: 25px;
            align-self: center;
            margin-top: 2px;
            object-fit: cover;
          }
          .home-tasik1 {
            flex: 0 0 auto;
            width: 450px;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image32 {
            width: 100%;
            height: auto;
            align-self: center;
            object-fit: cover;
          }
          .home-link4 {
            left: 90px;
            width: 275px;
            bottom: 25px;
            height: 40px;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            padding-top: 4px;
            border-width: 0px;
            padding-left: 20px;
            border-radius: 100px;
            padding-right: 15px;
            flex-direction: row;
            padding-bottom: 7px;
            justify-content: center;
            text-decoration: none;
            background-color: #f7f6f6;
          }
          .home-link4:focus {
            transform: scale(0.96);
          }
          .home-link4:hover {
            cursor: pointer;
            transform: scale(1.15);
            background-color: var(--dl-color-gray-900);
          }
          .home-text52 {
            color: rgb(52, 52, 52);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Lato;
            font-weight: 700;
            line-height: auto;
            margin-right: 6px;
          }
          .home-image33 {
            width: 25px;
            align-self: center;
            margin-top: 2px;
            object-fit: cover;
          }
          .home-bandung1 {
            flex: 0 0 auto;
            width: 450px;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-link5 {
            left: 90px;
            width: 275px;
            bottom: 25px;
            height: 40px;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            padding-top: 4px;
            border-width: 0px;
            padding-left: 20px;
            border-radius: 100px;
            padding-right: 15px;
            flex-direction: row;
            padding-bottom: 7px;
            justify-content: center;
            text-decoration: none;
            background-color: #f7f6f6;
          }
          .home-link5:focus {
            transform: scale(0.96);
          }
          .home-link5:hover {
            cursor: pointer;
            transform: scale(1.15);
            background-color: var(--dl-color-gray-900);
          }
          .home-text55 {
            color: rgb(52, 52, 52);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Lato;
            font-weight: 700;
            line-height: auto;
            margin-right: 6px;
          }
          .home-image34 {
            width: 25px;
            align-self: center;
            margin-top: 2px;
            object-fit: cover;
          }
          .home-image35 {
            width: 100%;
            height: auto;
            align-self: center;
            object-fit: cover;
          }
          .home-row21 {
            gap: 20px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-top: 15px;
            align-items: center;
            justify-content: center;
          }
          .home-jakarta1 {
            flex: 0 0 auto;
            width: 450px;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
          }
          .home-link6 {
            left: 90px;
            width: 275px;
            bottom: 25px;
            height: 40px;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            padding-top: 4px;
            border-width: 0px;
            padding-left: 20px;
            border-radius: 100px;
            padding-right: 15px;
            flex-direction: row;
            padding-bottom: 7px;
            justify-content: center;
            text-decoration: none;
            background-color: #f7f6f6;
          }
          .home-link6:focus {
            transform: scale(0.96);
          }
          .home-link6:hover {
            cursor: pointer;
            transform: scale(1.15);
            background-color: var(--dl-color-gray-900);
          }
          .home-text58 {
            color: rgb(52, 52, 52);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Lato;
            font-weight: 700;
            line-height: auto;
            margin-right: 6px;
          }
          .home-image36 {
            width: 25px;
            align-self: center;
            margin-top: 2px;
            object-fit: cover;
          }
          .home-image37 {
            width: 100%;
            height: auto;
            align-self: center;
            object-fit: cover;
          }
          .home-manado1 {
            flex: 0 0 auto;
            width: 450px;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-btn117 {
            left: 90px;
            width: 275px;
            bottom: 25px;
            height: 40px;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            padding-top: 4px;
            border-width: 0px;
            padding-left: 20px;
            border-radius: 100px;
            padding-right: 15px;
            flex-direction: row;
            padding-bottom: 7px;
            justify-content: center;
            background-color: #f7f6f6;
          }
          .home-btn117:focus {
            transform: scale(0.96);
          }
          .home-btn117:hover {
            cursor: pointer;
            transform: scale(1.15);
            background-color: var(--dl-color-gray-900);
          }
          .home-text61 {
            color: rgb(52, 52, 52);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Lato;
            font-weight: 700;
            line-height: auto;
            margin-right: 6px;
          }
          .home-image38 {
            width: 25px;
            align-self: center;
            margin-top: 2px;
            object-fit: cover;
          }
          .home-image39 {
            width: 100%;
            align-self: center;
            object-fit: cover;
          }
          .home-makasar1 {
            flex: 0 0 auto;
            width: 450px;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-btn118 {
            left: 90px;
            width: 275px;
            bottom: 25px;
            height: 40px;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            padding-top: 4px;
            border-width: 0px;
            padding-left: 20px;
            border-radius: 100px;
            padding-right: 15px;
            flex-direction: row;
            padding-bottom: 7px;
            justify-content: center;
            background-color: #f7f6f6;
          }
          .home-btn118:focus {
            transform: scale(0.96);
          }
          .home-btn118:hover {
            cursor: pointer;
            transform: scale(1.15);
            background-color: var(--dl-color-gray-900);
          }
          .home-text64 {
            color: rgb(52, 52, 52);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Lato;
            font-weight: 700;
            line-height: auto;
            margin-right: 6px;
          }
          .home-image40 {
            width: 25px;
            align-self: center;
            margin-top: 2px;
            object-fit: cover;
          }
          .home-image41 {
            width: 100%;
            align-self: center;
            object-fit: cover;
          }
          .home-row31 {
            gap: 20px;
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            margin-top: 15px;
            align-items: center;
            justify-content: center;
          }
          .home-medan1 {
            flex: 0 0 auto;
            width: 450px;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
          }
          .home-image42 {
            width: 100%;
            height: auto;
            align-self: center;
            object-fit: cover;
          }
          .home-btn119 {
            left: 90px;
            width: 275px;
            bottom: 25px;
            height: 40px;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            padding-top: 4px;
            border-width: 0px;
            padding-left: 20px;
            border-radius: 100px;
            padding-right: 15px;
            flex-direction: row;
            padding-bottom: 7px;
            justify-content: center;
            background-color: #f7f6f6;
          }
          .home-btn119:focus {
            transform: scale(0.96);
          }
          .home-btn119:hover {
            cursor: pointer;
            transform: scale(1.15);
            background-color: var(--dl-color-gray-900);
          }
          .home-text67 {
            color: rgb(52, 52, 52);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Lato;
            font-weight: 700;
            line-height: auto;
            margin-right: 6px;
          }
          .home-image43 {
            width: 25px;
            align-self: center;
            margin-top: 2px;
            object-fit: cover;
          }
          .home-serpong1 {
            flex: 0 0 auto;
            width: 450px;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image44 {
            width: 100%;
            height: auto;
            align-self: center;
            object-fit: cover;
          }
          .home-btn120 {
            left: 90px;
            width: 275px;
            bottom: 25px;
            height: 40px;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            padding-top: 4px;
            border-width: 0px;
            padding-left: 20px;
            border-radius: 100px;
            padding-right: 15px;
            flex-direction: row;
            padding-bottom: 7px;
            justify-content: center;
            background-color: #f7f6f6;
          }
          .home-btn120:focus {
            transform: scale(0.96);
          }
          .home-btn120:hover {
            cursor: pointer;
            transform: scale(1.15);
            background-color: var(--dl-color-gray-900);
          }
          .home-text68 {
            color: rgb(52, 52, 52);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Lato;
            font-weight: 700;
            line-height: auto;
            margin-right: 6px;
          }
          .home-image45 {
            width: 25px;
            align-self: center;
            margin-top: 2px;
            object-fit: cover;
          }
          .home-samarinda1 {
            flex: 0 0 auto;
            width: 450px;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-btn121 {
            left: 90px;
            width: 275px;
            bottom: 25px;
            height: 40px;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            padding-top: 4px;
            border-width: 0px;
            padding-left: 20px;
            border-radius: 100px;
            padding-right: 15px;
            flex-direction: row;
            padding-bottom: 7px;
            justify-content: center;
            background-color: #f7f6f6;
          }
          .home-btn121:focus {
            transform: scale(0.96);
          }
          .home-btn121:hover {
            cursor: pointer;
            transform: scale(1.15);
            background-color: var(--dl-color-gray-900);
          }
          .home-text69 {
            color: rgb(52, 52, 52);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Lato;
            font-weight: 700;
            line-height: auto;
            margin-right: 6px;
          }
          .home-image46 {
            width: 25px;
            align-self: center;
            margin-top: 2px;
            object-fit: cover;
          }
          .home-image47 {
            width: 100%;
            height: auto;
            align-self: center;
            object-fit: cover;
          }
          .home-row41 {
            gap: 20px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-top: 15px;
            align-items: center;
            justify-content: center;
          }
          .home-balikpapan1 {
            flex: 0 0 auto;
            width: 450px;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
          }
          .home-image48 {
            width: 100%;
            height: auto;
            align-self: center;
            object-fit: cover;
          }
          .home-btn122 {
            left: 90px;
            width: 275px;
            bottom: 25px;
            height: 40px;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            padding-top: 4px;
            border-width: 0px;
            padding-left: 20px;
            border-radius: 100px;
            padding-right: 15px;
            flex-direction: row;
            padding-bottom: 7px;
            justify-content: center;
            background-color: #f7f6f6;
          }
          .home-btn122:focus {
            transform: scale(0.96);
          }
          .home-btn122:hover {
            cursor: pointer;
            transform: scale(1.15);
            background-color: var(--dl-color-gray-900);
          }
          .home-text72 {
            color: rgb(52, 52, 52);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Lato;
            font-weight: 700;
            line-height: auto;
            margin-right: 6px;
          }
          .home-image49 {
            width: 25px;
            align-self: center;
            margin-top: 2px;
            object-fit: cover;
          }
          .home-jayapura1 {
            flex: 0 0 auto;
            width: 450px;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image50 {
            width: 100%;
            height: auto;
            align-self: center;
            object-fit: cover;
          }
          .home-btn123 {
            left: 90px;
            width: 275px;
            bottom: 25px;
            height: 40px;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            padding-top: 4px;
            border-width: 0px;
            padding-left: 20px;
            border-radius: 100px;
            padding-right: 15px;
            flex-direction: row;
            padding-bottom: 7px;
            justify-content: center;
            background-color: #f7f6f6;
          }
          .home-btn123:focus {
            transform: scale(0.96);
          }
          .home-btn123:hover {
            cursor: pointer;
            transform: scale(1.15);
            background-color: var(--dl-color-gray-900);
          }
          .home-text75 {
            color: rgb(52, 52, 52);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Lato;
            font-weight: 700;
            line-height: auto;
            margin-right: 6px;
          }
          .home-image51 {
            width: 25px;
            align-self: center;
            margin-top: 2px;
            object-fit: cover;
          }
          .home-jogjakarta1 {
            flex: 0 0 auto;
            width: 450px;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-btn124 {
            left: 90px;
            width: 275px;
            bottom: 25px;
            height: 40px;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            padding-top: 4px;
            border-width: 0px;
            padding-left: 20px;
            border-radius: 100px;
            padding-right: 15px;
            flex-direction: row;
            padding-bottom: 7px;
            justify-content: center;
            background-color: #f7f6f6;
          }
          .home-btn124:focus {
            transform: scale(0.96);
          }
          .home-btn124:hover {
            cursor: pointer;
            transform: scale(1.15);
            background-color: var(--dl-color-gray-900);
          }
          .home-text78 {
            color: rgb(52, 52, 52);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Lato;
            font-weight: 700;
            line-height: auto;
            margin-right: 6px;
          }
          .home-image52 {
            width: 25px;
            align-self: center;
            margin-top: 2px;
            object-fit: cover;
          }
          .home-image53 {
            width: 100%;
            align-self: center;
            object-fit: cover;
          }
          .home-row51 {
            gap: 20px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-top: 15px;
            align-items: center;
            margin-bottom: 300px;
            justify-content: center;
          }
          .home-semarang1 {
            width: 450px;
            height: auto;
            display: flex;
            position: relative;
          }
          .home-image54 {
            width: 100%;
            align-self: center;
            object-fit: cover;
          }
          .home-btn125 {
            left: 90px;
            right: right;
            width: 275px;
            bottom: 25px;
            height: 40px;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            padding-top: 4px;
            border-width: 0px;
            padding-left: 20px;
            border-radius: 100px;
            padding-right: 15px;
            flex-direction: row;
            padding-bottom: 7px;
            justify-content: center;
            background-color: #f7f6f6;
          }
          .home-btn125:focus {
            transform: scale(0.96);
          }
          .home-btn125:hover {
            cursor: pointer;
            transform: scale(1.15);
            background-color: var(--dl-color-gray-900);
          }
          .home-text79 {
            color: rgb(52, 52, 52);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Lato;
            font-weight: 700;
            line-height: auto;
            margin-right: 6px;
          }
          .home-image55 {
            width: 25px;
            align-self: center;
            margin-top: 2px;
            object-fit: cover;
          }
          .home-surabaya1 {
            width: 450px;
            height: auto;
            display: flex;
            position: relative;
          }
          .home-image56 {
            width: 100%;
            align-self: center;
            object-fit: cover;
          }
          .home-btn21 {
            top: top;
            left: 90px;
            right: right;
            width: 275px;
            bottom: 25px;
            height: 40px;
            display: flex;
            position: absolute;
            transition: 0.3s;
            align-items: center;
            padding-top: 4px;
            border-width: 0px;
            padding-left: 20px;
            border-radius: 100px;
            padding-right: 15px;
            flex-direction: row;
            padding-bottom: 7px;
            justify-content: center;
            background-color: #f7f6f6;
          }
          .home-btn21:focus {
            transform: scale(0.96);
          }
          .home-btn21:hover {
            cursor: pointer;
            transform: scale(1.15);
            background-color: var(--dl-color-gray-900);
          }
          .home-text80 {
            color: rgb(52, 52, 52);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Lato;
            font-weight: 700;
            line-height: auto;
            margin-right: 6px;
          }
          .home-image57 {
            width: 25px;
            align-self: center;
            margin-top: 2px;
            object-fit: cover;
          }
          @media (max-width: 1440px) {
            .home-profile-saya {
              height: auto;
              padding: var(--dl-space-space-sixunits);
            }
            .home-text {
              margin-top: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text01 {
              margin: 0px;
              font-size: 1.2rem;
              text-align: justify;
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .home-ayat {
              height: auto;
              padding: 150px;
            }
            .home-text05 {
              font-size: 1.2rem;
              padding-left: 0%;
              padding-right: 0%;
            }
            .home-text06 {
              font-size: 1.2rem;
              padding-left: 0%;
            }
            .home-visi-misi {
              height: auto;
            }
            .home-text07 {
              font-size: 5.5rem;
              margin-top: var(--dl-space-space-threeunits);
            }
            .home-container1 {
              width: 1096px;
            }
            .home-text08 {
              width: 40%;
              font-size: 1.2rem;
            }
            .home-misi {
              flex-direction: row;
            }
            .home-header-misi {
              width: 50%;
              align-self: flex-start;
              justify-content: flex-end;
            }
            .home-container2 {
              width: 70%;
            }
            .home-text09 {
              font-size: 5.5rem;
              align-self: center;
            }
            .home-text10 {
              color: rgba(0, 0, 0, 0.6);
              font-size: 1.2rem;
              font-style: normal;
              margin-top: var(--dl-space-space-twounits);
              font-weight: 400;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: 10%;
              margin-bottom: var(--dl-space-space-fiveunits);
            }
            .home-rally-doa-small {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-text15 {
              font-size: 5rem;
              margin-top: var(--dl-space-space-sixunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-row1 {
              gap: var(--dl-space-space-halfunit);
              height: auto;
              flex-wrap: wrap;
              align-self: center;
              justify-content: center;
            }
            .home-bali {
              width: 325px;
              height: auto;
              align-items: center;
              justify-content: center;
            }
            .home-image02 {
              width: 100%;
              height: auto;
            }
            .home-link {
              left: 0px;
              right: 0px;
              bottom: 20px;
              margin: auto;
              padding: 5px;
              position: absolute;
              font-size: 1.5rem;
              align-items: center;
              justify-content: center;
            }
            .home-text16 {
              color: rgb(52, 52, 52);
              font-size: 1.5rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image03 {
              margin-top: 0px;
            }
            .home-tasik {
              width: 325px;
              height: auto;
              align-items: center;
              justify-content: center;
            }
            .home-image04 {
              width: 100%;
              height: auto;
            }
            .home-link1 {
              left: 0px;
              right: 0px;
              bottom: 20px;
              margin: auto;
              padding: 5px;
              position: absolute;
              font-size: 1.5rem;
              align-items: center;
              justify-content: center;
            }
            .home-text19 {
              color: rgb(52, 52, 52);
              font-size: 1.5rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image05 {
              margin-top: 0px;
            }
            .home-row2 {
              gap: var(--dl-space-space-halfunit);
              flex-wrap: wrap;
              margin-top: var(--dl-space-space-halfunit);
            }
            .home-bandung {
              width: 325px;
              height: auto;
              align-items: center;
              justify-content: center;
            }
            .home-btn102 {
              left: 0px;
              right: 0px;
              bottom: 20px;
              margin: auto;
              padding: 5px;
              position: absolute;
              font-size: 1.5rem;
              align-items: center;
              justify-content: center;
            }
            .home-text22 {
              color: rgb(52, 52, 52);
              font-size: 1.5rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image06 {
              margin-top: 0px;
            }
            .home-jakarta {
              width: 325px;
              height: auto;
            }
            .home-link2 {
              left: 0px;
              right: 0px;
              bottom: 20px;
              margin: auto;
              padding-bottom: 4px;
            }
            .home-text25 {
              color: rgb(52, 52, 52);
              font-size: 1.5rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image08 {
              align-self: center;
              margin-top: 0px;
            }
            .home-image09 {
              width: 100%;
              height: auto;
            }
            .home-row3 {
              gap: var(--dl-space-space-halfunit);
              flex-wrap: wrap;
              margin-top: var(--dl-space-space-halfunit);
            }
            .home-manado {
              width: 325px;
              height: auto;
            }
            .home-btn104 {
              left: 0px;
              right: 0px;
              bottom: 20px;
              margin: auto;
              padding-bottom: 4px;
            }
            .home-text28 {
              color: rgb(52, 52, 52);
              font-size: 1.5rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image10 {
              align-self: center;
              margin-top: 0px;
            }
            .home-image11 {
              width: 100%;
            }
            .home-makasar {
              width: 325px;
              height: 100%;
            }
            .home-btn105 {
              left: 0px;
              right: 0px;
              bottom: 20px;
              margin: auto;
              padding-bottom: 4px;
            }
            .home-text31 {
              color: rgb(52, 52, 52);
              font-size: 1.5rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image12 {
              align-self: center;
              margin-top: 0px;
            }
            .home-image13 {
              width: 100%;
            }
            .home-row4 {
              gap: var(--dl-space-space-halfunit);
              flex-wrap: wrap;
              margin-top: var(--dl-space-space-halfunit);
            }
            .home-medan {
              width: 325px;
              height: auto;
            }
            .home-image14 {
              width: 100%;
              height: auto;
            }
            .home-btn106 {
              left: 0px;
              right: 0px;
              width: 275px;
              bottom: 20px;
              height: auto;
              margin: auto;
              padding: 5px;
            }
            .home-text34 {
              color: rgb(52, 52, 52);
              font-size: 1.5rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image15 {
              align-self: center;
              margin-top: 0px;
            }
            .home-serpong {
              width: 325px;
              height: auto;
            }
            .home-image16 {
              width: 100%;
              height: auto;
            }
            .home-btn107 {
              left: 0px;
              right: 0px;
              bottom: 20px;
              margin: auto;
              padding: 5px;
            }
            .home-text35 {
              font-size: 1.5rem;
            }
            .home-image17 {
              align-self: center;
              margin-top: 0px;
            }
            .home-samarinda {
              width: 325px;
              height: auto;
            }
            .home-btn108 {
              left: 0px;
              right: 0px;
              bottom: 20px;
              margin: auto;
              padding: 5px;
            }
            .home-text36 {
              font-size: 1.5rem;
            }
            .home-image18 {
              align-self: center;
              margin-top: 0px;
            }
            .home-image19 {
              width: 100%;
              height: auto;
            }
            .home-balikpapan {
              width: 325px;
              height: auto;
            }
            .home-image20 {
              width: 100%;
              height: auto;
            }
            .home-btn109 {
              left: 0px;
              right: 0px;
              bottom: 20px;
              margin: auto;
              padding: 5px;
            }
            .home-text39 {
              color: rgb(52, 52, 52);
              font-size: 26px;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image21 {
              margin-top: 0px;
            }
            .home-jayapura {
              width: 325px;
              height: auto;
            }
            .home-image22 {
              width: 100%;
              height: auto;
            }
            .home-btn110 {
              left: 0px;
              right: 0px;
              bottom: 20px;
              margin: auto;
              padding: 5px;
            }
            .home-text42 {
              color: rgb(52, 52, 52);
              font-size: 1.5rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image23 {
              margin-top: 0px;
            }
            .home-jogjakarta {
              width: 325px;
              height: auto;
            }
            .home-btn111 {
              left: 0px;
              right: 0px;
              bottom: 20px;
              margin: auto;
              padding: 5px;
            }
            .home-text45 {
              font-size: 26px;
            }
            .home-image24 {
              margin-top: 0px;
            }
            .home-image25 {
              width: 100%;
              height: auto;
            }
            .home-row5 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              height: auto;
              flex-wrap: wrap;
              margin-top: var(--dl-space-space-halfunit);
            }
            .home-semarang {
              width: 325px;
              height: auto;
            }
            .home-image26 {
              width: 100%;
              height: auto;
              align-self: center;
            }
            .home-btn112 {
              left: 0px;
              right: 0px;
              bottom: 20px;
              margin: auto;
              padding: 5px;
            }
            .home-text46 {
              color: rgb(52, 52, 52);
              font-size: 1.5rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image27 {
              margin-top: 0px;
            }
            .home-surabaya {
              width: 325px;
              height: auto;
              align-items: center;
              justify-content: center;
            }
            .home-image28 {
              width: 100%;
            }
            .home-btn2 {
              left: 0px;
              right: 0px;
              bottom: 20px;
              margin: auto;
              padding: 5px;
            }
            .home-text47 {
              font-size: 1.5rem;
            }
            .home-image29 {
              margin-top: 0px;
            }
            .home-rally-doa-large {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-text48 {
              font-size: 5rem;
              margin-top: var(--dl-space-space-sixunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-row11 {
              gap: var(--dl-space-space-halfunit);
              height: auto;
              flex-wrap: wrap;
              align-self: center;
              justify-content: center;
            }
            .home-bali1 {
              width: 325px;
              height: auto;
              align-items: center;
              justify-content: center;
            }
            .home-image30 {
              width: 100%;
              height: auto;
            }
            .home-link3 {
              left: 0px;
              right: 0px;
              bottom: 20px;
              margin: auto;
              padding: 5px;
              position: absolute;
              font-size: 1.5rem;
              align-items: center;
              justify-content: center;
            }
            .home-text49 {
              color: rgb(52, 52, 52);
              font-size: 1.5rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image31 {
              margin-top: 0px;
            }
            .home-tasik1 {
              width: 325px;
              height: auto;
              align-items: center;
              justify-content: center;
            }
            .home-image32 {
              width: 100%;
              height: auto;
            }
            .home-link4 {
              left: 0px;
              right: 0px;
              bottom: 20px;
              margin: auto;
              padding: 5px;
              position: absolute;
              font-size: 1.5rem;
              align-items: center;
              justify-content: center;
            }
            .home-text52 {
              color: rgb(52, 52, 52);
              font-size: 1.5rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image33 {
              margin-top: 0px;
            }
            .home-bandung1 {
              width: 325px;
              height: auto;
              align-items: center;
              justify-content: center;
            }
            .home-link5 {
              left: 0px;
              right: 0px;
              bottom: 20px;
              margin: auto;
              padding: 5px;
              position: absolute;
              font-size: 1.5rem;
              align-items: center;
              justify-content: center;
            }
            .home-text55 {
              color: rgb(52, 52, 52);
              font-size: 1.5rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image34 {
              margin-top: 0px;
            }
            .home-row21 {
              gap: var(--dl-space-space-halfunit);
              flex-wrap: wrap;
              margin-top: var(--dl-space-space-halfunit);
            }
            .home-jakarta1 {
              width: 325px;
              height: auto;
            }
            .home-link6 {
              left: 0px;
              right: 0px;
              bottom: 20px;
              margin: auto;
              padding-bottom: 4px;
            }
            .home-text58 {
              color: rgb(52, 52, 52);
              font-size: 1.5rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image36 {
              align-self: center;
              margin-top: 0px;
            }
            .home-image37 {
              width: 100%;
              height: auto;
            }
            .home-manado1 {
              width: 325px;
              height: auto;
            }
            .home-btn117 {
              left: 0px;
              right: 0px;
              bottom: 20px;
              margin: auto;
              padding-bottom: 4px;
            }
            .home-text61 {
              color: rgb(52, 52, 52);
              font-size: 1.5rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image38 {
              align-self: center;
              margin-top: 0px;
            }
            .home-image39 {
              width: 100%;
            }
            .home-makasar1 {
              width: 325px;
              height: 100%;
            }
            .home-btn118 {
              left: 0px;
              right: 0px;
              bottom: 20px;
              margin: auto;
              padding-bottom: 4px;
            }
            .home-text64 {
              color: rgb(52, 52, 52);
              font-size: 1.5rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image40 {
              align-self: center;
              margin-top: 0px;
            }
            .home-image41 {
              width: 100%;
            }
            .home-row31 {
              gap: var(--dl-space-space-halfunit);
              flex-wrap: wrap;
              margin-top: var(--dl-space-space-halfunit);
            }
            .home-medan1 {
              width: 325px;
              height: auto;
            }
            .home-image42 {
              width: 100%;
              height: auto;
            }
            .home-btn119 {
              left: 0px;
              right: 0px;
              width: 275px;
              bottom: 20px;
              height: auto;
              margin: auto;
              padding: 5px;
            }
            .home-text67 {
              color: rgb(52, 52, 52);
              font-size: 1.5rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image43 {
              align-self: center;
              margin-top: 0px;
            }
            .home-serpong1 {
              width: 325px;
              height: auto;
            }
            .home-image44 {
              width: 100%;
              height: auto;
            }
            .home-btn120 {
              left: 0px;
              right: 0px;
              bottom: 20px;
              margin: auto;
              padding: 5px;
            }
            .home-text68 {
              font-size: 1.5rem;
            }
            .home-image45 {
              align-self: center;
              margin-top: 0px;
            }
            .home-samarinda1 {
              width: 325px;
              height: auto;
            }
            .home-btn121 {
              left: 0px;
              right: 0px;
              bottom: 20px;
              margin: auto;
              padding: 5px;
            }
            .home-text69 {
              font-size: 1.5rem;
            }
            .home-image46 {
              align-self: center;
              margin-top: 0px;
            }
            .home-image47 {
              width: 100%;
              height: auto;
            }
            .home-row41 {
              gap: var(--dl-space-space-halfunit);
              flex-wrap: wrap;
              margin-top: var(--dl-space-space-halfunit);
            }
            .home-balikpapan1 {
              width: 325px;
              height: auto;
            }
            .home-image48 {
              width: 100%;
              height: auto;
            }
            .home-btn122 {
              left: 0px;
              right: 0px;
              bottom: 20px;
              margin: auto;
              padding: 5px;
            }
            .home-text72 {
              color: rgb(52, 52, 52);
              font-size: 26px;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image49 {
              margin-top: 0px;
            }
            .home-jayapura1 {
              width: 325px;
              height: auto;
            }
            .home-image50 {
              width: 100%;
              height: auto;
            }
            .home-btn123 {
              left: 0px;
              right: 0px;
              bottom: 20px;
              margin: auto;
              padding: 5px;
            }
            .home-text75 {
              color: rgb(52, 52, 52);
              font-size: 1.5rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image51 {
              margin-top: 0px;
            }
            .home-jogjakarta1 {
              width: 325px;
              height: auto;
            }
            .home-btn124 {
              left: 0px;
              right: 0px;
              bottom: 20px;
              margin: auto;
              padding: 5px;
            }
            .home-text78 {
              font-size: 26px;
            }
            .home-image52 {
              margin-top: 0px;
            }
            .home-image53 {
              width: 100%;
              height: auto;
            }
            .home-row51 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              height: auto;
              flex-wrap: wrap;
              margin-top: var(--dl-space-space-halfunit);
            }
            .home-semarang1 {
              width: 325px;
              height: auto;
            }
            .home-image54 {
              width: 100%;
              height: auto;
              align-self: center;
            }
            .home-btn125 {
              left: 0px;
              right: 0px;
              bottom: 20px;
              margin: auto;
              padding: 5px;
            }
            .home-text79 {
              color: rgb(52, 52, 52);
              font-size: 1.5rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image55 {
              margin-top: 0px;
            }
            .home-surabaya1 {
              width: 325px;
              height: auto;
              align-items: center;
              justify-content: center;
            }
            .home-image56 {
              width: 100%;
            }
            .home-btn21 {
              left: 0px;
              right: 0px;
              bottom: 20px;
              margin: auto;
              padding: 5px;
            }
            .home-text80 {
              font-size: 1.5rem;
            }
            .home-image57 {
              margin-top: 0px;
            }
          }
          @media (max-width: 1024px) {
            .home-profile-saya {
              padding: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-text {
              font-size: 3rem;
              font-style: normal;
              font-weight: 900;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text01 {
              font-size: 1rem;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-ayat {
              padding: var(--dl-space-space-threeunits);
            }
            .home-isi-ayat {
              gap: var(--dl-space-space-twounits);
            }
            .home-text05 {
              font-size: 1rem;
            }
            .home-text06 {
              font-size: 1rem;
              font-style: italic;
              font-weight: 900;
              padding-left: 0%;
            }
            .home-text07 {
              font-size: 5rem;
              margin-top: var(--dl-space-space-fiveunits);
            }
            .home-text08 {
              width: 40%;
              font-size: 1rem;
            }
            .home-text09 {
              font-size: 5rem;
            }
            .home-text10 {
              font-size: 1rem;
            }
            .home-text15 {
              font-size: 4rem;
              margin-top: var(--dl-space-space-fourunits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-bali {
              width: 250px;
            }
            .home-link {
              width: var(--dl-size-size-xlarge);
              bottom: 15px;
              height: 30px;
            }
            .home-text16 {
              color: rgb(52, 52, 52);
              font-size: 1rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image03 {
              width: 18px;
            }
            .home-tasik {
              width: 250px;
            }
            .home-link1 {
              width: var(--dl-size-size-xlarge);
              bottom: 15px;
              height: 30px;
            }
            .home-text19 {
              color: rgb(52, 52, 52);
              font-size: 1rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image05 {
              width: 18px;
            }
            .home-bandung {
              width: 250px;
            }
            .home-btn102 {
              width: var(--dl-size-size-xlarge);
              bottom: 15px;
              height: 30px;
            }
            .home-text22 {
              color: rgb(52, 52, 52);
              font-size: 1rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image06 {
              width: 18px;
            }
            .home-jakarta {
              width: 250px;
            }
            .home-link2 {
              width: var(--dl-size-size-xlarge);
              bottom: 15px;
              height: 30px;
              padding: 4px;
            }
            .home-text25 {
              color: rgb(52, 52, 52);
              font-size: 1rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image08 {
              width: 18px;
            }
            .home-manado {
              width: 250px;
            }
            .home-btn104 {
              width: var(--dl-size-size-xlarge);
              bottom: 15px;
              height: 30px;
              padding: 4px;
            }
            .home-text28 {
              color: rgb(52, 52, 52);
              font-size: 1rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image10 {
              width: 18px;
            }
            .home-makasar {
              width: 250px;
            }
            .home-btn105 {
              width: var(--dl-size-size-xlarge);
              bottom: 15px;
              height: 30px;
              padding: 4px;
            }
            .home-text31 {
              color: rgb(52, 52, 52);
              font-size: 1rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image12 {
              width: 18px;
            }
            .home-medan {
              width: 250px;
            }
            .home-btn106 {
              width: var(--dl-size-size-xlarge);
              bottom: 15px;
              height: 30px;
            }
            .home-text34 {
              color: rgb(52, 52, 52);
              font-size: 1rem;
            }
            .home-image15 {
              width: 18px;
            }
            .home-serpong {
              width: 250px;
            }
            .home-btn107 {
              width: var(--dl-size-size-xlarge);
              bottom: 15px;
              height: 30px;
              padding: 4px;
            }
            .home-text35 {
              color: rgb(52, 52, 52);
            }
            .home-image17 {
              width: 18px;
            }
            .home-samarinda {
              width: 250px;
            }
            .home-btn108 {
              width: var(--dl-size-size-xlarge);
              bottom: 15px;
              height: 30px;
            }
            .home-text36 {
              color: rgb(52, 52, 52);
              font-size: 1rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image18 {
              width: 18px;
            }
            .home-balikpapan {
              width: 250px;
            }
            .home-btn109 {
              width: var(--dl-size-size-xlarge);
              bottom: 15px;
              height: 30px;
            }
            .home-text39 {
              color: rgb(52, 52, 52);
              font-size: 1rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image21 {
              width: 18px;
            }
            .home-jayapura {
              width: 250px;
            }
            .home-btn110 {
              width: var(--dl-size-size-xlarge);
              bottom: 15px;
              height: 30px;
            }
            .home-text42 {
              color: rgb(52, 52, 52);
              font-size: 1rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image23 {
              width: 18px;
            }
            .home-jogjakarta {
              width: 250px;
            }
            .home-btn111 {
              width: var(--dl-size-size-xlarge);
              bottom: 15px;
              height: 30px;
            }
            .home-text45 {
              color: rgb(52, 52, 52);
              font-size: 1rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image24 {
              width: 18px;
            }
            .home-row5 {
              margin-bottom: 150px;
            }
            .home-semarang {
              width: 250px;
            }
            .home-btn112 {
              width: var(--dl-size-size-xlarge);
              height: 30px;
            }
            .home-text46 {
              color: rgb(52, 52, 52);
              font-size: 1rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image27 {
              width: 18px;
            }
            .home-surabaya {
              width: 250px;
            }
            .home-btn2 {
              width: var(--dl-size-size-xlarge);
              height: 30px;
            }
            .home-text47 {
              color: rgb(52, 52, 52);
              font-size: 1rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image29 {
              width: 18px;
            }
            .home-text48 {
              font-size: 4rem;
              margin-top: var(--dl-space-space-fourunits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-bali1 {
              width: 250px;
            }
            .home-link3 {
              width: var(--dl-size-size-xlarge);
              bottom: 15px;
              height: 30px;
            }
            .home-text49 {
              color: rgb(52, 52, 52);
              font-size: 1rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image31 {
              width: 18px;
            }
            .home-tasik1 {
              width: 250px;
            }
            .home-link4 {
              width: var(--dl-size-size-xlarge);
              bottom: 15px;
              height: 30px;
            }
            .home-text52 {
              color: rgb(52, 52, 52);
              font-size: 1rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image33 {
              width: 18px;
            }
            .home-bandung1 {
              width: 250px;
            }
            .home-link5 {
              width: var(--dl-size-size-xlarge);
              bottom: 15px;
              height: 30px;
            }
            .home-text55 {
              color: rgb(52, 52, 52);
              font-size: 1rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image34 {
              width: 18px;
            }
            .home-jakarta1 {
              width: 250px;
            }
            .home-link6 {
              width: var(--dl-size-size-xlarge);
              bottom: 15px;
              height: 30px;
              padding: 4px;
            }
            .home-text58 {
              color: rgb(52, 52, 52);
              font-size: 1rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image36 {
              width: 18px;
            }
            .home-manado1 {
              width: 250px;
            }
            .home-btn117 {
              width: var(--dl-size-size-xlarge);
              bottom: 15px;
              height: 30px;
              padding: 4px;
            }
            .home-text61 {
              color: rgb(52, 52, 52);
              font-size: 1rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image38 {
              width: 18px;
            }
            .home-makasar1 {
              width: 250px;
            }
            .home-btn118 {
              width: var(--dl-size-size-xlarge);
              bottom: 15px;
              height: 30px;
              padding: 4px;
            }
            .home-text64 {
              color: rgb(52, 52, 52);
              font-size: 1rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image40 {
              width: 18px;
            }
            .home-medan1 {
              width: 250px;
            }
            .home-btn119 {
              width: var(--dl-size-size-xlarge);
              bottom: 15px;
              height: 30px;
            }
            .home-text67 {
              color: rgb(52, 52, 52);
              font-size: 1rem;
            }
            .home-image43 {
              width: 18px;
            }
            .home-serpong1 {
              width: 250px;
            }
            .home-btn120 {
              width: var(--dl-size-size-xlarge);
              bottom: 15px;
              height: 30px;
              padding: 4px;
            }
            .home-text68 {
              color: rgb(52, 52, 52);
            }
            .home-image45 {
              width: 18px;
            }
            .home-samarinda1 {
              width: 250px;
            }
            .home-btn121 {
              width: var(--dl-size-size-xlarge);
              bottom: 15px;
              height: 30px;
            }
            .home-text69 {
              color: rgb(52, 52, 52);
              font-size: 1rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image46 {
              width: 18px;
            }
            .home-balikpapan1 {
              width: 250px;
            }
            .home-btn122 {
              width: var(--dl-size-size-xlarge);
              bottom: 15px;
              height: 30px;
            }
            .home-text72 {
              color: rgb(52, 52, 52);
              font-size: 1rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image49 {
              width: 18px;
            }
            .home-jayapura1 {
              width: 250px;
            }
            .home-btn123 {
              width: var(--dl-size-size-xlarge);
              bottom: 15px;
              height: 30px;
            }
            .home-text75 {
              color: rgb(52, 52, 52);
              font-size: 1rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image51 {
              width: 18px;
            }
            .home-jogjakarta1 {
              width: 250px;
            }
            .home-btn124 {
              width: var(--dl-size-size-xlarge);
              bottom: 15px;
              height: 30px;
            }
            .home-text78 {
              color: rgb(52, 52, 52);
              font-size: 1rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image52 {
              width: 18px;
            }
            .home-row51 {
              margin-bottom: 150px;
            }
            .home-semarang1 {
              width: 250px;
            }
            .home-btn125 {
              width: var(--dl-size-size-xlarge);
              height: 30px;
            }
            .home-text79 {
              color: rgb(52, 52, 52);
              font-size: 1rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image55 {
              width: 18px;
            }
            .home-surabaya1 {
              width: 250px;
            }
            .home-btn21 {
              width: var(--dl-size-size-xlarge);
              height: 30px;
            }
            .home-text80 {
              color: rgb(52, 52, 52);
              font-size: 1rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image57 {
              width: 18px;
            }
          }
          @media (max-width: 768px) {
            .home-profile-saya {
              padding: var(--dl-space-space-twounits);
            }
            .home-ayat {
              padding: var(--dl-space-space-twounits);
            }
            .home-isi-ayat {
              gap: var(--dl-space-space-unit);
            }
            .home-text05 {
              color: rgba(0, 0, 0, 0.4);
              font-size: 1rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              line-height: 1.5;
              text-transform: none;
              text-decoration: none;
            }
            .home-text06 {
              padding-left: 0%;
            }
            .home-text07 {
              margin-top: var(--dl-space-space-threeunits);
            }
            .home-text10 {
              margin-right: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-text15 {
              font-size: 3.5rem;
            }
            .home-bali {
              width: 175px;
            }
            .home-link {
              width: var(--dl-size-size-large);
              bottom: 10px;
              height: 20px;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .home-text16 {
              font-size: 12px;
              margin-right: 3px;
            }
            .home-image03 {
              width: 14px;
            }
            .home-tasik {
              width: 175px;
            }
            .home-link1 {
              width: var(--dl-size-size-large);
              bottom: 10px;
              height: 20px;
              padding: 0px;
            }
            .home-text19 {
              font-size: 12px;
              margin-right: 3px;
            }
            .home-image05 {
              width: 14px;
            }
            .home-bandung {
              width: 175px;
            }
            .home-btn102 {
              width: var(--dl-size-size-large);
              bottom: 10px;
              height: 20px;
              padding: 0px;
            }
            .home-text22 {
              font-size: 12px;
              margin-right: 5px;
            }
            .home-image06 {
              width: 14px;
            }
            .home-jakarta {
              width: 175px;
            }
            .home-link2 {
              width: var(--dl-size-size-large);
              bottom: 10px;
              height: 20px;
              padding: 0px;
            }
            .home-text25 {
              font-size: 12px;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 3px;
            }
            .home-image08 {
              width: 14px;
            }
            .home-manado {
              width: 175px;
            }
            .home-btn104 {
              width: var(--dl-size-size-large);
              bottom: 10px;
              height: 20px;
              padding: 0px;
            }
            .home-text28 {
              color: rgb(52, 52, 52);
              font-size: 12px;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 3px;
            }
            .home-image10 {
              width: 14px;
            }
            .home-makasar {
              width: 175px;
            }
            .home-btn105 {
              width: var(--dl-size-size-large);
              bottom: 10px;
              height: 20px;
              padding: 0px;
            }
            .home-text31 {
              font-size: 12px;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 3px;
            }
            .home-image12 {
              width: 14px;
            }
            .home-medan {
              width: 175px;
            }
            .home-btn106 {
              width: var(--dl-size-size-large);
              bottom: 10px;
              height: 20px;
              padding: 0px;
            }
            .home-text34 {
              color: rgb(52, 52, 52);
              font-size: 12px;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 3px;
            }
            .home-image15 {
              width: 14px;
            }
            .home-serpong {
              width: 175px;
            }
            .home-btn107 {
              width: var(--dl-size-size-large);
              bottom: 10px;
              height: 20px;
              padding: 0px;
            }
            .home-text35 {
              color: rgb(52, 52, 52);
              font-size: 12px;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 3px;
            }
            .home-image17 {
              width: 14px;
            }
            .home-samarinda {
              width: 175px;
            }
            .home-btn108 {
              width: var(--dl-size-size-large);
              bottom: 10px;
              height: 20px;
              padding: 0px;
            }
            .home-text36 {
              color: rgb(52, 52, 52);
              font-size: 12px;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 3px;
            }
            .home-image18 {
              width: 14px;
            }
            .home-balikpapan {
              width: 175px;
            }
            .home-btn109 {
              width: var(--dl-size-size-large);
              bottom: 10px;
              height: 20px;
              padding: 0px;
            }
            .home-text39 {
              color: rgb(52, 52, 52);
              font-size: 12px;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 3px;
            }
            .home-image21 {
              width: 14px;
            }
            .home-jayapura {
              width: 175px;
            }
            .home-btn110 {
              width: var(--dl-size-size-large);
              bottom: 10px;
              height: 20px;
              padding: 0px;
            }
            .home-text42 {
              color: rgb(52, 52, 52);
              font-size: 12px;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 3px;
            }
            .home-image23 {
              width: 14px;
            }
            .home-jogjakarta {
              width: 175px;
            }
            .home-btn111 {
              width: var(--dl-size-size-large);
              bottom: 10px;
              height: 20px;
              padding: 0px;
            }
            .home-text45 {
              color: rgb(52, 52, 52);
              font-size: 12px;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 3px;
            }
            .home-image24 {
              width: 14px;
            }
            .home-row5 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-semarang {
              width: 175px;
            }
            .home-btn112 {
              width: var(--dl-size-size-large);
              bottom: 10px;
              height: 20px;
              padding: 0px;
            }
            .home-text46 {
              color: rgb(52, 52, 52);
              font-size: 12px;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 3px;
            }
            .home-image27 {
              width: 14px;
            }
            .home-surabaya {
              width: 175px;
            }
            .home-btn2 {
              width: var(--dl-size-size-large);
              bottom: 10px;
              height: 20px;
              padding: 0px;
            }
            .home-text47 {
              color: rgb(52, 52, 52);
              font-size: 12px;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 3px;
            }
            .home-image29 {
              width: 14px;
            }
            .home-text48 {
              font-size: 3.5rem;
            }
            .home-bali1 {
              width: 175px;
            }
            .home-link3 {
              width: var(--dl-size-size-large);
              bottom: 10px;
              height: 20px;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .home-text49 {
              font-size: 12px;
              margin-right: 3px;
            }
            .home-image31 {
              width: 14px;
            }
            .home-tasik1 {
              width: 175px;
            }
            .home-link4 {
              width: var(--dl-size-size-large);
              bottom: 10px;
              height: 20px;
              padding: 0px;
            }
            .home-text52 {
              font-size: 12px;
              margin-right: 3px;
            }
            .home-image33 {
              width: 14px;
            }
            .home-bandung1 {
              width: 175px;
            }
            .home-link5 {
              width: var(--dl-size-size-large);
              bottom: 10px;
              height: 20px;
              padding: 0px;
            }
            .home-text55 {
              font-size: 12px;
              margin-right: 5px;
            }
            .home-image34 {
              width: 14px;
            }
            .home-jakarta1 {
              width: 175px;
            }
            .home-link6 {
              width: var(--dl-size-size-large);
              bottom: 10px;
              height: 20px;
              padding: 0px;
            }
            .home-text58 {
              font-size: 12px;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 3px;
            }
            .home-image36 {
              width: 14px;
            }
            .home-manado1 {
              width: 175px;
            }
            .home-btn117 {
              width: var(--dl-size-size-large);
              bottom: 10px;
              height: 20px;
              padding: 0px;
            }
            .home-text61 {
              color: rgb(52, 52, 52);
              font-size: 12px;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 3px;
            }
            .home-image38 {
              width: 14px;
            }
            .home-makasar1 {
              width: 175px;
            }
            .home-btn118 {
              width: var(--dl-size-size-large);
              bottom: 10px;
              height: 20px;
              padding: 0px;
            }
            .home-text64 {
              font-size: 12px;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 3px;
            }
            .home-image40 {
              width: 14px;
            }
            .home-medan1 {
              width: 175px;
            }
            .home-btn119 {
              width: var(--dl-size-size-large);
              bottom: 10px;
              height: 20px;
              padding: 0px;
            }
            .home-text67 {
              color: rgb(52, 52, 52);
              font-size: 12px;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 3px;
            }
            .home-image43 {
              width: 14px;
            }
            .home-serpong1 {
              width: 175px;
            }
            .home-btn120 {
              width: var(--dl-size-size-large);
              bottom: 10px;
              height: 20px;
              padding: 0px;
            }
            .home-text68 {
              color: rgb(52, 52, 52);
              font-size: 12px;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 3px;
            }
            .home-image45 {
              width: 14px;
            }
            .home-samarinda1 {
              width: 175px;
            }
            .home-btn121 {
              width: var(--dl-size-size-large);
              bottom: 10px;
              height: 20px;
              padding: 0px;
            }
            .home-text69 {
              color: rgb(52, 52, 52);
              font-size: 12px;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 3px;
            }
            .home-image46 {
              width: 14px;
            }
            .home-balikpapan1 {
              width: 175px;
            }
            .home-btn122 {
              width: var(--dl-size-size-large);
              bottom: 10px;
              height: 20px;
              padding: 0px;
            }
            .home-text72 {
              color: rgb(52, 52, 52);
              font-size: 12px;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 3px;
            }
            .home-image49 {
              width: 14px;
            }
            .home-jayapura1 {
              width: 175px;
            }
            .home-btn123 {
              width: var(--dl-size-size-large);
              bottom: 10px;
              height: 20px;
              padding: 0px;
            }
            .home-text75 {
              color: rgb(52, 52, 52);
              font-size: 12px;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 3px;
            }
            .home-image51 {
              width: 14px;
            }
            .home-jogjakarta1 {
              width: 175px;
            }
            .home-btn124 {
              width: var(--dl-size-size-large);
              bottom: 10px;
              height: 20px;
              padding: 0px;
            }
            .home-text78 {
              color: rgb(52, 52, 52);
              font-size: 12px;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 3px;
            }
            .home-image52 {
              width: 14px;
            }
            .home-row51 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-semarang1 {
              width: 175px;
            }
            .home-btn125 {
              width: var(--dl-size-size-large);
              bottom: 10px;
              height: 20px;
              padding: 0px;
            }
            .home-text79 {
              color: rgb(52, 52, 52);
              font-size: 12px;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 3px;
            }
            .home-image55 {
              width: 14px;
            }
            .home-surabaya1 {
              width: 175px;
            }
            .home-btn21 {
              width: var(--dl-size-size-large);
              bottom: 10px;
              height: 20px;
              padding: 0px;
            }
            .home-text80 {
              color: rgb(52, 52, 52);
              font-size: 12px;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 3px;
            }
            .home-image57 {
              width: 14px;
            }
          }
          @media (max-width: 425px) {
            .home-profile-saya {
              padding: var(--dl-space-space-oneandhalfunits);
            }
            .home-text {
              font-size: 2rem;
            }
            .home-text01 {
              margin: 0%;
              font-size: 0.8rem;
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-ayat {
              gap: var(--dl-space-space-oneandhalfunits);
              padding: var(--dl-space-space-unit);
              justify-content: center;
            }
            .home-image {
              width: auto;
              height: 100%;
            }
            .home-image01 {
              height: var(--dl-size-size-medium);
            }
            .home-isi-ayat {
              gap: var(--dl-space-space-unit);
            }
            .home-text05 {
              font-size: 0.8rem;
            }
            .home-text06 {
              font-size: 0.8rem;
            }
            .home-header-visi {
              width: 65%;
              align-self: flex-end;
              align-items: center;
              justify-content: flex-start;
            }
            .home-text07 {
              font-size: 3rem;
              align-self: center;
              margin-top: var(--dl-space-space-unit);
              margin-left: 0%;
            }
            .home-container1 {
              width: 100%;
              height: 5px;
              align-self: center;
              margin-top: var(--dl-space-space-unit);
              align-items: center;
              margin-left: var(--dl-space-space-halfunit);
              justify-content: center;
            }
            .home-text08 {
              width: auto;
              margin: var(--dl-space-space-unit);
              font-size: 1rem;
            }
            .home-misi {
              flex-direction: column;
            }
            .home-header-misi {
              width: 60%;
              height: auto;
              position: relative;
              align-self: flex-start;
            }
            .home-container2 {
              width: 60%;
              height: 5px;
              align-self: center;
              align-items: center;
              margin-right: var(--dl-space-space-halfunit);
              justify-content: center;
            }
            .home-text09 {
              font-size: 3rem;
            }
            .home-text10 {
              width: auto;
              font-size: 1rem;
              align-self: center;
              margin-top: var(--dl-space-space-unit);
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-rally-doa-small {
              width: 100%;
              display: flex;
            }
            .home-text15 {
              font-size: 2rem;
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-row1 {
              gap: 5px;
              margin-top: 0px;
            }
            .home-bali {
              width: 150px;
            }
            .home-link {
              width: 100px;
              bottom: 8px;
              height: 16px;
              padding: 0px;
              font-size: 1rem;
            }
            .home-text16 {
              color: rgb(52, 52, 52);
              font-size: 0.5rem;
              font-style: normal;
              text-align: left;
              font-family: Lato;
              font-weight: 700;
              margin-right: 2px;
            }
            .home-image03 {
              width: 12px;
            }
            .home-tasik {
              width: 150px;
            }
            .home-link1 {
              width: 100px;
              bottom: 8px;
              height: 16px;
              padding: 0px;
            }
            .home-text19 {
              color: rgb(52, 52, 52);
              font-size: 0.5rem;
              font-style: normal;
              text-align: left;
              font-family: Lato;
              font-weight: 700;
              margin-right: 2px;
            }
            .home-image05 {
              width: 12px;
            }
            .home-row2 {
              gap: 5px;
              margin-top: 5px;
            }
            .home-bandung {
              width: 150px;
            }
            .home-btn102 {
              width: 100px;
              bottom: 8px;
              height: 16px;
              padding: 0px;
              font-size: 1rem;
            }
            .home-text22 {
              color: rgb(52, 52, 52);
              font-size: 0.5rem;
              font-style: normal;
              text-align: left;
              font-family: Lato;
              font-weight: 700;
              margin-right: 2px;
            }
            .home-image06 {
              width: 12px;
            }
            .home-jakarta {
              width: 150px;
            }
            .home-link2 {
              width: 100px;
              bottom: 8px;
              height: 16px;
              padding: 0px;
              font-size: 1rem;
              align-items: center;
              justify-content: center;
            }
            .home-text25 {
              color: rgb(52, 52, 52);
              font-size: 0.5rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 2px;
            }
            .home-image08 {
              width: 12px;
            }
            .home-row3 {
              gap: 5px;
              margin-top: 5px;
            }
            .home-manado {
              width: 150px;
            }
            .home-btn104 {
              width: 100px;
              bottom: 8px;
              height: 16px;
              padding: 0px;
              font-size: 1rem;
              align-items: center;
              justify-content: center;
            }
            .home-text28 {
              color: rgb(52, 52, 52);
              font-size: 0.5rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image10 {
              width: 12px;
            }
            .home-makasar {
              width: 150px;
            }
            .home-btn105 {
              width: 100px;
              bottom: 8px;
              height: 16px;
              padding: 0px;
              font-size: 1rem;
              align-items: center;
              justify-content: center;
            }
            .home-text31 {
              color: rgb(52, 52, 52);
              font-size: 0.5rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 2px;
            }
            .home-image12 {
              width: 12px;
            }
            .home-row4 {
              gap: 5px;
              margin-top: 5px;
            }
            .home-medan {
              width: 150px;
            }
            .home-btn106 {
              width: 100px;
              bottom: 8px;
              height: 16px;
              padding: 0px;
              font-size: 1rem;
              align-items: center;
              justify-content: center;
            }
            .home-text34 {
              color: rgb(52, 52, 52);
              font-size: 0.5rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 2px;
            }
            .home-image15 {
              width: 12px;
            }
            .home-serpong {
              width: 150px;
            }
            .home-btn107 {
              width: 100px;
              bottom: 8px;
              height: 16px;
              padding: 0px;
              font-size: 1rem;
              align-items: center;
              justify-content: center;
            }
            .home-text35 {
              color: rgb(52, 52, 52);
              font-size: 0.5rem;
              align-self: center;
              font-style: normal;
              text-align: center;
              font-family: Lato;
              font-weight: 700;
              margin-right: 2px;
              text-transform: capitalize;
            }
            .home-image17 {
              width: 12px;
            }
            .home-samarinda {
              width: 150px;
            }
            .home-btn108 {
              width: 100px;
              bottom: 8px;
              height: 16px;
              padding: 0px;
              font-size: 1rem;
              align-items: center;
              justify-content: center;
            }
            .home-text36 {
              color: rgb(52, 52, 52);
              font-size: 0.5rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 2px;
            }
            .home-image18 {
              width: 12px;
            }
            .home-balikpapan {
              width: 150px;
            }
            .home-btn109 {
              width: 100px;
              bottom: 8px;
              height: 16px;
              padding: 0px;
              font-size: 1rem;
              align-items: center;
              justify-content: center;
            }
            .home-text39 {
              color: rgb(52, 52, 52);
              font-size: 0.5rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 2px;
            }
            .home-image21 {
              width: 12px;
            }
            .home-jayapura {
              width: 150px;
            }
            .home-btn110 {
              width: 100px;
              bottom: 8px;
              height: 16px;
              padding: 0px;
              font-size: 1rem;
              align-items: center;
              justify-content: center;
            }
            .home-text42 {
              color: rgb(52, 52, 52);
              font-size: 0.5rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 2px;
            }
            .home-image23 {
              width: 12px;
            }
            .home-jogjakarta {
              width: 150px;
            }
            .home-btn111 {
              width: 100px;
              bottom: 8px;
              height: 16px;
              padding: 0px;
              font-size: 1rem;
              align-items: center;
              padding-top: 0px;
              justify-content: center;
            }
            .home-text45 {
              color: rgb(52, 52, 52);
              font-size: 0.5rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 2px;
              margin-bottom: 0px;
            }
            .home-image24 {
              width: 12px;
            }
            .home-row5 {
              gap: 5px;
              margin-top: 5px;
              margin-bottom: var(--dl-space-space-fiveunits);
            }
            .home-semarang {
              width: 150px;
            }
            .home-btn112 {
              width: 100px;
              bottom: 8px;
              height: 16px;
              padding: 0px;
              font-size: 1rem;
              align-items: center;
              justify-content: center;
            }
            .home-text46 {
              color: rgb(52, 52, 52);
              font-size: 0.5rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 2px;
            }
            .home-image27 {
              width: 12px;
            }
            .home-surabaya {
              width: 150px;
            }
            .home-btn2 {
              width: 100px;
              bottom: 8px;
              height: 16px;
              padding: 0px;
              font-size: 1rem;
              align-items: center;
              justify-content: center;
            }
            .home-text47 {
              color: rgb(52, 52, 52);
              font-size: 0.5rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 2px;
            }
            .home-image29 {
              width: 12px;
            }
            .home-rally-doa-large {
              width: 100%;
              display: none;
            }
            .home-text48 {
              font-size: 2rem;
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-row11 {
              gap: 5px;
              margin-top: 0px;
            }
            .home-bali1 {
              width: 150px;
            }
            .home-link3 {
              width: 100px;
              bottom: 8px;
              height: 16px;
              padding: 0px;
              font-size: 1rem;
            }
            .home-text49 {
              color: rgb(52, 52, 52);
              font-size: 0.5rem;
              font-style: normal;
              text-align: left;
              font-family: Lato;
              font-weight: 700;
              margin-right: 2px;
            }
            .home-image31 {
              width: 12px;
            }
            .home-tasik1 {
              width: 150px;
            }
            .home-link4 {
              width: 100px;
              bottom: 8px;
              height: 16px;
              padding: 0px;
            }
            .home-text52 {
              color: rgb(52, 52, 52);
              font-size: 0.5rem;
              font-style: normal;
              text-align: left;
              font-family: Lato;
              font-weight: 700;
              margin-right: 2px;
            }
            .home-image33 {
              width: 12px;
            }
            .home-bandung1 {
              width: 150px;
            }
            .home-link5 {
              width: 100px;
              bottom: 8px;
              height: 16px;
              padding: 0px;
              font-size: 1rem;
            }
            .home-text55 {
              color: rgb(52, 52, 52);
              font-size: 0.5rem;
              font-style: normal;
              text-align: left;
              font-family: Lato;
              font-weight: 700;
              margin-right: 2px;
            }
            .home-image34 {
              width: 12px;
            }
            .home-row21 {
              gap: 5px;
              margin-top: 5px;
            }
            .home-jakarta1 {
              width: 150px;
            }
            .home-link6 {
              width: 100px;
              bottom: 8px;
              height: 16px;
              padding: 0px;
              font-size: 1rem;
              align-items: center;
              justify-content: center;
            }
            .home-text58 {
              color: rgb(52, 52, 52);
              font-size: 0.5rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 2px;
            }
            .home-image36 {
              width: 12px;
            }
            .home-manado1 {
              width: 150px;
            }
            .home-btn117 {
              width: 100px;
              bottom: 8px;
              height: 16px;
              padding: 0px;
              font-size: 1rem;
              align-items: center;
              justify-content: center;
            }
            .home-text61 {
              color: rgb(52, 52, 52);
              font-size: 0.5rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
            }
            .home-image38 {
              width: 12px;
            }
            .home-makasar1 {
              width: 150px;
            }
            .home-btn118 {
              width: 100px;
              bottom: 8px;
              height: 16px;
              padding: 0px;
              font-size: 1rem;
              align-items: center;
              justify-content: center;
            }
            .home-text64 {
              color: rgb(52, 52, 52);
              font-size: 0.5rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 2px;
            }
            .home-image40 {
              width: 12px;
            }
            .home-row31 {
              gap: 5px;
              margin-top: 5px;
            }
            .home-medan1 {
              width: 150px;
            }
            .home-btn119 {
              width: 100px;
              bottom: 8px;
              height: 16px;
              padding: 0px;
              font-size: 1rem;
              align-items: center;
              justify-content: center;
            }
            .home-text67 {
              color: rgb(52, 52, 52);
              font-size: 0.5rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 2px;
            }
            .home-image43 {
              width: 12px;
            }
            .home-serpong1 {
              width: 150px;
            }
            .home-btn120 {
              width: 100px;
              bottom: 8px;
              height: 16px;
              padding: 0px;
              font-size: 1rem;
              align-items: center;
              justify-content: center;
            }
            .home-text68 {
              color: rgb(52, 52, 52);
              font-size: 0.5rem;
              align-self: center;
              font-style: normal;
              text-align: center;
              font-family: Lato;
              font-weight: 700;
              margin-right: 2px;
              text-transform: capitalize;
            }
            .home-image45 {
              width: 12px;
            }
            .home-samarinda1 {
              width: 150px;
            }
            .home-btn121 {
              width: 100px;
              bottom: 8px;
              height: 16px;
              padding: 0px;
              font-size: 1rem;
              align-items: center;
              justify-content: center;
            }
            .home-text69 {
              color: rgb(52, 52, 52);
              font-size: 0.5rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 2px;
            }
            .home-image46 {
              width: 12px;
            }
            .home-row41 {
              gap: 5px;
              margin-top: 5px;
            }
            .home-balikpapan1 {
              width: 150px;
            }
            .home-btn122 {
              width: 100px;
              bottom: 8px;
              height: 16px;
              padding: 0px;
              font-size: 1rem;
              align-items: center;
              justify-content: center;
            }
            .home-text72 {
              color: rgb(52, 52, 52);
              font-size: 0.5rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 2px;
            }
            .home-image49 {
              width: 12px;
            }
            .home-jayapura1 {
              width: 150px;
            }
            .home-btn123 {
              width: 100px;
              bottom: 8px;
              height: 16px;
              padding: 0px;
              font-size: 1rem;
              align-items: center;
              justify-content: center;
            }
            .home-text75 {
              color: rgb(52, 52, 52);
              font-size: 0.5rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 2px;
            }
            .home-image51 {
              width: 12px;
            }
            .home-jogjakarta1 {
              width: 150px;
            }
            .home-btn124 {
              width: 100px;
              bottom: 8px;
              height: 16px;
              padding: 0px;
              font-size: 1rem;
              align-items: center;
              padding-top: 0px;
              justify-content: center;
            }
            .home-text78 {
              color: rgb(52, 52, 52);
              font-size: 0.5rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 2px;
              margin-bottom: 0px;
            }
            .home-image52 {
              width: 12px;
            }
            .home-row51 {
              gap: 5px;
              margin-top: 5px;
              margin-bottom: var(--dl-space-space-fiveunits);
            }
            .home-semarang1 {
              width: 150px;
            }
            .home-btn125 {
              width: 100px;
              bottom: 8px;
              height: 16px;
              padding: 0px;
              font-size: 1rem;
              align-items: center;
              justify-content: center;
            }
            .home-text79 {
              color: rgb(52, 52, 52);
              font-size: 0.5rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 2px;
            }
            .home-image55 {
              width: 12px;
            }
            .home-surabaya1 {
              width: 150px;
            }
            .home-btn21 {
              width: 100px;
              bottom: 8px;
              height: 16px;
              padding: 0px;
              font-size: 1rem;
              align-items: center;
              justify-content: center;
            }
            .home-text80 {
              color: rgb(52, 52, 52);
              font-size: 0.5rem;
              font-style: normal;
              font-family: Lato;
              font-weight: 700;
              margin-right: 2px;
            }
            .home-image57 {
              width: 12px;
            }
          }
          @media (max-width: 375px) {
            .home-profile-saya {
              padding-top: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-text {
              font-size: 2rem;
              margin-bottom: 5px;
            }
            .home-text01 {
              font-size: 0.8rem;
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-ayat {
              padding: var(--dl-space-space-halfunit);
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .home-image {
              width: auto;
              height: auto;
              align-self: center;
              align-items: center;
              justify-content: flex-start;
            }
            .home-image01 {
              width: auto;
              height: var(--dl-size-size-medium);
              align-self: center;
            }
            .home-isi-ayat {
              gap: 5px;
              width: auto;
              position: relative;
              align-self: center;
              align-items: flex-start;
              justify-content: flex-start;
            }
            .home-text05 {
              font-size: 0.6rem;
              align-self: flex-start;
            }
            .home-text06 {
              font-size: 0.6rem;
              align-self: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
