import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from 'react-icons/fa'
import {
  SiTypescript,
  SiAngular,
  SiIonic,
  SiFirebase,
  SiNodedotjs,
  SiMongodb,
  SiStrapi,
} from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stackCategories = [
    {
      category: 'frontend',
      title: 'Frontend',
      skills: [
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'Angular', icon: <SiAngular /> },
        { name: 'Ionic', icon: <SiIonic /> },
        { name: 'RxJS', icon: <SiAngular /> },
        { name: 'NgRx', icon: <SiAngular /> },
        { name: 'HTML5', icon: <FaHtml5 /> },
        { name: 'CSS3/SCSS', icon: <FaCss3Alt /> },
      ],
    },
    {
      category: 'backend',
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs /> },
        { name: 'Firebase', icon: <SiFirebase /> },
        { name: 'Strapi CMS', icon: <SiStrapi /> },
      ],
    },
    {
      category: 'database',
      title: 'Database',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'Firebase', icon: <SiFirebase /> },
      ],
    },
    {
      category: 'tools',
      title: 'Tools',
      skills: [
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'GitHub', icon: <FaGitAlt /> },
        { name: 'Capacitor', icon: <SiIonic /> },
        { name: 'Jasmine/Karma', icon: <FaJs /> },
      ],
    },
  ]

  return (
    <section id="skills" className="py-32 relative px-6 pl-24 md:pl-32">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">My Stack</h2>
        </motion.div>

        <div ref={ref} className="space-y-16">
          {stackCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: catIndex * 0.1 + index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex items-center gap-3 px-6 py-4 border border-gray-800 hover:border-indigo-500 rounded-lg bg-gray-900/50 hover:bg-gray-900 transition-all group"
                  >
                    <div className="text-2xl text-gray-400 group-hover:text-indigo-400 transition-colors">
                      {skill.icon}
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
