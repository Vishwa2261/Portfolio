import { motion } from 'framer-motion';
import { SiLeetcode, SiLinkedin, SiInstagram } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import profile from "../assets/self.png"
import { useNavigate } from "react-router-dom"
import "../Styles/Contact.css"
import FAQList from '../Components/FAQ';


export default function Contact() {
  const Navigate = useNavigate();
  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >
      <div className='ContactContainer'>

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
        {/* Right */}
        <div className='Contact-details'>
          <h1>Let's Make Something <span className='cont-inc'>Incredible</span></h1>
          <form className='input-Container' action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="3de73514-669f-4a8d-b0cf-43ad17cfe675" />
            <div>
              <p>Name</p>
              <input type='text' name='name' placeholder='Your Name' required />
            </div>
            <div>
              <p>Email</p>
              <input type='email' name='email' placeholder='Your@email.com' required />
            </div>
            <div>
              <p>Message</p>
              <textarea className='message-inp' name='message' type='text' placeholder='Your Message' required />
            </div>
            <button >Send</button>
          </form>
        {/* Questions */}
        <FAQList />
        </div>
      </div>
    </motion.div>
  );
}


