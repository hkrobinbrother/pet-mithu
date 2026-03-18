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
    <div className="relative h-[70vh]">
      <Carousel
        autoPlay
        interval={4000}
        transitionTime={800}
        infiniteLoop
        showArrows
        showStatus={false}
        showIndicators
        stopOnHover
      >
        {[img1, img2, img3, img4, img5].map((img, i) => (
          <div key={i} className="h-[70vh]">
            <img
              loading="lazy"
              className="h-full w-full object-cover"
              src={img}
              alt={`banner-${i}`}
            />
          </div>
        ))}
      </Carousel>

      <div className="absolute inset-0 z-50 flex items-center justify-center">
        <BannerText />
      </div>
    </div>
  );
};

export default Banner;
