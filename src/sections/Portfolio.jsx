import { motion } from 'framer-motion'

const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const portfolioData = [
    {
      title: 'SecureAuth Platform',
      description: 'A multi-factor authentication system for enterprise applications.',
      tags: ['Cybersecurity', 'React', 'Node.js'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvqa7T2TuJ7hH_eZ7Bl1X2lVRAzBy8ZSXzTlN1CuaTDgh8E-iU9CygZJ71M_7fA7VZpvo7U-F-uj2NYFkxI8Q2lD4iT9HIst9frHvW4WUs5sbx-vZEvRxmgYRq2a1u0tP5iIgMJptONLBiVh4zle_bnZwWPIWf9hxnXEw7p57lkX43x4YuRuq0yO3TxmvxVyUmA0fchden1-t6C6TJepFPWQwHr2zC9hGTP9O9Tt_QnYKn68I-oqAn_HCMy5z3oxyyRdncq3ZUcvs',
    },
    {
      title: 'DataViz Dashboard',
      description: 'An interactive data visualization tool for business intelligence.',
      tags: ['Data Science', 'D3.js', 'BI'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6gNXs6D8766iJke4_MP-ALjNDKCM_ZnwADtr5xOep4hmFZy_bvAYekyyzRGI2ILJQVQLzzLWPAgSY0sQQ723b6kTgbitS1soH_jUO9STMRPw1LsPL8C56H-Jsq4uyJff-KYrZFXV_okMcm-r6mEXt_x-XmTR2mxXsMkJ2UuJpilVy4Se97E0BcfBsXhQxxkXUT0DzInzLXT9IcZ1wZeawAUkuFya9z7aQXx9lK__O8qUPe1PPfHrHbCYz2isRy1Ir7TdXxO13yOU',
    },
    {
      title: 'E-commerce Redesign',
      description: 'A complete UI/UX overhaul for a major online retailer.',
      tags: ['UI/UX', 'Next.js', 'E-commerce'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdH_2XntEBv5eXS10ieg0EJtSlZ5minwl8LtKxWwsOux1jfTzkZg0f3GAPSwcJSjJ9aRKHse3G9KWz2uB3UXmugqD8nsGu1C7Y7YT6QWiRryp8_voU7izgzSVYuIKXx_wZ-SW1_BEsMHdXFP3S8BA5xJVnexpe7hsU01J5K9iEpaKhefoNC7AIqqu7HzfU-UTdCJMs4rRiZ1W9U47y2oFCeEnTUnOXxeyqq-atJqa79NT92JpJXGxeDHfMISW4NigkseDqSpgz_IQ',
    },
    {
      title: 'Architectural Visualization',
      description: '3D modeling and rendering of a modern residential complex.',
      tags: ['Civil Engineering', 'Revit'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsOKHz4S8uYxiayGFv02ClGITpP9FPFFAhoyTS8tB6ST7A-73EN8fYUcv2KHzLoA3yzMGzjY342261GD1fIDRAHiFArrpkq_H3W2DAXTnfYHdxbcBekn1S3i2SnXtAcRQTmRME8jm2j7YR64C0kzGeBGDSF7hysZOrDaxAkSXoRR8qvYMqNZoOY198rAg_dAk-uHOV0XVI3ilWF9yWAfj3LO6_MbNhBNJorpo5vMis_g3mZKIPwQMzr4HlSyiPp-rQAT-uaarOf1I',
    },
    {
      title: 'Network Intrusion Detection',
      description: 'A custom AI-based IDS for a corporate network.',
      tags: ['Cybersecurity', 'Python'],
      hasIcon: true,
      icon: 'security',
    },
    {
      title: 'Portfolio Website',
      description: 'This very website, built to showcase my skills.',
      tags: ['React', 'Tailwind'],
      hasIcon: true,
      icon: 'web',
    },
  ]

  return (
    <section className="py-12 md:py-24 bg-surface" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold mb-4">Portfolio</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {portfolioData.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 102, 255, 0.1)' }}
              className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/10 shadow-sm"
            >
              {/* Image/Icon */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full aspect-video overflow-hidden bg-gradient-to-br from-primary/10 to-tertiary/10"
              >
                {project.image ? (
                  <img
                    alt={project.title}
                    className="w-full h-full object-cover"
                    src={project.image}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-6xl">
                      {project.icon}
                    </span>
                  </div>
                )}
              </motion.div>

              {/* Content */}
              <motion.div className="p-6">
                <motion.h4
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-lg font-bold mb-2"
                >
                  {project.title}
                </motion.h4>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  className="text-sm text-on-surface-variant mb-4"
                >
                  {project.description}
                </motion.p>

                {/* Tags */}
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      whileHover={{ scale: 1.05, backgroundColor: '#e5eeff' }}
                      className="px-2 py-1 bg-surface-container-low rounded text-[10px] font-bold uppercase cursor-pointer"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
