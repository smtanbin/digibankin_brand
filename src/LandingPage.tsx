import Navbar from "./Components/Ux/Navbar";
import { Outlet } from "react-router-dom";
import SideNav from "./Components/Ux/SideNav";





const LandingPage = () => {


  return (
    <main>
      <Navbar />

      <div className="columns col-gapless">
        <div className="column col-3 hide-sm"><SideNav /></div>
        <div className="column col-9 col-sm-12">

          <Outlet />
        </div>
      </div>


    </main>
  );
};

export default LandingPage;
