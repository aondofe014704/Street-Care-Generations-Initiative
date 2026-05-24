import { Link } from 'react-router-dom'
import { Heart, MapPin, Phone, Mail } from 'lucide-react'
import { FaFacebook, FaXTwitter, FaInstagram, FaYoutube } from 'react-icons/fa6'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-icon">
                <Heart size={20} fill="currentColor" />
              </div>
              <div>
                <div className="footer__logo-name">StreetCare</div>
                <div className="footer__logo-sub">Generations Initiative</div>
              </div>
            </div>
            <p className="footer__tagline">
              Transforms Lives and Inspires Hope — empowering street-dwelling individuals
              and vulnerable populations across Nigeria and Africa.
            </p>
            <div className="footer__socials">
              <a href="#" aria-label="Facebook" className="footer__social-link"><FaFacebook size={18} /></a>
              <a href="#" aria-label="Twitter / X" className="footer__social-link"><FaXTwitter size={18} /></a>
              <a href="#" aria-label="Instagram" className="footer__social-link"><FaInstagram size={18} /></a>
              <a href="#" aria-label="YouTube" className="footer__social-link"><FaYoutube size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__col-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/our-work/strategic-objectives">Strategic Objectives</Link></li>
              <li><Link to="/our-work/thematic-areas">Thematic Areas</Link></li>
              <li><Link to="/our-work/strategy-of-impact">Strategy of Impact</Link></li>
              <li><Link to="/news">News & Stories</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div className="footer__col">
            <h4 className="footer__col-title">Get Involved</h4>
            <ul className="footer__col-links">
              <li><Link to="/get-involved/volunteer">Volunteer</Link></li>
              <li><Link to="/get-involved/partner">Partner With Us</Link></li>
              <li><Link to="/donate">Donate</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Contact Us</h4>
            <ul className="footer__contact-list">
              <li>
                <MapPin size={15} className="footer__contact-icon" />
                <span>No 1 Kwajafa Road, Shop No3, Old GRA Maiduguri, Borno State</span>
              </li>
              <li>
                <MapPin size={15} className="footer__contact-icon" />
                <span>Okpoga Street No 4, Highlevel Makurdi, Benue State</span>
              </li>
              <li>
                <Mail size={15} className="footer__contact-icon" />
                <a href="mailto:streetcaregi@gmail.com">streetcaregi@gmail.com</a>
              </li>
              <li>
                <Phone size={15} className="footer__contact-icon" />
                <a href="tel:+2349073439443">+234 907 343 9443</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} StreetCare Generations Initiative (SGI). All rights reserved.</p>
          <p>Registered with the Corporate Affairs Commission of Nigeria (CAC)</p>
        </div>
      </div>
    </footer>
  )
}
