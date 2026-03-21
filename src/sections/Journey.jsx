import { motion } from 'framer-motion'

const Journey = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const journeyData = [
    {
      year: '2022 — Present',
      title: 'CEO & Lead Architect',
      company: 'EliTechWiz Innovations',
      description: 'Leading a team of innovators to build next-generation security and software solutions. Overseeing all aspects from concept to deployment.',
      color: 'bg-primary',
    },
    {
      year: '2018 — 2020',
      title: 'Senior Security Consultant',
      company: 'CyberSafe Corp',
      description: 'Conducted penetration tests and security audits for Fortune 500 companies, identifying critical vulnerabilities and designing mitigation strategies.',
      color: 'bg-slate-300',
    },
    {
      year: '2015 — 2018',
      title: 'Full-Stack Developer',
      company: 'DevSolutions Ltd',
      description: 'Developed and maintained web applications for various clients, specializing in scalable backend systems and responsive user interfaces.',
      color: 'bg-slate-300',
    },
  ]

  return (
    <section className="py-12 md:py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold mb-4">My Journey</h2>
        </motion.div>

        <motion.div
          className="relative max-w-2xl mx-auto pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-primary/20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {journeyData.map((event, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative mb-12"
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.4 }}
                className={`absolute -left-[36px] top-0 w-4 h-4 rounded-full border-4 border-white ${event.color}`}
              />

              {/* Content Card */}
              <motion.div
                whileHover={{ boxShadow: '0 10px 30px rgba(0, 102, 255, 0.15)' }}
                className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/10 shadow-sm"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-xs font-bold text-primary uppercase tracking-widest mb-2 block"
                >
                  {event.year}
                </motion.span>

                <motion.h4
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-xl font-bold mb-1"
                >
                  {event.title}
                </motion.h4>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 }}
                  className="text-sm font-medium text-on-surface-variant mb-4"
                >
                  {event.company}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-sm text-on-surface-variant leading-relaxed"
                >
                  {event.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Journey
