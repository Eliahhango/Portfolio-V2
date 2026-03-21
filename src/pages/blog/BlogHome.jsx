import { motion } from 'framer-motion'

const BlogHome = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Latest Insights</h1>
          <p className="text-xl text-on-surface-variant">Expert cybersecurity tips, development trends, and industry insights</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/10 cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-tertiary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-6xl">article</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">Blog Post Title</h3>
                <p className="text-sm text-on-surface-variant mb-4">Brief description of the blog post content...</p>
                <a href="/blog/posts" className="text-primary font-bold hover:underline text-sm">Read More →</a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default BlogHome
