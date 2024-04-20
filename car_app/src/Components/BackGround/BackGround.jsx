import React from "react";
import video1 from "../../assets/BUGATTI AUTOMOBILES3.mp4";
import video2 from "../../assets/BUGATTI.mp4";
import video3 from "../../assets/Huayra.mp4";
import video4 from "../../assets/Pagani.mp4";
import video5 from "../../assets/video1.mp4";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import "./BackGround.css";

const BackGround = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className="background fade-in" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
      
    );
  } 
  else if (heroCount === 0) {
    return <img src={image1} className="background fade-in" alt="" />;
    
  } else if (heroCount === 1) {
    return <img src={image2} className="background fade-in" alt="" />;
  } else if (heroCount === 2) {
    return (
      <video className="background fade-in" autoPlay loop muted>
        <source src={video2} type="video/mp4 " />
      </video>
    );
  } else if (heroCount === 3) {
    return (
      <video className="background fade-in " autoPlay loop muted>
        <source src={video3} type="video/mp4" />
      </video>
    );
  } else if (heroCount === 4) {
    return (
      <video className="background fade-in" autoPlay loop muted>
        <source src={video4} type="video/mp4" />
      </video>
    );
  } else if (heroCount === 5) {
    return (
      <video className="background fade-in" autoPlay loop muted>
        <source src={video5} type="video/mp4" />
      </video>
    );
  }
};
export default BackGround;
