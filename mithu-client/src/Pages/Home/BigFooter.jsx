import smallDog  from "../../../public/images/2dog.png"
const BigFooter = () => {
  return (
    <div mt-10>
      <footer className="footer bg-amber-50 sm:footer-horizontal  text-base-content mt-10 p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          
          <div className="grid grid-flow-col gap-4">
           
           <img className=" w-full h-60 object-cover" src={ smallDog} alt="" />
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default BigFooter;
