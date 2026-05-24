import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone, Award, Heart, ArrowRight } from 'lucide-react'
import './About.css'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
}

const timeline = [
  { year: '2020', title: 'Founded in Maiduguri', desc: 'SGI was established in Maiduguri, Borno State, Northeast Nigeria — a women-led and youth-driven NGO committed to addressing challenges faced by street dwellers.' },
  { year: '2021', title: 'Expansion to Benue State', desc: 'SGI expanded operations to Benue State, demonstrating its fast-growing capacity to reach marginalized populations and deliver impactful programs.' },
  { year: '2023', title: 'Strategic Plan Launched', desc: 'SGI developed a comprehensive Strategic Plan (2023–2025) to guide activities and ensure a structured approach to achieving its mission.' },
  { year: '2023', title: 'CAC Registration', desc: 'Officially registered with the Corporate Affairs Commission (CAC) of Nigeria, cementing SGI\'s commitment to transparency and accountability.' },
]

const offices = [
  { type: 'Head Office', address: 'No 1 Kwajafa Road, Shop No3, Old GRA Maiduguri, Borno State' },
  { type: 'Branch Office', address: 'Okpoga Street No 4, Highlevel Makurdi, Benue State' },
]

export default function About() {
  return (
    <main>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-label" style={{ color: 'var(--amber-400)' }}>Who We Are</span>
            <h1>About StreetCare<br />Generations Initiative</h1>
            <p>A non-profit, non-religious, non-governmental organization fostering inclusivity, compassion, and resilience.</p>
          </motion.div>
        </div>
      </div>

      {/* Welcome */}
      <section className="section-padding">
        <div className="container about__welcome">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="section-label">Welcome</span>
            <h2 className="section-title">Welcome to SGI</h2>
            <div className="divider" />
            <p className="about__welcome-text">
              StreetCare Generations Initiative (SGI) is a women-led and youth-driven nongovernmental
              organization established in 2020 in Maiduguri, Borno State, Northeast Nigeria. The organization
              was founded with a passionate commitment to addressing the challenges faced by street dwellers
              and individuals living in street conditions, empowering them to build better futures.
            </p>
            <p className="about__welcome-text">
              As a non-profit, non-religious, and non-governmental entity, SGI remains dedicated to fostering
              inclusivity, compassion, and resilience in all its interventions. Through its commitment to
              empowering street-dwelling individuals and promoting sustainable development, SGI continues to
              grow and inspire hope among the most vulnerable populations across Nigeria and Africa at large.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="about__vm section-padding-sm">
        <div className="container">
          <div className="about__vm-grid">
            <motion.div className="about__vm-card about__vm-card--vision" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="about__vm-icon"><Award size={32} /></div>
              <h3>Our Vision</h3>
              <p>
                To guarantee a future where every person, regardless of their circumstances,
                has access to the resources and opportunities they need to live a fulfilling life.
              </p>
            </motion.div>
            <motion.div className="about__vm-card about__vm-card--mission" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
              <div className="about__vm-icon"><Heart size={32} fill="currentColor" /></div>
              <h3>Our Mission</h3>
              <p>
                To safeguard the dignity, well-being, and futures of vulnerable individuals
                across generations living in street conditions in Africa.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brief History Timeline */}
      <section className="section-padding" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="text-center">
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">Brief History</h2>
            <div className="divider divider-center" />
          </div>
          <div className="about__timeline">
            {timeline.map(({ year, title, desc }, i) => (
              <motion.div
                key={i}
                className="about__timeline-item"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.2}
              >
                <div className="about__timeline-year">{year}</div>
                <div className="about__timeline-content">
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="about__history-extra"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <p>
              SGI's innovative, community-centred programs have strengthened its reputation as a reliable
              and dynamic force for change. The organization's 2023–2025 Strategic Plan reflects its vision
              of becoming a key player in national response efforts, leveraging robust networks and coalitions
              to maximize impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registration */}
      <section className="section-padding">
        <div className="container">
          <div className="about__registration">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="section-label">Legitimacy & Transparency</span>
              <h2 className="section-title">Registration with CAC Nigeria</h2>
              <div className="divider" />
              <p style={{ fontSize: '16px', color: 'var(--gray-600)', lineHeight: '1.7', marginBottom: '24px' }}>
                StreetCare Generations Initiative is officially registered with the Corporate Affairs
                Commission (CAC) of Nigeria. We operate with full transparency, accountability, and a
                steadfast determination to transform lives. Our registration affirms our commitment to
                ethical governance and responsible stewardship of all resources entrusted to us.
              </p>
              <div className="about__reg-badge">
                <Award size={20} />
                <span>Officially Registered — Corporate Affairs Commission of Nigeria</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offices & Contact */}
      <section className="section-padding-sm" style={{ background: 'var(--green-800)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span className="section-label" style={{ color: 'var(--amber-400)' }}>Find Us</span>
            <h2 className="section-title" style={{ color: 'var(--white)' }}>Our Offices</h2>
            <div className="divider divider-center" />
          </div>
          <div className="about__offices">
            {offices.map(({ type, address }, i) => (
              <motion.div key={type} className="about__office-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
                <div className="about__office-icon"><MapPin size={22} /></div>
                <h4>{type}</h4>
                <p>{address}</p>
              </motion.div>
            ))}
            <motion.div className="about__office-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
              <div className="about__office-icon"><Mail size={22} /></div>
              <h4>Email Us</h4>
              <p><a href="mailto:streetcaregi@gmail.com" style={{ color: 'rgba(255,255,255,0.8)' }}>streetcaregi@gmail.com</a></p>
            </motion.div>
            <motion.div className="about__office-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}>
              <div className="about__office-icon"><Phone size={22} /></div>
              <h4>Call Us</h4>
              <p><a href="tel:+2349073439443" style={{ color: 'rgba(255,255,255,0.8)' }}>+234 907 343 9443</a></p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm" style={{ background: 'var(--gray-50)', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title">Ready to Make an Impact?</h2>
          <p style={{ color: 'var(--gray-600)', marginBottom: '32px', fontSize: '17px' }}>
            Explore how you can support our mission and help transform lives.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/donate" className="btn btn-primary">
              <Heart size={16} fill="currentColor" /> Donate Now
            </Link>
            <Link to="/get-involved/volunteer" className="btn btn-outline-green">
              Volunteer <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
