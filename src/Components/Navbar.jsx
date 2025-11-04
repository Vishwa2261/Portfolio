import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import { FiHome, FiTool, FiBriefcase, FiMail, FiGrid } from "react-icons/fi";
import "../Styles/Navbar.css"



export default function Navbar() {
    return (
        <motion.nav className="nav"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <ul>
                <motion.li whileHover={{ scale: 1.1 }}>
                    <Link to="/" className="Tooltip">
                    <FiHome size={20}/>
                    <span className="tooltip-text">Home</span>
                    </Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}>
                    <Link to="/services" className="Tooltip">
                    <FiGrid size={20} />
                    <span className="tooltip-text">Services</span>
                    </Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}>
                    <Link to="/tools" className="Tooltip">
                    <FiTool size={20} />
                    <span className="tooltip-text">Tools</span>
                    </Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}>
                    <Link to="/projects" className="Tooltip">
                    <FiBriefcase size={20} />
                    <span className="tooltip-text">Projects</span>
                    </Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}>
                    <Link to="/contact" className="Tooltip">
                    <FiMail size={20} />
                    <span className="tooltip-text">Contact</span>
                    </Link>
                </motion.li>
            </ul>
        </motion.nav>
    )
}
