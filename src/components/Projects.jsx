import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      number: '01',
      title: 'Vetripet',
      subtitle: 'On-Demand Pet Healthcare Platform',
      description: 'Vetripet is an on-demand pet healthcare platform built using Angular & Ionic, enabling online veterinary consultations, hospital appointments, and emergency support. It includes real-time appointment booking, emergency ambulance services, and digital pet health records for better care management. Integrated Firebase for authentication, data storage, and push notifications, and also working on backend APIs using Node.js & MongoDB.',
      technologies: ['Angular', 'Ionic', 'Firebase', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://vetripet.com',
    },
    {
      number: '02',
      title: 'GetIt',
      subtitle: 'Daily-Needs Mobile App',
      description: 'GetIt is a daily-needs mobile app developed from scratch using Ionic and Angular with a focus on smooth user experience and performance. Implemented infinite scrolling, CRUD operations, and real-time data handling using Firebase. Integrated Google Maps for location services and push notifications, and used Strapi CMS for efficient content management and dynamic updates.',
      technologies: ['Ionic', 'Angular', 'Firebase', 'Strapi CMS', 'Google Maps'],
      github: 'https://github.com',
      demo: 'https://getit.com',
    },
    {
      number: '03',
      title: 'm-way.ch & cilo',
      subtitle: 'Web & Hybrid Applications',
      description: 'm-way.ch and cilo are web and hybrid applications developed using Angular and Ionic, designed with scalable architecture and smooth UI performance. Implemented state management using NgRx to improve maintainability and application flow. Integrated multiple APIs to fetch and display dynamic content and ensured reliability through unit testing with Jasmine and Karma, along with regular updates and maintenance.',
      technologies: ['Angular', 'Ionic', 'NgRx', 'RxJS', 'Jasmine', 'Karma'],
      github: 'https://github.com',
      demo: 'https://m-way.ch',
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-32 relative px-6 md:pl-32">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            SELECTED <span className="gradient-text">PROJECTS</span>
          </h2>
        </motion.div>

        <div ref={ref} className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="p-8 rounded-2xl border border-gray-800 hover:border-indigo-500/50 bg-gradient-to-br from-gray-900/50 to-transparent hover:from-gray-900/80 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="text-5xl md:text-8xl font-bold text-gray-800 group-hover:text-indigo-500 transition-colors">
                      {project.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="mb-2">
                      <h3 className="text-3xl md:text-4xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-indigo-400 text-sm uppercase tracking-wider mb-4">
                        {project.subtitle}
                      </p>
                    </div>
                    <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-sm text-indigo-300 hover:bg-indigo-500/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-6">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 border border-gray-700 hover:border-indigo-500 rounded-lg text-gray-400 hover:text-indigo-400 transition-all"
                      >
                        <FaGithub />
                        <span>View Code</span>
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 border border-gray-700 hover:border-indigo-500 rounded-lg text-gray-400 hover:text-indigo-400 transition-all"
                      >
                        <FaExternalLinkAlt />
                        <span>Live Demo</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
