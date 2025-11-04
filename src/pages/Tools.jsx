'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SiLeetcode, SiLinkedin, SiInstagram, SiTypescript, SiPostman, SiMysql } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import profile from "../assets/self.png"
import { useNavigate } from "react-router-dom";
import { FaReact, FaNodeJs, FaGithub, FaDocker, FaFigma, FaMobileAlt, FaDatabase, FaHtml5, FaCss3, FaJs, FaBootstrap, FaNetworkWired } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiPostgresql, SiTailwindcss, SiRedux, SiGraphql, SiNpm, SiYarn, SiWebpack, SiVite, SiGithubactions } from 'react-icons/si';
import "../Styles/Tools.css";
import FAQList from '../Components/FAQ';

export default function Tools() {
  const Navigate = useNavigate();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >

      <div className='ToolsContainer'>
        <div className="self">
          <img src={profile} alt="Profile" className="picture" />
          <h2 className="profile-name">Lakshminarayanan S</h2>
          <p className="profile-content">
            Full Stack Developer & Mobile Developer
          </p>
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

        {/* second container */}
        <div className='tools-2'>
          <h1 className='tooltitle'>Technologies and <span className='too'>Tools</span></h1>
          <p>Using a combination of cutting-edge technologies and reliable open-source software I build user-focused, performant apps and websites for smartphones, tablets, and desktops.</p>

          <div className='web-Tools'>
            <h2><span className='too'>Web</span> Development</h2>
            <h3>FrontEnd</h3>
            <motion.div
              className='tech-icons11'
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div className='tools-align' variants={fadeInUp}>
                <FaHtml5 className='text-blue-500' size={40} />
                <p>Html</p>
              </motion.div>
              <motion.div className='tools-align' variants={fadeInUp}>
                <FaCss3 className='text-blue-500' size={40} />
                <p>Css</p>
              </motion.div>
              <motion.div className='tools-align' variants={fadeInUp}>
                <FaJs className='text-blue-500' size={40} />
                <p>JavaScript</p>
              </motion.div>
              <motion.div className='tools-align' variants={fadeInUp}>
                <FaBootstrap className='text-blue-500' size={40} />
                <p>Bootstrap</p>
              </motion.div>
              <motion.div className='tools-align' variants={fadeInUp}>
                <FaReact className='text-blue-500' size={40} />
                <p>React</p>
              </motion.div>
              <motion.div className='tools-align' variants={fadeInUp}>
                <FaMobileAlt className='text-blue-500' size={40} />
                <p>React Native</p>
              </motion.div>
              <motion.div className='tools-align' variants={fadeInUp}>
                <SiNextdotjs className='text-black dark:text-white' size={40} />
                <p>Next js</p>
              </motion.div>
              <motion.div className='tools-align' variants={fadeInUp}>
                <SiTailwindcss className='text-teal-400' size={40} />
                <p>Tailwindcss</p>
              </motion.div>
              <motion.div className='tools-align' variants={fadeInUp}>
                <SiTypescript className='text-teal-400' size={40} />
                <p>TypeScript</p>
              </motion.div>
            </motion.div>


            <h3>Backend</h3>
            <motion.div
              className='tech-icons'
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              variants={containerVariants}

            >
              <motion.div className='tools-align' variants={fadeInUp}>
                <FaNodeJs className='text-green-500' size={40} />
                <p>Nodejs</p>
              </motion.div>
              <motion.div className='tools-align' variants={fadeInUp}>
                <SiExpress className='text-gray-500' size={40} />
                <p>Express</p>
              </motion.div>
            </motion.div>
            <h3>Database</h3>
            <motion.div
              className='tech-icons'
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div className='tools-align' variants={fadeInUp}>
                <SiPostgresql className='text-yellow-500' size={40} />
                <p>Postgres</p>
              </motion.div>
              <motion.div className='tools-align' variants={fadeInUp}>
                <SiMysql className='text-yellow-500' size={40} />
                <p>Mysql</p>
              </motion.div>

            </motion.div>
            <h3>API Development</h3>
            <motion.div
              className='tech-icons'
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              variants={containerVariants}
            >
              <motion.div className='tools-align' variants={fadeInUp}>
                <FaNetworkWired className='text-pink-500' size={40} />
                <p>Restful</p>
              </motion.div>
              <motion.div className='tools-align' variants={fadeInUp}>
                <SiPostman className='text-pink-500' size={40} />
                <p>Postman</p>
              </motion.div>
            </motion.div>

            <h2><span className='too'>Dev Tools</span> & Workflow</h2>
            <h3>Version Control</h3>
            <motion.div
              className='tech-icons'
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div className='tools-align' variants={fadeInUp}>
                <FaGithub className='text-gray-800 dark:text-white' size={40} />
                <p>GitHub</p>
              </motion.div>
              <motion.div className='tools-align' variants={fadeInUp}>
                <SiGithubactions className='text-gray-500' size={40} />
                <p>GitHub Actions</p>
              </motion.div>
              <motion.div className='tools-align' variants={fadeInUp}>
                <SiRedux className='text-purple-500' size={40} />
                <p>Redux</p>
              </motion.div>


            </motion.div>
            <h3>Build Tools</h3>
            <motion.div
              className='tech-icons'
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              variants={containerVariants}
            >
              <motion.div className='tools-align' variants={fadeInUp}>
                <SiNpm className='text-red-500' size={40} />
                <p>npm</p>
              </motion.div>
              <motion.div className='tools-align' variants={fadeInUp}>
                <SiYarn className='text-blue-500' size={40} />
                <p>yarn</p>
              </motion.div>
              <motion.div className='tools-align' variants={fadeInUp}>
                <SiVite className='text-purple-500' size={40} />
                <p>Vite</p>
              </motion.div>
            </motion.div>
            <h3>Containerization</h3>
            <motion.div
              className='tech-icons'
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              variants={containerVariants}
            >
              <motion.div className='tools-align' variants={fadeInUp}>
                <FaDocker className='text-blue-500' size={40} />
                <p>Docker</p>
              </motion.div>
            </motion.div>
          </div>
          <FAQList />
          <div className="colabrate" onClick={() => Navigate("/contact")}>
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