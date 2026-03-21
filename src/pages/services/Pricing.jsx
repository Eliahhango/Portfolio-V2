import { motion } from 'framer-motion'
import PageTemplate from '../PageTemplate'

const Pricing = () => {
  const plans = [
    { name: 'Starter', price: '$99', features: ['Feature 1', 'Feature 2'] },
    { name: 'Professional', price: '$299', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
    { name: 'Enterprise', price: 'Custom', features: ['All features', '24/7 Support'] },
  ]

  return (
    <PageTemplate title="Pricing Plans" description="Choose the perfect plan for you">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.15 }}
      >
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-surface-container-lowest rounded-xl border-2 border-outline-variant/10"
          >
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <p className="text-3xl font-bold text-primary mb-6">{plan.price}</p>
            <ul className="space-y-3 mb-6">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-center gap-2 text-sm">
                  <span className="material-symbols-outlined text-primary text-sm">check</span>
                  {f}
                </li>
              ))}
            </ul>
            <button className="w-full bg-primary text-white py-2 rounded-lg font-bold">Choose Plan</button>
          </motion.div>
        ))}
      </motion.div>
    </PageTemplate>
  )
}

export default Pricing
