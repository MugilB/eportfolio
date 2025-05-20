import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
  FaJava,
} from "react-icons/fa6";

import sem5 from '../assets/sem5.pdf';
import tenthMarkSheet from '../assets/10th Mark Sheet.pdf';
import twelfthMarkSheet from '../assets/12th Mark Sheet.pdf';

import b1 from "../assets/b1.jpg";
import b2 from "../assets/b2.jpg";
import b3 from "../assets/b3.jpg";
import j1 from "../assets/j1.jpg";


import cambridge from '../assets/cambridge.pdf';
import cisco from '../assets/cisco.pdf';
import google from '../assets/Google Cybersecurity.pdf';
import oracle from '../assets/Oracle.pdf';


import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
// import projectImage4 from "../assets/project4.jpeg";
// import projectImage5 from "../assets/project5.jpeg";
// import projectImage6 from "../assets/project6.jpeg";
import ciscoPic from "../assets/cisco.avif";
import googlePic from "../assets/google.jpg";
import oraclePic from "../assets/Oracle.avif";
import cambridgePic from "../assets/cambridge.avif";
import gi from "../assets/gi.jpg";
import oi from "../assets/oi.png";
import ci from "../assets/ci.png";
import cami from "../assets/cami.png";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiAmazonwebservices, SiAwsamplify, SiAwselasticloadbalancing, SiCaddy, SiCplusplus, SiJavascript, SiLeetcode, SiMongodb, SiMysql, SiSpring, SiSpringboot } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Bio", href: "#bio" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#cert" },
  { label: "Achievements", href: "#achievements" },
  // { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Mugil B",
  greet: "Hello there! 👋🏻",
  description:
    "I'm Mugil B, a full stack developer skilled in frontend, cybersecurity, and AWS cloud. I create secure, scalable, and user-friendly web solutions. Passionate about building tech that makes a real impact.",
};

export const ACHIEVEMENTS = [
  {
    title: "Runner - Elanzaa 2024",
    place:"Bannari Amman Institute of Technology, Sathyamangalam",
    description: "Secured 2nd place among 150+ teams in an inter-college hackathon.",
    images: [b1, b2, b3],
    link: b3,
  },
  {
    title: "Journal Publishment - 2023",
    place:"Mahatma Gandhi Institute of Technology, Telengana",
    description: "Published a research paper in an National journal on Technology advancement in Teacher Development.",
    images: [j1],
    link: j1,
  },
  
  // Add more achievements here
];


export const PROJECTS = [
  {
    id: 1,
    name: "HelpHer",
    description:
      "A real-time women-focused support platform built with React and Spring Boot, offering services like napkin delivery, female bike rides, mental wellness, and more to ensure safety, convenience, and empowerment.",
    image: projectImage1,
    githubLink: "https://github.com/MugilB/HelpHer_Mugil_New",
  },
  {
    id: 2,
    name: "Real Estate.in",
    description:
      "A responsive real estate frontend built with React, allowing users to explore property listings with integrated contact options via WhatsApp, Google Maps, and email for seamless communication.",
    image: projectImage2,
    githubLink: "https://github.com/MugilB/React/tree/main/react_project",
  },
  {
    id: 3,
    name: "Click's.in - Photo Gallery",
    description:
      "A simple and elegant photo gallery website built using HTML and CSS, created during my first year to showcase personal photography and image collections under the name clicks.in.",
    image: projectImage3,
    githubLink: "https://github.com/MugilB/1st-year-project",
  },
  // {
  //   id: 4,
  //   name: "Weather App",
  //   description:
  //     "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
  //   image: projectImage4,
  //   githubLink: "https://github.com/user/weather-app",
  // },
  // {
  //   id: 5,
  //   name: "Blog Platform",
  //   description:
  //     "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
  //   image: projectImage5,
  //   githubLink: "https://github.com/user/blog-platform",
  // },
  // {
  //   id: 6,
  //   name: "Chat Application",
  //   description:
  //     "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
  //   image: projectImage6,
  //   githubLink: "https://github.com/user/chat-application",
  // },
];

export const bioData = [
  "Mugil B is a passionate computer science student specializing in cybersecurity at Sri Krishna College of Technology. He focuses on creating secure and impactful digital solutions.",
  "He developed HelpHer, a real-time platform designed to empower women by providing essential services like napkin delivery, female bike rides, and mental counseling, ensuring safety and support during critical times.",
  "With strong skills in React, Spring Boot, and cybersecurity, Mugil combines technical expertise with a commitment to social good, continuously learning to deliver secure and user-friendly applications.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <SiAmazonwebservices className="text-4xl text-white-700 lg:text-5xl" />,
    name: "AWS Cloud",
    experience: "1+ year",
  },
  {
    icon: <SiCplusplus className="text-4xl text-blue-800 lg:text-5xl" />,
    name: "C++",
    experience: "1.5+ years",
  },
  {
    icon: <FaJava className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Java",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <SiSpringboot className="text-4xl text-green-700 lg:text-5xl" />,
    name: "Spring Boot",
    experience: "1+ year",
  },
  {
    icon: <SiMysql className="text-4xl text-white lg:text-5xl" />,
    name: "My Sql",
    experience: "1+ year",
  },
];



