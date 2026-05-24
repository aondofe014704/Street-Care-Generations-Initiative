import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, ArrowRight, Tag } from 'lucide-react'
import './News.css'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
}

const articles = [
  {
    id: 1,
    category: 'Health',
    date: 'March 15, 2025',
    title: 'SGI Conducts Free Medical Outreach in Maiduguri',
    excerpt: 'Over 200 street dwellers received free medical consultations, vaccinations, and essential medications during our quarterly health outreach program in Old GRA, Maiduguri.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
  },
  {
    id: 2,
    category: 'Education',
    date: 'February 28, 2025',
    title: 'New Literacy Center Opens in Makurdi',
    excerpt: 'SGI officially opened its second literacy and vocational training center in Makurdi, Benue State, providing education and skills training to over 50 street children and adults.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
  },
  {
    id: 3,
    category: 'Food Security',
    date: 'February 10, 2025',
    title: 'Community Garden Initiative Launches in Borno State',
    excerpt: 'Our urban farming project has empowered 30 families with tools, seeds, and training to grow their own food, reducing dependency and improving nutrition in street communities.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
  },
  {
    id: 4,
    category: 'Advocacy',
    date: 'January 22, 2025',
    title: 'SGI Participates in National NGO Summit in Abuja',
    excerpt: 'Our Executive Director represented SGI at the National NGO Summit, advocating for stronger policy frameworks to protect street-dwelling populations across Nigeria.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
  },
  {
    id: 5,
    category: 'Child Welfare',
    date: 'January 8, 2025',
    title: '15 Street Children Reunited With Families',
    excerpt: 'Through our family tracing and reunification program, SGI successfully reunited 15 street children with their families in Borno and Benue States, providing follow-up support.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80',
  },
  {
    id: 6,
    category: 'Disaster Relief',
    date: 'December 5, 2024',
    title: 'Emergency Response to Flood Victims in Northeast Nigeria',
    excerpt: 'SGI deployed emergency relief teams to provide food, clean water, and temporary shelter to over 500 flood-affected individuals in Borno State.',
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80',
  },
]

const categories = ['All', 'Health', 'Education', 'Food Security', 'Advocacy', 'Child Welfare', 'Disaster Relief']

export default function News() {
  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-label" style={{ color: 'var(--amber-400)' }}>Latest Updates</span>
            <h1>News & Stories</h1>
            <p>Stories of impact, transformation, and hope from our communities across Nigeria.</p>
          </motion.div>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          {/* Category filters */}
          <div className="news__filters">
            {categories.map(cat => (
              <button key={cat} className={`news__filter-btn${cat === 'All' ? ' news__filter-btn--active' : ''}`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Featured article */}
          <motion.div
            className="news__featured"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <div className="news__featured-img">
              <img src={articles[0].image} alt={articles[0].title} loading="lazy" />
              <span className="news__category-badge">{articles[0].category}</span>
            </div>
            <div className="news__featured-content">
              <div className="news__meta">
                <Calendar size={14} />
                <span>{articles[0].date}</span>
              </div>
              <h2>{articles[0].title}</h2>
              <p>{articles[0].excerpt}</p>
              <Link to={`/news/${articles[0].id}`} className="btn btn-outline-green" style={{ marginTop: '24px' }}>
                Read Full Story <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* Article grid */}
          <div className="news__grid">
            {articles.slice(1).map(({ id, category, date, title, excerpt, image }, i) => (
              <motion.article
                key={id}
                className="news__card"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.15}
              >
                <div className="news__card-img">
                  <img src={image} alt={title} loading="lazy" />
                  <span className="news__category-badge">{category}</span>
                </div>
                <div className="news__card-content">
                  <div className="news__meta">
                    <Calendar size={13} />
                    <span>{date}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{excerpt}</p>
                  <Link to={`/news/${id}`} className="news__read-more">
                    Read more <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load more */}
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <button className="btn btn-outline-green">
              <Tag size={16} /> Load More Stories
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
