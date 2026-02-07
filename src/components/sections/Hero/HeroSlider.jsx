import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroSlides } from "./heroSlides";
import Container from "../../layout/Container";
import { ArrowRight } from 'lucide-react';

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[85vh] min-h-[520px] overflow-hidden">

      {/* BACKGROUND GIF */}
      <AnimatePresence mode="wait">
  <motion.video
    key={heroSlides[current].video}
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.6 }}
  >
    <source
      src={heroSlides[current].video}
      type="video/mp4"
    />
  </motion.video>
</AnimatePresence>


      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <Container className="relative z-10 min-h-screen flex items-center">
        <div className=" h-full flex items-center  px-6 lg:px-12 ">
          <div className="max-w-3xl text-slate-100">

            <AnimatePresence mode="wait">
              <motion.div
                key={heroSlides[current].id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <h1 className=" hero-heading text-3xl md:text-4xl lg:text-6xl  leading-tight tracking-tight">
                  {heroSlides[current].title}
                </h1>

                <p className="hero-heading md:text-lg text-gray-200">
                  {heroSlides[current].description}
                </p>

                <button className="cursor-pointer hero-heading mt-8 bg-white text-black px-6 py-3 rounded-md text-sm font-medium">
                  {heroSlides[current].buttonText} <ArrowRight className="inline-block ml-2" />
                </button>
              </motion.div>
            </AnimatePresence>

            {/* SLIDE NAVIGATION (TEXT BASED) */}
            <div className="flex gap-8 mt-12 text-sm font-medium">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrent(index)}
                  className="relative group"
                >
                  <span
                    className={`cursor-pointer hero-heading md:border md:px-4 md:py-2 transition-colors duration-300 ${
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
        </div>
      </Container>
    </div>
  );
}
