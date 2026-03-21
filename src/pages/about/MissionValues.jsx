import { motion } from 'framer-motion'

const MissionValues = () => {
  const values = [
    { title: 'Innovation', icon: 'lightbulb', description: 'Constantly pushing boundaries and exploring new possibilities' },
    { title: 'Precision', icon: 'precision_manufacturing', description: 'Meticulous attention to detail in every project' },
    { title: 'Integrity', icon: 'verified', description: 'Honest, transparent, and ethical in all dealings' },
    { title: 'User-Centric', icon: 'person', description: 'Always putting user needs and experience first' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen py-12 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Mission Section */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Our Mission & Values</h1>
          <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
              At EliTechWiz, our mission is to transform businesses and lives through innovative technology solutions.
              We are committed to delivering excellence, maintaining the highest standards of security, and creating
              experiences that inspire and empower our clients.
            </p>
          </div>
        </motion.section>

        {/* Values Grid */}
        <motion.section>
          <h2 className="text-3xl font-bold mb-12">Core Values</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/10"
              >
                <motion.div
                  className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <span className="material-symbols-outlined text-primary text-2xl">{value.icon}</span>
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-on-surface-variant">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </motion.div>
  )
}

export default MissionValues
