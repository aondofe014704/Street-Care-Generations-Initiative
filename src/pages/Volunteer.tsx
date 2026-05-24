import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Users, Clock, MapPin, CheckCircle } from 'lucide-react'
import './GetInvolved.css'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
}

const areas = [
  { icon: Heart,   title: 'Healthcare Support',    desc: 'Assist medical teams during outreach programs and health camps.' },
  { icon: Users,   title: 'Community Outreach',    desc: 'Engage directly with street communities and distribute essential supplies.' },
  { icon: Clock,   title: 'Education & Tutoring',  desc: 'Teach literacy, numeracy, and vocational skills to street children and adults.' },
  { icon: MapPin,  title: 'Field Operations',      desc: 'Support on-ground activities in Maiduguri and Makurdi offices.' },
]

export default function Volunteer() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', area: '', message: '' })

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
            <span className="section-label" style={{ color: 'var(--amber-400)' }}>Get Involved</span>
            <h1>Volunteer With Us</h1>
            <p>Your time and skills can transform lives. Join our growing community of dedicated volunteers.</p>
          </motion.div>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="getinvolved__layout">
            {/* Left: info */}
            <div>
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <span className="section-label">Why Volunteer</span>
                <h2 className="section-title">Make a Real Difference</h2>
                <div className="divider" />
                <p style={{ fontSize: '16px', color: 'var(--gray-600)', lineHeight: '1.7', marginBottom: '32px' }}>
                  As a volunteer with SGI, you become part of a passionate team working to transform the lives
                  of the most vulnerable members of our society. Every hour you give creates ripples of change
                  that extend far beyond what you can see.
                </p>
              </motion.div>

              <div className="getinvolved__areas">
                {areas.map(({ icon: Icon, title, desc }, i) => (
                  <motion.div
                    key={title}
                    className="getinvolved__area-card"
                    variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.2}
                  >
                    <div className="getinvolved__area-icon"><Icon size={20} /></div>
                    <div>
                      <h4>{title}</h4>
                      <p>{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <motion.div
              className="getinvolved__form-wrap"
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            >
              {submitted ? (
                <div className="getinvolved__success">
                  <CheckCircle size={48} className="getinvolved__success-icon" />
                  <h3>Thank You!</h3>
                  <p>We've received your volunteer application. Our team will be in touch within 3–5 business days.</p>
                </div>
              ) : (
                <>
                  <h3 className="getinvolved__form-title">Volunteer Application</h3>
                  <form className="getinvolved__form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="vol-name">Full Name *</label>
                      <input id="vol-name" name="name" type="text" required placeholder="Your full name" value={form.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="vol-email">Email Address *</label>
                      <input id="vol-email" name="email" type="email" required placeholder="your@email.com" value={form.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="vol-phone">Phone Number</label>
                      <input id="vol-phone" name="phone" type="tel" placeholder="+234 xxx xxx xxxx" value={form.phone} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="vol-area">Area of Interest *</label>
                      <select id="vol-area" name="area" required value={form.area} onChange={handleChange}>
                        <option value="">Select an area</option>
                        <option>Healthcare Support</option>
                        <option>Community Outreach</option>
                        <option>Education & Tutoring</option>
                        <option>Field Operations</option>
                        <option>Administrative Support</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="vol-message">Tell Us About Yourself</label>
                      <textarea id="vol-message" name="message" rows={4} placeholder="Share your skills, availability, and motivation..." value={form.message} onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                      <Heart size={16} fill="currentColor" /> Submit Application
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
