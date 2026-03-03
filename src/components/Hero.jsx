import { motion } from 'framer-motion'
import { FaDownload, FaArrowDown } from 'react-icons/fa'

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pl-24 md:pl-32">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-sm text-indigo-400 backdrop-blur-sm">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-none"
          >
            <span className="block">SENIOR</span>
            <span className="block gradient-text">SOFTWARE</span>
            <span className="block">DEVELOPER</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl">
              Hi! I'm <span className="text-indigo-400 font-semibold">Vinita Suthar</span>. A creative Senior Software Developer with <span className="text-white">3+ years</span> of experience in building high-performance, scalable, and responsive web and hybrid mobile applications.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 rounded-lg transition-all shadow-lg shadow-indigo-500/50"
            >
              Hire Me
            </motion.button>
            <motion.a
              href="/resume.pdf"
              download="Vinita_Suthar_Resume.pdf"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 text-lg font-semibold text-white border-2 border-gray-700 hover:border-indigo-500 rounded-lg transition-all flex items-center gap-2 hover:bg-gray-900/50"
            >
              <FaDownload />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800"
          >
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-indigo-400 mb-2 group-hover:scale-110 transition-transform inline-block">
                3+
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-indigo-400 mb-2 group-hover:scale-110 transition-transform inline-block">
                10+
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Projects</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-indigo-400 mb-2 group-hover:scale-110 transition-transform inline-block">
                5K+
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Hours Worked</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-500 hover:text-indigo-400 transition-colors"
        >
          <FaArrowDown size={24} />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero
