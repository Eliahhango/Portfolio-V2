import { motion } from 'framer-motion'

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const footerSections = [
    {
      title: 'Services & Expertise',
      links: [
        'Cybersecurity',
        'Web Development',
        'UI/UX Design',
        'Consulting',
        'Penetration Testing',
      ],
    },
    {
      title: 'Resources',
      links: [
        'Blog',
        'Documentation',
        'Case Studies',
        'Guides',
        'Pricing',
      ],
    },
    {
      title: 'Company',
      links: [
        'About',
        'Team',
        'Careers',
        'Contact',
        'Press',
      ],
    },
  ]

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-10 md:py-16 text-slate-300 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-8 gap-x-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2 mb-8 md:mb-0">
            <motion.a
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-extrabold text-white mb-6 flex items-center gap-2 w-fit"
              href="/"
            >
              <span className="material-symbols-outlined text-primary text-3xl">token</span>
              EliTechWiz
            </motion.a>

            <p className="text-sm text-slate-400 leading-relaxed mb-6 pr-4">
              Visionary Technologist, Lead Architect & Creative Designer. Bridging the gap between secure backend
              engineering and stunning frontend experiences.
            </p>

            {/* Social Links */}
            <motion.div
              className="flex gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: 'share', href: '#' },
                { icon: 'code', href: '#' },
                { icon: 'terminal', href: '#' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.2, borderColor: '#0066FF', color: '#ffffff' }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 bg-slate-800 transition-all"
                  href={social.href}
                >
                  <span className="material-symbols-outlined text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Footer Links Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div key={sectionIndex} variants={itemVariants} className="border-b border-slate-800 md:border-none pb-4 md:pb-0">
              <motion.h5
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-bold text-white tracking-wide uppercase text-xs mb-4 md:mb-6"
              >
                {section.title}
              </motion.h5>

              <motion.ul
                className="space-y-3 text-sm text-slate-400"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {section.links.map((link, linkIndex) => (
                  <motion.li key={linkIndex} variants={itemVariants}>
                    <motion.a
                      whileHover={{ x: 5, color: '#ffffff' }}
                      href="#"
                      className="transition-all"
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 mt-4 md:mt-0 border-t border-slate-800 md:border-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>&copy; 2026 EliTechWiz Innovations</p>
          <div className="flex gap-6">
            <motion.a
              whileHover={{ color: '#ffffff' }}
              href="/"
              className="transition-colors"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              whileHover={{ color: '#ffffff' }}
              href="/"
              className="transition-colors"
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
