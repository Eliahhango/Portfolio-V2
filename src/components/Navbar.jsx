import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Blog', path: '/blog' },
    { label: 'Support', path: '/support/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 h-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-shrink-0"
        >
          <Link to="/" className="text-2xl font-extrabold tracking-tighter text-slate-900 flex items-center gap-2 relative z-10">
            <span className="material-symbols-outlined text-primary text-3xl">token</span>
            EliTechWiz
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center gap-6"
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 * index }}
            >
              <Link
                to={item.path}
                className="font-manrope text-sm font-medium tracking-tight text-slate-600 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 sm:gap-4 relative z-10"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/dashboard"
              className="hidden md:flex items-center text-sm font-bold text-slate-600 hover:text-primary transition-colors gap-1"
            >
              <span className="material-symbols-outlined text-lg">login</span> Portal
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/support/schedule"
              className="bg-primary text-white px-4 py-2 sm:py-2.5 rounded-lg font-manrope text-sm font-bold tracking-tight transition-all shadow-lg hover:shadow-primary/30 flex items-center gap-1 sm:gap-2"
            >
              <span className="material-symbols-outlined text-sm">rocket_launch</span>
              <span className="whitespace-nowrap hidden sm:inline">Hire Me</span>
              <span className="whitespace-nowrap inline sm:hidden">Hire</span>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-1 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors ml-1"
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-xl h-[calc(100vh-5rem)] overflow-y-auto z-40"
        >
          <div className="flex flex-col p-6 gap-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index }}
              >
                <Link
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-manrope text-lg font-medium text-slate-600"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <div className="h-px bg-slate-100 my-2"></div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 }}
            >
              <Link
                to="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="font-manrope text-lg font-bold text-primary flex items-center gap-2 pb-4"
              >
                <span className="material-symbols-outlined text-xl">login</span> Client Portal
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
