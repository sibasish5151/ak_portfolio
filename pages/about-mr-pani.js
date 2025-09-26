import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'

const AboutMrPani = (props) => {
  return (
    <>
      <div className="about-mr-pani-container1">
        <Head>
          <title>About-Mr-Pani - Smooth Sympathetic Chamois</title>
          <meta
            property="og:title"
            content="About-Mr-Pani - Smooth Sympathetic Chamois"
          />
        </Head>
        <Navigation></Navigation>
        <div className="about-mr-pani-container2">
          <div className="about-mr-pani-container3">
            <Script
              html={`<script defer data-name="about-mr-pani">
(function(){
  // Initialize scroll animations for cards
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const animateOnScroll = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }

  const observer = new IntersectionObserver(animateOnScroll, observerOptions)

  // Set initial states and observe elements
  const animatedElements = document.querySelectorAll(
    ".role-card, .initiative-card, .testimonial-card, .involvement-card, .principle-item"
  )
  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
    observer.observe(el)
  })

  // Stagger animation for testimonials
  const testimonialCards = document.querySelectorAll(".testimonial-card")
  testimonialCards.forEach((card, index) => {
    card.style.transitionDelay = \`\${index * 0.1}s\`
  })

  // Parallax effect for hero image
  const heroImage = document.querySelector(".hero-image")
  if (heroImage) {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset
      const parallax = scrolled * 0.5
      heroImage.style.transform = \`translateY(\${parallax}px) scale(1.1)\`
    })
  }

  // Smooth counter animation for stats
  const animateCounters = () => {
    const counters = document.querySelectorAll(".stat-number, .metric-value")

    counters.forEach((counter) => {
      const target = parseInt(counter.textContent.replace(/[^0-9]/g, ""))
      if (target) {
        let current = 0
        const increment = target / 50
        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            current = target
            clearInterval(timer)
          }
          counter.textContent = counter.textContent.replace(
            /[0-9,]+/,
            Math.floor(current).toLocaleString()
          )
        }, 30)
      }
    })
  }

  // Trigger counter animation when stats come into view
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounters()
        statsObserver.unobserve(entry.target)
      }
    })
  })

  const heroStats = document.querySelector(".hero-stats")
  if (heroStats) {
    statsObserver.observe(heroStats)
  }

  // Enhanced hover effects for cards
  const addHoverEffects = () => {
    const cards = document.querySelectorAll(
      ".role-card, .initiative-card, .involvement-card"
    )

    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px) scale(1.02)"
      })

      card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)"
      })
    })
  }

  // Initialize enhanced effects
  addHoverEffects()

  // Smooth reveal for timeline items
  const timelineItems = document.querySelectorAll(".timeline-item")
  timelineItems.forEach((item, index) => {
    item.style.opacity = "0"
    item.style.transform = "translateX(-30px)"
    item.style.transition = \`opacity 0.6s ease-out \${
      index * 0.2
    }s, transform 0.6s ease-out \${index * 0.2}s\`

    observer.observe(item)
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <section className="hero-section2">
          <div className="hero-grid">
            <div className="hero-content2">
              <h1 className="hero-title">Akash Kumar Pani</h1>
              <h2 className="hero-subtitle">
                {' '}
                Leading with service, delivering measurable change
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h2>
              <p className="hero-description1">
                {' '}
                As President of BJD Ranpur, Management Head at WeFe Internet,
                and founder of a community-focused NGO, Mr. Pani unites
                political will, technological reach, and compassionate action to
                expand education, healthcare, and economic opportunity across
                Odisha.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="hero-stats2">
                <div className="stat-item1">
                  <span className="stat-number2">5,000+</span>
                  <span className="stat-label2">Lives Impacted</span>
                </div>
                <div className="stat-item1">
                  <span className="stat-number2">25+</span>
                  <span className="stat-label2">Villages Connected</span>
                </div>
                <div className="stat-item1">
                  <span className="stat-number2">100+</span>
                  <span className="stat-label2">Scholarships Awarded</span>
                </div>
              </div>
              <div className="hero-cta1">
                <button className="btn btn-primary">Partner With Us</button>
                <button className="btn btn-outline">View Impact</button>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-container">
                <div className="hero-overlay2"></div>
                <img
                  src="/1000741345-600h.jpg"
                  alt="image"
                  className="about-mr-pani-image"
                />
              </div>
              <div className="floating-card">
                <div className="floating-card-content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="floating-icon"
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
                  <p>&quot;Service to Mankind is Service to God&quot;</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="biography-section">
          <div className="biography-grid">
            <div className="biography-content">
              <h2 className="section-title">Biography</h2>
              <p className="section-content">
                <span>
                  {' '}
                  Akash Kumar Pani is a committed public servant, entrepreneur
                  and social entrepreneur from Odisha whose life is guided by a
                  single, unwavering creed:
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>Service to Mankind is Service to God</span>
                <span>
                  {' '}
                  . Raised with a deep sense of civic duty, he has built a
                  career that bridges responsible political leadership,
                  technology-driven enterprise and targeted social welfare.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
              <p className="section-content">
                {' '}
                Mr. Pani combines decades of hands‑on experience in grassroots
                engagement with strategic leadership. As President of the Biju
                Janata Dal in Ranpur, he advances pragmatic policies for
                education, health and rural development. As Management Head of
                WeFe Internet Service Provider, he leads efforts to expand
                affordable, reliable connectivity across underserved regions.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="biography-highlights">
                <div className="highlight-item">
                  <h4>Core Values</h4>
                  <p>
                    {' '}
                    Integrity, accountability and service define his approach
                    with transparent stewardship of resources.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="highlight-item">
                  <h4>Leadership Style</h4>
                  <p>
                    {' '}
                    Collaborative and results-oriented, building partnerships
                    for scaled interventions.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="biography-visual">
              <div className="timeline-container">
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h5>Political Leadership</h5>
                    <p>President of BJD Ranpur Constituency</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h5>Corporate Head</h5>
                    <p>Management Head at WeFe Internet</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h5>Social Impact</h5>
                    <p>Founder of community-focused NGO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="philosophy-section">
          <div className="philosophy-grid">
            <div className="philosophy-content">
              <h2 className="section-title">Leadership Philosophy</h2>
              <div className="philosophy-principles">
                <div className="principle-item">
                  <h3>Political Leadership — Results over Rhetoric</h3>
                  <p>
                    {' '}
                    In public life, Mr. Pani prioritizes policy clarity,
                    accountable delivery and community-first engagement with
                    transparent reporting so citizens understand progress.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="principle-item">
                  <h3>Digital Inclusion as Infrastructure</h3>
                  <p>
                    {' '}
                    Treating internet access as public utility, advancing
                    pragmatic solutions for affordable connectivity and local
                    capacity-building.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="principle-item">
                  <h3>Social entrepreneurship with Impact</h3>
                  <p>
                    {' '}
                    NGO approach blends compassion with disciplined impact
                    metrics, ensuring resources translate into measurable
                    community improvements.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="guiding-principles">
                <h4>Guiding Principles</h4>
                <ul className="principles-list">
                  <li>
                    <span>Service before self</span>
                  </li>
                  <li>
                    <span>Evidence-informed decision-making</span>
                  </li>
                  <li>
                    <span>Fiscal responsibility</span>
                  </li>
                  <li>
                    <span>Stakeholder inclusion</span>
                  </li>
                  <li>
                    <span>Persistent evaluation</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="philosophy-visual">
              <img
                src="/whatsapp%20image%202025-09-26%20at%2011.47.52-1500w.jpeg"
                alt="Community healthcare outreach"
                className="philosophy-image"
              />
              <div className="philosophy-overlay">
                <div className="overlay-content">
                  <h4>Cross-sector Leadership</h4>
                  <p>
                    {' '}
                    Aligning political advocacy, corporate capability and
                    nonprofit delivery for efficient, accountable ecosystems.
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
        <section className="roles-section">
          <div className="roles-container">
            <h2 className="section-title">Roles Overview</h2>
            <div className="roles-grid">
              <div className="role-card">
                <div className="role-icon">
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
                <h3>Political Leader</h3>
                <p>
                  {' '}
                  As President of Biju Janata Dal in Ranpur Constituency, Mr.
                  Pani translates grassroots insight into measurable public
                  outcomes. He leads policy awareness campaigns and coordinates
                  with local administrations to ensure transparent, accountable
                  governance.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="role-stats">
                  <span className="stat1">15+ Campaigns</span>
                  <span className="stat1">Rural Focus</span>
                </div>
              </div>
              <div className="role-card">
                <div className="role-icon">
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
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path>
                    </g>
                  </svg>
                </div>
                <h3>Corporate Head</h3>
                <p>
                  {' '}
                  As Management Head of WeFe Internet Service Provider, Mr. Pani
                  combines strategic leadership with hands-on execution to
                  expand affordable, high-speed connectivity across urban and
                  remote Odisha.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="role-stats">
                  <span className="stat1">25+ Villages</span>
                  <span className="stat1">Digital Growth</span>
                </div>
              </div>
              <div className="role-card">
                <div className="role-icon">
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
                <h3>Social Entrepreneur</h3>
                <p>
                  {' '}
                  Founder of a results-focused NGO, Mr. Pani designs and
                  oversees programs that deliver education, healthcare, and
                  welfare to marginalized communities with data-driven planning
                  and fiscal transparency.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="role-stats">
                  <span className="stat1">5,000+ Beneficiaries</span>
                  <span className="stat1">Community Impact</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="initiatives-section1">
          <div className="initiatives-container">
            <h2 className="section-title">Initiatives &amp; Impact</h2>
            <div className="initiatives-grid1">
              <div className="initiative-card1">
                <div className="initiative-header">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="initiative-icon"
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
                  <h3>Healthcare for All</h3>
                </div>
                <p>
                  {' '}
                  Mobile medical camps, community clinics, and specialist
                  outreach programs deliver free screenings and essential
                  medicines to underserved villages.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="impact-metrics1">
                  <span className="metric-value">5,000+</span>
                  <span className="metric-label1">Beneficiaries</span>
                </div>
              </div>
              <div className="initiative-card1">
                <div className="initiative-header">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="initiative-icon"
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
                  <h3>Digital Odisha Movement</h3>
                </div>
                <p>
                  {' '}
                  Expanding affordable high-speed internet to remote panchayats
                  and establishing community digital hubs with literacy training
                  programs.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="impact-metrics1">
                  <span className="metric-value">25+</span>
                  <span className="metric-label1">Villages Connected</span>
                </div>
              </div>
              <div className="initiative-card1">
                <div className="initiative-header">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="initiative-icon"
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
                  <h3>Education &amp; Nutrition</h3>
                </div>
                <p>
                  {' '}
                  Targeted scholarship programs, after-school learning centers,
                  and vocational training equip youth with market-ready skills.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="impact-metrics1">
                  <span className="metric-value">100+</span>
                  <span className="metric-label1">Scholarships</span>
                </div>
              </div>
              <div className="initiative-card1">
                <div className="initiative-header">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="initiative-icon"
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
                  <h3>Disaster Relief &amp; Resilience</h3>
                </div>
                <p>
                  {' '}
                  Coordinating emergency relief and structured recovery programs
                  including infrastructure rebuilding and resilience training.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="impact-metrics1">
                  <span className="metric-value">48hrs</span>
                  <span className="metric-label1">Response Time</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials-section2">
          <div className="testimonials-container2">
            <h2 className="section-title">Community Testimonials</h2>
            <div className="testimonials-grid2">
              <div className="testimonial-card2">
                <div className="quote-icon">
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
                      d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    ></path>
                  </svg>
                </div>
                <p className="testimonial-text">
                  {' '}
                  &quot;When the health camp came to our village, my mother
                  received free treatment and medicines she couldn&apos;t afford
                  before. Mr. Pani&apos;s team followed up for weeks — that
                  personal care saved her life.&quot;
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="testimonial-author1">
                  <strong>Smt. Laxmi Behera</strong>
                  <span>Ranpur Village</span>
                </div>
              </div>
              <div className="testimonial-card2">
                <div className="quote-icon">
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
                      d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    ></path>
                  </svg>
                </div>
                <p className="testimonial-text">
                  {' '}
                  &quot;Thanks to the Digital Odisha Movement, my shop now
                  accepts online payments and my sales have increased. Reliable
                  internet changed how we run business here.&quot;
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="testimonial-author1">
                  <strong>Ramesh Nayak</strong>
                  <span>Small Business Owner</span>
                </div>
              </div>
              <div className="testimonial-card2">
                <div className="quote-icon">
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
                      d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    ></path>
                  </svg>
                </div>
                <p className="testimonial-text">
                  {' '}
                  &quot;The scholarship program enabled my daughter to continue
                  school. She&apos;s now training to be a nurse. This support
                  transformed our family&apos;s future.&quot;
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="testimonial-author1">
                  <strong>Arjun Sahu</strong>
                  <span>Parent and Beneficiary</span>
                </div>
              </div>
              <div className="testimonial-card2">
                <div className="quote-icon">
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
                      d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    ></path>
                  </svg>
                </div>
                <p className="testimonial-text">
                  {' '}
                  &quot;WeFe&apos;s expansion brought stable connectivity to our
                  school. Teachers can now access online resources and students
                  have renewed hope for higher education.&quot;
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="testimonial-author1">
                  <strong>Principal N. K. Mohanty</strong>
                  <span>Government High School</span>
                </div>
              </div>
              <div className="testimonial-card2">
                <div className="quote-icon">
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
                      d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    ></path>
                  </svg>
                </div>
                <p className="testimonial-text">
                  {' '}
                  &quot;Volunteers here are trained, organized and accountable.
                  Working with Mr. Pani&apos;s NGO felt purposeful — every
                  effort had measurable results for families in need.&quot;
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="testimonial-author1">
                  <strong>Dr. Priya Mishra</strong>
                  <span>Volunteer Coordinator</span>
                </div>
              </div>
              <div className="testimonial-card2">
                <div className="quote-icon">
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
                      d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    ></path>
                  </svg>
                </div>
                <p className="testimonial-text">
                  {' '}
                  &quot;I&apos;ve seen projects move from idea to impact because
                  of Mr. Pani&apos;s leadership: clear plans, timely execution
                  and respectful engagement with residents.&quot;
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="testimonial-author1">
                  <strong>Subhashree Patnaik</strong>
                  <span>Community Leader</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="get-involved-section1">
          <div className="get-involved-container">
            <div className="section-header2">
              <h2 className="section-title">Get Involved</h2>
              <p className="section-subtitle">
                {' '}
                Join a movement built on measurable results and accountable
                leadership
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="involvement-grid">
              <div className="involvement-card">
                <div className="involvement-icon">
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
                <h3>Volunteer</h3>
                <p>
                  {' '}
                  Bring your skills where they matter. We seek project managers,
                  healthcare professionals, educators, and community mobilizers
                  for programs with clear objectives and impact metrics.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="involvement-benefits">
                  <span className="benefit-tag">Skills-based roles</span>
                  <span className="benefit-tag">Clear objectives</span>
                  <span className="benefit-tag">Measurable outcomes</span>
                </div>
                <button className="btn btn-primary">Join as Volunteer</button>
              </div>
              <div className="involvement-card">
                <div className="involvement-icon">
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
                <h3>Donate</h3>
                <p>
                  {' '}
                  Fund targeted initiatives with confidence. Choose unrestricted
                  support or give to designated funds with quarterly impact
                  summaries and annual audited statements.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="involvement-benefits">
                  <span className="benefit-tag">Transparent tracking</span>
                  <span className="benefit-tag">Impact reports</span>
                  <span className="benefit-tag">Audited statements</span>
                </div>
                <button className="btn btn-primary">Donate Now</button>
              </div>
              <div className="involvement-card">
                <div className="involvement-icon">
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
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path>
                    </g>
                  </svg>
                </div>
                <h3>Corporate Partnerships</h3>
                <p>
                  {' '}
                  Align your organization with proven social impact. Sponsor
                  program expansions, co-develop projects, or offer employee
                  volunteering with strategic ROI for communities.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="involvement-benefits">
                  <span className="benefit-tag">Strategic alignment</span>
                  <span className="benefit-tag">Performance reviews</span>
                  <span className="benefit-tag">Measurable ROI</span>
                </div>
                <button className="btn btn-primary">Partner With Us</button>
              </div>
            </div>
            <div className="transparency-note1">
              <h4>Transparency &amp; Accountability</h4>
              <p>
                {' '}
                Every volunteer placement and donation includes a commitment to
                deliverables, timelines, and public reporting. Receive regular
                progress updates, impact dashboards, and access to beneficiary
                stories that reflect real outcomes.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
        </section>
        <a href="https://play.teleporthq.io/signup">
          <div
            aria-label="Sign up to TeleportHQ"
            className="about-mr-pani-container4"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 19 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="about-mr-pani-icon47"
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
            <span className="about-mr-pani-text72">Built in TeleportHQ</span>
          </div>
        </a>
      </div>
      <style jsx>
        {`
          .about-mr-pani-container1 {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
          .about-mr-pani-container2 {
            display: none;
          }
          .about-mr-pani-container3 {
            display: contents;
          }
          .about-mr-pani-image {
            width: 382px;
            height: 504px;
            object-fit: cover;
          }
          .about-mr-pani-container4 {
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
          .about-mr-pani-icon47 {
            width: 24px;
            margin-right: 4px;
          }
          .about-mr-pani-text72 {
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

export default AboutMrPani
