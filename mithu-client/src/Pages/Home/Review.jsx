import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { MdTextsms } from "react-icons/md";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "John Doe",
    role: "Pet Owner",
    image: "https://i.pravatar.cc/100?img=1",
    review:
      "Amazing service! I adopted my pet easily and the process was smooth.",
  },
  {
    name: "Sarah Smith",
    role: "Animal Lover",
    image: "https://i.pravatar.cc/100?img=2",
    review: "This platform truly cares about animals. Highly recommended!",
  },
  {
    name: "Michael Lee",
    role: "Volunteer",
    image: "https://i.pravatar.cc/100?img=3",
    review:
      "Great experience working with this community. Very supportive team.",
  },
  {
    name: "Emma Wilson",
    role: "Pet Parent",
    image: "https://i.pravatar.cc/100?img=4",
    review:
      "Found my best friend here. Thank you for this wonderful initiative.",
  },
  {
    name: "Any Wilson",
    role: "Pet Parent",
    image: "https://i.pravatar.cc/100?img=4",
    review:
      "Found my best friend here. Thank you for this wonderful initiative.",
  },
  {
    name: "Min william",
    role: "Pet Parent",
    image: "https://i.pravatar.cc/100?img=4",
    review:
      "Found my best friend here. Thank you for this wonderful initiative.",
  },
];

const Review = () => {
  return (
    <div className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto relative">

        {/* 🔘 Custom Buttons */}
        <button className="custom-prev absolute left-[-60px] top-1/2 -translate-y-1/2 z-10 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition">
          <FaArrowLeft />
        </button>

        <button className="custom-next absolute right-[-60px] top-1/2 -translate-y-1/2 z-10 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition">
          <FaArrowRight />
        </button>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-xl rounded-2xl p-10 text-center transition hover:scale-105 duration-300">

                {/* Icon */}
                <div className="flex justify-center mb-6 text-blue-500">
                  <MdTextsms className="text-6xl" />
                </div>

                {/* Review */}
                <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
                  “{item.review}”
                </p>

                {/* Stars */}
                <div className="flex justify-center mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* User */}
                <div className="flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-full mb-3 border-4 border-blue-500"
                    loading="lazy"
                  />
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-gray-500">{item.role}</p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;