import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function RouteLayoute() {
  return (
    <div>
      <Navbar />
      <div className="pt-6 flex justify-center ">
        <div className=" w-3/6 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default RouteLayoute;
