'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `mailto:sathvikgoudgaddam@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`
    setFormData({ name: '', email: '', message: '' })
  }

  const projects = [
    {
      title: 'Predictive Maintenance System',
      description: 'Built a machine learning model in Java to predict equipment failures. Processed 100,000+ data points from industrial sensors tracking temperature, pressure, and vibration. Achieved 25% reduction in downtime.',
      tech: ['Java', 'Machine Learning', 'Time-Series Analysis'],
      highlights: ['100K+ data points', '25% less downtime', 'Team leadership'],
      github: '#'
    },
    {
      title: 'Advanced Data Analytics Dashboard',
      description: 'Analyzed 1 million+ rows of sales and customer data. Automated data cleaning and preprocessing workflows, enabling real-time insights that replaced a two-day analysis cycle.',
      tech: ['Python', 'Pandas', 'NumPy', 'Data Visualization'],
      highlights: ['1M+ rows analyzed', '30% faster turnaround', 'Real-time insights'],
      github: '#'
    },
    {
      title: 'Intelligent Hospital System',
      description: 'Developed a web-based application to manage hospital operations including patient records and appointment bookings. Optimized data retrieval speed by 35% and reduced booking time by 40%.',
      tech: ['Java', 'SQL', 'Java Servlets', 'Web Development'],
      highlights: ['500+ patients daily', '35% faster queries', '40% faster bookings'],
      github: '#'
    }
  ]

  const skills = {
    'Languages': ['Python', 'Java', 'C', 'JavaScript', 'TypeScript'],
    'Web': ['React.js', 'HTML', 'CSS', 'RESTful APIs'],
    'Cloud & DevOps': ['AWS (EC2, S3, Lambda, RDS)', 'Azure', 'Git'],
    'Data & ML': ['TensorFlow', 'Pandas', 'NumPy', 'Scikit-learn', 'OpenCV'],
    'Databases': ['SQL', 'PostgreSQL', 'MySQL', 'SQLite']
  }

  const certifications = [
    'AWS Solutions Architect Associate',
    'AWS Academy Cloud Foundations',
    'Microsoft Azure Fundamentals'
  ]

  return (
    <main className={isLoaded ? 'loaded' : ''}>
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <a href="#" className="logo">SG</a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">Available for opportunities</div>
            <h1>
              <span className="hero-greeting">Hello, I'm</span>
              <span className="hero-name">Sathvik Goud Gaddam</span>
            </h1>
            <p className="subtitle">MS in Information Technology @ University of Florida</p>
            <p className="intro">
              I build scalable cloud solutions and intelligent systems. Currently researching
              GANs for synthetic data generation while seeking full-time SDE opportunities.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
              <a href="https://linkedin.com/in/sathvik-goud-gaddam/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">LinkedIn</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="code-block">
              <div className="code-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <pre>
{`const sathvik = {
  role: "Software Developer",
  focus: ["Cloud", "ML/AI", "Full-Stack"],
  current: "Graduate Research @ UF",
  passion: "Building impactful solutions"
};`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-grid">
            <div className="about-content">
              <p>
                I'm a Graduate Student Assistant at the <strong>University of Florida</strong>,
                pursuing my Master's in Information Technology (graduating May 2026). My research
                focuses on accelerating machine learning model training using GANs, processing
                200,000+ images with TensorFlow and NVIDIA CUDA.
              </p>
              <p>
                Previously, I worked as an <strong>AWS Cloud & Backend Intern</strong> at InovarTech,
                where I designed scalable backend services, implemented RESTful APIs, and migrated
                5,000+ legacy records to AWS S3 with zero data loss.
              </p>
              <p>
                I hold a B.Tech in Computer Science Engineering (AI) from KL University, where
                I built a strong foundation in machine learning, cloud infrastructure, and
                software engineering principles.
              </p>
            </div>
            <div className="about-certs">
              <h3>Certifications</h3>
              <ul>
                {certifications.map((cert, i) => (
                  <li key={i}>{cert}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skill-category">
                <h3>{category}</h3>
                <div className="skill-tags">
                  {items.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="project-number">0{index + 1}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-highlights">
                  {project.highlights.map((highlight, i) => (
                    <span key={i} className="highlight-tag">{highlight}</span>
                  ))}
                </div>
                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    View Code →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Let's Connect</h2>
          <p className="contact-intro">
            I'm actively seeking full-time Software Development Engineer positions.
            Whether you have an opportunity or just want to chat, I'd love to hear from you.
          </p>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">Email</span>
                <a href="mailto:sathvikgoudgaddam@gmail.com">sathvikgoudgaddam@gmail.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Phone</span>
                <a href="tel:+19728906239">(972) 890-6239</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">LinkedIn</span>
                <a href="https://linkedin.com/in/sathvik-goud-gaddam/" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/sathvik-goud-gaddam
                </a>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p className="footer-name">Sathvik Goud Gaddam</p>
            <div className="social-links">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/sathvik-goud-gaddam/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
          <p className="copyright">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
