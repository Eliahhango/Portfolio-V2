import { motion } from 'framer-motion'

const ResourceLibrary = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl font-bold mb-12">
          Resource Library
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/10 cursor-pointer"
            >
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block">description</span>
              <h3 className="text-lg font-bold mb-2">Resource {item}</h3>
              <p className="text-sm text-on-surface-variant mb-4">Resource description...</p>
              <button className="text-primary font-bold text-sm hover:underline">Download →</button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ResourceLibrary
