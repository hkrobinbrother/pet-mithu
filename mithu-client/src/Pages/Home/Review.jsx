import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MdTextsms } from "react-icons/md";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

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
];

const Review = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation,]}
        navigation={true} 
       
        spaceBetween={50}
        slidesPerView={1}
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-lg rounded-xl p-10  flex justify-center   text-center h-full">
              <div className="flex-col justify-center items-center">
                <div className="flex justify-center items-center mb-6">
                  <MdTextsms className="text-8xl" />
                </div>
                <div className="md:flex gap-8">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-40 h-40 rounded-xl mb-4"
                  />
                  <div className="text-start">
                    <h3 className="font-semibold text-6xl">{item.name}</h3>
                    <p className="text-2l text-gray-500 ">{item.role}</p>
                    <p className="mt-4 text-gray-600 text-xl">
                      “{item.review}”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
