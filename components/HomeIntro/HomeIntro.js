import React from 'react';
import Image from "next/image";

function HomeIntro() {
  return (
    <div className="home-intro">
      <Image src="/images/home-intro.jpg" alt="Home intro" width={1920} height={1080}/>
    </div>
  );
}

export default HomeIntro;
