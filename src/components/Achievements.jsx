import React from "react";
import { ACHIEVEMENTS } from "../constants";
import { MdArrowOutward } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";  // import carousel styles

const Achievements = () => {
  return (
    <section className="pt-20" id="achievements">
      <h2 className="mb-8 text-center text-3xl lg:text-4xl text-white">Achievements</h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
        {ACHIEVEMENTS.map((ach, index) => (
          <div
            key={index}
            className="flex flex-col justify-between rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 text-white"
          >
            {/* Carousel for multiple images */}
            <Carousel
              showArrows={true}
              showStatus={false}
              showIndicators={true}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={5000}
              stopOnHover={true}
              swipeable={true}
              emulateTouch={true}
              className="h-48"
            >
              {ach.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${ach.title} - image ${i + 1}`}
                  className="w-full h-48 object-cover"
                />
              ))}
            </Carousel>

            <div className="p-5 flex flex-col">
              <h3 className="text-xl font-semibold mb-1">{ach.title}</h3>
              <p className="text-sm text-gray-300 mb-4">[{ach.place}]</p>
              <p className="text-sm text-gray-300 mb-6">{ach.description}</p>

              <a
                href={ach.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full overflow-hidden rounded-xl border border-teal-500 bg-transparent px-2 py-2 text-base font-semibold text-teal-500 transition-all duration-300 hover:bg-teal-700 hover:text-white hover:shadow-[0_0_15px_#14b8a6] inline-block text-center"
              >
                <span className="transition-all duration-100 group-hover:pr-6 flex items-center justify-center gap-2">
                  View Proof
                  <FaEye className="absolute right-4 top-1/2 -translate-y-1/2 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:right-3" />
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
