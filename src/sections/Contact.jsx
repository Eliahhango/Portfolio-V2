import { motion } from 'framer-motion'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const contactMethods = [
    {
      icon: 'mail',
      label: 'Email',
      value: 'contact@elitechwiz.site',
    },
    {
      icon: 'call',
      label: 'Phone',
      value: '+255 688 164 510',
    },
    {
      icon: 'chat',
      label: 'WhatsApp',
      value: '+255 742 531 101',
    },
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
  }

  return (
    <section className="py-12 md:py-24 bg-surface-container-low" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold mb-4">Get In Touch</h2>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 102, 255, 0.1)' }}
              className="bg-surface-container-lowest p-6 rounded-2xl flex items-center gap-4 shadow-sm"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary"
              >
                <span className="material-symbols-outlined">{method.icon}</span>
              </motion.div>
              <div>
                <p className="text-[10px] font-bold uppercase text-outline mb-0.5">
                  {method.label}
                </p>
                <p className="text-sm font-medium">{method.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-surface-container-lowest p-8 md:p-12 rounded-3xl border border-outline-variant/10 shadow-xl"
        >
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold mb-8 text-center"
          >
            Send Me a Message
          </motion.h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.div whileHover={{ scale: 1.02 }}>
                <label className="block text-sm font-bold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 transition-all focus:outline-none"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }}>
                <label className="block text-sm font-bold mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 transition-all focus:outline-none"
                />
              </motion.div>
            </motion.div>

            {/* Subject */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              whileHover={{ scale: 1.02 }}
            >
              <label className="block text-sm font-bold mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Project Inquiry"
                className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 transition-all focus:outline-none"
              />
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <label className="block text-sm font-bold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your vision..."
                rows="5"
                className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 transition-all focus:outline-none resize-none"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(0, 102, 255, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
