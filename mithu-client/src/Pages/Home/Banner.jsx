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
    <div className="relative h-[800px] ">
      <div className="">
        <Carousel
          autoPlay={true}
          interval={2000}
          infiniteLoop={true}
          showArrows={true}
          showStatus={false}
          showIndicators={true}
          stopOnHover={false}
          
        >
          <div  className="h-[800px]" >
            <img className="h-full w-full object-cover" src={img1} />
          </div>
          <div className="h-[800px]">
            <img className="h-full w-full object-cover"  src={img2} />
          </div>
          <div className="h-[800px]">
            <img className="h-full w-full object-cover"  src={img3} />
          </div>
          <div className="h-[800px]">
            <img className="h-full w-full object-cover"  src={img4} />
          </div>
          <div className="h-[800px]">
            <img className="h-full w-full object-cover"  src={img5} />
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
