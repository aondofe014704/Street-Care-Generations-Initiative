import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--gray-50)' }}>
      <div style={{ textAlign: 'center', padding: '40px 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ fontSize: '120px', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--green-100)', lineHeight: 1, marginBottom: '16px' }}>
            404
          </div>
          <h1 style={{ fontSize: '32px', color: 'var(--charcoal)', marginBottom: '16px' }}>Page Not Found</h1>
          <p style={{ fontSize: '17px', color: 'var(--gray-600)', marginBottom: '40px', maxWidth: '400px', margin: '0 auto 40px' }}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn-primary">
              <Home size={16} /> Go Home
            </Link>
            <button onClick={() => window.history.back()} className="btn btn-outline-green">
              <ArrowLeft size={16} /> Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
