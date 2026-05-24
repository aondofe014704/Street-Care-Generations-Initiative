import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Send, CheckCircle } from 'lucide-react'
import './Contact.css'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-label" style={{ color: 'var(--amber-400)' }}>Get In Touch</span>
            <h1>Contact Us</h1>
            <p>We'd love to hear from you. Reach out to our team in Maiduguri or Makurdi.</p>
          </motion.div>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="contact__layout">
            {/* Contact info */}
            <div>
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <span className="section-label">Our Offices</span>
                <h2 className="section-title">Find Us</h2>
                <div className="divider" />
              </motion.div>

              <div className="contact__info-cards">
                <motion.div className="contact__info-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <div className="contact__info-icon"><MapPin size={22} /></div>
                  <div>
                    <h4>Head Office</h4>
                    <p>No 1 Kwajafa Road, Shop No3<br />Old GRA Maiduguri, Borno State</p>
                  </div>
                </motion.div>

                <motion.div className="contact__info-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}>
                  <div className="contact__info-icon"><MapPin size={22} /></div>
                  <div>
                    <h4>Branch Office</h4>
                    <p>Okpoga Street No 4<br />Highlevel Makurdi, Benue State</p>
                  </div>
                </motion.div>

                <motion.div className="contact__info-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.4}>
                  <div className="contact__info-icon"><Mail size={22} /></div>
                  <div>
                    <h4>Email</h4>
                    <p><a href="mailto:streetcaregi@gmail.com">streetcaregi@gmail.com</a></p>
                  </div>
                </motion.div>

                <motion.div className="contact__info-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.6}>
                  <div className="contact__info-icon"><Phone size={22} /></div>
                  <div>
                    <h4>Phone</h4>
                    <p><a href="tel:+2349073439443">+234 907 343 9443</a></p>
                  </div>
                </motion.div>
              </div>

              {/* Map placeholder */}
              <motion.div
                className="contact__map"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              >
                <div className="contact__map-placeholder">
                  <MapPin size={32} />
                  <p>Maiduguri, Borno State, Nigeria</p>
                  <span>Map integration available with Google Maps API key</span>
                </div>
              </motion.div>
            </div>

            {/* Contact form */}
            <motion.div
              className="getinvolved__form-wrap"
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            >
              {submitted ? (
                <div className="getinvolved__success">
                  <CheckCircle size={48} className="getinvolved__success-icon" />
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We'll get back to you within 2–3 business days.</p>
                </div>
              ) : (
                <>
                  <h3 className="getinvolved__form-title">Send Us a Message</h3>
                  <form className="getinvolved__form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="c-name">Full Name *</label>
                      <input id="c-name" name="name" type="text" required placeholder="Your full name" value={form.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="c-email">Email Address *</label>
                      <input id="c-email" name="email" type="email" required placeholder="your@email.com" value={form.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="c-subject">Subject *</label>
                      <select id="c-subject" name="subject" required value={form.subject} onChange={handleChange}>
                        <option value="">Select a subject</option>
                        <option>General Inquiry</option>
                        <option>Volunteer Inquiry</option>
                        <option>Partnership Inquiry</option>
                        <option>Donation Inquiry</option>
                        <option>Media & Press</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="c-message">Message *</label>
                      <textarea id="c-message" name="message" rows={6} required placeholder="How can we help you?" value={form.message} onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                      <Send size={16} /> Send Message
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
