import { motion } from 'framer-motion'

const faqData = [
  { q: 'What is cybersecurity?', a: 'Cybersecurity is the practice of protecting systems and networks from digital attacks.' },
  { q: 'How do I secure my data?', a: 'Use strong passwords, enable 2FA, and keep software updated.' },
  { q: 'What is penetration testing?', a: 'A security test where authorized professionals attempt to breach systems to find vulnerabilities.' },
]

const TechnicalFAQ = () => {
  const [expanded, setExpanded] = motion.useState(null)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl font-bold mb-12">
          Technical FAQ
        </motion.h1>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-surface-container-lowest rounded-xl border border-outline-variant/10 overflow-hidden"
            >
              <button
                onClick={() => setExpanded(expanded === index ? null : index)}
                className="w-full p-6 flex items-center justify-between hover:bg-surface-container-low transition-colors"
              >
                <h3 className="font-bold text-lg">{item.q}</h3>
                <motion.span
                  animate={{ rotate: expanded === index ? 180 : 0 }}
                  className="material-symbols-outlined"
                >
                  expand_more
                </motion.span>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: expanded === index ? 'auto' : 0,
                  opacity: expanded === index ? 1 : 0,
                }}
                className="overflow-hidden"
              >
                <div className="p-6 bg-surface-container-low text-on-surface-variant border-t border-outline-variant/10">
                  {item.a}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default TechnicalFAQ
