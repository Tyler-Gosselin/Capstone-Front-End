import React, { useState, useEffect } from "react";
import Carousel from "../Carousel/Carousel";
import { SliderData } from "../Carousel/SliderData";

function Home() {
  return (
    <div className="home-container">
      <div className="content-wrapper">
          <Carousel slides={SliderData}/>
      </div>
    </div>
  );
}

export default Home;
