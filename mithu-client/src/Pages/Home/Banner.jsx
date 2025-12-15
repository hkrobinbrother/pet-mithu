import img1 from "../../../public/images/banner.jpg"
import img2 from "../../../public/images/banner2.jpg"
import img3 from "../../../public/images/banner-3.jpg"
import img4 from "../../../public/images/banner-4.jpg"
import img5 from "../../../public/images/banner5.jpg"

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BannerText from "../Home/BannerText"




const Banner = () => {
  return (
    <div className="relative">
      <div>
        <Carousel
          autoPlay={true}
          interval={2000}
          infiniteLoop={true}
          showArrows={true}
          showStatus={false}
          showIndicators={true}
          stopOnHover={false}
        >
          <div >
            <img src={img1} />
          </div>
          <div>
            <img src={img2} />
          </div>
          <div >
            <img src={img3} />
          </div>
          <div >
            <img src={img4} />
          </div>
          <div >
            <img src={img5} />
          </div>
        </Carousel>
      </div>
     <div className="z-50">
      <BannerText></BannerText>
     </div>
    </div>
  );
};

export default Banner;
