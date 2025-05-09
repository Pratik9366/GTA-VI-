import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

const Hero = () => {
  const [showContent, setShowContent] = React.useState(false);

  useGSAP(() => {
    const timeLine = gsap.timeline();
    timeLine
      .to(".vi-mask-group", {
        rotate: 20,
        duration: 2,
        ease: "power4.easeInOut",
        transformOrigin: "50% 50%",
      })
      .to(".vi-mask-group", {
        scale: 10,
        duration: 2,
        delay: -1.8,
        ease: "Expo.easeInOut",
        transformOrigin: "50% 50%",
        opacity: 0,
        onUpdate: function () {
          if (this.progress() >= 0.9) {
            document.querySelector(".svg").remove();
            setShowContent(true);
            this.kill();
          }
        },
      });
  });

  useGSAP(()=>{
    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", function(e){
      console.log(e.clientX, e.clientY);
    })
  },[showContent])

  return (
    <>
      <div className="svg flex justify-center items-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg4.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full">
          <div className="landing w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-10 h-1 bg-white"></div>
                  <div className="line w-8 h-1 bg-white"></div>
                  <div className="line w-5 h-1 bg-white"></div>
                </div>
                <h3 className="text-4xl -mt-[10px]">Rockstar</h3>
              </div>
            </div>
            <div className="imgesdiv relative overflow-hidden w-full h-screen">
              <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
              ></img>
              <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="./bg4.png"
              ></img>
              <div className="text absolute top-10 left-1/2 -translate-x-1/2 gap-3 flex flex-col">
              <h1 className="text-[10rem] leading-none -ml-30">grand</h1>
              <h1 className="text-[10rem] leading-none ml-20">theft</h1>
              <h1 className="text-[10rem] leading-none -ml-30">auto </h1>
            </div>
              <img
                className="absolute -bottom-[40%] left-1/2 -translate-x-1/2 scale-[1.2]"
                src="./girlbg.png"
              />
            </div>
            <div className="btmbar absolute bottom-0 left-0 w-full py-10 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="text-2xl font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>
              <img
                className="absolute h-[45px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
              ></img>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
