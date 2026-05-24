import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, CheckCircle, Shield, Users, BookOpen, Utensils } from 'lucide-react'
import './Donate.css'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
}

const tiers = [
  { amount: 5000,   label: '₦5,000',   impact: 'Provides a week of meals for one street child' },
  { amount: 10000,  label: '₦10,000',  impact: 'Covers basic medical care for one individual' },
  { amount: 25000,  label: '₦25,000',  impact: 'Funds vocational training materials for a student' },
  { amount: 50000,  label: '₦50,000',  impact: 'Supports a family with shelter for one month' },
  { amount: 100000, label: '₦100,000', impact: 'Sponsors a full literacy program for 5 children' },
]

const impacts = [
  { icon: Utensils, label: 'Food Security',   desc: 'Nutritious meals for street families' },
  { icon: Heart,    label: 'Healthcare',       desc: 'Medical care and mental health support' },
  { icon: BookOpen, label: 'Education',        desc: 'Literacy and vocational training' },
  { icon: Users,    label: 'Community',        desc: 'Outreach and advocacy programs' },
]

export default function Donate() {
  const [selected, setSelected] = useState<number | null>(null)
  const [custom, setCustom] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-label" style={{ color: 'var(--amber-400)' }}>Support Our Mission</span>
            <h1>Make a Donation</h1>
            <p>Every naira you give transforms a life. Help us reach more vulnerable individuals across Nigeria.</p>
          </motion.div>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="donate__layout">
            {/* Left: impact info */}
            <div>
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <span className="section-label">Your Impact</span>
                <h2 className="section-title">Where Your Money Goes</h2>
                <div className="divider" />
                <p style={{ fontSize: '16px', color: 'var(--gray-600)', lineHeight: '1.7', marginBottom: '32px' }}>
                  100% of your donation goes directly to programs that serve vulnerable individuals
                  living on the streets of Nigeria. We operate with full transparency and accountability.
                </p>
              </motion.div>

              <div className="donate__impact-grid">
                {impacts.map(({ icon: Icon, label, desc }, i) => (
                  <motion.div
                    key={label}
                    className="donate__impact-card"
                    variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.2}
                  >
                    <div className="donate__impact-icon"><Icon size={22} /></div>
                    <h4>{label}</h4>
                    <p>{desc}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="donate__trust"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              >
                <Shield size={20} />
                <p>SGI is officially registered with the Corporate Affairs Commission (CAC) of Nigeria. Your donation is secure and accountable.</p>
              </motion.div>
            </div>

            {/* Right: donation form */}
            <motion.div
              className="donate__form-wrap"
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            >
              {submitted ? (
                <div className="getinvolved__success">
                  <CheckCircle size={48} className="getinvolved__success-icon" />
                  <h3>Thank You, {name || 'Friend'}!</h3>
                  <p>Your generous donation will help transform lives. We'll send a confirmation to {email || 'your email'}.</p>
                </div>
              ) : (
                <>
                  <h3 className="getinvolved__form-title">Choose Your Donation</h3>
                  <form className="getinvolved__form" onSubmit={handleSubmit}>
                    <div className="donate__tiers">
                      {tiers.map(({ amount, label, impact }) => (
                        <button
                          key={amount}
                          type="button"
                          className={`donate__tier${selected === amount ? ' donate__tier--active' : ''}`}
                          onClick={() => { setSelected(amount); setCustom('') }}
                        >
                          <span className="donate__tier-amount">{label}</span>
                          <span className="donate__tier-impact">{impact}</span>
                        </button>
                      ))}
                    </div>

                    <div className="form-group">
                      <label htmlFor="custom-amount">Or enter a custom amount (₦)</label>
                      <input
                        id="custom-amount"
                        type="number"
                        min="100"
                        placeholder="e.g. 15000"
                        value={custom}
                        onChange={e => { setCustom(e.target.value); setSelected(null) }}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="donor-name">Full Name *</label>
                      <input id="donor-name" type="text" required placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="donor-email">Email Address *</label>
                      <input id="donor-email" type="email" required placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-amber"
                      style={{ width: '100%', justifyContent: 'center', padding: '14px' }}
                      disabled={!selected && !custom}
                    >
                      <Heart size={16} fill="currentColor" />
                      Donate {selected ? tiers.find(t => t.amount === selected)?.label : custom ? `₦${Number(custom).toLocaleString()}` : 'Now'}
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
