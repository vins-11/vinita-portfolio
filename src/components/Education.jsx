import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap, FaAward } from 'react-icons/fa'

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = [
    {
      degree: 'Master of Computer Applications',
      institution: 'Amity University',
      period: 'Sep 2020 - Jun 2022',
      cgpa: '9.69',
      description: 'Specialized in advanced computer science concepts and software development methodologies.',
    },
    {
      degree: 'Bachelor of Computer Applications',
      institution: "Bhupal Noble's University",
      period: 'Sep 2017 - Jun 2020',
      cgpa: '6.9',
      description: 'Foundation in computer science fundamentals and programming principles.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 glass rounded-full text-sm text-indigo-400 mb-4"
          >
            Education
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Academic Background
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto" />
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass p-6 rounded-xl border border-indigo-500/20 hover:border-indigo-500/50 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaGraduationCap className="text-indigo-400" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                  <p className="text-indigo-400 mb-2">{edu.institution}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                    <FaAward className="text-yellow-400" />
                    <span>CGPA: {edu.cgpa}</span>
                    <span>•</span>
                    <span>{edu.period}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Education

