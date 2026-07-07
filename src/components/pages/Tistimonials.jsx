import { FormatQuote } from "@mui/icons-material"
import { testimonials } from "../../data/DummyData"
//
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Heading } from "../common/HeadingTitle";



export const Tistimonials = () => {

    const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,       // عدد الشرائح المعروضة على الديسكتوب
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,  // أقل من 1024px (تابليت/ديسكتوب صغير)
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,  // أقل من 600px (موبايل)
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};


    return (
    <>
        <section className="testimonials ">
            <div className="container">
                <Heading titlePar="Tistimonials" />
                <Slider {...settings}> {/* هون عم اعمل سلايدر للبوكسات */}
                    {testimonials.map((val) => (
                        <div className="box">
                                <i data-aos='zoom-out-up'>
                                    <FormatQuote/>
                                </i>
                                <p data-aos='zoom-out-down'>{val.text}</p>
                                <div className="img">
                                    <img src={val.images} alt="No" data-aos='zoom-out-right'/>
                                </div>
                                <h3 data-aos='zoom-out'>{val.name}</h3>
                                <label>{val.post}</label>
                        
                        </div>
                    ))}
                    </Slider>
            </div>
        </section>
    
    </>)
}


