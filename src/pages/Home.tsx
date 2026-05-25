import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Heart, ArrowRight, Users, MapPin, Calendar, Award,
  Home as HomeIcon, Leaf, BookOpen, Shield, Utensils, AlertTriangle,
  ChevronRight
} from 'lucide-react'
import './Home.css'

/* ── Animated counter ── */
function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 2000
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) { setCount(target); clearInterval(timer) }
            else setCount(Math.floor(current))
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

/* ── Thematic area cards data ── */
const thematicAreas = [
  { icon: HomeIcon,      color: '#166534', bg: '#dcfce7', title: 'Homelessness Relief',          desc: 'Providing immediate shelter and support to individuals experiencing homelessness.',                    link: '/our-work/thematic-areas' },
  { icon: Users,         color: '#92400e', bg: '#fef3c7', title: 'Poverty Alleviation',           desc: 'Empowering individuals through education, job training, and economic opportunities.',                 link: '/our-work/thematic-areas' },
  { icon: Heart,         color: '#991b1b', bg: '#fee2e2', title: 'Health & Well-being',           desc: 'Improving physical and mental health outcomes for vulnerable street populations.',                    link: '/our-work/thematic-areas' },
  { icon: BookOpen,      color: '#1e40af', bg: '#dbeafe', title: 'Education & Skills',            desc: 'Enhancing educational opportunities and vocational training to break the poverty cycle.',             link: '/our-work/thematic-areas' },
  { icon: Utensils,      color: '#065f46', bg: '#d1fae5', title: 'Food Security',                 desc: 'Ensuring consistent access to nutritious food and sustainable livelihood opportunities.',             link: '/our-work/thematic-areas' },
  { icon: AlertTriangle, color: '#7c3aed', bg: '#ede9fe', title: 'Disaster Relief',               desc: 'Rapid emergency response and humanitarian assistance during crises and natural disasters.',           link: '/our-work/thematic-areas' },
]

