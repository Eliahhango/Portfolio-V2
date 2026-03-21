import { motion } from 'framer-motion'
import PageTemplate from '../PageTemplate'

const AllProjects = () => {
  const projects = Array(6).fill(null).map((_, i) => ({
    id: i + 1,
    title: `Project ${i + 1}`,
    category: 'Technology',
  }))

  return (
    <PageTemplate title="All Projects" description="Browse our complete portfolio">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/10 cursor-pointer"
          >
            <div className="h-40 bg-gradient-to-br from-primary/10 to-tertiary/10 rounded-lg mb-4 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-4xl">work</span>
            </div>
            <h3 className="font-bold text-lg mb-2">{proj.title}</h3>
            <p className="text-sm text-on-surface-variant">{proj.category}</p>
          </motion.div>
        ))}
      </motion.div>
    </PageTemplate>
  )
}

export default AllProjects
