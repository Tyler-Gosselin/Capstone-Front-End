import React from "react";
import Carousel from "../Carousel/Carousel";
import { SliderData } from "../Carousel/SliderData";

function Home() {
  return (
    <div className="home-container">
      <div className="content-wrapper">
        <div className="carousel">
          <Carousel slides={SliderData} />
        </div>
        <div className="news-wrapper">
          <div className="Recent News">
            <h1>RECENT NEWS</h1>
          </div>
          <div className="articles">
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
