import React from "react";
import logo from "../../imgs/logo.png";

const Banner = ({ titleFilter, setTitleFilter }) => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <input
            id="search-box"
            placeholder="What is it you truly desire?"
            value={titleFilter}
            onChange={(e) => setTitleFilter(e.target.value)}
          />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
