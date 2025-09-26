import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Smooth Sympathetic Chamois</title>
          <meta property="og:title" content="Smooth Sympathetic Chamois" />
        </Head>
        <Navigation></Navigation>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<style>
        @keyframes fadeInUp {from {opacity: 0;
transform: translateY(30px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes fadeInRight {from {opacity: 0;
transform: translateX(30px);}
to {opacity: 1;
transform: translateX(0);}}@keyframes bounce {0%,20%,50%,80%,100% {transform: translateX(-50%) translateY(0);}
40% {transform: translateX(-50%) translateY(-10px);}
60% {transform: translateX(-50%) translateY(-5px);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="home-container4">
          <div className="home-container5">
            <Script
              html={`<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: var(--font-family-body);
  color: var(--color-on-surface);
  line-height: var(--line-height-body);
  overflow-x: hidden;
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="home-container6">
          <div className="home-container7">
            <Script
              html={`<script defer data-name="homepage-interactions">
(function(){
  // Smooth scroll behavior for internal links
  function initSmoothScroll() {
    const scrollIndicator = document.querySelector(".hero-scroll-indicator")
    if (scrollIndicator) {
      scrollIndicator.addEventListener("click", () => {
        document.getElementById("about").scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      })
    }
  }

  // Intersection Observer for fade-in animations
  function initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }
      })
    }, observerOptions)

    // Observe elements that should animate on scroll
    const animatedElements = document.querySelectorAll(
      ".leadership-item, .initiative-card, .testimonial-card, .gallery-item, .involvement-item"
    )

    animatedElements.forEach((el) => {
      el.style.opacity = "0"
      el.style.transform = "translateY(20px)"
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
      observer.observe(el)
    })
  }

  // Counter animation for statistics
  function initCounterAnimations() {
    const counters = document.querySelectorAll(".stat-number, .metric-number")
    const speed = 200 // Lower = faster

    const countUp = (counter) => {
      const target = parseInt(counter.textContent.replace(/[^\d]/g, ""))
      const increment = target / speed
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          counter.textContent = counter.textContent.replace(
            /[\d,]+/,
            target.toLocaleString()
          )
          clearInterval(timer)
        } else {
          counter.textContent = counter.textContent.replace(
            /[\d,]+/,
            Math.floor(current).toLocaleString()
          )
        }
      }, 10)
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          countUp(entry.target)
          observer.unobserve(entry.target)
        }
      })
    })

    counters.forEach((counter) => {
      observer.observe(counter)
    })
  }

  // Enhanced gallery interactions
  function initGalleryInteractions() {
    const galleryItems = document.querySelectorAll(".gallery-item")

    galleryItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        item.style.zIndex = "10"
      })

      item.addEventListener("mouseleave", () => {
        item.style.zIndex = "1"
      })
    })
  }

  // Parallax effect for hero section
  function initParallaxEffect() {
    const heroSection = document.querySelector(".hero-section")
    const heroImage = document.querySelector(".hero-image")

    if (heroSection && heroImage) {
      window.addEventListener("scroll", () => {
        const scrolled = window.pageYOffset
        const rate = scrolled * -0.3

        if (scrolled < heroSection.offsetHeight) {
          heroImage.style.transform = \`translateY(\${rate}px) rotate(2deg)\`
        }
      })
    }
  }

  // Initialize all interactions
  function init() {
    initSmoothScroll()
    initScrollAnimations()
    initCounterAnimations()
    initGalleryInteractions()
    initParallaxEffect()
  }

  // Run initialization
  init()

  // Handle reduced motion preference
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    // Disable animations for users who prefer reduced motion
    document.documentElement.style.setProperty(
      "--animation-duration-fast",
      "0ms"
    )
    document.documentElement.style.setProperty(
      "--animation-duration-standard",
      "0ms"
    )
    document.documentElement.style.setProperty(
      "--animation-duration-slow",
      "0ms"
    )
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
        <section id="hero" className="hero-section1">
          <div className="hero-overlay1"></div>
          <div className="hero-container">
            <div className="hero-content1">
              <div className="hero-text">
                <div className="hero-badge">
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
                  <span>Empower Odisha</span>
                </div>
                <h1 className="hero-title">
                  Leadership in Service, Innovation for All
                </h1>
                <h2 className="hero-subtitle">
                  {' '}
                  Mr. Akash Kumar Pani: Serving People, Strengthening
                  Communities
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h2>
                <p className="hero-description">
                  {' '}
                  Guided by the belief that service to mankind is service to
                  God, Mr. Pani unites political leadership, social welfare, and
                  digital inclusion to deliver measurable impact across Odisha.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="hero-stats1">
                  <div className="stat-item">
                    <span className="stat-number1">5,000+</span>
                    <span className="stat-label1">Health Screenings</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number1">50+</span>
                    <span className="stat-label1">Villages Connected</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number1">200+</span>
                    <span className="stat-label1">Scholarships Awarded</span>
                  </div>
                </div>
                <div className="hero-actions">
                  <button className="btn btn-primary">Join the Movement</button>
                  <button className="btn btn-outline">Learn Our Impact</button>
                </div>
              </div>
              <div className="hero-image">
                <div className="image-wrapper">
                  <img
                    src="/whatsapp%20image%202025-09-26%20at%2011.38.03-1500w.jpeg"
                    alt="Professional leader speaking confidently"
                    loading="eager"
                  />
                  <div className="image-accent"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-scroll-indicator">
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
                d="M5 12h14m-7-7l7 7l-7 7"
              ></path>
            </svg>
          </div>
        </section>
        <section id="about" className="about-section">
          <div className="about-container">
            <div className="home-about-content about-content">
              <div className="about-text">
                <h2 className="section-title">
                  {' '}
                  Akash Kumar Pani — Leadership Rooted in Service
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h2>
                <div className="about-intro">
                  <p className="section-content">
                    {' '}
                    Guided by the belief that Service to Mankind is Service to
                    God, Mr. Akash Kumar Pani combines principled political
                    stewardship, strategic corporate leadership, and focused
                    social work to deliver measurable progress across Odisha.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="leadership-areas">
                  <div className="leadership-item">
                    <div className="leadership-icon">
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
                    <div className="leadership-content">
                      <h3>Political Leadership</h3>
                      <p>
                        {' '}
                        President of BJD Ranpur Constituency, advancing policy
                        awareness and community-first governance.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                  </div>
                  <div className="leadership-item">
                    <div className="leadership-icon">
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
                          d="M12 20h.01M2 8.82a15 15 0 0 1 20 0M5 12.859a10 10 0 0 1 14 0m-10.5 3.57a5 5 0 0 1 7 0"
                        ></path>
                      </svg>
                    </div>
                    <div className="leadership-content">
                      <h3>Corporate Leadership</h3>
                      <p>
                        {' '}
                        Management Head at WeFe Internet, driving digital
                        inclusion that connects remote communities to
                        opportunities.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                  </div>
                  <div className="leadership-item">
                    <div className="leadership-icon">
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
                    <div className="leadership-content">
                      <h3>Social Welfare</h3>
                      <p>
                        {' '}
                        NGO founder directing targeted programs in education,
                        healthcare, women&apos;s empowerment, and disaster
                        relief.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="core-values">
                  <h3>Core Values</h3>
                  <div className="values-grid">
                    <span className="value-tag">Integrity</span>
                    <span className="value-tag">Accountability</span>
                    <span className="value-tag">Compassion</span>
                    <span className="value-tag">Innovation</span>
                  </div>
                </div>
              </div>
              <div className="home-about-image about-image">
                <div className="image-stack">
                  <img
                    src="/1000741344-800h.jpg"
                    alt="Mr. Akash Kumar Pani"
                    loading="lazy"
                    className="home-image11"
                  />
                  <div className="image-frame"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="initiatives"
          className="home-initiatives-section initiatives-section"
        >
          <div className="initiatives-container">
            <div className="section-header1">
              <h2 className="section-title">
                {' '}
                Our Initiatives — Strategic, Measurable, Impactful
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h2>
              <p className="section-subtitle">
                {' '}
                Each initiative uses defined KPIs, third-party audits, and
                public progress dashboards to ensure funds and efforts translate
                into measurable community benefits.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="initiatives-grid">
              <div className="initiative-card healthcare">
                <div className="card-icon1">
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
                <h3 className="home-text18">
                                  Healthcare for All
                </h3>
                <p>
                  {' '}
                  Mobile medical camps, primary care clinics, and preventive
                  health drives delivering free diagnostics and treatment to
                  remote villages.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="impact-metrics">
                  <div className="metric">
                    <span className="metric-number">5,000+</span>
                    <span className="metric-label">Beneficiaries Served</span>
                  </div>
                  <div className="metric">
                    <span className="metric-number">1,200</span>
                    <span className="metric-label">Follow-up Referrals</span>
                  </div>
                </div>
                <img
                  src="/whatsapp%20image%202025-09-26%20at%2011.47.50-1200h.jpeg"
                  alt="Healthcare workers assisting in community outreach"
                  loading="lazy"
                />
              </div>
              <div className="initiative-card digital">
                <div className="card-icon1">
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
                      d="M12 20h.01M2 8.82a15 15 0 0 1 20 0M5 12.859a10 10 0 0 1 14 0m-10.5 3.57a5 5 0 0 1 7 0"
                    ></path>
                  </svg>
                </div>
                <h3>                  Digital Odisha Movement</h3>
                <p>
                  {' '}
                  Expanding affordable high-speed internet and community tech
                  hubs to bridge the digital divide through last-mile
                  connectivity.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="impact-metrics">
                  <div className="metric">
                    <span className="metric-number">50+</span>
                    <span className="metric-label">Villages Connected</span>
                  </div>
                  <div className="metric">
                    <span className="metric-number">2,000</span>
                    <span className="metric-label">
                      Digital Literacy Trained
                    </span>
                  </div>
                </div>
                <img
                  src="/1001065231-1200h.jpg"
                  alt="Digital connectivity and technology"
                  loading="lazy"
                />
              </div>
              <div className="initiative-card education">
                <div className="card-icon1">
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
                <h3>                 Education &amp; Scholarships</h3>
                <p>
                  {' '}
                  Need-based scholarships, school support programs, and
                  vocational training creating clear pathways from learning to
                  livelihoods.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="impact-metrics">
                  <div className="metric">
                    <span className="metric-number">200+</span>
                    <span className="metric-label">Scholarships Awarded</span>
                  </div>
                  <div className="metric">
                    <span className="metric-number">85%</span>
                    <span className="metric-label">Retention Rate</span>
                  </div>
                </div>
                <img
                  src="/1001041731-1200h.jpg"
                  alt="Students studying in educational environment"
                  loading="lazy"
                />
              </div>
              <div className="initiative-card disaster">
                <div className="card-icon1">
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
                <h3>                 Disaster Relief &amp; Resilience</h3>
                <p>
                  {' '}
                  Rapid-response relief distribution, coordinated recovery
                  efforts, and long-term resilience projects with transparent
                  accountability.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="impact-metrics">
                  <div className="metric">
                    <span className="metric-number">24hrs</span>
                    <span className="metric-label">Average Response Time</span>
                  </div>
                  <div className="metric">
                    <span className="metric-number">1,500+</span>
                    <span className="metric-label">Families Assisted</span>
                  </div>
                </div>
                <img
                  src="https://images.pexels.com/photos/7527770/pexels-photo-7527770.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                  alt="Emergency response services"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="gallery" className="gallery-section1">
          <div className="gallery-container1">
            <div className="section-header1">
              <h2 className="section-title">Impact Gallery</h2>
              <p className="section-subtitle">
                {' '}
                A curated visual record of measurable change: health camps,
                digital outreach, and community programs led by Mr. Akash Kumar
                Pani and Empower Odisha.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="gallery-grid1">
              <div className="gallery-item1 featured">
                <img
                  src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                  alt="Healthcare consultation in progress"
                  loading="lazy"
                />
                <div className="gallery-overlay1">
                  <h3>Healthcare for All — Rural Health Camps</h3>
                  <p>
                    {' '}
                    5,000+ beneficiaries screened, 1,200 follow-up referrals,
                    free medicines dispensed.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="gallery-metrics">
                    <span className="metric">5,000+ Screened</span>
                    <span className="metric">1,200 Referrals</span>
                  </div>
                </div>
              </div>
              <div className="gallery-item1">
                <img
                  src="https://images.pexels.com/photos/5387260/pexels-photo-5387260.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                  alt="Digital literacy training session"
                  loading="lazy"
                />
                <div className="gallery-overlay1">
                  <h3>Digital Connectivity</h3>
                  <p>
                    {' '}
                    Village connectivity and digital literacy workshops across
                    rural Odisha.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="gallery-item1">
                <img
                  src="https://images.pexels.com/photos/8199602/pexels-photo-8199602.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                  alt="Students studying together"
                  loading="lazy"
                />
                <div className="gallery-overlay1">
                  <h3>Educational Empowerment</h3>
                  <p>
                    {' '}
                    Scholarship recipients and vocational training programs in
                    action.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="gallery-item1">
                <img
                  src="https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                  alt="Healthcare team providing services"
                  loading="lazy"
                />
                <div className="gallery-overlay1">
                  <h3>Community Support</h3>
                  <p>
                    {' '}
                    Disaster relief distributions and rebuilding efforts with
                    transparent accountability.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="gallery-item1">
                <img
                  src="https://images.pexels.com/photos/7683620/pexels-photo-7683620.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                  alt="Students engaged in learning outdoors"
                  loading="lazy"
                />
                <div className="gallery-overlay1">
                  <h3>Impact Stories</h3>
                  <p>
                    Real beneficiaries sharing their transformation stories.
                  </p>
                </div>
              </div>
              <div className="gallery-item1">
                <img
                  src="https://images.pexels.com/photos/4269203/pexels-photo-4269203.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                  alt="Healthcare reception services"
                  loading="lazy"
                />
                <div className="gallery-overlay1">
                  <h3>Transparent Reporting</h3>
                  <p>
                    Quarterly and annual reports with independent verification.
                  </p>
                </div>
              </div>
            </div>
            <div className="gallery-actions">
              <button className="btn btn-primary">View Full Report</button>
              <button className="btn btn-outline">Download Impact Data</button>
            </div>
          </div>
        </section>
        <section id="testimonials" className="testimonials-section1">
          <div className="testimonials-container1">
            <div className="section-header1">
              <h2 className="section-title">Community Voices</h2>
              <p className="section-subtitle">
                {' '}
                Real stories from the people whose lives have been transformed
                through our initiatives.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="testimonials-grid1">
              <div className="testimonial-card1">
                <div className="testimonial-quote">
                  <p>
                    {' '}
                    &quot;When the mobile clinic came to our village, my elderly
                    mother finally received proper treatment. Mr. Pani&apos;s
                    team followed up for weeks — they didn&apos;t leave us
                    alone. This program saved her life.&quot;
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>Sushmita Nayak</h4>
                    <span>Healthcare Beneficiary, Ranpur</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-card1">
                <div className="testimonial-quote">
                  <p>
                    {' '}
                    &quot;Affordable internet from WeFe changed how our school
                    teaches. Teachers use online resources now; attendance and
                    results have improved. The Digital Odisha initiative is
                    practical and reliable.&quot;
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>Principal R. Pradhan</h4>
                    <span>Educational Partner, Ranpur</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-card1">
                <div className="testimonial-quote">
                  <p>
                    {' '}
                    &quot;After the floods, their relief team coordinated
                    supplies and rebuilt shelters faster than anyone expected.
                    They managed logistics professionally and treated every
                    family with dignity.&quot;
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>Manoj Das</h4>
                    <span>Flood Relief Beneficiary</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-card1">
                <div className="testimonial-quote">
                  <p>
                    {' '}
                    &quot;As a local entrepreneur, access to high-speed internet
                    helped me expand my business. Mr. Pani&apos;s focus on
                    inclusive connectivity is a model of sustainable
                    development.&quot;
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>Rekha Behera</h4>
                    <span>Small Business Owner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="get-involved" className="get-involved-section">
          <div className="get-involved-container">
            <div className="get-involved-content">
              <div className="content-main">
                <h2 className="section-title">
                  Join a Purpose-Driven Movement
                </h2>
                <div className="involvement-options">
                  <div className="involvement-item">
                    <div className="item-icon">
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
                    <div className="item-content">
                      <h3>Volunteer</h3>
                      <p>
                        {' '}
                        Join skilled professionals and community volunteers in
                        short-term projects, ongoing programs, and strategic
                        initiatives aligned with your expertise.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                      <button className="btn btn-outline">
                        Sign Up to Volunteer
                      </button>
                    </div>
                  </div>
                  <div className="involvement-item">
                    <div className="item-icon">
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
                    <div className="item-content">
                      <h3>Support Results</h3>
                      <p>
                        {' '}
                        Fund field-tested programs with transparent budgets and
                        impact reports. See exactly how every contribution
                        advances community well-being.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                      <button className="btn btn-primary">Donate Now</button>
                    </div>
                  </div>
                  <div className="involvement-item">
                    <div className="item-icon">
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
                    <div className="item-content">
                      <h3>Partner for Impact</h3>
                      <p>
                        {' '}
                        Collaborate with businesses, civic groups, and
                        foundations to co-design scalable interventions with
                        clear partnership frameworks.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                      <button className="btn btn-outline">
                        Explore Partnerships
                      </button>
                    </div>
                  </div>
                </div>
                <div className="accountability-note">
                  <h3>Accountability You Can Trust</h3>
                  <p>
                    {' '}
                    Every engagement includes defined outcomes, timelines, and
                    public impact updates. Annual audited statements and program
                    dashboards ensure your support generates verifiable, lasting
                    results.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="content-sidebar">
                <div className="quick-actions">
                  <h3>Quick Actions</h3>
                  <div className="action-buttons">
                    <button className="btn btn-primary btn-lg">
                      Contact Our Team
                    </button>
                    <button className="btn btn-secondary">
                      Download Impact Report
                    </button>
                    <button className="btn btn-outline">
                      View Partnership Framework
                    </button>
                  </div>
                </div>
                <div className="contact-info1">
                  <h4>Community Engagement Team</h4>
                  <p>
                    {' '}
                    Ready to discuss volunteer roles, donation plans, or
                    partnership ideas. Together, we&apos;ll design an action
                    plan that aligns your goals with measurable community
                    impact.
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
          <div aria-label="Sign up to TeleportHQ" className="home-container8">
            <svg
              width="24"
              height="24"
              viewBox="0 0 19 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="home-icon38"
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
            <span className="home-text61">Built in TeleportHQ</span>
          </div>
        </a>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
          .home-container4 {
            display: none;
          }
          .home-container5 {
            display: contents;
          }
          .home-container6 {
            display: none;
          }
          .home-container7 {
            display: contents;
          }
          .home-about-content {
            height: 671px;
          }
          .home-about-image {
            height: 100%;
          }
          .home-image11 {
            width: 379px;
            height: 706px;
            margin-bottom: 29px;
          }
          .home-initiatives-section {
            height: 1184px;
          }
          .home-text18 {
            width: 468px;
            height: 28px;
          }
          .home-container8 {
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
          .home-icon38 {
            width: 24px;
            margin-right: 4px;
          }
          .home-text61 {
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

export default Home
