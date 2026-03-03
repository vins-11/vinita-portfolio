import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Sidebar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed left-0 top-0 h-full w-20 md:w-24 flex flex-col items-center justify-between py-8 z-40 border-r border-gray-800"
    >
      {/* Social Links */}
      <div className="flex flex-col items-center gap-6">
        <div className="text-xs text-gray-500 uppercase tracking-wider -rotate-90 whitespace-nowrap mb-8">
          SOCIAL
        </div>
        <motion.a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-400 hover:text-indigo-400 transition-colors"
          title="GitHub"
        >
          <FaGithub size={20} />
        </motion.a>
        <motion.a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-400 hover:text-indigo-400 transition-colors"
          title="LinkedIn"
        >
          <FaLinkedin size={20} />
        </motion.a>
        <motion.a
          href="mailto:vinitasuthar1199@gmail.com"
          whileHover={{ scale: 1.2, y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-400 hover:text-indigo-400 transition-colors"
          title="Email"
        >
          <FaEnvelope size={20} />
        </motion.a>
      </div>

      {/* Menu */}
      <div className="flex flex-col items-center gap-6">
        <div className="text-xs text-gray-500 uppercase tracking-wider -rotate-90 whitespace-nowrap mb-8">
          MENU
        </div>
        <motion.button
          onClick={() => scrollToSection('home')}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-400 hover:text-indigo-400 transition-colors text-xs"
        >
          Home
        </motion.button>
        <motion.button
          onClick={() => scrollToSection('about')}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-400 hover:text-indigo-400 transition-colors text-xs"
        >
          About
        </motion.button>
        <motion.button
          onClick={() => scrollToSection('experience')}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-400 hover:text-indigo-400 transition-colors text-xs"
        >
          Experience
        </motion.button>
        <motion.button
          onClick={() => scrollToSection('projects')}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-400 hover:text-indigo-400 transition-colors text-xs"
        >
          Projects
        </motion.button>
        <motion.button
          onClick={() => scrollToSection('contact')}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-400 hover:text-indigo-400 transition-colors text-xs"
        >
          Contact
        </motion.button>
      </div>

      {/* Contact */}
      <div className="flex flex-col items-center gap-6">
        <div className="text-xs text-gray-500 uppercase tracking-wider -rotate-90 whitespace-nowrap mb-8">
          CONTACT
        </div>
        <motion.a
          href="mailto:vinitasuthar1199@gmail.com"
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-400 hover:text-indigo-400 transition-colors text-xs text-center"
        >
          Email
        </motion.a>
      </div>
    </motion.aside>
  )
}

export default Sidebar

