// import { useEffect, useRef, useState } from "react";
// import { heroSlides } from "./heroSlides";
// import Container from "../../layout/Container";
// import { ArrowRight } from "lucide-react";

// export default function HeroSlider() {
//   const [current, setCurrent] = useState(0);
//   const videoRef = useRef(null);

//   /* ---------- PRELOAD VIDEOS ---------- */
//   useEffect(() => {
//     heroSlides.forEach((slide) => {
//       const video = document.createElement("video");
//       video.src = slide.video;
//       video.preload = "auto";
//     });
//   }, []);

//   /* ---------- CHANGE VIDEO WITHOUT BLINK ---------- */
//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.src = heroSlides[current].video;
//       videoRef.current.load();
//       videoRef.current.play();
//     }
//   }, [current]);

//   /* ---------- AUTO SLIDE ---------- */
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) =>
//         prev === heroSlides.length - 1 ? 0 : prev + 1
//       );
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full h-[100vh] min-h-[520px] overflow-hidden">

//       {/* BACKGROUND VIDEO */}
//       <video
//         ref={videoRef}
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* OVERLAY */}
//       <div className="absolute inset-0 bg-black/40" />

//       {/* CONTENT */}
//       <Container className="relative z-10 min-h-screen flex items-center">
//         <div className="max-w-3xl text-white">

//           <h1 className="hero-heading text-3xl md:text-4xl lg:text-6xl leading-tight">
//             {heroSlides[current].title}
//           </h1>

//           <p className="hero-heading mt-4 text-gray-100 md:text-lg">
//             {heroSlides[current].description}
//           </p>

//           <button className="hero-heading mt-8 bg-white text-black px-6 py-3 rounded-md text-sm font-medium inline-flex items-center gap-2 hover:bg-gray-100 transition">
//             {heroSlides[current].buttonText}
//             <ArrowRight size={18} />
//           </button>

//           {/* NAVIGATION */}
//           <div className="flex gap-8 mt-12 text-sm font-medium">
//             {heroSlides.map((slide, index) => (
//               <button
//                 key={slide.id}
//                 onClick={() => setCurrent(index)}
//                 className="relative group"
//               >
//                 <span
//                   className={`transition-colors duration-300 ${
//                     current === index
//                       ? "text-white"
//                       : "text-white/60 hover:text-white"
//                   }`}
//                 >
//                   {slide.label}
//                 </span>

//                 <div
//                   className={`absolute left-0 -bottom-2 h-[2px] transition-all duration-300 ${
//                     current === index
//                       ? "w-full bg-white"
//                       : "w-0 bg-white group-hover:w-full"
//                   }`}
//                 />
//               </button>
//             ))}
//           </div>

//         </div>
//       </Container>
//     </div>
//   );
// }

import { useEffect, useRef, useState } from "react";
import { heroSlides } from "./heroSlides";
import Container from "../../layout/Container";
import { ArrowRight } from "lucide-react";

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [activeVideo, setActiveVideo] = useState(0);

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  /* ---------- AUTO SLIDE ---------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  /* ---------- LOAD NEXT VIDEO WITHOUT BLINK ---------- */
  useEffect(() => {
    const nextVideo =
      activeVideo === 0 ? videoRef2.current : videoRef1.current;

    if (!nextVideo) return;

    nextVideo.src = heroSlides[current].video;
    nextVideo.load();

    nextVideo.onloadeddata = () => {
      nextVideo.play();
      setActiveVideo((prev) => (prev === 0 ? 1 : 0));
    };
  }, [current]);

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* VIDEO 1 */}
      <video
        ref={videoRef1}
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          activeVideo === 0 ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* VIDEO 2 */}
      <video
        ref={videoRef2}
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          activeVideo === 1 ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <Container className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-3xl text-white">

          <h1 className="hero-heading text-3xl md:text-4xl lg:text-6xl">
            {heroSlides[current].title}
          </h1>

          <p className="mt-4 text-gray-100">
            {heroSlides[current].description}
          </p>

          <button className="mt-8 bg-white text-black px-6 py-3 rounded-md inline-flex items-center gap-2">
            {heroSlides[current].buttonText}
            <ArrowRight size={18} />
          </button>
            {/* SLIDE NAVIGATION (TEXT BASED) */}
            <div className="flex gap-8 mt-12 text-sm font-medium">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrent(index)}
                  className="relative group"
                >
                  <span
                    className={`cursor-pointer hero-heading  md:px-4 md:py-2 transition-colors duration-300 ${
                      current === index
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {slide.label}
                  </span>

                  <div
                    className={`absolute left-0 -bottom-2 h-[2px] transition-all duration-300 ${
                      current === index
                        ? "w-full bg-white"
                        : "w-0 bg-white group-hover:w-full"
                    }`}
                  />
                </button>
              ))}
            </div>

        </div>
      </Container>
    </div>
  );
}
