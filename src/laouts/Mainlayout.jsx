import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Mainlayout = () => {
  return (
    <div className="mx-auto container space-y-10">
      <Navbar></Navbar>

      <div>
        <Outlet></Outlet>
      </div>
      
      <Footer></Footer>
    </div>
  );
};

export default Mainlayout;