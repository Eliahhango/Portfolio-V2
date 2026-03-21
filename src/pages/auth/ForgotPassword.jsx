import { motion } from 'framer-motion'
import { useState } from 'react'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Password reset requested for:', email)
    setSubmitted(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen flex items-center justify-center py-12 px-4"
    >
      <div className="max-w-md w-full bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/10 shadow-lg">
        {!submitted ? (
          <>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-3xl font-bold mb-2"
            >
              Reset Password
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-on-surface-variant mb-8"
            >
              Enter your email address and we'll send you a link to reset your password.
            </motion.p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <label className="block text-sm font-bold mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full bg-surface-container-low border-none rounded-lg p-3 focus:ring-2 focus:ring-primary/20 focus:outline-none"
                  required
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all"
              >
                Send Reset Link
              </motion.button>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center text-sm"
              >
                Remember your password?{' '}
                <a href="/auth/login" className="text-primary font-bold hover:underline">
                  Sign in
                </a>
              </motion.p>
            </form>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-4"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <span className="material-symbols-outlined text-4xl text-green-600">check_circle</span>
            </motion.div>
            <h2 className="text-2xl font-bold mb-2">Check Your Email</h2>
            <p className="text-on-surface-variant mb-6">
              We've sent a password reset link to <strong>{email}</strong>
            </p>
            <a
              href="/auth/login"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all"
            >
              Back to Sign In
            </a>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default ForgotPassword
