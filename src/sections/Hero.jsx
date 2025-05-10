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

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -1,
      ease: "expo.inOut",
    });
    gsap.to(".sky", {
      scale: 1.2,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "expo.inOut",
    });
    gsap.to(".bg", {
      scale: 1.2,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "expo.inOut",
    });
    gsap.to(".character", {
      scale: 1.2,
      x: "-50%",
      bottom: "-40%",
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "expo.inOut",
    });
    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "expo.inOut",
    });

    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });

      gsap.to(".sky", {
        x: `${xMove * 0.4}%`,
      });

      gsap.to(".bg", {
        x: `${xMove * 0.4}%`,
      });
    });
  }, [showContent]);

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
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
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
                className="sky scale-[1.5] rotate-[-20deg] absolute top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
              ></img>
              <img
                className="bg scale-[1.8] rotate-[-3deg] absolute top-0 left-0 w-full h-full object-cover"
                src="./bg4.png"
              ></img>
              <div className="text absolute top-10 left-1/2 -translate-x-1/2 gap-3 flex flex-col scale-[1.4] rotate-[-10deg]">
                <h1 className="text-[10rem] leading-none -ml-30">grand</h1>
                <h1 className="text-[10rem] leading-none ml-20">theft</h1>
                <h1 className="text-[10rem] leading-none -ml-30">auto </h1>
              </div>
              <img
                className="character absolute -bottom-[150%] left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg]"
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
          <div className="w-full h-screen flex items-center justify-center">
            <div className="cntr flex w-full h-[80%]">
              <div className="limg relative w-1/2 h-full">
                <img
                  className="absolute scale-[1.3] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png"
                ></img>
              </div>
              <div className="rg w-[30%] py-30">
                <h1 className="text-8xl">Still Running</h1>
                <h1 className="text-8xl">Not Hunting</h1>
                <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque obcaecati, nostrum blanditiis officiis mollitia,
                  incidunt quis inventore minus nesciunt voluptates praesentium
                  dolores harum maiores sit repellat, unde accusamus aperiam
                  minima.
                </p>
                <p className="mt-3 text-xl font-[Helvetica_Now_Display]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Provident architecto incidunt doloribus perferendis, a,
                  mollitia repellendus voluptatem animi placeat iste eum atque
                  maiores inventore vero autem consequatur corporis quas ad.
                </p>
                <button className="bg-yellow-500 text-4xl py-10 px-10 mt-10 text-black">
                  Download now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
