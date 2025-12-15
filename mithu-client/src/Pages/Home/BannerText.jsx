import { Link } from "react-router";

const BannerText = () => {
    return (
        <div className="absolute inset-0   flex items-center justify-center pointer-events-auto">
            <div className="text-center text-white space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                Adopt a Lovely Pet 🐾
              </h1>
              <p className="text-lg">
                Give them a happy and caring home
              </p>
             
              <Link to="/petListing" className="px-6 py-3 cursor-pointer bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold">
                View Pets
              </Link>
             
            </div>
          </div>
        
    );
};

export default BannerText;