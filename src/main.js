import './style.css'

// NeuroSync Brain Wave Device Application
class NeuroSyncApp {
  constructor() {
    this.init()
  }

  init() {
    this.createApp()
    this.setupThemeSystem()
    this.setupScrollAnimations()
    this.setupSmoothScrolling()
    this.setupMicroInteractions()
    this.setupParallaxEffects()
  }

  createApp() {
    document.querySelector('#app').innerHTML = `
      ${this.createNavigation()}
      ${this.createHero()}
      ${this.createProductShowcase()}
      ${this.createProductGallery()}
      ${this.createFeatures()}
      ${this.createTechSpecs()}
      ${this.createFooter()}
    `
  }

  createNavigation() {
    return `
      <nav class="nav">
        <div class="nav-container">
          <a href="#" class="nav-logo">NeuroSync</a>
          <ul class="nav-menu">
            <li><a href="#features" class="nav-link">Features</a></li>
            <li><a href="#technology" class="nav-link">Technology</a></li>
            <li><a href="#specs" class="nav-link">Specifications</a></li>
            <li><a href="#contact" class="nav-link">Contact</a></li>
          </ul>
          <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">
            <span class="theme-icon light-icon">☀️</span>
            <span class="theme-icon dark-icon">🌙</span>
          </button>
        </div>
      </nav>
    `
  }

  createHero() {
    return `
      <section class="hero">
        <div class="hero-content animate-fade-in">
          <h1 class="hero-title">The Future of Brain-Computer Interface</h1>
          <h2 class="hero-subtitle">NeuroSync</h2>
          <p class="hero-description">
            Harness the power of your mind with our revolutionary brain wave device. 
            Advanced AI interprets neural patterns in real-time, unlocking unprecedented 
            control and insights into human consciousness.
          </p>
          <a href="#showcase" class="cta-button">
            Discover the Technology
          </a>
        </div>
        <div class="hero-device-visual">
          <div class="device-mockup">
            <div class="device-glow"></div>
            <div class="device-outline">NeuroSync</div>
          </div>
        </div>
      </section>
    `
  }

  createProductShowcase() {
    return `
      <section class="product-showcase" id="showcase">
        <div class="showcase-container">
          <div class="showcase-text scroll-fade">
            <h2 class="showcase-title">Designed for the human mind.</h2>
            <p class="showcase-description">
              Every curve, every sensor, every circuit - meticulously crafted to seamlessly 
              interface with the most complex system in the universe.
            </p>
          </div>
          <div class="device-gallery">
            <div class="device-card primary scroll-fade">
              <div class="device-image">
                <div class="neural-device main-device">
                  <div class="device-sensors"></div>
                  <div class="device-body">NeuroSync</div>
                  <div class="device-led-ring"></div>
                </div>
              </div>
              <div class="device-info">
                <h3 class="device-name">NeuroSync Pro</h3>
                <p class="device-price">From $2,499</p>
                <p class="device-desc">64-channel professional grade</p>
              </div>
            </div>
            <div class="device-card secondary scroll-fade">
              <div class="device-image">
                <div class="neural-device compact-device">
                  <div class="device-sensors"></div>
                  <div class="device-body">NeuroSync</div>
                  <div class="device-led-ring"></div>
                </div>
              </div>
              <div class="device-info">
                <h3 class="device-name">NeuroSync Lite</h3>
                <p class="device-price">From $1,299</p>
                <p class="device-desc">16-channel consumer model</p>
              </div>
            </div>
            <div class="device-card tertiary scroll-fade">
              <div class="device-image">
                <div class="neural-device research-device">
                  <div class="device-sensors"></div>
                  <div class="device-body">NeuroSync</div>
                  <div class="device-led-ring"></div>
                </div>
              </div>
              <div class="device-info">
                <h3 class="device-name">NeuroSync Research</h3>
                <p class="device-price">From $4,999</p>
                <p class="device-desc">128-channel research platform</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `
  }

