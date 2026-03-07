import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="py-16 border-t border-gray-800 px-6 md:pl-32">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-gray-400">
            Design & built by <span className="text-white font-semibold">Vinita Suthar</span>
          </div>
          <div className="text-gray-400">
            <a href="mailto:vinitasuthar1199@gmail.com" className="hover:text-indigo-400 transition-colors">
              vinitasuthar1199@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
