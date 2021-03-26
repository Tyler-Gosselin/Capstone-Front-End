import React, { useState, useEffect } from "react";
import axios from "axios"

function Home() {
  const [news, setNews] = useState()

  useEffect(() => {
   
  })


  return (
    <div className="home-container">
      <div className="content-wrapper">
        <div className="major-news-wrapper">
          <h1>Major News</h1>
        </div>
        <div className="recent-news-wrapper">
          <h2>Recent News</h2>
          <div className="news-list">
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