/* ── Core values ── */
const coreValues = [
  { icon: Heart,   label: 'Compassion',    desc: 'Empathy and kindness in every interaction' },
  { icon: Award,   label: 'Accountability',desc: 'Responsible stewardship of resources' },
  { icon: Leaf,    label: 'Resilience',    desc: 'Building strength to overcome adversity' },
  { icon: Users,   label: 'Teamwork',      desc: 'Stronger together through collaboration' },
  { icon: Shield,  label: 'Integrity',     desc: 'Honesty and transparency in all we do' },
  { icon: MapPin,  label: 'Advocacy',      desc: 'Champions for the rights of street communities' },
  { icon: BookOpen,label: 'Inclusion',     desc: 'Equal value and respect for every individual' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
}

export default function Home() {
  return (
    <main className="home">
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__overlay" />
        <div className="container hero__content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero__text"
          >
            <span className="hero__badge">
              <Heart size={13} fill="currentColor" /> StreetCare Generations Initiative
            </span>
            <h1 className="hero__title">
              Transforms Lives<br />
              <span className="hero__title-accent">and Inspires Hope</span>
            </h1>
            <p className="hero__subtitle">
              A women-led, youth-driven NGO dedicated to safeguarding the dignity,
              well-being, and futures of vulnerable individuals across generations
              living in street conditions in Africa.
            </p>
            <div className="hero__actions">
              <Link to="/about" className="btn btn-amber">
                Learn Our Story <ArrowRight size={16} />
              </Link>
              <Link to="/donate" className="btn btn-secondary">
                <Heart size={16} fill="currentColor" /> Donate Now
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="hero__scroll-hint">
          <div className="hero__scroll-dot" />
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="mv section-padding">
        <div className="container">
          <div className="mv__grid">
            <motion.div
              className="mv__card mv__card--vision"
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <div className="mv__icon-wrap">
                <Award size={28} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To guarantee a future where every person, regardless of their circumstances,
                has access to the resources and opportunities they need to live a fulfilling life.
              </p>
            </motion.div>
            <motion.div
              className="mv__card mv__card--mission"
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            >
              <div className="mv__icon-wrap">
                <Heart size={28} fill="currentColor" />
              </div>
              <h3>Our Mission</h3>
              <p>
                To safeguard the dignity, well-being, and futures of vulnerable individuals
                across generations living in street conditions in Africa.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── IMPACT NUMBERS ── */}
      <section className="impact">
        <div className="container">
          <div className="impact__grid">
            {[
              { icon: Calendar, value: 2020, suffix: '', label: 'Founded' },
              { icon: MapPin,   value: 2,    suffix: '+', label: 'States Reached' },
              { icon: Users,    value: 5000, suffix: '+', label: 'Lives Touched' },
              { icon: Award,    value: 6,    suffix: '',  label: 'Core Programs' },
            ].map(({ icon: Icon, value, suffix, label }, i) => (
              <motion.div
                key={label}
                className="impact__item"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
              >
                <div className="impact__icon"><Icon size={24} /></div>
                <div className="impact__number">
                  <Counter target={value} suffix={suffix} />
                </div>
                <div className="impact__label">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THEMATIC AREAS ── */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center">
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Our Thematic Areas</h2>
            <div className="divider divider-center" />
            <p className="section-subtitle" style={{ margin: '0 auto 56px' }}>
              Six interconnected focus areas that address the multifaceted challenges
              facing vulnerable individuals living on the streets of Africa.
            </p>
          </div>
          <div className="thematic__grid">
            {thematicAreas.map(({ icon: Icon, color, bg, title, desc, link }, i) => (
              <motion.div
                key={title}
                className="thematic__card"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.5}
              >
                <div className="thematic__icon" style={{ background: bg, color }}>
                  <Icon size={26} />
                </div>
                <h3 className="thematic__title">{title}</h3>
                <p className="thematic__desc">{desc}</p>
                <Link to={link} className="thematic__link">
                  Learn more <ChevronRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRIEF HISTORY TEASER ── */}
      <section className="history section-padding">
        <div className="container history__inner">
          <motion.div
            className="history__text"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <span className="section-label">Our Story</span>
            <h2 className="section-title">Built on Passion,<br />Driven by Purpose</h2>
            <div className="divider" />
            <p>
              StreetCare Generations Initiative (SGI) was established in 2020 in Maiduguri,
              Borno State, Northeast Nigeria — a women-led and youth-driven NGO with a passionate
              commitment to addressing the challenges faced by street dwellers.
            </p>
            <p style={{ marginTop: '16px' }}>
              Since inception, SGI has expanded to Benue State, developed a 2023–2025 Strategic Plan,
              and earned official registration with the Corporate Affairs Commission (CAC) of Nigeria.
            </p>
            <Link to="/about" className="btn btn-outline-green" style={{ marginTop: '32px' }}>
              Read Our Full Story <ArrowRight size={16} />
            </Link>
          </motion.div>
          <motion.div
            className="history__stats"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
          >
            <div className="history__stat-card">
              <div className="history__stat-year">2020</div>
              <div className="history__stat-label">Year Founded</div>
            </div>
            <div className="history__stat-card">
              <div className="history__stat-year">2023</div>
              <div className="history__stat-label">Strategic Plan Launched</div>
            </div>
            <div className="history__stat-card history__stat-card--wide">
              <div className="history__stat-year">CAC</div>
              <div className="history__stat-label">Officially Registered in Nigeria</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="values section-padding">
        <div className="container">
          <div className="text-center">
            <span className="section-label">What Guides Us</span>
            <h2 className="section-title">Our Core Values</h2>
            <div className="divider divider-center" />
          </div>
          <div className="values__grid">
            {coreValues.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                className="values__card"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.3}
              >
                <div className="values__icon"><Icon size={22} /></div>
                <h4 className="values__label">{label}</h4>
                <p className="values__desc">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <h2>Join Us in Making a Difference</h2>
            <p>
              Every contribution — whether time, skills, or resources — helps us reach
              more vulnerable individuals and transform more lives across Africa.
            </p>
          </motion.div>
          <motion.div
            className="cta-banner__actions"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
          >
            <Link to="/donate" className="btn btn-amber">
              <Heart size={16} fill="currentColor" /> Donate Now
            </Link>
            <Link to="/get-involved/volunteer" className="btn btn-secondary">
              Volunteer With Us <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
