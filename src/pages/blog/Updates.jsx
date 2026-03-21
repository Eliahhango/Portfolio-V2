import { motion } from 'framer-motion'

const Updates = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl font-bold mb-12">
          Latest Updates
        </motion.h1>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/10"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="material-symbols-outlined text-primary">notifications</span>
                <span className="text-sm text-on-surface-variant">March 21, 2026</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Update Title {item}</h3>
              <p className="text-on-surface-variant">Update description goes here...</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Updates