  createProductGallery() {
    return `
      <section class="product-gallery" id="gallery">
        <div class="gallery-container">
          <div class="gallery-header scroll-fade">
            <h2 class="gallery-title">Experience NeuroSync</h2>
            <p class="gallery-subtitle">
              Discover every detail of our revolutionary brain-computer interface
            </p>
          </div>
          <div class="gallery-grid">
            <div class="gallery-item large scroll-fade">
              <div class="gallery-image">
                <div class="device-detail main-view">
                  <div class="device-frame">
                    <div class="device-core">NeuroSync</div>
                    <div class="sensor-array">
                      <div class="sensor active"></div>
                      <div class="sensor active"></div>
                      <div class="sensor"></div>
                      <div class="sensor active"></div>
                      <div class="sensor"></div>
                      <div class="sensor active"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="gallery-info">
                <h3>Neural Sensor Array</h3>
                <p>64 high-precision electrodes capture brain activity with medical-grade accuracy</p>
              </div>
            </div>
            <div class="gallery-item scroll-fade">
              <div class="gallery-image">
                <div class="device-detail profile-view">
                  <div class="device-profile">
                    <div class="profile-line"></div>
                    <div class="profile-curve"></div>
                    <div class="profile-base"></div>
                  </div>
                </div>
              </div>
              <div class="gallery-info">
                <h3>Ergonomic Design</h3>
                <p>Contoured for maximum comfort during extended sessions</p>
              </div>
            </div>
            <div class="gallery-item scroll-fade">
              <div class="gallery-image">
                <div class="device-detail tech-view">
                  <div class="circuit-board">
                    <div class="circuit-path"></div>
                    <div class="processor-chip"></div>
                    <div class="data-flow"></div>
                  </div>
                </div>
              </div>
              <div class="gallery-info">
                <h3>AI Processing Unit</h3>
                <p>Custom silicon processes neural signals in real-time</p>
              </div>
            </div>
            <div class="gallery-item wide scroll-fade">
              <div class="gallery-image">
                <div class="device-detail ecosystem-view">
                  <div class="connected-devices">
                    <div class="main-unit">NeuroSync</div>
                    <div class="connection-line"></div>
                    <div class="companion-app">App</div>
                    <div class="connection-line"></div>
                    <div class="cloud-service">Cloud</div>
                  </div>
                </div>
              </div>
              <div class="gallery-info">
                <h3>Complete Ecosystem</h3>
                <p>Seamlessly integrates with companion app and cloud analytics</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `
  }

  createFeatures() {
    const features = [
      {
        icon: '🧠',
        title: 'Neural Pattern Recognition',
        description: 'Advanced algorithms analyze complex brain wave patterns with 99.7% accuracy, interpreting thoughts and intentions in real-time.'
      },
      {
        icon: '🤖',
        title: 'AI-Powered Processing',
        description: 'State-of-the-art machine learning models process neural signals, adapting to your unique brain patterns for optimal performance.'
      },
      {
        icon: '⚡',
        title: 'Real-Time Response',
        description: 'Ultra-low latency processing ensures instantaneous response to neural commands, creating seamless brain-computer interaction.'
      },
      {
        icon: '🔒',
        title: 'Secure & Private',
        description: 'End-to-end encryption protects your neural data, with all processing happening locally on your device for maximum privacy.'
      },
      {
        icon: '🎯',
        title: 'Adaptive Learning',
        description: 'The system continuously learns from your brain patterns, improving accuracy and expanding capabilities over time.'
      },
      {
        icon: '🌐',
        title: 'Universal Compatibility',
        description: 'Seamlessly integrates with existing devices and platforms, bringing brain control to your entire digital ecosystem.'
      }
    ]

    return `
      <section class="section" id="features">
        <div class="scroll-fade">
          <h2 class="section-title">Revolutionary Features</h2>
          <p class="section-subtitle">
            Experience the next evolution of human-computer interaction with cutting-edge neurotechnology
          </p>
        </div>
        <div class="features-grid">
          ${features.map(feature => `
            <div class="feature-card scroll-fade">
              <div class="feature-icon">${feature.icon}</div>
              <h3 class="feature-title">${feature.title}</h3>
              <p class="feature-description">${feature.description}</p>
            </div>
          `).join('')}
        </div>
      </section>
    `
  }

