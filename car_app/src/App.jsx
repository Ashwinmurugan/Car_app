import React, { useEffect, useState } from "react";
import BackGround from "./Components/BackGround/BackGround";
import NavBar from "./Components/Navbar/NavBar";
import Hero from "./Components/Hero/Hero";
const App = () => {
  let heroData = [
    { text1: "Dive into", text2: "What you love" },
    { text1: "Indulge", text2: "your beast" },
    { text1: "Experience", text2: "the incomparable nature" },
    { text1: "Indulge", text2: "your passion" },
    { text1: "Experience the", text2: "first open-top beast" },
    { text1: "Explore EV", text2: "Reserve yourself" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);
  
  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{return count===5?0:count+1})
    },5000)
  },[]);
  
  return (
    <div>
      <BackGround playStatus={playStatus} heroCount={heroCount} />
      <NavBar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
};

export default App;
