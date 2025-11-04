import { motion } from "framer-motion";
import { SiLeetcode, SiLinkedin, SiInstagram } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import React from "react";
import profile from "../assets/self.png"
import { useNavigate } from "react-router-dom"
import "../Styles/Home.css"


export default function Home() {

  const Navigate = useNavigate();

  return ( 
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <section className="HomeContainer">
        <div className="self">
          <img src={profile} alt="Profile" className="picture" />
          <h2 className="profile-name">Lakshminarayanan S</h2>
          <p className="profile-content">
            Full Stack Developer & Mobile Developer
          </p>
          <p className="Place">Tamilnadu, India</p>
          <div className="social-links">
            <a
              href="https://leetcode.com/u/vishwa2261/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
            >
              <SiLeetcode size={24} />
            </a>
            <a
              href="https://linkedin.com/in/lakshminarayanan-s-snsinstitutions"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <SiLinkedin size={24} />
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <SiInstagram size={24} />
            </a>
            <a href="mailto:vishwa2261@gmail.com" aria-label="Email">
              <FiMail size={24} />
            </a>
          </div>
          <button onClick={() => Navigate("/contact")}>Let's Talk</button>
        </div>

        {/* Container2 */}

        <div className="profileContent">
          <h1>Transforming Your Ideas into Reality</h1>
          <p className="bio">Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.</p>
          <div className="works">
            <div className="works-child">
              <p>+100</p>
              <p>YEAR OF EXPERIENCE</p>
            </div>
            <div className="works-child">
              <p>+100</p>
              <p>PROJECT COMPLETED</p>
            </div >
            <div className="works-child">
              <p>+100</p>
              <p>WORLDWIDE CLIENTS</p>
            </div>
          </div>

          {/* Resume */}

          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="resume">View Resume</button>
          </a>

          {/* About */}

          <div className="about-me">
            <h2>Who I Am</h2>
            <p>
              Passionate and driven Full Stack & Mobile App Developer with growing expertise in front-end and back-end technologies.

              Proficient in HTML, CSS, JavaScript, React, React Native, and Node.js, with a strong understanding of databases like PostgreSQL and SQL, RESTful APIs, and web development best practices.

              Dedicated to crafting seamless web and mobile experiences while continuously learning and evolving.
            </p>
          </div>
          <div className="home-combo">
          <button onClick={() => Navigate("/contact")}>Let's Talk</button>
          <button onClick={() => Navigate("/projects")}>My Work ⤳</button>
          </div>
          <div className="colabrate"  onClick={() => Navigate("/contact")}>
            <h1>Let's</h1>
            <h1 className="colab">Collaborate</h1>
            <p>
              Unlock the potential of your product with expert design and development services. Let’s collaborate to create user-centered solutions that not only meet your goals but also delight your users.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}