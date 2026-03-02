'use client';
import { useState } from 'react';
import StickyHeader from './components/StickyHeader';
import StickyFooter from './components/StickyFooter';
import FAQSection from './components/FAQSection';
import RegistrationPopup from './components/RegistrationPopup';
import ScrollObserver from './components/ScrollObserver';

export default function Home() {
  const [popupOpen, setPopupOpen] = useState(false);
  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

  return (
    <>
      <ScrollObserver />
      <StickyHeader onCtaClick={openPopup} />

      {/* ===================== PARTICLES BG ===================== */}
      <div className="particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      {/* ===================== HERO SECTION ===================== */}
      <section className="hero-section" id="hero">
        <div className="hero-badge">
          🎓 Attention: Students & Professionals Ready to Level Up
        </div>

        <div className="hero-trust">
          <span className="stars">★★★★★</span>
          <span>4.9 STAR | 15,000+ Students Trained</span>
        </div>

        <h1 className="hero-title">
          UNLOCK <span className="highlight">TECH MASTERY</span> &{' '}
          <span className="highlight">FUTURE-PROOF</span> YOUR CAREER
        </h1>

        <p className="hero-subtitle">
          Designed for ambitious students, IT professionals, entrepreneurs &
          growth-driven individuals in any field
        </p>

        <div className="hero-features">
          <div className="hero-feature-item">
            <span className="dot"></span>
            <span>Master AI & Machine Learning</span>
          </div>
          <div className="hero-feature-item">
            <span className="dot"></span>
            <span>Build Real-World Projects</span>
          </div>
          <div className="hero-feature-item">
            <span className="dot"></span>
            <span>Get Industry-Ready Certification</span>
          </div>
        </div>

        <button className="cta-button" onClick={openPopup}>
          🚀 Register For Free — Limited Seats
        </button>
      </section>

      {/* ===================== TRUST LOGOS ===================== */}
      <section className="trust-section" id="trust">
        <p className="trust-label fade-in">Our students placed at top companies</p>
        <div className="trust-logos fade-in">
          <span className="trust-logo">Google</span>
          <span className="trust-logo">Microsoft</span>
          <span className="trust-logo">Amazon</span>
          <span className="trust-logo">Meta</span>
          <span className="trust-logo">Apple</span>
          <span className="trust-logo">TCS</span>
          <span className="trust-logo">Infosys</span>
        </div>
      </section>

      {/* ===================== WHAT YOU'LL LEARN ===================== */}
      <section className="section learn-section" id="learn">
        <div className="section-container">
          <h2 className="section-title fade-in">
            What You&apos;ll Learn in This{' '}
            <span className="highlight">4-Week Power-Packed</span> Summer Camp
          </h2>
          <div className="learn-grid">
            {LEARN_ITEMS.map((item, i) => (
              <div key={i} className="learn-card fade-in" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="learn-card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button className="cta-button fade-in" onClick={openPopup}>
              🎯 Join the Summer Camp Now
            </button>
          </div>
        </div>
      </section>

      {/* ===================== COMPARISON ===================== */}
      <section className="section comparison-section" id="comparison">
        <div className="section-container">
          <h2 className="section-title fade-in">
            <span className="highlight">Ignoring</span> Vs{' '}
            <span className="highlight">Mastering</span> Tech Skills
          </h2>
          <div className="comparison-grid">
            <div className="comparison-col negative fade-in-left">
              <div className="comparison-col-title">❌ Ignoring Tech Skills</div>
              {COMPARISON_NEGATIVE.map((item, i) => (
                <div key={i} className="comparison-item">
                  <span className="comparison-item-icon">😰</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="comparison-col positive fade-in-right">
              <div className="comparison-col-title">✅ Mastering at McZeal</div>
              {COMPARISON_POSITIVE.map((item, i) => (
                <div key={i} className="comparison-item">
                  <span className="comparison-item-icon">🚀</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== BONUSES ===================== */}
      <section className="section bonuses-section" id="bonuses">
        <div className="section-container">
          <h2 className="section-title fade-in">
            Exclusive <span className="highlight">Bonuses</span> When You Join McZeal
          </h2>
          <div className="bonuses-grid">
            {BONUSES.map((item, i) => (
              <div key={i} className="bonus-card fade-in" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="bonus-card-icon">{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <span className="value-tag">{item.value}</span>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button className="cta-button fade-in" onClick={openPopup}>
              🎁 Claim Your Bonuses — Register Now
            </button>
          </div>
        </div>
      </section>

      {/* ===================== SYLLABUS TIMELINE ===================== */}
      <section className="section syllabus-section" id="syllabus">
        <div className="section-container">
          <h2 className="section-title fade-in">
            Your <span className="highlight">4-Week Learning</span> Journey
          </h2>
          <div className="timeline">
            {SYLLABUS.map((item, i) => (
              <div key={i} className={`timeline-item ${i % 2 === 0 ? 'fade-in-left' : 'fade-in-right'}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="timeline-card">
                  <h3>{item.week}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TARGET AUDIENCE ===================== */}
      <section className="section audience-section" id="audience">
        <div className="section-container">
          <h2 className="section-title fade-in">
            Who Is This <span className="highlight">McZeal Summer Camp</span> For?
          </h2>
          <div className="audience-grid">
            {AUDIENCE.map((item, i) => (
              <div key={i} className="audience-card fade-in" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="audience-card-img">{item.icon}</div>
                <div className="audience-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="section testimonial-section" id="testimonials">
        <div className="section-container">
          <h2 className="section-title fade-in">
            Hear From Our <span className="highlight">Students</span>
          </h2>
          <div className="testimonial-scroll">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testimonial-card scale-in" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="testimonial-header">
                  <div className="testimonial-user">
                    <div className="testimonial-avatar">{t.initials}</div>
                    <div>
                      <div className="testimonial-name">{t.name} <span className="testimonial-badge">✓</span></div>
                      <div className="testimonial-handle">{t.handle}</div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-body">{t.text}</div>
                <div className="testimonial-date">{t.date}</div>
                <div className="testimonial-metrics">
                  <span>💬 {t.comments}</span>
                  <span>🔄 {t.retweets}</span>
                  <span>❤️ {t.likes}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section className="section stats-section" id="stats">
        <div className="section-container">
          <h2 className="section-title fade-in">
            <span className="highlight">15,000+</span> Students Have Joined the{' '}
            <span className="highlight">Tech Revolution</span>
          </h2>
          <div className="stats-grid">
            {STATS.map((s, i) => (
              <div key={i} className="stat-item scale-in" style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className="stat-number">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button className="cta-button fade-in" onClick={openPopup}>
              🔥 Don&apos;t Miss Out — Register Today
            </button>
          </div>
        </div>
      </section>

      {/* ===================== CERTIFICATE ===================== */}
      <section className="section certificate-section" id="certificate">
        <div className="section-container">
          <h2 className="section-title fade-in">
            Receive an <span className="highlight">Industry-Recognized Certification</span>
          </h2>
          <div className="certificate-box scale-in">
            <div className="certificate-box-inner">
              <div className="certificate-icon">🏆</div>
              <h3>McZeal Certified Tech Professional</h3>
              <p>
                Upon completing the Summer Course Camp, you&apos;ll receive a prestigious McZeal
                certification that validates your expertise in AI, development, and data science.
                Boost your resume and stand out in interviews.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button className="cta-button fade-in" onClick={openPopup}>
              🎓 Get Certified — Register Now
            </button>
          </div>
        </div>
      </section>

      {/* ===================== URGENCY ===================== */}
      <section className="urgency-section" id="urgency">
        <h2 className="section-title" style={{ color: '#ffff00' }}>
          ⚡ The Clock Is Ticking!
        </h2>
        <p>
          If you don&apos;t enroll now, those who did will leave you behind in the tech race.
          Don&apos;t let that happen — secure your seat today!
        </p>
        <button className="cta-button" onClick={openPopup} style={{ margin: '25px auto 0' }}>
          ⏰ Claim Your Seat Before It&apos;s Gone
        </button>
      </section>

      {/* ===================== FAQ ===================== */}
      <FAQSection />

      {/* ===================== FOOTER ===================== */}
      <footer className="page-footer">
        <div className="footer-links">
          <a href="#">Terms Of Services</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Refund Policy</a>
          <a href="#">Contact Us</a>
        </div>
        <p className="footer-copyright">
          © 2026 McZeal EdTech Pvt. Ltd. All Rights Reserved.
        </p>
      </footer>

      <StickyFooter onCtaClick={openPopup} />
      <RegistrationPopup isOpen={popupOpen} onClose={closePopup} />
    </>
  );
}

/* ===================== DATA ===================== */

const LEARN_ITEMS = [
  {
    icon: '🤖',
    title: 'AI & Machine Learning',
    desc: 'Master ChatGPT, build AI models, automate workflows, and understand how AI is reshaping every industry.',
  },
  {
    icon: '💻',
    title: 'Full-Stack Web Development',
    desc: 'Learn React, Next.js, Node.js, and databases. Build production-ready apps from scratch during the camp.',
  },
  {
    icon: '📊',
    title: 'Data Science & Analytics',
    desc: 'Python, Pandas, data visualization, and predictive analytics. Turn raw data into business insights.',
  },
  {
    icon: '🔐',
    title: 'Cybersecurity Fundamentals',
    desc: 'Learn ethical hacking basics, network security, and how to protect systems from real-world threats.',
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    desc: 'Build cross-platform mobile apps using React Native. Deploy your own app to the App Store.',
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    desc: 'AWS, Docker, CI/CD pipelines — learn the infrastructure skills that top companies demand.',
  },
];

const COMPARISON_NEGATIVE = [
  'Falling behind in the job market',
  'Limited career growth & stagnant salary',
  'Missing out on high-demand opportunities',
  'Feeling overwhelmed by tech changes',
  'No portfolio or certifications to show',
  'Watching peers get ahead',
];

const COMPARISON_POSITIVE = [
  'In-demand skills employers fight over',
  '3X career growth with portfolio proof',
  'Freelance opportunities & side income',
  'Confidence to build anything',
  'Industry-recognized certification',
  'Part of an elite alumni network',
];

const BONUSES = [
  {
    icon: '🎓',
    title: 'Industry-Recognized Certification',
    desc: 'A prestigious credential that validates your expertise across AI, development, and data science.',
    value: 'Priceless',
  },
  {
    icon: '📚',
    title: '50+ Premium Project Templates',
    desc: 'Production-ready project templates across all tracks to kickstart your portfolio instantly.',
    value: 'Worth ₹5,000',
  },
  {
    icon: '🛠️',
    title: '200+ Tools & Resources Guide',
    desc: 'A curated toolkit of AI tools, dev resources, and platforms with real-world use cases.',
    value: 'Worth ₹3,000',
  },
  {
    icon: '📖',
    title: 'Complete Camp Workbook',
    desc: 'Comprehensive workbook covering every session topic for future revision and reference.',
    value: 'Worth ₹2,000',
  },
  {
    icon: '💼',
    title: 'Resume & LinkedIn Optimization Kit',
    desc: 'Templates, strategies, and 100+ content ideas to build your professional brand online.',
    value: 'Worth ₹4,000',
  },
  {
    icon: '🤝',
    title: 'Lifetime Community Access',
    desc: 'Join our exclusive alumni network for continued mentorship, job referrals, and collaboration.',
    value: 'Priceless',
  },
];

const SYLLABUS = [
  {
    week: 'Week 1 — Foundation & AI Mastery',
    desc: 'Programming fundamentals, Python crash course, intro to AI & ChatGPT, building your first AI-powered automation project.',
  },
  {
    week: 'Week 2 — Web Development Deep Dive',
    desc: 'HTML/CSS/JS foundations, React & Next.js, backend with Node.js, databases, deploying your first full-stack web app.',
  },
  {
    week: 'Week 3 — Data Science & Cybersecurity',
    desc: 'Data analysis with Python, visualization dashboards, ML model building, ethical hacking basics, and network security.',
  },
  {
    week: 'Week 4 — Capstone & Career Launch',
    desc: 'Build a portfolio-worthy capstone project, resume optimization, mock interviews, certification exam, and career roadmap.',
  },
];

const AUDIENCE = [
  {
    icon: '🎓',
    title: 'College Students',
    desc: 'Build an impressive portfolio during summer break. Stand out in campus placements and internship interviews.',
  },
  {
    icon: '💼',
    title: 'Working Professionals',
    desc: 'Upskill and transition into high-paying tech roles. Learn in-demand skills without quitting your current job.',
  },
  {
    icon: '🚀',
    title: 'Aspiring Entrepreneurs',
    desc: 'Learn to build your own tech products, automate business processes, and launch your startup idea.',
  },
];

const TESTIMONIALS = [
  {
    name: 'Aarav Sharma',
    initials: 'AS',
    handle: '@aarav_dev',
    text: "McZeal's Summer Camp completely changed my career trajectory. I went from zero coding knowledge to landing a tech internship at a top startup within 2 months of completing the camp!",
    date: '10:30 AM · Feb 15, 2026',
    comments: '42',
    retweets: '128',
    likes: '890',
  },
  {
    name: 'Priya Menon',
    initials: 'PM',
    handle: '@priya_codes',
    text: 'The hands-on projects were incredible. I built 5 portfolio-worthy projects during the camp. The mentors at McZeal are world-class — they genuinely care about your success.',
    date: '2:15 PM · Feb 10, 2026',
    comments: '35',
    retweets: '96',
    likes: '1.2K',
  },
  {
    name: 'Vikram Patel',
    initials: 'VP',
    handle: '@vikram_ai',
    text: "Best investment I made for my career. The AI module alone was worth 10x the price. I'm now automating tasks at my company that used to take hours. My manager is impressed!",
    date: '8:45 AM · Feb 5, 2026',
    comments: '58',
    retweets: '215',
    likes: '2.1K',
  },
  {
    name: 'Sneha Reddy',
    initials: 'SR',
    handle: '@sneha_data',
    text: 'I joined as a non-tech marketing professional. 4 weeks later, I can build dashboards, write Python scripts, and even create simple AI tools. McZeal makes tech accessible to everyone.',
    date: '5:00 PM · Jan 28, 2026',
    comments: '27',
    retweets: '80',
    likes: '650',
  },
  {
    name: 'Karthik Iyer',
    initials: 'KI',
    handle: '@karthik_builds',
    text: 'Got a 60% salary hike after switching to a tech role! The certification from McZeal was recognized by my new employer. The career support team helped me nail the interview. 🔥',
    date: '11:20 AM · Jan 20, 2026',
    comments: '72',
    retweets: '340',
    likes: '3.5K',
  },
];

const STATS = [
  { num: '15,000+', label: 'Students Enrolled' },
  { num: '95%', label: 'Completion Rate' },
  { num: '40%', label: 'Avg Salary Hike' },
  { num: '4.9★', label: 'Student Rating' },
];
