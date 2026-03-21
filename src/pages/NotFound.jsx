import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-tertiary/5"
    >
      <div className="text-center px-6">
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="text-8xl font-extrabold text-primary mb-4"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold mb-4"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-on-surface-variant text-xl mb-8 max-w-xl mx-auto"
        >
          Sorry, the page you're looking for doesn't exist or has been moved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex gap-4 justify-center"
        >
          <Link
            to="/"
            className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all"
          >
            Go Home
          </Link>
          <Link
            to="/support/contact"
            className="bg-surface-container-high text-on-surface px-8 py-3 rounded-lg font-bold hover:bg-surface-container-highest transition-all"
          >
            Contact Support
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default NotFound
