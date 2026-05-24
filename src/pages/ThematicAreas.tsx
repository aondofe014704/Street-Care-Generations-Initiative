import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home as HomeIcon, Users, Megaphone, Heart, BookOpen, Utensils, ArrowRight } from 'lucide-react'
import './OurWork.css'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
}

const areas = [
  {
    icon: HomeIcon,
    color: '#166534',
    bg: '#dcfce7',
    title: 'Homelessness Relief & Support',
    goal: 'Provide immediate assistance and shelter to individuals experiencing homelessness, aiming to reduce the number of people living on the streets.',
    objective: 'Establish temporary shelters, distribute essential supplies, and offer outreach services to connect homeless individuals with support resources.',
  },
  {
    icon: Users,
    color: '#92400e',
    bg: '#fef3c7',
    title: 'Poverty Alleviation & Economic Empowerment',
    goal: 'Empower homeless individuals and families to transition out of poverty through education, job training, and access to stable housing and employment opportunities.',
    objective: 'Provide vocational training, job placement assistance, and financial literacy education to equip individuals with the skills and resources needed to secure sustainable livelihoods.',
  },
  {
    icon: Megaphone,
    color: '#1e40af',
    bg: '#dbeafe',
    title: 'Community Engagement & Advocacy',
    goal: 'Mobilize community support and advocate for policies and initiatives that address the root causes of homelessness and poverty, fostering social inclusion and solidarity.',
    objective: 'Organize community events, awareness campaigns, and advocacy efforts to raise public awareness, challenge stigma, and promote systemic change at local and national levels.',
  },
  {
    icon: Heart,
    color: '#991b1b',
    bg: '#fee2e2',
    title: 'Health & Well-being',
    goal: 'Improve the physical and mental health outcomes of homeless individuals by increasing access to healthcare services, mental health support, and addiction treatment.',
    objective: 'Collaborate with healthcare providers, social service agencies, and mental health professionals to offer integrated care and support services tailored to the unique needs of homeless populations.',
  },
  {
    icon: BookOpen,
    color: '#7c3aed',
    bg: '#ede9fe',
    title: 'Education & Skill Development',
    goal: 'Enhance educational opportunities and skills development for homeless individuals, empowering them to break the cycle of poverty and achieve their full potential.',
    objective: 'Establish educational programs, literacy initiatives, and vocational training workshops to equip individuals with the knowledge, skills, and confidence needed to succeed in school, work, and life.',
  },
  {
    icon: Utensils,
    color: '#065f46',
    bg: '#d1fae5',
    title: 'Food Security & Livelihood',
    goal: 'Ensure consistent access to nutritious food and sustainable livelihood opportunities for homeless individuals and families, promoting long-term self-sufficiency and well-being.',
    objective: 'Establish food distribution programs and community kitchens, promote urban gardening and sustainable agricultural practices, provide entrepreneurship training, and facilitate access to microfinance and market opportunities.',
  },
]

export default function ThematicAreas() {
  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-label" style={{ color: 'var(--amber-400)' }}>Our Work</span>
            <h1>Thematic Areas & Goals</h1>
            <p>Six thematic pillars providing holistic support and sustainable solutions to address homelessness and poverty.</p>
          </motion.div>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '64px' }}>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              By focusing on these thematic areas and goals, StreetCare Generations Initiative aims to provide
              holistic support and sustainable solutions to address the complex challenges of homelessness,
              poverty, food insecurity, and livelihood instability.
            </p>
          </div>

          <div className="ourwork__thematic-grid">
            {areas.map(({ icon: Icon, color, bg, title, goal, objective }, i) => (
              <motion.div
                key={title}
                className="ourwork__thematic-card"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.15}
              >
                <div className="ourwork__thematic-icon" style={{ background: bg, color }}>
                  <Icon size={30} />
                </div>
                <h3 className="ourwork__thematic-title">{title}</h3>
                <div className="ourwork__thematic-section">
                  <span className="ourwork__thematic-label">Goal</span>
                  <p>{goal}</p>
                </div>
                <div className="ourwork__thematic-section">
                  <span className="ourwork__thematic-label">Objective</span>
                  <p>{objective}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="ourwork__cta"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <p>
              Through these thematic areas, SGI fosters positive change and transformation in the lives
              of those we serve and the communities we belong to.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '24px' }}>
              <Link to="/our-work/strategy-of-impact" className="btn btn-primary">
                Strategy of Impact <ArrowRight size={16} />
              </Link>
              <Link to="/get-involved/volunteer" className="btn btn-outline-green">
                Get Involved <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
