import  { useEffect, useState } from 'react';

const PetListing = () => {

    const [petList,setPetList] = useState([])

    // useEffect(()=>{
    //     fetch("petListingss")
    //     .then(res=> res.json())
    //     .then(data => setPetList(data))
    // },[])

    return (
        <div>
            {
                petList.map((pet) =>( 
                    <div key={pet.id}>
                        <h1>{pet.name}</h1>
                        {/* <img src={pet.photo} alt="" /> */}
                    </div>
                ))
            }
        </div>
    );
};

export default PetListing;