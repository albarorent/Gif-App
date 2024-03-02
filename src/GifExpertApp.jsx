import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layaout from "./Layout/Layaout";
import Home from "./Pages/Home";

function GifExpertApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layaout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default GifExpertApp;
