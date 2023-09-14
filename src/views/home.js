import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import ImageSlider from '../components/image-slider'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Indonesia di Hatiku</title>
        <meta property="og:title" content="Indonesia di Hatiku" />
      </Helmet>
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
            sejahtera dan bukan rancangan kecelakaan, untuk memberikan kepadamu
            hari depan yang penuh harapan. Dan apabila kamu berseru dan datang
            untuk berdoa kepada-Ku, maka Aku akan mendengarkan kamu; apabila
            kamu mencari Aku, kamu akan menemukan Aku; apabila kamu menanyakan
            Aku dengan segenap hati, Aku akan memberi kamu menemukan Aku,
            demikianlah firman TUHAN,
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
              eget lacus ac ipsum cursus sollicitudin id eget velit. Duis vitae
              vestibulum ante,
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
              eget lacus ac ipsum cursus sollicitudin id eget velit. Duis vitae
              vestibulum ante,
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
            <Link to="/jakarta" className="home-btn1 button">
              <span className="home-text16">
                <span>10 November 2023</span>
                <br></br>
              </span>
              <img
                alt="image"
                src="/external/pastedimage-ufqa-200h.png"
                className="home-image03"
              />
            </Link>
          </div>
          <div className="home-tasik">
            <img
              alt="image"
              src="/RallyDoaNew/tasik-500w.webp"
              className="home-image04"
            />
            <Link to="/jakarta" className="home-btn101 button">
              <span className="home-text19">
                <span>13 November 2023</span>
                <br></br>
              </span>
              <img
                alt="image"
                src="/external/pastedimage-ufqa-200h.png"
                className="home-image05"
              />
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
            <Link to="/jakarta" className="home-btn103 button">
              <span className="home-text25">
                <span>17 November 2023</span>
                <br></br>
              </span>
              <img
                alt="image"
                src="/external/pastedimage-ufqa-200h.png"
                className="home-image08"
              />
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
            <Link to="/jakarta" className="home-btn113 button">
              <span className="home-text49">
                <span>10 November 2023</span>
                <br></br>
              </span>
              <img
                alt="image"
                src="/external/pastedimage-ufqa-200h.png"
                className="home-image31"
              />
            </Link>
          </div>
          <div className="home-tasik1">
            <img
              alt="image"
              src="/RallyDoaNew/tasik-500w.webp"
              className="home-image32"
            />
            <Link to="/jakarta" className="home-btn114 button">
              <span className="home-text52">
                <span>13 November 2023</span>
                <br></br>
              </span>
              <img
                alt="image"
                src="/external/pastedimage-ufqa-200h.png"
                className="home-image33"
              />
            </Link>
          </div>
          <div className="home-bandung1">
            <Link to="/jakarta" className="home-btn115 button">
              <span className="home-text55">
                <span>14 November 2023</span>
                <br></br>
              </span>
              <img
                alt="image"
                src="/external/pastedimage-ufqa-200h.png"
                className="home-image34"
              />
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
            <Link to="/jakarta" className="home-btn116 button">
              <span className="home-text58">
                <span>17 November 2023</span>
                <br></br>
              </span>
              <img
                alt="image"
                src="/external/pastedimage-ufqa-200h.png"
                className="home-image36"
              />
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
  )
}

export default Home
