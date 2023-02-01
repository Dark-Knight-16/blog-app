import "./Slide.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { sliderData } from "../../SliderData";

export default function Slide() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <>
            <div>
                <Slider {...settings}>
                    {
                        sliderData.map((element, index) => {
                            return (
                                <div className="item" key={index}>
                                    <div className="img">
                                        <img src={element.cover} alt="" />
                                    </div>
                                    <div className="text">
                                        <span>{element.category}</span>
                                        <h3>{element.title}</h3>
                                        <p>{element.desc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </>
    )
}