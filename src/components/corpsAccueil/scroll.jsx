/*c:/LES_OUTILS/PremierTest/ReactProjects/projet-figma/src/components/corpsAccueil/scroll.jsx*/
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./scroll.css";
export function Scroll({data}) {
    const settings = {
        dots: true,
        infinite: true, 
        speed: 500,
        slidesToShow: 3.5,
        slidesToScroll: 1
      };
    return (
        <div className="mt">
            <div className="sc">
            <Slider {...settings}>
                {data.map((slide) => (
                    <div key={slide.id} className="bg">
                        <div className="rounded">
                            <img src={slide.image} alt="" className="img1"/>
                        </div>
                        <div className="dt">
                            <p className="tx">{slide.texte}</p>
                            <button className="bt">Voir Plus</button>
                        </div>
                    </div>
                ))}
            </Slider>
            </div>
        </div>
    );
}