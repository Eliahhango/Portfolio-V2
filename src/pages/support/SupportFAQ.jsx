import { motion, useState as motionState } from 'framer-motion'
import PageTemplate from '../PageTemplate'

const SupportFAQ = () => {
  const [expanded, setExpanded] = motionState(null)

  const faqs = [
    { q: 'What services do you offer?', a: 'We offer cybersecurity, web development, design, and consulting services.' },
    { q: 'How long does a project take?', a: 'Project timelines vary based on scope and complexity.' },
    { q: 'Do you offer maintenance?', a: 'Yes, we provide ongoing support and maintenance packages.' },
  ]

  return (
    <PageTemplate title="FAQ" description="Frequently asked questions">
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((item, i) => (
          <motion.div key={i} className="bg-surface-container-lowest rounded-xl border border-outline-variant/10 overflow-hidden">
            <button
              onClick={() => setExpanded(expanded === i ? null : i)}
              className="w-full p-6 flex justify-between items-center hover:bg-surface-container-low"
            >
              <h3 className="font-bold">{item.q}</h3>
              <motion.span animate={{ rotate: expanded === i ? 180 : 0 }} className="material-symbols-outlined">expand_more</motion.span>
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: expanded === i ? 'auto' : 0, opacity: expanded === i ? 1 : 0 }}
              className="overflow-hidden border-t border-outline-variant/10"
            >
              <div className="p-6 text-on-surface-variant">{item.a}</div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </PageTemplate>
  )
}

export default SupportFAQ
