import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const SupportVolunteer = (props) => {
  return (
    <>
      <div className="support-volunteer-container1">
        <Head>
          <title>Support-Volunteer - Smooth Sympathetic Chamois</title>
          <meta
            property="og:title"
            content="Support-Volunteer - Smooth Sympathetic Chamois"
          />
        </Head>
        <Navigation></Navigation>
        <div className="support-volunteer-container2">
          <div className="support-volunteer-container3">
            <Script
              html={`<style>
        @keyframes fadeInUp {from {opacity: 0;
transform: translateY(30px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes fadeInRight {from {opacity: 0;
transform: translateX(30px);}
to {opacity: 1;
transform: translateX(0);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="support-volunteer-container4">
          <div className="support-volunteer-container5">
            <Script
              html={`<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: var(--font-family-body);
  line-height: var(--line-height-body);
  color: var(--color-on-surface);
  background-color: var(--color-surface);
}
@media (prefers-reduced-motion: reduce) {
* {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="support-volunteer-container6">
          <div className="support-volunteer-container7">
            <Script
              html={`<script defer data-name="support-volunteer-page">
(function(){
  // Mobile Testimonials Carousel
  const carousel = document.getElementById("testimonials-carousel")
  if (carousel) {
    const track = carousel.querySelector(".carousel-track")
    const slides = carousel.querySelectorAll(".carousel-slide")
    const prevBtn = carousel.querySelector(".prev-btn")
    const nextBtn = carousel.querySelector(".next-btn")

    let currentSlide = 0
    const totalSlides = slides.length

    function updateCarousel() {
      const translateX = -currentSlide * 100
      track.style.transform = \`translateX(\${translateX}%)\`
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides
      updateCarousel()
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
      updateCarousel()
    }

    nextBtn.addEventListener("click", nextSlide)
    prevBtn.addEventListener("click", prevSlide)

    // Auto-advance carousel every 5 seconds
    setInterval(nextSlide, 5000)

    // Touch/swipe support
    let startX = 0
    let endX = 0

    carousel.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX
    })

    carousel.addEventListener("touchmove", (e) => {
      e.preventDefault()
    })

    carousel.addEventListener("touchend", (e) => {
      endX = e.changedTouches[0].clientX
      const diff = startX - endX

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextSlide()
        } else {
          prevSlide()
        }
      }
    })
  }

  // Scroll-triggered animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running"
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(
    ".help-card, .opportunity-card, .gallery-item, .testimonial-card"
  )
  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.animation = "fadeInUp 0.6s ease-out forwards paused"
    observer.observe(el)
  })

  // Staggered animation for grid items
  const gridContainers = document.querySelectorAll(
    ".help-grid, .opportunities-grid, .gallery-grid, .testimonials-grid"
  )
  gridContainers.forEach((container) => {
    const items = container.children
    Array.from(items).forEach((item, index) => {
      item.style.animationDelay = \`\${index * 0.1}s\`
    })
  })

  // Stats counter animation
  const statNumbers = document.querySelectorAll(".stat-number")
  const animateCounter = (element, target) => {
    const duration = 2000
    const increment = target / (duration / 16)
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(timer)
      }

      // Format numbers with commas
      const formatted = Math.floor(current).toLocaleString()
      element.textContent = element.textContent.includes("+")
        ? formatted + "+"
        : formatted
    }, 16)
  }

  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target
          const text = element.textContent
          const number = parseInt(text.replace(/[^\d]/g, ""))

          if (number) {
            element.textContent = "0"
            animateCounter(element, number)
            statsObserver.unobserve(element)
          }
        }
      })
    },
    { threshold: 0.5 }
  )

  statNumbers.forEach((stat) => statsObserver.observe(stat))

  // Parallax effect for hero video
  const heroVideo = document.querySelector(".hero-video")
  if (heroVideo) {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.5
      heroVideo.style.transform = \`translateY(\${rate}px)\`
    })
  }

  // Smooth reveal for gallery items
  const galleryItems = document.querySelectorAll(".gallery-item")
  const galleryObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }
      })
    },
    { threshold: 0.2 }
  )

  galleryItems.forEach((item) => {
    item.style.opacity = "0"
    item.style.transform = "translateY(20px)"
    item.style.transition = "all 0.6s ease-out"
    galleryObserver.observe(item)
  })

  // Enhanced button hover effects
  const buttons = document.querySelectorAll(".btn")
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", (e) => {
      const ripple = document.createElement("span")
      ripple.style.position = "absolute"
      ripple.style.borderRadius = "50%"
      ripple.style.background = "rgba(255,255,255,0.3)"
      ripple.style.transform = "scale(0)"
      ripple.style.animation = "ripple 0.6s linear"
      ripple.style.left = "50%"
      ripple.style.top = "50%"
      ripple.style.width = ripple.style.height = "100px"
      ripple.style.marginLeft = ripple.style.marginTop = "-50px"

      button.style.position = "relative"
      button.style.overflow = "hidden"
      button.appendChild(ripple)

      setTimeout(() => {
        ripple.remove()
      }, 600)
    })
  })

  // Add ripple animation
  const style = document.createElement("style")
  style.textContent = \`
  @keyframes ripple {
    to {
      transform: scale(2);
      opacity: 0;
    }
  }
\`
  document.head.appendChild(style)
})()
</script>`}
            ></Script>
          </div>
        </div>
        <section className="hero-section">
          <div className="hero-background">
            <video
              autoPlay="true"
              muted="true"
              loop="true"
              playsInline="true"
              src="https://videos.pexels.com/video-files/6894121/6894121-hd_1920_1080_25fps.mp4"
              className="hero-video"
            ></video>
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Support &amp; Volunteer</h1>
              <h2 className="hero-subtitle">
                {' '}
                Join a Movement That Delivers Measurable Impact
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h2>
              <p className="section-content">
                {' '}
                Empower Odisha partners with communities, businesses, and
                volunteers to translate resources into tangible outcomes:
                healthcare camps serving thousands, digital access in remote
                villages, scholarships for vulnerable students, and rapid
                disaster relief. Your time, expertise, or donation becomes a
                reliable force for change.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="hero-cta">
                <button className="btn btn-primary">Get Involved Today</button>
                <button className="btn btn-outline">Learn More</button>
              </div>
            </div>
            <div className="hero-stats">
              <div className="stat-card">
                <div className="stat-number">
                  <span>5,200+</span>
                </div>
                <div className="stat-label">
                  <span>Lives Impacted</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-number">
                  <span>34</span>
                </div>
                <div className="stat-label">
                  <span>Villages Served</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-number">
                  <span>210</span>
                </div>
                <div className="stat-label">
                  <span>Scholarships Awarded</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="help-section">
          <div className="help-container">
            <div className="section-header">
              <h2 className="section-title">How You Can Help</h2>
              <p className="section-subtitle">
                {' '}
                Join a focused effort that delivers measurable change. Whether
                you give time, expertise, or financial support, your
                contribution is directed toward clear, accountable programs.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="help-grid">
              <div className="help-card volunteer-card">
                <div className="card-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                    </g>
                  </svg>
                </div>
                <h3>Volunteer Your Skills</h3>
                <p>
                  {' '}
                  Bring professional expertise or grassroots energy to targeted
                  initiatives. Short-term roles and long-term placements
                  available with clear objectives and measurable outcomes.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <button className="btn btn-secondary">Volunteer Now</button>
              </div>
              <div className="help-card donation-card">
                <div className="card-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                    ></path>
                  </svg>
                </div>
                <h3>Strategic Giving</h3>
                <p>
                  {' '}
                  Donate to specific projects with transparent, outcome-driven
                  support. Receive regular, data-backed reports on reach,
                  expenditures, and impact with audited processes.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <button className="btn btn-secondary">Donate Today</button>
              </div>
              <div className="help-card partnership-card">
                <div className="card-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="m11 17l2 2a1 1 0 1 0 3-3"></path>
                      <path d="m14 14l2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
                      <path d="m21 3l1 11h-2M3 3L2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8"></path>
                    </g>
                  </svg>
                </div>
                <h3>Corporate Partnerships</h3>
                <p>
                  {' '}
                  Partner with us to co-design CSR initiatives that align with
                  business goals. Options include sponsored health camps,
                  infrastructure grants, and employee volunteer programs.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <button className="btn btn-secondary">Partner With Us</button>
              </div>
              <div className="help-card accountability-card">
                <div className="card-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                    ></path>
                  </svg>
                </div>
                <h3>Accountability Promise</h3>
                <p>
                  {' '}
                  Every contribution is tied to defined indicators—beneficiaries
                  served, services delivered, and funds allocated. Receive
                  periodic financial statements and program evaluations.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <button className="btn btn-secondary">View Reports</button>
              </div>
            </div>
          </div>
        </section>
        <section className="opportunities-section">
          <div className="opportunities-container">
            <div className="section-header">
              <h2 className="section-title">Volunteer Opportunities</h2>
              <p className="section-subtitle">
                {' '}
                Join Empower Odisha&apos;s skilled volunteer network and apply
                your expertise where it matters most.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="opportunities-grid">
              <div className="opportunity-card education-card">
                <div className="card-image">
                  <img
                    src="https://images.pexels.com/photos/4483669/pexels-photo-4483669.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                    alt="Education volunteers mentoring students"
                  />
                  <div className="card-overlay">
                    <div className="card-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <h3>Education Mentors</h3>
                  <p>
                    {' '}
                    Serve as curriculum advisors, after-school tutors, or
                    digital literacy trainers. Improve learning outcomes and
                    mentor scholarship recipients.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="card-details">
                    <div className="detail-item">
                      <strong>Commitment:</strong>
                      <span>
                        {' '}
                        4-6 weeks or monthly sessions
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div className="detail-item">
                      <strong>Impact:</strong>
                      <span>
                        {' '}
                        Enhanced learning outcomes
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </div>
                  <button className="btn btn-outline">Apply Now</button>
                </div>
              </div>
              <div className="opportunity-card healthcare-card">
                <div className="card-image">
                  <img
                    src="https://images.pexels.com/photos/6646878/pexels-photo-6646878.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                    alt="Healthcare volunteers providing medical support"
                  />
                  <div className="card-overlay">
                    <div className="card-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        >
                          <path d="M11 2v2M5 2v2m0-1H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path>
                          <path d="M8 15a6 6 0 0 0 12 0v-3"></path>
                          <circle cx="20" cy="10" r="2"></circle>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <h3>Healthcare Volunteers</h3>
                  <p>
                    {' '}
                    Support our Healthcare for All program as medical
                    professionals, health technicians, or logistics coordinators
                    in community health camps.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="card-details">
                    <div className="detail-item">
                      <strong>Commitment:</strong>
                      <span>
                        {' '}
                        Day-long camps to multi-week campaigns
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div className="detail-item">
                      <strong>Impact:</strong>
                      <span>
                        {' '}
                        5,000+ people served annually
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </div>
                  <button className="btn btn-outline">
                    Join Healthcare Team
                  </button>
                </div>
              </div>
              <div className="opportunity-card disaster-card">
                <div className="card-image">
                  <img
                    src="https://images.pexels.com/photos/8543391/pexels-photo-8543391.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                    alt="Disaster relief volunteers in action"
                  />
                  <div className="card-overlay">
                    <div className="card-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <h3>Disaster Relief Team</h3>
                  <p>
                    {' '}
                    Join our certified rapid-response roster for emergency
                    distribution, damage assessment, and community rebuilding
                    with clear safety protocols.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="card-details">
                    <div className="detail-item">
                      <strong>Commitment:</strong>
                      <span>
                        {' '}
                        On-call deployment ready
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div className="detail-item">
                      <strong>Impact:</strong>
                      <span>
                        {' '}
                        72-hour response time
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </div>
                  <button className="btn btn-outline">
                    Join Response Team
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="donate-section">
          <div className="donate-background">
            <img
              src="https://images.pexels.com/photos/7643738/pexels-photo-7643738.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
              alt="Partnership handshake"
              className="donate-bg-image"
            />
            <div className="donate-overlay"></div>
          </div>
          <div className="donate-container">
            <div className="donate-content">
              <div className="donate-main">
                <h2 className="section-title">Partner with Empower Odisha</h2>
                <p className="hero-subtitle">
                  Invest in measurable, sustainable change
                </p>
                <p className="section-content">
                  {' '}
                  Your donation or corporate partnership directly supports three
                  proven pillars: education scholarships, healthcare outreach,
                  and digital inclusion for underserved communities across
                  Ranpur and greater Odisha.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="donate-cta">
                  <button className="btn btn-primary btn-lg">Donate Now</button>
                  <button className="btn btn-outline btn-lg">
                    Explore Partnerships
                  </button>
                </div>
              </div>
              <div className="donate-sidebar">
                <div className="donation-options">
                  <h3>Donation Options</h3>
                  <div className="option-item">
                    <div className="option-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                        ></path>
                      </svg>
                    </div>
                    <div className="option-content">
                      <h4>One-time Gifts</h4>
                      <p>For urgent relief and immediate impact</p>
                    </div>
                  </div>
                  <div className="option-item">
                    <div className="option-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        >
                          <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                          <rect
                            width="20"
                            height="14"
                            x="2"
                            y="6"
                            rx="2"
                          ></rect>
                        </g>
                      </svg>
                    </div>
                    <div className="option-content">
                      <h4>Corporate Partnerships</h4>
                      <p>Strategic sponsorships and CSR collaborations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="gallery-section">
          <div className="gallery-container">
            <div className="section-header">
              <h2 className="section-title">Impact Gallery</h2>
              <p className="section-subtitle">
                Real Change, Measured and Visible
              </p>
            </div>
            <div className="gallery-grid">
              <div className="gallery-item healthcare-item">
                <div className="gallery-image">
                  <img
                    src="https://images.pexels.com/photos/6646921/pexels-photo-6646921.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                    alt="Healthcare for All mobile clinic"
                  />
                  <div className="gallery-overlay">
                    <div className="gallery-content">
                      <h3>Healthcare for All</h3>
                      <p>
                        {' '}
                        Mobile clinics in 34 villages — 5,200+ free check-ups,
                        1,150 medicines dispensed
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                      <div className="gallery-stats">
                        <span className="stat">34 Villages</span>
                        <span className="stat">5,200+ Check-ups</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gallery-item education-item">
                <div className="gallery-image">
                  <img
                    src="https://images.pexels.com/photos/11350470/pexels-photo-11350470.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                    alt="Students receiving scholarships"
                  />
                  <div className="gallery-overlay">
                    <div className="gallery-content">
                      <h3>Scholarship Program</h3>
                      <p>
                        {' '}
                        210 scholarships awarded to students from marginalized
                        households
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                      <div className="gallery-stats">
                        <span className="stat">210 Scholarships</span>
                        <span className="stat">95% Retention</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gallery-item digital-item">
                <div className="gallery-image">
                  <img
                    src="https://images.pexels.com/photos/7475689/pexels-photo-7475689.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                    alt="Digital literacy training session"
                  />
                  <div className="gallery-overlay">
                    <div className="gallery-content">
                      <h3>Digital Odisha Movement</h3>
                      <p>
                        {' '}
                        High-speed internet rollouts in 18 rural hamlets with
                        1,800 training participants
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                      <div className="gallery-stats">
                        <span className="stat">18 Villages Connected</span>
                        <span className="stat">1,800 Trained</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gallery-item relief-item">
                <div className="gallery-image">
                  <img
                    src="https://images.pexels.com/photos/6647051/pexels-photo-6647051.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                    alt="Disaster relief distribution"
                  />
                  <div className="gallery-overlay">
                    <div className="gallery-content">
                      <h3>Disaster Relief</h3>
                      <p>
                        {' '}
                        Immediate-action response — food distribution and
                        medical aid within 72 hours
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                      <div className="gallery-stats">
                        <span className="stat">72hr Response</span>
                        <span className="stat">100% Coverage</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gallery-item women-item">
                <div className="gallery-image">
                  <img
                    src="https://images.pexels.com/photos/11211025/pexels-photo-11211025.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                    alt="Women empowerment program"
                  />
                  <div className="gallery-overlay">
                    <div className="gallery-content">
                      <h3>Women Empowerment</h3>
                      <p>
                        {' '}
                        Workshops and cooperatives supporting sustainable family
                        enterprises
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                      <div className="gallery-stats">
                        <span className="stat">12 Cooperatives</span>
                        <span className="stat">450 Women</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gallery-item community-item">
                <div className="gallery-image">
                  <img
                    src="https://images.pexels.com/photos/6720975/pexels-photo-6720975.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                    alt="Community celebration"
                  />
                  <div className="gallery-overlay">
                    <div className="gallery-content">
                      <h3>Community Impact</h3>
                      <p>
                        {' '}
                        Building self-reliant communities through integrated
                        development programs
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                      <div className="gallery-stats">
                        <span className="stat">50+ Communities</span>
                        <span className="stat">Ongoing Support</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials-section">
          <div className="testimonials-container">
            <div className="section-header">
              <h2 className="section-title">Community Testimonials</h2>
              <p className="section-subtitle">
                {' '}
                Voices of change from the communities we serve
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-image">
                  <img
                    src="https://images.pexels.com/photos/7611332/pexels-photo-7611332.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                    alt="Smt. Parbati Nayak"
                  />
                </div>
                <div className="testimonial-content">
                  <blockquote>
                    {' '}
                    &quot;When the mobile clinic came to our village, my
                    daughter finally received the care she needed. Empower
                    Odisha didn&apos;t just bring medicine — they brought
                    dignity.&quot;
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </blockquote>
                  <cite>— Smt. Parbati Nayak, Ranpur</cite>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-image">
                  <img
                    src="https://images.pexels.com/photos/8540933/pexels-photo-8540933.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                    alt="Mr. Bishnu Pradhan"
                  />
                </div>
                <div className="testimonial-content">
                  <blockquote>
                    {' '}
                    &quot;After WeFe expanded service here, our students can
                    attend online classes and our small businesses reach new
                    customers. Connectivity changed our livelihood.&quot;
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </blockquote>
                  <cite>— Mr. Bishnu Pradhan, Balichandrapur</cite>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-image">
                  <img
                    src="https://images.pexels.com/photos/20890646/pexels-photo-20890646.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                    alt="Ms. Anjali Routray"
                  />
                </div>
                <div className="testimonial-content">
                  <blockquote>
                    {' '}
                    &quot;The women empowerment workshops taught us how to start
                    small enterprises. Today we run a cooperative that sustains
                    our families.&quot;
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </blockquote>
                  <cite>
                    — Ms. Anjali Routray, Women&apos;s Cooperative Lead
                  </cite>
                </div>
              </div>
            </div>
            <div id="testimonials-carousel" className="testimonials-carousel">
              <div className="carousel-track">
                <div className="carousel-slide">
                  <div className="testimonial-card mobile">
                    <blockquote>
                      {' '}
                      &quot;The scholarship program enabled my son to finish
                      school and apply for technical training. He&apos;s now
                      employed and helping support our household.&quot;
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </blockquote>
                    <cite>— Mr. Ramesh Kumar, Scholarship Beneficiary</cite>
                  </div>
                </div>
                <div className="carousel-slide">
                  <div className="testimonial-card mobile">
                    <blockquote>
                      {' '}
                      &quot;Transparent use of funds and regular follow-ups give
                      us confidence to contribute. We can see exactly how
                      donations translate into impact.&quot;
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </blockquote>
                    <cite>— Dr. N. Mishra, Local Supporter</cite>
                  </div>
                </div>
                <div className="carousel-slide">
                  <div className="testimonial-card mobile">
                    <blockquote>
                      {' '}
                      &quot;They listen, act, and follow through. That&apos;s
                      why our community trusts Empower Odisha — leadership that
                      serves with integrity.&quot;
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </blockquote>
                    <cite>— Shri Mohan Patnaik, Community Elder</cite>
                  </div>
                </div>
              </div>
              <div className="carousel-controls">
                <button className="carousel-btn prev-btn">‹</button>
                <button className="carousel-btn next-btn">›</button>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-section">
          <div className="contact-container">
            <div className="contact-content">
              <div className="contact-main">
                <h2 className="section-title">Partnership &amp; Contact</h2>
                <p className="hero-subtitle">
                  {' '}
                  Build scalable, sustainable impact with a trusted local leader
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <p className="section-content">
                  {' '}
                  Whether you represent a corporation exploring CSR initiatives,
                  a foundation seeking measurable outcomes, or a tech partner
                  aiming to expand digital inclusion, we offer strategic,
                  accountable partnerships tailored to lasting community
                  benefit.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="partnership-features">
                  <div className="feature-item">
                    <h3>What We Bring</h3>
                    <p>
                      {' '}
                      Proven delivery in healthcare outreach, digital
                      infrastructure expansion, education programs, and
                      efficient disaster response with measurable KPIs.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                  <div className="feature-item">
                    <h3>Collaboration Models</h3>
                    <p>
                      {' '}
                      Co-funded programs, service partnerships, policy
                      alliances, employee engagement, and long-term strategic
                      sponsorships.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </div>
                <div className="contact-cta">
                  <button className="btn btn-primary">
                    Start Partnership Discussion
                  </button>
                  <button className="btn btn-outline">
                    Request Program Brief
                  </button>
                </div>
              </div>
              <div className="contact-sidebar">
                <div className="contact-info">
                  <h3>Get In Touch</h3>
                  <div className="contact-item">
                    <div className="contact-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        >
                          <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                          <rect
                            width="20"
                            height="16"
                            x="2"
                            y="4"
                            rx="2"
                          ></rect>
                        </g>
                      </svg>
                    </div>
                    <div className="contact-details">
                      <strong>Partnerships</strong>
                      <p>partnerships@empowerodisha.org</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        >
                          <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                          <rect
                            width="20"
                            height="16"
                            x="2"
                            y="4"
                            rx="2"
                          ></rect>
                        </g>
                      </svg>
                    </div>
                    <div className="contact-details">
                      <strong>Volunteer Inquiries</strong>
                      <p>volunteer@empowerodisha.org</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                        ></path>
                      </svg>
                    </div>
                    <div className="contact-details">
                      <strong>Phone</strong>
                      <p>+91-XXXXXXXXXX</p>
                    </div>
                  </div>
                </div>
                <div className="transparency-note">
                  <h4>Commitment to Transparency</h4>
                  <p>
                    {' '}
                    All partnerships are governed by written agreements,
                    quarterly impact dashboards, and independent audits on
                    multi-year projects.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
        <a href="https://play.teleporthq.io/signup">
          <div
            aria-label="Sign up to TeleportHQ"
            className="support-volunteer-container8"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 19 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="support-volunteer-icon48"
            >
              <path
                d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
                fill="#B23ADE"
              ></path>
              <path
                d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
                fill="#FF5C5C"
              ></path>
              <path
                d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
                fill="#2874DE"
              ></path>
            </svg>
            <span className="support-volunteer-text84">
              Built in TeleportHQ
            </span>
          </div>
        </a>
      </div>
      <style jsx>
        {`
          .support-volunteer-container1 {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
          .support-volunteer-container2 {
            display: none;
          }
          .support-volunteer-container3 {
            display: contents;
          }
          .support-volunteer-container4 {
            display: none;
          }
          .support-volunteer-container5 {
            display: contents;
          }
          .support-volunteer-container6 {
            display: none;
          }
          .support-volunteer-container7 {
            display: contents;
          }
          .support-volunteer-container8 {
            right: 50px;
            border: 1px solid #ffffff5c;
            bottom: 30px;
            display: flex;
            z-index: 22;
            position: fixed;
            box-shadow: 5px 5px 10px 0px rgba(31, 31, 31, 0.4);
            min-height: auto;
            align-items: center;
            padding-top: 8px;
            padding-left: 12px;
            border-radius: 8px;
            padding-right: 12px;
            padding-bottom: 8px;
            backdrop-filter: blur(6px);
            background-color: rgba(41, 41, 41, 0.41);
          }
          .support-volunteer-icon48 {
            width: 24px;
            margin-right: 4px;
          }
          .support-volunteer-text84 {
            color: white;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
        `}
      </style>
    </>
  )
}

export default SupportVolunteer
