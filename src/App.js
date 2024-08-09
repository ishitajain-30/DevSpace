import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar";

// import Hashnode from "./Components/Hashnode";
import Dev from "./Components/Dev";
import Hackernews from "./Components/Hackernews";
// import Producthunt from "./Components/Producthunt";
import Github from "./Components/Github";
import Techcrunch from "./Components/Techcrunch";
import "./index.css";

const App = () => {
  return (
    <div className="  mx-auto ">
      <BrowserRouter>
        <div className="flex md:flex-row flex-col">
          <div className="md:w-1/3">
            <Sidebar />
          </div>

          <div className=" bg-gray-50 w-full  overflow-y-scroll max-h-screen">
            <Routes>
              {/* <Route path="/" element={<Hashnode />} /> */}
              <Route path="/" element={<Dev />} />
              <Route path="/hackernews" element={<Hackernews />} />
              {/* <Route path="/producthunt" element={<Producthunt />} /> */}
              <Route path="/github" element={<Github />} />
              <Route path="/techcrunch" element={<Techcrunch />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
