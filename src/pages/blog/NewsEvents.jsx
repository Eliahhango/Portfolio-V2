import { motion } from 'framer-motion'

const NewsEvents = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl font-bold mb-12">
          News & Events
        </motion.h1>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {[1, 2, 3, 4].map((item) => (
            <motion.div
              key={item}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/10 cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="material-symbols-outlined text-primary">event</span>
                <span className="text-sm font-bold text-primary uppercase">Event</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Event Title {item}</h3>
              <p className="text-on-surface-variant mb-4">Event description and details...</p>
              <span className="text-sm text-on-surface-variant">April 15, 2026</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default NewsEvents