export const EXPERIENCES = [

  {
    title: "Cyber Security Intern",
    company: "Skypark Itech, Coimbatore",
    duration: "June 2024 - July 2024",
    description:
      "Worked on real-time threat analysis and vulnerability assessment. Gained hands-on experience with network security tools, firewall configurations, and penetration testing. Contributed to internal audits and simulated cyber-attack scenarios to improve incident response strategies.",
  },
  // {
  //   title: "Lead Frontend Developer",
  //   company: "Innovative Tech Solutions",
  //   duration: "July 2020 - Present",
  //   description:
  //     "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
  // },
  // {
  //   title: "Frontend Engineer",
  //   company: "Digital Creations",
  //   duration: "February 2016 - June 2020",
  //   description:
  //     "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
  // },
  // {
  //   title: "Junior Web Developer",
  //   company: "Bright Future Technologies",
  //   duration: "August 2014 - January 2016",
  //   description:
  //     "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
  // },
];


export const CERTIFICATES = [
  {
    company:"Google",
    title: "Google Cybersecurity Certificate",
    description: "Credentialed by Google | Foundations of Cybersecurity & Threat Management.",
    image: googlePic,
    imageI:gi,
    file: google,
  },
  {
    company:"Oracle",
    title: "Oracle Generative AI Certified Professional",
    description: "Oracle Cloud Infrastructure 2024 | Generative AI Foundations & Applications.",
    image: oraclePic,
    imageI:oi,
    file: oracle,
  },
  {
    company:"Cisco",
    title: "Cisco Cyber Security Certificate",
    description: "Cybersecurity Essentials and Network Defense, issued by Cisco Networking Academy.",
    image: ciscoPic,
    imageI:ci,
    file: cisco,
  },
  {
    company:"Cambridge",
    title: "Cambridge English Flyers Certificate",
    description: "Certified in Cambridge English Flyers, demonstrating English language proficiency.",
    image: cambridgePic,
    imageI:cami,
    file: cambridge,
  },
];


export const EDUCATION = [
  {
    degree: "Bachelor of Engineering in Computer Science and Engineering - Cyber Security",
    institution: "Sri Krishna College of Technology, Coimbatore",
    duration: "October 2022 - March 2026",
    description:
      "Focused on core areas of cyber security including network defense, ethical hacking, and secure coding practices. Worked on practical projects related to threat analysis, system hardening, and incident response. Developed skills in safeguarding digital systems through coursework and hands-on labs. Engaged in national-level certifications and cybersecurity awareness programs to enhance industry readiness.",
    percentage: "8.95 CGPA",
    certificateFile: sem5,
  },

  {
    degree: "Higher Secondary Certificate - Tamil Nadu State Council of Educational Research and Training",
    institution: "SRV Boys Higher Secondary School, Namakkal",
    duration: "May 2019 - May 2021",
    description:
      "Emphasized foundational knowledge in mathematics, physics, and computer science. Built a strong base in problem-solving and logical thinking. Participated in technical events and programming activities that sparked my interest in technology and cybersecurity. Maintained excellent academic performance and developed a disciplined learning approach.",
    percentage: "92.3%",
    certificateFile: twelfthMarkSheet,
  },

  {
    degree: "Secondary School Leaving Certificate - Tamil Nadu State Council of Educational Research and Training",
    institution: "Jayarani Matric Hr Sec School, Salem",
    duration: "May 2018 - May 2019",
    description:
       "Gained a strong academic foundation across core subjects including science and mathematics. Developed early interest in technology through school-level computer classes and logical reasoning exercises. Demonstrated consistent academic performance and actively participated in school competitions, building essential skills for future technical education.",
    percentage: "90.8%",
    certificateFile: tenthMarkSheet,
  },
];

export const SOCIAL_MEDIA_LINKS = [
  // {
  //   href: "https://x.com/",
  //   icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  // },
  // {
  //   href: "https://x.com/",
  //   icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  // },
  // {
  //   href: "https://x.com/",
  //   icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  // },
  {
    href: "https://leetcode.com/u/MugilB-23/",
    icon: <SiLeetcode fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/MugilB",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/mugil-b-7a70ba253/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
