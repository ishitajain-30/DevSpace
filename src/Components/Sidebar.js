import React from "react";
import { Link } from "react-router-dom";
// import hashnodeIcon from "../assets/images/hashnode.png";
import devIcon from "../assets/images/dev.webp";
import hackernewsIcon from "../assets/images/hackernews.png";
// import producthuntIcon from "../assets/images/producthunt.png";
import githubIcon from "../assets/images/github.png";
import techcrunchIcon from "../assets/images/techcrunch.png";

const Sidebar = () => {
  return (
    <div className="bg-purple-50  p-4 md:h-screen h-full">
      <div className="bg-white p-4 flex items-center rounded-xl shadow-sm">
        <span className="bg-indigo-100 p-2 text-2xl rounded-xl mr-2">🚀</span>
        <div>
          <h1 className="text-2xl text-indigo-500 font-bold   ">Devspace</h1>
          <span className="text-gray-500 italic text-sm">
            Top posts from the best dev sites.
          </span>
        </div>
      </div>

      <div className="flex  flex-col justify-center my-4 bg-white rounded-xl shadow-sm">
        {/* <Link to="/" >
                    <div className="transform hover:scale-105 hover:bg-indigo-50 duration-100 p-4 flex rounded-xl items-center bg-white ">
                        <img src={hashnodeIcon} alt="logo"
                            className="h-12 w-12 "
                        />
                        <p className="text-2xl px-4 font-bold text-gray-700">Hashnode</p>
                    </div>
                </Link> */}

        <Link to="/" activeClassName="border rounded-xl">
          <div className=" transform hover:scale-105 hover:bg-indigo-50 duration-100 p-4  flex items-center rounded-xl bg-white   ">
            <img src={devIcon} alt="logo" className="h-12 w-12 " />
            <p className="text-2xl px-4 font-bold text-gray-700">Dev.to</p>
          </div>
        </Link>

        <Link to="/hackernews" activeClassName="border rounded-xl">
          <div className=" transform hover:scale-105 hover:bg-indigo-50 duration-100 p-4  flex items-center rounded-xl bg-white   ">
            <img src={hackernewsIcon} alt="logo" className="h-12 w-12 " />
            <p className="text-2xl px-4 font-bold text-gray-700">HackerNews</p>
          </div>
        </Link>

        {/* <Link to="/producthunt" activeClassName="border rounded-xl">
          <div className=" transform hover:scale-105 hover:bg-indigo-50 duration-100 p-4 flex items-center  rounded-xl bg-white  ">
            <img src={producthuntIcon} alt="logo" className="h-12 w-12  " />
            <p className="text-2xl px-4 font-bold text-gray-700">
              Product Hunt
            </p>
          </div>
        </Link> */}

        <Link to="/techcrunch" activeClassName="border rounded-xl">
          <div className="transform hover:scale-105 hover:bg-indigo-50 duration-100 flex p-4 items-center  rounded-xl bg-white  ">
            <img src={techcrunchIcon} alt="logo" className="h-12 w-12 " />
            <p className="text-2xl px-4 font-bold text-gray-700">Techcrunch</p>
          </div>
        </Link>

        <Link to="/github" activeClassName="border rounded-xl">
          <div className=" transform hover:scale-105 hover:bg-indigo-50 duration-100 p-4  flex items-center rounded-xl bg-white  ">
            <img src={githubIcon} alt="logo" className="h-12 w-12  " />
            <p className="text-2xl px-4 font-bold text-gray-700">Github</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
