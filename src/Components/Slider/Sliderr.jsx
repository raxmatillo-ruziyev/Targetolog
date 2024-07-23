import React from "react";
import Slider from "react-slick";
import './Slider.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s40 from '../../assets/40.jpg';
import s41 from '../../assets/41.jpg';
import s42 from '../../assets/42.jpg';
import s43 from '../../assets/43.jpg';
import s44 from '../../assets/44.jpg';
import s45 from '../../assets/45.jpg';
import s46 from '../../assets/46.jpg';

const Sliderr = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2 ,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="slider">
      <div className="container">
        <h1 className="slider-title">Отзывы от клиентов</h1>
        <div className="slider-container">
          <Slider {...settings}>
            <div style={{
              textAlign:"center",
              margin:"0 auto",
              width:"100%"
            }}>
              <img src={s40} alt="" width={250} height={400} />
            </div>
            <div style={{
              textAlign:"center",
              margin:"0 auto",
              width:"100%"
            }}>
              <img src={s41} alt="" width={250} height={400} />
            </div>
            <div style={{
              textAlign:"center",
              margin:"0 auto",
              width:"100%"
            }}>
              <img src={s42} alt="" width={250} height={400} />
            </div>
            <div style={{
              textAlign:"center",
              margin:"0 auto",
              width:"100%"
            }}>
              <img src={s43} alt="" width={250} height={400} />
            </div>
            <div style={{
              textAlign:"center",
              margin:"0 auto",
              width:"100%"
            }}>
              <img src={s44} alt="" width={250} height={400} />
            </div>
            <div style={{
              textAlign:"center",
              margin:"0 auto",
              width:"100%"
            }}>
              <img src={s45} alt="" width={250} height={400} />
            </div>
            <div style={{
              textAlign:"center",
              margin:"0 auto",
              width:"100%"
            }}>
              <img src={s46} alt="" width={250} height={400} />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Sliderr;
