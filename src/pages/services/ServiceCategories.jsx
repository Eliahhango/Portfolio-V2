import { motion } from 'framer-motion'
import PageTemplate from '../PageTemplate'

const ServiceCategories = () => (
  <PageTemplate title="Service Categories" description="Browse our comprehensive service offerings">
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ staggerChildren: 0.1 }}
    >
      {['Cybersecurity', 'Development', 'Design', 'Consulting'].map((cat, i) => (
        <motion.div
          key={i}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/10"
        >
          <h3 className="text-2xl font-bold mb-2">{cat}</h3>
          <p className="text-on-surface-variant">Category description...</p>
        </motion.div>
      ))}
    </motion.div>
  </PageTemplate>
)

export default ServiceCategories
