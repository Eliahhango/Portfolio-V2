import { motion } from 'framer-motion'

const Expertise = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    hover: {
      y: -10,
      boxShadow: '0 20px 40px rgba(0, 102, 255, 0.1)',
      transition: { duration: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  }

  const expertiseData = [
    {
      title: 'Cybersecurity & Hacking',
      items: [
        { icon: 'shield', label: 'Penetration Testing' },
        { icon: 'lock', label: 'Network Security' },
        { icon: 'terminal', label: 'Ethical Hacking' },
      ],
    },
    {
      title: 'Software Development',
      items: [
        { icon: 'code', label: 'React & TypeScript' },
        { icon: 'dns', label: 'Node.js & Express' },
        { icon: 'integration_instructions', label: 'Python & Django' },
      ],
    },
    {
      title: 'Design & Architecture',
      items: [
        { icon: 'palette', label: 'UI/UX Design' },
        { icon: 'account_tree', label: 'System Architecture' },
        { icon: 'architecture', label: 'Graphic Design' },
      ],
    },
  ]

  return (
    <section className="py-12 md:py-24 bg-surface" id="expertise">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold mb-4">Areas of Expertise</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {expertiseData.map((expertise, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/10 shadow-sm"
            >
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl font-bold mb-6 text-center"
              >
                {expertise.title}
              </motion.h3>

              <motion.ul
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {expertise.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    variants={itemVariants}
                    className="flex items-center gap-3 p-3 bg-surface-container-low rounded-xl hover:bg-surface-container transition-colors"
                  >
                    <motion.span
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="material-symbols-outlined text-primary"
                    >
                      {item.icon}
                    </motion.span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Expertise
