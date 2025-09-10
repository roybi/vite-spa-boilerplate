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
    this.setupMatrixRain()
    this.setupBrainWaveVisualizer()
    this.setupCodeEffects()
    this.setupLottieAnimation()
    this.setupQAAccordion()
    this.setupWaitlistForm()
  }

  createApp() {
    document.querySelector('#app').innerHTML = `
      <a href="#main" class="skip-link">Skip to main content</a>
      ${this.createNavigation()}
      <main id="main">
        ${this.createHero()}
        ${this.createProductShowcase()}
        ${this.createProductGallery()}
        ${this.createFeatures()}
        ${this.createTechSpecs()}
        ${this.createQA()}
        ${this.createWaitlist()}
      </main>
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
            <li><a href="#qa" class="nav-link">FAQ</a></li>
            <li><a href="#waitlist" class="nav-link">Waitlist</a></li>
            <li><a href="#contact" class="nav-link">Contact</a></li>
          </ul>
          <button class="theme-toggle" id="themeToggle" aria-label="Toggle between light and dark theme">
            <span class="theme-icon light-icon" aria-hidden="true">☀️</span>
            <span class="theme-icon dark-icon" aria-hidden="true">🌙</span>
          </button>
        </div>
      </nav>
    `
  }

  createHero() {
    return `
      <section class="hero">
        <div class="video-background">
          <iframe 
            id="hero-video" 
            src="https://www.youtube.com/embed/5fpGTE3aIw0?autoplay=1&mute=1&loop=1&playlist=5fpGTE3aIw0&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1" 
            frameborder="0" 
            allow="autoplay; encrypted-media" 
            allowfullscreen>
          </iframe>
          <div class="video-overlay"></div>
        </div>
        <div class="hero-content animate-fade-in">
          <h1 class="hero-title">The Future of Brain-Computer Interface</h1>
          <h2 class="hero-subtitle">NeuroSync</h2>
          <p class="hero-description">
            Harness the power of your mind with our revolutionary brain wave device. 
            Advanced AI interprets neural patterns in real-time, unlocking unprecedented 
            control and insights into human consciousness.
          </p>
          <div class="code-snippet">
            <code>neural_interface.connect() → consciousness.unlock()</code>
          </div>
          <a href="#showcase" class="cta-button">
            <span>Discover the Technology</span>
            <span class="button-code">[ENTER]</span>
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
                <div class="device-detail lottie-view">
                  <lottie-player
                    id="ergonomic-animation"
                    src="./animation/working-brain.json"
                    background="transparent"
                    speed="1"
                    style="width: 100%; height: 100%; max-width: 300px; max-height: 200px;"
                    loop
                    autoplay
                    mode="normal"
                    controls="false">
                  </lottie-player>
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

  createQA() {
    const qaItems = [
      {
        question: 'Is the NeuroSync device safe to use?',
        answer: 'Yes, NeuroSync uses non-invasive EEG technology that only reads brain signals from the surface of your scalp. It\'s completely safe and FDA-approved for consumer use.'
      },
      {
        question: 'How accurate is the brain wave interpretation?',
        answer: 'Our AI achieves 99.7% accuracy in neural pattern recognition after a brief calibration period. The system continuously learns and adapts to your unique brain patterns.'
      },
      {
        question: 'What applications can I control with NeuroSync?',
        answer: 'NeuroSync integrates with computers, smart home devices, gaming systems, and mobile apps. Control cursors, type text, play games, or command IoT devices with your thoughts.'
      },
      {
        question: 'How long does the battery last?',
        answer: 'The NeuroSync device provides 24+ hours of continuous use on a single charge, with fast charging capability that reaches 80% capacity in just 30 minutes.'
      },
      {
        question: 'Do I need any special training to use it?',
        answer: 'No special training required. The device includes an intuitive setup process and guided tutorials. Most users are controlling their first application within 10 minutes.'
      },
      {
        question: 'What about data privacy and security?',
        answer: 'All neural data is processed locally on your device with end-to-end encryption. Your brain data never leaves your device unless you explicitly choose to share it.'
      }
    ]

    return `
      <section class="qa-section" id="qa">
        <div class="section">
          <div class="scroll-fade">
            <h2 class="section-title">Frequently Asked Questions</h2>
            <p class="section-subtitle">
              Everything you need to know about NeuroSync brain-computer interface
            </p>
          </div>
          <div class="qa-container">
            ${qaItems.map((item, index) => `
              <div class="qa-item scroll-fade" data-index="${index}">
                <button class="qa-question" aria-expanded="false" aria-controls="answer-${index}">
                  <h3>${item.question}</h3>
                  <div class="qa-toggle" aria-hidden="true">+</div>
                </button>
                <div class="qa-answer" id="answer-${index}">
                  <p>${item.answer}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `
  }

  createWaitlist() {
    return `
      <section class="waitlist-section" id="waitlist">
        <div class="section">
          <div class="waitlist-container scroll-fade">
            <div class="waitlist-content">
              <h2 class="section-title">Join the Future</h2>
              <p class="section-subtitle">
                Be among the first to experience the revolutionary NeuroSync technology. 
                Get exclusive early access and special pricing.
              </p>
              <div class="waitlist-benefits">
                <div class="benefit-item">
                  <span class="benefit-icon">🚀</span>
                  <span>Early Access</span>
                </div>
                <div class="benefit-item">
                  <span class="benefit-icon">💰</span>
                  <span>Special Pricing</span>
                </div>
                <div class="benefit-item">
                  <span class="benefit-icon">🎁</span>
                  <span>Exclusive Updates</span>
                </div>
              </div>
            </div>
            <div class="waitlist-form-container">
              <form class="waitlist-form" id="waitlistForm">
                <div class="form-group">
                  <input 
                    type="email" 
                    id="waitlistEmail" 
                    placeholder="Enter your email address" 
                    required
                    class="email-input"
                  >
                  <button type="submit" class="waitlist-button">
                    <span class="button-text">Join Waitlist</span>
                    <span class="button-code">[SUBMIT]</span>
                  </button>
                </div>
                <p class="form-note">
                  No spam, ever. Unsubscribe anytime. Your email is safe with us.
                </p>
              </form>
              <div class="success-message" id="successMessage">
                <div class="success-icon">✅</div>
                <h3>Successfully Signed Up!</h3>
                <p>Welcome to the future of brain-computer interfaces. You're now on the NeuroSync waitlist and will receive exclusive updates about our revolutionary technology.</p>
              </div>
            </div>
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
        heroDevice.style.transform = `translateY(${rate * 0.3}px) rotateZ(${Math.sin(scrolled * 0.002) * 3}deg)`
      }

      // Enhanced parallax effect for device cards
      document.querySelectorAll('.neural-device').forEach((device, index) => {
        const offset = (scrolled * 0.1) + (index * 10)
        const rotateX = Math.sin(scrolled * 0.001 + index) * 5
        const rotateY = Math.cos(scrolled * 0.001 + index) * 5
        const rotateZ = Math.sin(scrolled * 0.001 + index) * 2
        device.style.transform = `translateY(${-offset * 0.2}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
      })

      // Parallax for background elements
      document.querySelectorAll('.section::before, .product-showcase::after').forEach((bg, index) => {
        if (bg) {
          bg.style.transform = `translateY(${scrolled * 0.05 * (index + 1)}px) scale(${1 + scrolled * 0.0001})`
        }
      })

      // Code snippets float effect
      document.querySelectorAll('.code-snippet').forEach((code, index) => {
        const floatOffset = Math.sin(Date.now() * 0.001 + index) * 5
        code.style.transform = `translateY(${floatOffset}px)`
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

  setupMatrixRain() {
    setTimeout(() => {
      const matrixContainer = document.createElement('div')
      matrixContainer.className = 'matrix-rain-container'
      matrixContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        opacity: 0.3;
      `
      document.body.appendChild(matrixContainer)

      const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
      
      for (let i = 0; i < 10; i++) {
        setTimeout(() => {
          this.createMatrixColumn(matrixContainer, characters)
        }, i * 500)
      }
    }, 1000)
  }

  createMatrixColumn(container, chars) {
    const column = document.createElement('div')
    column.style.cssText = `
      position: absolute;
      top: -100px;
      left: ${Math.random() * window.innerWidth}px;
      font-family: var(--mono-font);
      font-size: 14px;
      color: var(--accent-green);
      line-height: 1.2;
      animation: matrixRain ${5 + Math.random() * 10}s linear infinite;
      opacity: ${0.3 + Math.random() * 0.4};
    `
    
    for (let i = 0; i < 20; i++) {
      const char = document.createElement('div')
      char.textContent = chars[Math.floor(Math.random() * chars.length)]
      char.style.opacity = Math.random()
      column.appendChild(char)
    }
    
    container.appendChild(column)
    
    setTimeout(() => {
      if (column.parentNode) {
        column.parentNode.removeChild(column)
      }
      this.createMatrixColumn(container, chars)
    }, 15000)
  }

  setupBrainWaveVisualizer() {
    setTimeout(() => {
      document.querySelectorAll('.neural-device').forEach((device, index) => {
        // Main brain wave visualizer
        const visualizer = document.createElement('div')
        visualizer.className = 'brain-wave-visualizer'
        device.appendChild(visualizer)

        // Add multiple brain wave rings
        for (let i = 0; i < 3; i++) {
          const ring = document.createElement('div')
          ring.className = 'brain-wave-ring'
          ring.style.cssText = `
            position: absolute;
            top: ${10 + i * 15}%;
            left: ${10 + i * 15}%;
            right: ${10 + i * 15}%;
            bottom: ${10 + i * 15}%;
            border-radius: 50%;
            border: 2px solid rgba(0, 255, 136, ${0.6 - i * 0.2});
            animation: brainWaveRing ${2 + i * 0.5}s ease-in-out infinite;
            animation-delay: ${i * 0.3}s;
            pointer-events: none;
          `
          device.appendChild(ring)
        }

        // Add brain wave particles
        this.createBrainWaveParticles(device, index)
      })
    }, 500)
  }

  createBrainWaveParticles(container, deviceIndex) {
    for (let i = 0; i < 6; i++) {
      const particle = document.createElement('div')
      particle.className = 'brain-wave-particle'
      const angle = (i * 60) + (deviceIndex * 10) // Spread particles around circle
      const radius = 60 + (i * 5)
      
      particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(0, 255, 136, 0.8);
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) translate(${Math.cos(angle * Math.PI / 180) * radius}px, ${Math.sin(angle * Math.PI / 180) * radius}px);
        animation: brainWaveParticle ${3 + Math.random() * 2}s ease-in-out infinite;
        animation-delay: ${i * 0.2}s;
        box-shadow: 0 0 10px rgba(0, 255, 136, 0.6);
        pointer-events: none;
      `
      container.appendChild(particle)
    }
  }

  setupCodeEffects() {
    setTimeout(() => {
      // Add typing effect to code snippets
      document.querySelectorAll('.code-snippet code').forEach(code => {
        const text = code.textContent
        code.textContent = ''
        let i = 0
        
        const typeWriter = () => {
          if (i < text.length) {
            code.textContent += text.charAt(i)
            i++
            setTimeout(typeWriter, 50 + Math.random() * 50)
          }
        }
        
        setTimeout(typeWriter, 1000)
      })

      // Add glitch effect to device names
      document.querySelectorAll('.device-name').forEach(name => {
        name.addEventListener('mouseenter', () => {
          const originalText = name.textContent
          const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?'
          let glitchText = ''
          
          for (let i = 0; i < originalText.length; i++) {
            if (Math.random() < 0.3) {
              glitchText += glitchChars[Math.floor(Math.random() * glitchChars.length)]
            } else {
              glitchText += originalText[i]
            }
          }
          
          name.textContent = glitchText
          setTimeout(() => {
            name.textContent = originalText
          }, 100)
        })
      })
    }, 1000)
  }

  setupLottieAnimation() {
    setTimeout(() => {
      const lottiePlayer = document.getElementById('ergonomic-animation')
      if (lottiePlayer) {
        lottiePlayer.addEventListener('ready', () => {
          console.log('Lottie animation loaded successfully')
        })
        
        lottiePlayer.addEventListener('error', (e) => {
          console.error('Lottie animation failed to load:', e)
          // Fallback: create a simple CSS animation
          this.createFallbackAnimation(lottiePlayer.parentElement)
        })
      }
    }, 2000)
  }

  createFallbackAnimation(container) {
    container.innerHTML = `
      <div class="fallback-animation">
        <div class="brain-outline">
          <div class="comfort-indicator"></div>
        </div>
      </div>
    `
  }

  setupQAAccordion() {
    setTimeout(() => {
      document.querySelectorAll('.qa-item').forEach(item => {
        const question = item.querySelector('.qa-question')
        const answer = item.querySelector('.qa-answer')
        const toggle = item.querySelector('.qa-toggle')
        
        question.addEventListener('click', () => {
          const isOpen = item.classList.contains('open')
          
          // Close all other items
          document.querySelectorAll('.qa-item').forEach(otherItem => {
            if (otherItem !== item) {
              otherItem.classList.remove('open')
              const otherToggle = otherItem.querySelector('.qa-toggle')
              const otherQuestion = otherItem.querySelector('.qa-question')
              otherToggle.textContent = '+'
              otherQuestion.setAttribute('aria-expanded', 'false')
            }
          })
          
          // Toggle current item
          if (isOpen) {
            item.classList.remove('open')
            toggle.textContent = '+'
            question.setAttribute('aria-expanded', 'false')
          } else {
            item.classList.add('open')
            toggle.textContent = '−'
            question.setAttribute('aria-expanded', 'true')
          }
        })

        // Add keyboard support for Enter and Space keys
        question.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            question.click()
          }
        })
      })
    }, 500)
  }

  setupWaitlistForm() {
    setTimeout(() => {
      const form = document.getElementById('waitlistForm')
      const successMessage = document.getElementById('successMessage')
      const emailInput = document.getElementById('waitlistEmail')
      
      if (form && successMessage && emailInput) {
        form.addEventListener('submit', (e) => {
          e.preventDefault()
          
          const email = emailInput.value.trim()
          if (this.isValidEmail(email)) {
            // Simulate form submission with mock data
            this.simulateWaitlistSignup(email)
            
            // Show success message
            form.style.display = 'none'
            successMessage.style.display = 'block'
            
            // Add celebration effect
            this.triggerCelebrationEffect()
          }
        })
      }
    }, 500)
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  simulateWaitlistSignup(email) {
    // Mock API call simulation
    console.log('Mock waitlist signup:', {
      email: email,
      timestamp: new Date().toISOString(),
      status: 'success',
      waitlistPosition: Math.floor(Math.random() * 1000) + 1
    })
    
    // Store in localStorage as mock data
    const waitlistData = {
      email: email,
      signupDate: new Date().toISOString(),
      waitlistPosition: Math.floor(Math.random() * 1000) + 1
    }
    localStorage.setItem('neurosync-waitlist', JSON.stringify(waitlistData))
  }

  triggerCelebrationEffect() {
    // Create floating particles effect
    const particleContainer = document.createElement('div')
    particleContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 9999;
    `
    document.body.appendChild(particleContainer)
    
    // Create celebration particles
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        this.createCelebrationParticle(particleContainer)
      }, i * 100)
    }
    
    // Remove particle container after animation
    setTimeout(() => {
      if (particleContainer.parentNode) {
        particleContainer.parentNode.removeChild(particleContainer)
      }
    }, 3000)
  }

  createCelebrationParticle(container) {
    const particle = document.createElement('div')
    const symbols = ['🎉', '🚀', '⭐', '✨', '🧠', '💫']
    const symbol = symbols[Math.floor(Math.random() * symbols.length)]
    
    particle.textContent = symbol
    particle.style.cssText = `
      position: absolute;
      font-size: ${20 + Math.random() * 20}px;
      left: ${Math.random() * window.innerWidth}px;
      top: ${window.innerHeight + 50}px;
      animation: celebrationFloat ${2 + Math.random() * 3}s ease-out forwards;
      pointer-events: none;
    `
    
    container.appendChild(particle)
  }
}

// Initialize the app
new NeuroSyncApp()
