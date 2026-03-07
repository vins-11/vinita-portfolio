import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../config/emailjs'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  // Check if EmailJS is configured
  const isEmailJSConfigured = () => {
    return (
      EMAILJS_CONFIG.SERVICE_ID &&
      EMAILJS_CONFIG.TEMPLATE_ID_ADMIN &&
      EMAILJS_CONFIG.TEMPLATE_ID_AUTOREPLY &&
      EMAILJS_CONFIG.PUBLIC_KEY
    )
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    // Clear error when user starts typing
    if (submitStatus === 'error') {
      setSubmitStatus(null)
      setErrorMessage('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Check if EmailJS is configured
    if (!isEmailJSConfigured()) {
      setSubmitStatus('error')
      setErrorMessage('EmailJS is not configured yet. Please set up your EmailJS credentials in src/config/emailjs.js. See EMAILJS_SETUP.md for instructions.')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)
    setErrorMessage('')

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
      }

      // 1️⃣ Send email to YOU (Admin Template)
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID_ADMIN,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      )

      // 2️⃣ Send auto-reply to USER (Auto Reply Template)
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID_AUTOREPLY,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      )

      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })

      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)

    } catch (error) {
      console.error('EmailJS Error:', error)
      setIsSubmitting(false)
      setSubmitStatus('error')

      if (error.text) {
        setErrorMessage(`EmailJS Error: ${error.text}`)
      } else if (error.message) {
        setErrorMessage(`Error: ${error.message}`)
      } else {
        setErrorMessage('Failed to send message. Please try again later.')
      }
    }
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'vinitasuthar1199@gmail.com',
      link: 'mailto:vinitasuthar1199@gmail.com',
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+91 9549913064',
      link: 'tel:+919549913064',
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Ahmedabad, Gujarat, India',
      link: null,
    },
  ]

  return (
    <section id="contact" className="py-16 md:py-32 relative px-6 md:pl-32">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl">
            Have a project in mind or want to collaborate? I'd love to hear from you. Send me a message and I'll respond as soon as possible.
          </p>
        </motion.div>

        {/* EmailJS Setup Warning */}
        {!isEmailJSConfigured() && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-yellow-400 text-sm"
          >
            ⚠️ <strong>EmailJS not configured:</strong> Please set up your EmailJS credentials in <code className="bg-gray-900 px-2 py-1 rounded">src/config/emailjs.js</code>. See <code className="bg-gray-900 px-2 py-1 rounded">EMAILJS_SETUP.md</code> for instructions.
          </motion.div>
        )}

        <div ref={ref} className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8">
                Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 sm:p-6 rounded-xl border border-gray-800 hover:border-indigo-500/50 bg-gradient-to-br from-gray-900/50 to-transparent transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">
                      {info.label}
                    </p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-lg text-gray-300 hover:text-indigo-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg text-gray-300">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-8"
            >
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
                Follow Me
              </p>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-lg border border-gray-800 hover:border-indigo-500 bg-gray-900/50 flex items-center justify-center text-gray-400 hover:text-indigo-400 transition-all"
                >
                  <FaGithub size={20} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-lg border border-gray-800 hover:border-indigo-500 bg-gray-900/50 flex items-center justify-center text-gray-400 hover:text-indigo-400 transition-all"
                >
                  <FaLinkedin size={20} />
                </motion.a>
                <motion.a
                  href="mailto:vinitasuthar1199@gmail.com"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-lg border border-gray-800 hover:border-indigo-500 bg-gray-900/50 flex items-center justify-center text-gray-400 hover:text-indigo-400 transition-all"
                >
                  <FaEnvelope size={20} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-4 sm:p-8 rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-transparent"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors text-white placeholder-gray-500"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors text-white placeholder-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors text-white placeholder-gray-500"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors text-white placeholder-gray-500 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm"
                >
                  ✗ {errorMessage}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 rounded-lg font-semibold text-white transition-all shadow-lg shadow-indigo-500/50 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
