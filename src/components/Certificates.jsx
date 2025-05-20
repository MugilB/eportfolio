import React from "react";
import { CERTIFICATES } from "../constants";
import { MdArrowOutward } from "react-icons/md";
import { FaEye } from "react-icons/fa";


const Certificates = () => {
  return (
    <section className="pt-20" id="cert">
      <h2 className="mb-8 text-center text-3xl lg:text-4xl text-white">Certificates</h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {CERTIFICATES.map((cert, index) => (
          <div
            key={index}
            className="flex flex-col justify-between rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 text-white"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5 flex flex-col  ">

                 {/* Neon Company Button */}
                {/* <div className="mb-6 self-start flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 backdrop-blur-md text-white font-semibold text-sm">
  <img src={cert.imageI} alt="logo" className="w-6 h-6 rounded-full" />
  <span>{cert.company}</span>
</div> */}

            
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-sm text-gray-300 mb-6">{cert.description}</p>

              <a
            href={cert.file}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full overflow-hidden rounded-xl border border-teal-500 bg-transparent px-2 py-2 text-base font-semibold text-teal-500 transition-all duration-300 hover:bg-teal-700 hover:text-white hover:shadow-[0_0_15px_#14b8a6] inline-block text-center"
            >
                <span className="transition-all duration-100 group-hover:pr-6 flex items-center justify-center gap-2">
                    View Certificate
                    <FaEye className=" absolute right-4 top-1/2 -translate-y-1/2 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:right-3" />
                </span>
            </a>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
