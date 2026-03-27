import { useInfiniteQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const DonatePets = () => {
  const axiosPublic = useAxiosPublic();
  const { ref, inView } = useInView();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["donation"],
    queryFn: async ({ pageParam = 1 }) => {
      const res = await axiosPublic.get(
        `/donation?page=${pageParam}&limit=6`
      );
      return res.data;
    },
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length === 0) return undefined;
      return pages.length + 1;
    },
  });

  // scroll trigger
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <div className="w-11/12 md:w-10/12 mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        🐾 Help Pets in Need
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.pages?.map((page, i) =>
          page.map((donate) => {
            const progress =
              (donate.donatedAmount / donate.maxDonation) * 100;

            return (
              <div
                key={donate._id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    className="w-full h-56 object-cover"
                    src={donate.photo}
                    alt={donate.name}
                  />
                  <div className="absolute top-2 right-2 bg-white px-3 py-1 rounded-full text-sm font-semibold shadow">
                    ${donate.donatedAmount}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3 flex flex-col justify-between">
                  <h1 className="text-xl font-bold text-gray-800">
                    {donate.name}
                  </h1>

                  <p className="text-gray-500 text-sm line-clamp-3">
                    {donate.description}
                  </p>

                  {/* Progress */}
                  <div>
                    <div className="flex justify-between text-sm text-gray-500 mb-1">
                      <span>Raised</span>
                      <span>{Math.floor(progress)}%</span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Amount */}
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${donate.donatedAmount}</span>
                    <span>Goal: ${donate.maxDonation}</span>
                  </div>

                  <button className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition">
                    Donate Now ❤️
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Loader */}
      <div ref={ref} className="text-center my-10">
        {isFetchingNextPage && <p>Loading more...</p>}
      </div>
    </div>
  );
};

export default DonatePets;