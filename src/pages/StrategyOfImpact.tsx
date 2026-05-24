import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Target, Users, Zap, Globe, Heart, ArrowRight } from 'lucide-react'
import './OurWork.css'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
}

const pillars = [
  {
    icon: Target,
    title: 'Targeted Interventions',
    desc: 'Addressing systematic issues through carefully designed, evidence-based programs that directly respond to the needs of street dwellers, internally displaced persons (IDPs), and vulnerable populations in Nigeria.',
  },
  {
    icon: Users,
    title: 'Partnerships & Coalitions',
    desc: 'Leveraging strategic positioning through robust networks and coalitions with government agencies, NGOs, healthcare providers, and community organizations to maximize reach and impact.',
  },
  {
    icon: Zap,
    title: 'Community-Driven Programmes',
    desc: 'Placing communities at the center of all interventions — ensuring programs are designed with, not just for, the people we serve, fostering ownership and long-term sustainability.',
  },
  {
    icon: Globe,
    title: 'Inclusivity & Empowerment',
    desc: 'Ensuring that every individual, regardless of background or status, is valued and given equal opportunities to participate, contribute, and benefit from our programs.',
  },
]

export default function StrategyOfImpact() {
  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-label" style={{ color: 'var(--amber-400)' }}>Our Work</span>
            <h1>Strategy of Impact</h1>
            <p>The SGI 2023–2025 Strategic Plan — designed to create lasting, measurable change.</p>
          </motion.div>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          {/* Overview */}
          <motion.div
            className="strategy__overview"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <span className="section-label">2023 – 2025 Strategic Plan</span>
            <h2 className="section-title">Creating Lasting, Measurable Change</h2>
            <div className="divider" />
            <p>
              The SGI 2023–2025 Strategic Plan is designed to create lasting, measurable change for street
              dwellers, internally displaced persons (IDPs), and vulnerable populations in Nigeria. It focuses
              on addressing systematic issues through targeted interventions, partnerships, and community-driven
              programmes. The strategy emphasizes inclusivity, empowerment, and sustainability to maximize impact.
            </p>
          </motion.div>

          {/* Pillars */}
          <div className="strategy__pillars">
            {pillars.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                className="strategy__pillar"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.2}
              >
                <div className="strategy__pillar-icon">
                  <Icon size={28} />
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Plan period highlight */}
          <motion.div
            className="strategy__period"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <div className="strategy__period-item">
              <div className="strategy__period-year">2023</div>
              <div className="strategy__period-label">Plan Start</div>
            </div>
            <div className="strategy__period-divider">
              <div className="strategy__period-line" />
              <span>Strategic Plan Period</span>
              <div className="strategy__period-line" />
            </div>
            <div className="strategy__period-item">
              <div className="strategy__period-year">2025</div>
              <div className="strategy__period-label">Plan End</div>
            </div>
          </motion.div>

          <motion.div
            className="ourwork__cta"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <p>
              Our strategy is built on the belief that sustainable change requires both immediate relief
              and long-term systemic transformation — and that communities themselves must lead the way.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '24px' }}>
              <Link to="/donate" className="btn btn-primary">
                <Heart size={16} fill="currentColor" /> Support Our Mission
              </Link>
              <Link to="/get-involved/partner" className="btn btn-outline-green">
                Partner With Us <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
