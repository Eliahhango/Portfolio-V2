import { motion } from 'framer-motion'
import PageTemplate from '../PageTemplate'

const ServicesOverview = () => {
  const services = [
    { name: 'Cybersecurity', icon: 'security', desc: 'Comprehensive security solutions' },
    { name: 'Web Development', icon: 'code', desc: 'Modern web applications' },
    { name: 'UI/UX Design', icon: 'palette', desc: 'Beautiful user experiences' },
    { name: 'Consulting', icon: 'business_center', desc: 'Expert guidance' },
  ]

  return (
    <PageTemplate title="Our Services" description="Comprehensive solutions tailored to your needs">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/10 text-center"
          >
            <span className="material-symbols-outlined text-4xl text-primary block mb-4">{service.icon}</span>
            <h3 className="font-bold text-lg mb-2">{service.name}</h3>
            <p className="text-sm text-on-surface-variant">{service.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </PageTemplate>
  )
}

export default ServicesOverview
