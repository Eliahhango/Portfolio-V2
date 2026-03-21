import { motion } from 'framer-motion'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-12 md:py-24 bg-surface-container-low" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-64 md:w-80 aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl"
            >
              <img
                alt="EliTechWiz Professional Photo"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvE-Yk7PRMuzrGIj59InOv0QrU0Gj5ATZW0_pXQSAD8vLPAP9hSx0BRjXvON81EasWkD0iEyn059-zdTf06mphd-augu1a36GACNfFLrTA-42tTtmyzZ-2osdu-dwbCC9FbNXm0uqenKTncDKayj6RrnvjdE_1a1FfOcvidfDLIZQ4bZDA1Kz_Qx_fRZwZwdGUqlKVP4eGCEi2PXx8RDylXHhWN8Wz5qh45b5I7B8JeH7VYHP8ECv39ifGp6p3VGDHd8rV7roC1fY"
              />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h2
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6 },
                },
              }}
              className="text-3xl font-extrabold"
            >
              About Me
            </motion.h2>

            <motion.div
              className="space-y-4 text-on-surface-variant text-lg leading-relaxed"
              variants={containerVariants}
            >
              {[
                "I am EliTechWiz, a visionary technologist, hacker, and creative mind, driven by innovation and the pursuit of digital excellence. My expertise spans cybersecurity, software development, UI/UX design, graphics and architectural design, and more.",
                "With a passion for turning complex problems into elegant solutions, I merge technology, design, and strategy to create impactful digital experiences. As a CEO and creator, I thrive on building projects that push boundaries, challenge norms, and leave a lasting impression in the tech world.",
                "Whether I'm securing digital spaces, designing intuitive interfaces, or crafting visually stunning creations, my goal is to transform ideas into reality with precision, creativity, and a relentless drive for excellence.",
              ].map((paragraph, index) => (
                <motion.p key={index} variants={itemVariants}>
                  {paragraph}
                </motion.p>
              ))}
              <motion.p
                variants={itemVariants}
                className="font-bold italic text-on-surface"
              >
                Let's innovate, design, and dominate the digital future together.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-outline-variant/30 pt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {[
            { number: '4+', label: 'Years of Experience' },
            { number: '50+', label: 'Projects Completed' },
            { number: '100+', label: 'Happy Clients' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.6, delay: index * 0.1 },
                },
              }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.p
                className="text-4xl font-extrabold text-on-surface"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                {stat.number}
              </motion.p>
              <p className="text-on-surface-variant font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
