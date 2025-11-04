import React from 'react'
import "../Styles/Service.css"
import { motion } from 'framer-motion';
import { SiLeetcode, SiLinkedin, SiInstagram } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import profile from "../assets/self.png"
import { useNavigate } from "react-router-dom"
import FAQList from '../Components/FAQ';

export default function Services() {

  const Navigate = useNavigate()
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className='ServiceContainer'>
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
        
        {/* container2 */}
        <div className='servicesCon-2'>
          <h1>Specialized <span className='serv'>Services</span></h1>
          <div className='web'>
            <h2>Web Development</h2>
            <ul >
              <li>
                <h3>Full-Stack Development</h3>
                <p>Crafting scalable, high-performance web applications with modern technologies.</p>
              </li>
              <li>
                <h3> Frontend Development (React, Next.js)</h3>
                <p> Building dynamic, responsive, and SEO-optimized user interfaces</p>
              </li>
              <li>
                <h3>Backend Development (Node.js, Express, PostgreSQL) </h3>
                <p> Developing robust, secure, and efficient server-side solutions.</p>
              </li>
              <li>
                <h3>API Development & Integration</h3>
                <p>Creating RESTful & GraphQL APIs for seamless third-party and internal integrations.</p>
              </li>
              <li>
                <h3>Performance Optimization</h3>
                <p>Enhancing speed, efficiency, and responsiveness for a superior user experience.</p>
              </li>
            </ul>
          </div>
          <div className='mobile'>
            <h2>Mobile App Development</h2>
            <ul>
              <li>
                <h3>React Native Development (Without Expo)</h3>
                <p>Delivering custom, high-performance mobile apps without Expo limitations.</p>
              </li>
              <li>
                <h3>Cross-Platform App Development</h3>
                <p>Writing clean, maintainable code that runs seamlessly on both iOS & Android.</p>
              </li>
              <li>
                <h3>Native Module Integration</h3>
                <p> Extending React Native apps with platform-specific features for enhanced functionality.</p>
              </li>
            </ul>

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
