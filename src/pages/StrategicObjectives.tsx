import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, BookOpen, Leaf, Shield, Utensils, AlertTriangle, ArrowRight } from 'lucide-react'
import './OurWork.css'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
}

const objectives = [
  {
    number: '01',
    icon: Heart,
    color: '#991b1b',
    bg: '#fee2e2',
    title: 'Healthcare & Public Health',
    points: [
      'Provide access to essential healthcare services including medical check-ups, vaccinations, and treatment for common ailments.',
      'Offer mental health support and counseling services to address trauma and psychological challenges faced by street-dwellers.',
      'Implement public health initiatives aimed at improving sanitation and hygiene practices among vulnerable populations.',
      'Conduct health education programs to raise awareness about preventive measures and promote healthy lifestyles.',
      'Collaborate with local healthcare providers to ensure continuity of care and access to specialized services.',
    ],
  },
  {
    number: '02',
    icon: BookOpen,
    color: '#1e40af',
    bg: '#dbeafe',
    title: 'Education & Literacy',
    points: [
      'Establish informal education centers and literacy programs tailored to the unique needs of street children and adults.',
      'Provide vocational training programs to equip street-dwellers with skills that enhance their employability and socioeconomic prospects.',
      'Collaborate with local schools and educational institutions to facilitate the integration of street children into formal education systems.',
    ],
  },
  {
    number: '03',
    icon: Leaf,
    color: '#065f46',
    bg: '#d1fae5',
    title: 'Environmental Conservation, Sustainability & Climate Change',
    points: [
      'Engage street-dwellers in community-based environmental projects such as tree planting, waste management, and urban gardening.',
      'Raise awareness about the impacts of climate change on living conditions and advocate for environmentally sustainable practices.',
      'Collaborate with local authorities to develop and implement climate resilience strategies that benefit street communities.',
      'Advocate for policies that prioritize the inclusion of street communities in urban development plans.',
    ],
  },
  {
    number: '04',
    icon: Shield,
    color: '#7c3aed',
    bg: '#ede9fe',
    title: 'Child Welfare & Protection',
    points: [
      'Provide safe shelters and rehabilitation programs for vulnerable children and the aged living on the streets.',
      'Strengthen child protection systems through collaboration with government agencies, law enforcement, and civil society organizations.',
      'Advocate for the rights of street children, including access to education, healthcare, and legal representation.',
      'Work closely with governmental and non-governmental agencies to reunite street children with their families whenever possible.',
    ],
  },
  {
    number: '05',
    icon: Utensils,
    color: '#166534',
    bg: '#dcfce7',
    title: 'Food Security & Livelihood',
    points: [
      'Establish community gardens and urban farming initiatives to increase local food production and improve food security.',
      'Provide regular food distribution programs, ensuring access to nutritious meals and snacks for street-dwellers.',
      'Develop vocational training and skills development programs tailored to the needs of street populations.',
      'Facilitate micro-finance and micro-enterprise initiatives to empower individuals to start and sustain small businesses.',
      'Create partnerships with local businesses and social enterprises to provide job opportunities and apprenticeships.',
    ],
  },
  {
    number: '06',
    icon: AlertTriangle,
    color: '#92400e',
    bg: '#fef3c7',
    title: 'Disaster Relief & Humanitarian Assistance',
    points: [
      'Develop emergency response protocols and preparedness plans to mitigate the impact of natural disasters on street communities.',
      'Distribute essential supplies — food, water, shelter, and medical aid — during times of crisis.',
      'Provide psychosocial support and trauma-informed care to survivors of disasters, fostering resilience and recovery.',
    ],
  },
]

export default function StrategicObjectives() {
  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-label" style={{ color: 'var(--amber-400)' }}>Our Work</span>
            <h1>Strategic Objectives</h1>
            <p>Six interconnected pillars guiding our work to transform lives across Nigeria and Africa.</p>
          </motion.div>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="ourwork__objectives">
            {objectives.map(({ number, icon: Icon, color, bg, title, points }, i) => (
              <motion.div
                key={number}
                className="ourwork__obj-card"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.15}
              >
                <div className="ourwork__obj-header">
                  <div className="ourwork__obj-icon" style={{ background: bg, color }}>
                    <Icon size={28} />
                  </div>
                  <div>
                    <div className="ourwork__obj-number">{number}</div>
                    <h3 className="ourwork__obj-title">{title}</h3>
                  </div>
                </div>
                <ul className="ourwork__obj-points">
                  {points.map((point, j) => (
                    <li key={j}>
                      <span className="ourwork__obj-bullet" style={{ background: color }} />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="ourwork__cta"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <p>
              Through these interconnected strategic objectives, SGI addresses the multifaceted challenges
              facing vulnerable individuals living on the streets of Africa, working towards a future where
              every person can live with dignity, security, and hope.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '24px' }}>
              <Link to="/our-work/thematic-areas" className="btn btn-primary">
                Thematic Areas & Goals <ArrowRight size={16} />
              </Link>
              <Link to="/donate" className="btn btn-outline-green">
                <Heart size={16} fill="currentColor" /> Support Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
