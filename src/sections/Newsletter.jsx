import { motion } from 'framer-motion'

const Newsletter = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-10 md:py-16 bg-primary text-on-primary overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        animate={{
          y: [0, 50, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="max-w-7xl mx-auto px-6 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="material-symbols-outlined text-4xl md:text-5xl mb-6 block"
        >
          drafts
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-extrabold mb-4"
        >
          Stay Updated with Latest Security Insights
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-primary-fixed-dim max-w-xl mx-auto mb-8"
        >
          Get expert cybersecurity tips, software development trends, and exclusive content delivered to your inbox.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
        >
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            placeholder="Enter your email address"
            className="flex-1 bg-white text-on-surface rounded-lg px-6 py-4 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#fcd34d' }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-400 text-slate-900 font-bold px-4 md:px-8 py-4 rounded-lg hover:bg-amber-300 transition-colors"
          >
            Subscribe
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Newsletter
