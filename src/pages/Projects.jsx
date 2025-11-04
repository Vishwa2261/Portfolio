import React from 'react';
import { motion } from 'framer-motion';
import { SiLeetcode, SiLinkedin, SiInstagram } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import profile from "../assets/self.png"
import project1 from "../assets/portfolio.png";
import project2 from "../assets/ecomerce.jpeg";
import project3 from "../assets/chatapp.jpeg";
import project4 from "../assets/task.jpeg";
import project5 from "../assets/weather.jpeg";
import project6 from "../assets/finance.jpeg";
import "../Styles/Projects.css";
import FAQList from '../Components/FAQ';

const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    image: project1,
    description: "A modern portfolio showcasing my work and skills.",
  },
  {
    id: 2,
    name: "E-commerce App",
    image: project2,
    description: "A fully functional e-commerce application built with React.",
  },
  {
    id: 3,
    name: "Mobile Chat App",
    image: project3,
    description: "A real-time chat application for mobile users.",
  },
  {
    id: 4,
    name: "Task Manager",
    image: project4,
    description: "A task management tool with notifications and reminders.",
  },
  {
    id: 5,
    name: "Weather App",
    image: project5,
    description: "A weather forecast app using OpenWeather API.",
  },
  {
    id: 6,
    name: "Finance Tracker",
    image: project6,
    description: "An app to track expenses and savings efficiently.",
  },
];

export default function Projects() {
  const Navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className='ProjectContainer'>
        <div className="self">
          <img src={profile} alt="Profile" className="picture" />
          <h2 className="profile-name">Lakshminarayanan S</h2>
          <p className="profile-content">Full Stack Developer & Mobile Developer</p>
          <p className="Place">Tamilnadu, India</p>
          <div className="social-links">
            <a href="https://leetcode.com/u/vishwa2261/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
              <SiLeetcode size={24} />
            </a>
            <a href="https://linkedin.com/in/lakshminarayanan-s-snsinstitutions" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <SiLinkedin size={24} />
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <SiInstagram size={24} />
            </a>
            <a href="mailto:vishwa2261@gmail.com" aria-label="Email">
              <FiMail size={24} />
            </a>
          </div>
          <button onClick={() => Navigate("/contact")}>Let's Talk</button>
        </div>
        <div className="project-con-2">
          <h1 className='title'>
            Recent Projects and <span className='pro'>Achievements</span>
          </h1>
          <div className="project-con-2-grid">
            {projects.map((project) => (
              <div key={project.id} className='project-card'>
                <img src={project.image} alt={project.name} className="project-image" />
                <h2>{project.name}</h2>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
          <FAQList />
          <div className="colabrate"  onClick={() => Navigate("/contact")}>
            <h1>Let's</h1>
            <h1 className="colab">Collaborate</h1>
            <p>
              Unlock the potential of your product with expert design and development services. Let’s collaborate to create user-centered solutions that not only meet your goals but also delight your users.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