  createTechSpecs() {
    const specs = [
      { label: 'Neural Sensors', value: '64-Channel EEG' },
      { label: 'Sampling Rate', value: '2000 Hz' },
      { label: 'Processing Latency', value: '<5ms' },
      { label: 'AI Models', value: 'Custom LLMs' },
      { label: 'Battery Life', value: '24+ Hours' },
      { label: 'Connectivity', value: 'Bluetooth 5.2, Wi-Fi 6' },
      { label: 'Weight', value: '180g' },
      { label: 'Materials', value: 'Medical Grade Titanium' }
    ]

    return `
      <section class="specs-section" id="specs">
        <div class="section">
          <div class="scroll-fade">
            <h2 class="section-title">Technical Specifications</h2>
            <p class="section-subtitle">
              Precision engineering meets advanced neuroscience in every component
            </p>
          </div>
          <div class="specs-grid">
            ${specs.map(spec => `
              <div class="spec-item scroll-fade">
                <div class="spec-label">${spec.label}</div>
                <div class="spec-value">${spec.value}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `
  }

  createFooter() {
    return `
      <footer class="footer" id="contact">
        <div class="footer-content">
          <div class="footer-links">
            <a href="#" class="footer-link">Privacy Policy</a>
            <a href="#" class="footer-link">Terms of Service</a>
            <a href="#" class="footer-link">Support</a>
            <a href="#" class="footer-link">Research</a>
          </div>
          <p class="footer-text">
            © 2024 NeuroSync Technologies. Advancing human potential through neurotechnology.
          </p>
        </div>
      </footer>
    `
  }

  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    // Observe all scroll-fade elements after DOM is updated
    setTimeout(() => {
      document.querySelectorAll('.scroll-fade').forEach(el => {
        observer.observe(el)
      })
    }, 100)
  }

  setupSmoothScrolling() {
    // Add smooth scrolling for navigation links
    setTimeout(() => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault()
          const target = document.querySelector(this.getAttribute('href'))
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
          }
        })
      })
    }, 100)
  }

  setupMicroInteractions() {
    setTimeout(() => {
      // Enhanced hover effects for device cards
      document.querySelectorAll('.device-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-12px) scale(1.02)'
          const device = this.querySelector('.neural-device')
          if (device) {
            device.style.transform = 'rotateY(15deg) rotateX(10deg) scale(1.05)'
          }
        })
        
        card.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0) scale(1)'
          const device = this.querySelector('.neural-device')
          if (device) {
            device.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)'
          }
        })
      })

      // Interactive button effects
      document.querySelectorAll('.cta-button, .nav-link').forEach(button => {
        button.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-2px)'
        })
        
        button.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0)'
        })
      })

      // Feature card tilt effect
      document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mousemove', function(e) {
          const rect = this.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top
          const centerX = rect.width / 2
          const centerY = rect.height / 2
          const rotateX = (y - centerY) / 20
          const rotateY = (centerX - x) / 20
          
          this.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
        })
        
        card.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg)'
        })
      })
    }, 200)
  }

  setupParallaxEffects() {
    let ticking = false

    function updateParallax() {
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.5
      
      // Parallax effect for hero device visual
      const heroDevice = document.querySelector('.hero-device-visual')
      if (heroDevice) {
        heroDevice.style.transform = `translateY(${rate * 0.3}px)`
      }

      // Parallax effect for device cards
      document.querySelectorAll('.neural-device').forEach((device, index) => {
        const offset = (scrolled * 0.1) + (index * 10)
        device.style.transform = `translateY(${-offset * 0.2}px) rotateZ(${Math.sin(scrolled * 0.001 + index) * 2}deg)`
      })

      ticking = false
    }

    function requestParallax() {
      if (!ticking) {
        requestAnimationFrame(updateParallax)
        ticking = true
      }
    }

    window.addEventListener('scroll', requestParallax)
  }

  setupThemeSystem() {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('neurosync-theme') || 'dark'
    document.documentElement.setAttribute('data-theme', savedTheme)

    // Setup theme toggle functionality
    setTimeout(() => {
      const themeToggle = document.getElementById('themeToggle')
      if (themeToggle) {
        themeToggle.addEventListener('click', this.toggleTheme.bind(this))
        this.updateThemeToggle()
      }
    }, 100)
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme')
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
    
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('neurosync-theme', newTheme)
    this.updateThemeToggle()
  }

  updateThemeToggle() {
    const currentTheme = document.documentElement.getAttribute('data-theme')
    const lightIcon = document.querySelector('.light-icon')
    const darkIcon = document.querySelector('.dark-icon')
    
    if (lightIcon && darkIcon) {
      if (currentTheme === 'dark') {
        lightIcon.style.display = 'block'
        darkIcon.style.display = 'none'
      } else {
        lightIcon.style.display = 'none'
        darkIcon.style.display = 'block'
      }
    }
  }
}

// Initialize the app
new NeuroSyncApp()
