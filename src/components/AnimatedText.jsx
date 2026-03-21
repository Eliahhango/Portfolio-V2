import { motion } from 'framer-motion'

const AnimatedText = ({ text, className = '' }) => {
  const words = text.split(' ')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (custom) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: custom * 0.2,
      },
    }),
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      custom={0}
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={wordVariants}>
          {word}{' '}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default AnimatedText
