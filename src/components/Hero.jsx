import { HERO } from "../constants";
import carlImg from "../assets/mugil.jpg";
import { FaArrowRight } from "react-icons/fa";
import resume from "../assets/resume.pdf"; // Replace with actual resume path
import {motion} from "framer-motion";


const Hero = () => {
  return (
    <section className="flex min-h-screen flex-wrap items-center" id="hero">
      <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="w-full md:w-1/2">
        <h2 className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]">
          {HERO.name}
        </h2>
        <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
          {HERO.greet}
        </p>

        <p className="mb-8 p-2 text-xl">{HERO.description}</p>

        {/* Download Resume Button */}
        <a
          href={resume} // Replace with actual resume path
          
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-2 border border-white px-6 py-3 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:bg-white hover:text-black shadow-md hover:shadow-[0_0_20px_rgba(0,0,0,0.5)]"
        >
          <span className="transition-all duration-100 group-hover:pr-6">
            Download Resume
          </span>
          <FaArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 text-black opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:right-4" />
        </a>
      </motion.div>

      <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="w-full md:w-1/2 lg:p-8">
        <div className="flex justify-center">
          <motion.img
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src={carlImg}
            width={500}
            height={500}
            alt="img"
            className="rounded-3xl"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
