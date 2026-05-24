import { useState } from 'react'
import { motion } from 'framer-motion'
import { Handshake, Globe, Building2, Heart, CheckCircle } from 'lucide-react'
import './GetInvolved.css'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
}

const partnerTypes = [
  { icon: Building2, title: 'Corporate Partners',    desc: 'Align your CSR goals with meaningful impact through co-branded programs and employee engagement.' },
  { icon: Globe,     title: 'NGO & Civil Society',   desc: 'Collaborate on joint programs, share resources, and amplify collective impact across communities.' },
  { icon: Heart,     title: 'Faith Organizations',   desc: 'Partner on community outreach, food distribution, and shelter programs rooted in shared values.' },
  { icon: Handshake, title: 'Government Agencies',   desc: 'Work alongside us to implement policy-driven interventions and scale proven programs.' },
]

export default function Partner() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ org: '', name: '', email: '', type: '', message: '' })

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
            <h1>Partner With Us</h1>
            <p>Together we can achieve more. Join our network of partners driving sustainable change across Africa.</p>
          </motion.div>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="getinvolved__layout">
            <div>
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <span className="section-label">Partnership Opportunities</span>
                <h2 className="section-title">Stronger Together</h2>
                <div className="divider" />
                <p style={{ fontSize: '16px', color: 'var(--gray-600)', lineHeight: '1.7', marginBottom: '32px' }}>
                  SGI believes that lasting change requires collaboration. We welcome partnerships with
                  organizations that share our commitment to dignity, inclusion, and sustainable development
                  for vulnerable populations.
                </p>
              </motion.div>

              <div className="getinvolved__areas">
                {partnerTypes.map(({ icon: Icon, title, desc }, i) => (
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

            <motion.div
              className="getinvolved__form-wrap"
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            >
              {submitted ? (
                <div className="getinvolved__success">
                  <CheckCircle size={48} className="getinvolved__success-icon" />
                  <h3>Thank You!</h3>
                  <p>We've received your partnership inquiry. Our team will reach out within 5 business days.</p>
                </div>
              ) : (
                <>
                  <h3 className="getinvolved__form-title">Partnership Inquiry</h3>
                  <form className="getinvolved__form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="p-org">Organization Name *</label>
                      <input id="p-org" name="org" type="text" required placeholder="Your organization" value={form.org} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="p-name">Contact Person *</label>
                      <input id="p-name" name="name" type="text" required placeholder="Full name" value={form.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="p-email">Email Address *</label>
                      <input id="p-email" name="email" type="email" required placeholder="your@email.com" value={form.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="p-type">Partnership Type *</label>
                      <select id="p-type" name="type" required value={form.type} onChange={handleChange}>
                        <option value="">Select type</option>
                        <option>Corporate Partnership</option>
                        <option>NGO / Civil Society</option>
                        <option>Faith Organization</option>
                        <option>Government Agency</option>
                        <option>Academic Institution</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="p-message">How Would You Like to Partner? *</label>
                      <textarea id="p-message" name="message" rows={4} required placeholder="Describe your partnership interest and goals..." value={form.message} onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                      <Handshake size={16} /> Send Inquiry
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
