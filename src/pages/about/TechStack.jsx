import { motion } from 'framer-motion'

const TechStack = () => {
  const technologies = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Next.js'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL'] },
    { category: 'Security', items: ['Penetration Testing', 'Network Security', 'Encryption', 'Firewalls', 'IDS/IPS'] },
    { category: 'DevOps', items: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'GitHub Actions'] },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen py-12 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Technology Stack</h1>
          <p className="text-xl text-on-surface-variant max-w-2xl">
            We leverage cutting-edge technologies to build secure, scalable, and innovative solutions.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.15 }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/10"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">code</span>
                {tech.category}
              </h3>
              <motion.ul
                className="space-y-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.05, delayChildren: index * 0.1 }}
              >
                {tech.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="flex items-center gap-3 text-sm"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default TechStack
