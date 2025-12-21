import { useLoaderData } from "react-router";


const SinglePet = () => {
    const loader = useLoaderData()
    console.log(loader)
    const {name} = loader
    return (
        <div className="">
            <div className="pt-22">
                pet name :{name}
            </div>
        </div>
    );
};

export default SinglePet;