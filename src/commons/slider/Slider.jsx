import { useImperativeHandle, useState } from "react";
import slider from "react-slick/lib/slider";
import Slider from "react-slick/lib/slider";
import { sliderData } from "../../components/Data/Data";


const SliderSlick = () => {
    const [slider,setSlider]=useState(sliderData)
    
        const settings = {
            // dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 2,
            autoplay: true,
            autoplaySpeed: 2500,

        }
    
    return(
        <div>
            <Slider {...settings} className="slider__wrapper">
                {sliderData.map(slide =>
                    <div><img src={slide.img} alt="" /></div>
                )}
          
               
            </Slider>
        </div>
    );
};
export default SliderSlick