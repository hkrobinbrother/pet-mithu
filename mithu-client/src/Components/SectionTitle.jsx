import React from 'react';
import { MdOutlinePets } from 'react-icons/md';

const SectionTitle = ({firstHeading,SecondHeading,thirdHeding}) => {
    return (
       <div className="text-center space-y-4">
               <div className="flex justify-center items-center text-2xl">
                   <p>
                 <MdOutlinePets className="text-red-400 text-center" />
               </p>
               </div>
               <p className="text-xl text-red-500 font-bold">{firstHeading}</p>
               <h1 className="text-4xl font-extrabold text-gray-700">
                 {SecondHeading}
               </h1>
               <p className="text-xl text-gray-600 font-bold">
                 {thirdHeding}
               </p>
             </div>
    );
};

export default SectionTitle;