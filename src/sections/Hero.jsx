import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative overflow-hidden pt-16 pb-24 md:pt-32 md:pb-40" id="home">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Main Heading */}
          <motion.h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-on-surface mb-6 leading-tight">
            I Am EliTechWiz
            <br />
            <motion.span
              className="text-primary"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8, delay: 0.3 },
                },
              }}
            >
              A Creative Designer
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto"
          >
            Merging technology, design, and strategy to build secure, innovative, and impactful digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 102, 255, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '#contact'}
              className="bg-primary text-on-primary px-4 md:px-8 py-4 rounded-lg font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform"
            >
              Let's Innovate Together
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#dce9ff' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '#github'}
              className="bg-surface-container-high text-on-surface px-4 md:px-8 py-4 rounded-lg font-bold hover:bg-surface-container-highest transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">code</span> GitHub
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-tertiary/10 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>
    </section>
  )
}

export default Hero
