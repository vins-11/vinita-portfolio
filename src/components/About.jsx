import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-32 relative px-6 pl-24 md:pl-32">
      <div className="container mx-auto max-w-6xl"> 
        {/* Belief Statement */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <p className="text-3xl md:text-4xl lg:text-5xl text-gray-300 leading-relaxed max-w-4xl">
            I believe in a <span className="text-indigo-400 font-semibold">user-centered design approach</span>, ensuring that every project I work on is tailored to meet the specific needs of its users.
          </p>
        </motion.div>

        {/* This is me section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-4">This is me.</h3>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Vinita</span>.
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-400 leading-relaxed">
              I'm a <span className="text-white font-semibold">Senior Software Developer</span> with 3+ years of experience specializing in <span className="text-indigo-400">Angular & Ionic</span>, building responsive, high-performance web and hybrid mobile applications.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              My approach focuses on creating scalable, high-performing solutions tailored to both user needs and business objectives. By prioritizing performance, accessibility, and responsiveness, I strive to deliver experiences that not only engage users but also drive tangible results.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              I have a proven track record of delivering scalable solutions under tight deadlines, including leading end-to-end development of platforms like <span className="text-indigo-400">Vetripet</span> and <span className="text-indigo-400">GetIt</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
