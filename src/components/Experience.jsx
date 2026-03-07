import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Vetripet',
      period: 'Sept 2024 - Present',
      location: 'Remote',
      description: 'Developing a pet care service platform using Angular & Ionic. Designed and implemented user authentication, product listings, and order listing features. Integrated real-time booking functionality for veterinary services. Used Firebase for database management and push notifications.',
      technologies: ['Angular', 'Ionic', 'Firebase', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Angular Developer & Ionic Developer',
      company: 'Envisage Infotech Pvt. LLP',
      period: 'Aug 2023 – Sep 2024',
      location: 'Ahmedabad, Gujarat',
      description: 'Led design and development of m-way.ch and GetIt (web + hybrid mobile apps). Built cross-platform mobile applications using Ionic Framework for Android & iOS. Implemented state management using NgRx for scalable architecture. Performed unit testing using Jasmine & Karma to ensure reliability.',
      technologies: ['Angular', 'Ionic', 'NgRx', 'RxJS', 'Jasmine', 'Karma', 'Strapi CMS'],
    },
    {
      title: 'Software Developer',
      company: 'Belair Travel and Cargo Pvt. Ltd.',
      period: 'Jan 2022 – Aug 2023',
      location: 'Ahmedabad, Gujarat',
      description: 'Developed and maintained frontend using Angular, HTML, TypeScript. Worked on Belair.co.in and Cheapticket.in (hotel & flight booking platforms). Integrated and enhanced APIs for real-time data synchronization.',
      technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS', 'JavaScript'],
    },
  ]

  return (
    <section id="experience" className="py-16 md:py-32 relative px-6 md:pl-32">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div ref={ref} className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="flex flex-col md:flex-row gap-8 p-8 rounded-2xl border border-gray-800 hover:border-indigo-500/50 bg-gradient-to-br from-gray-900/50 to-transparent hover:from-gray-900/80 transition-all duration-300">
                {/* Timeline indicator */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-indigo-500/50 group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-xl text-indigo-400 mb-1">{exp.company}</p>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
                        <span>{exp.period}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-4">{exp.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-xs text-indigo-300 hover:bg-indigo-500/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
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

export default Experience
