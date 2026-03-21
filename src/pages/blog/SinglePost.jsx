import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'

const SinglePost = () => {
  const { id } = useParams()

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog Post Title</h1>
          <div className="flex gap-4 text-on-surface-variant mb-8">
            <span>By EliTechWiz</span>
            <span>•</span>
            <span>March 21, 2026</span>
            <span>•</span>
            <span>5 min read</span>
          </div>

          <motion.div
            className="h-96 bg-gradient-to-br from-primary/20 to-tertiary/20 rounded-2xl flex items-center justify-center mb-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="material-symbols-outlined text-primary text-6xl">image</span>
          </motion.div>

          <motion.div
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
              This is the main content of the blog post. Replace this with your actual blog content. You can include
              paragraphs, headings, code blocks, and other elements.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Section Heading</h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              More blog content goes here...
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default SinglePost
