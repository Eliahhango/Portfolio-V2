import { motion } from 'framer-motion' 

const PageTemplate = ({ title, description, children }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen py-12 md:py-20">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {description && <p className="text-xl text-on-surface-variant">{description}</p>}
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        {children}
      </motion.div>
    </div>
  </motion.div>
)

export default PageTemplate
