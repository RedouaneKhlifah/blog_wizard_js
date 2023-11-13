import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RouteLayoute from "./layouts/RouteLayoute";
import Home from "./pages/Home";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Register from "./pages/Register";
import ThankYou from "./pages/ThankYou";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteLayoute />}>
      <Route index element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Categories" element={<Categories />} />
      <Route path="Register" element={<Register />} />
      <Route path="/Thankyou/:data" element={<ThankYou />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
