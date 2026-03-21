import { motion } from 'framer-motion'

const BlogList = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl font-bold mb-12">
          All Blog Posts
        </motion.h1>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <motion.div
              key={item}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{ x: 10 }}
              className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/10 cursor-pointer hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-bold mb-2">Blog Post {item}</h3>
              <p className="text-on-surface-variant mb-4">This is a summary of the blog post...</p>
              <div className="flex justify-between items-center text-sm text-on-surface-variant">
                <span>By EliTechWiz</span>
                <span>Posted on Date</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default BlogList
