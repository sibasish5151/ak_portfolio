import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <div className="footer-container1">
        <div className="footer-container2">
          <div className="footer-container3">
            <Script
              html={`<style>
        @keyframes heartbeat {0%,100% {transform: scale(1);}
50% {transform: scale(1.1);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="footer-container4">
          <div className="footer-container5">
            <Script
              html={`<script defer data-name="footer">
(function(){
  const backToTopButton = document.getElementById("footerBackToTop")

  function toggleBackToTopVisibility() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const showThreshold = 300

    if (scrollTop > showThreshold) {
      backToTopButton.classList.add("visible")
    } else {
      backToTopButton.classList.remove("visible")
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  window.addEventListener("scroll", toggleBackToTopVisibility)
  backToTopButton.addEventListener("click", scrollToTop)

  // Newsletter form handling
  const newsletterForm = document.querySelector(".footer-newsletter-form")
  const newsletterInput = document.querySelector(".footer-newsletter-input")
  const newsletterButton = document.querySelector(".footer-newsletter-btn")

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()

      const email = newsletterInput.value.trim()
      if (!email) {
        newsletterInput.focus()
        return
      }

      // Simple email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+\$/
      if (!emailRegex.test(email)) {
        newsletterInput.focus()
        return
      }

      // Simulate subscription process
      newsletterButton.textContent = "Subscribing..."
      newsletterButton.disabled = true

      setTimeout(() => {
        newsletterButton.textContent = "Subscribed!"
        newsletterInput.value = ""

        setTimeout(() => {
          newsletterButton.textContent = "Subscribe"
          newsletterButton.disabled = false
        }, 2000)
      }, 1000)
    })
  }

  // Smooth scroll for internal links
  const footerLinks = document.querySelectorAll('.footer-nav-link[href^="#"]')
  footerLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href").substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Add subtle parallax effect to footer background
  window.addEventListener("scroll", function () {
    const footer = document.querySelector(".footer-main")
    const footerRect = footer.getBoundingClientRect()
    const windowHeight = window.innerHeight

    if (footerRect.top < windowHeight && footerRect.bottom > 0) {
      const scrollProgress = Math.max(
        0,
        Math.min(
          1,
          (windowHeight - footerRect.top) / (windowHeight + footerRect.height)
        )
      )
      const translateY = scrollProgress * 20

      footer.style.transform = \`translateY(\${translateY}px)\`
    }
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <footer className="footer-main">
          <div className="footer-content-wrapper">
            <div className="footer-primary-section">
              <div className="footer-brand-column">
                <div className="footer-brand">
                  <h3 className="footer-brand-title">Empower Odisha</h3>
                  <p className="footer-brand-tagline">
                    {' '}
                    &quot;Service to Mankind is Service to God&quot;
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <p className="footer-mission-text">
                  {' '}
                  Dedicated to transforming lives through leadership,
                  compassion, and innovation. Creating a self-reliant and
                  inclusive society where opportunities are equal for all.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="footer-contact-info">
                  <div className="footer-contact-item">
                    <div className="footer-contact-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                          <rect
                            x="2"
                            y="4"
                            rx="2"
                            width="20"
                            height="16"
                          ></rect>
                        </g>
                      </svg>
                    </div>
                    <span className="footer-contact-text">
                      paniakashkumar@gmail.com
                    </span>
                  </div>
                  <div className="footer-contact-item">
                    <div className="footer-contact-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <span className="footer-contact-text">+91 7377140900</span>
                  </div>
                </div>
              </div>
              <div className="footer-navigation-columns">
                <div className="footer-nav-column">
                  <h4 className="footer-nav-title">About Us</h4>
                  <ul className="footer-nav-list">
                    <li className="footer-nav-item">
                      <a href="#homepage">
                        <div className="footer-nav-link">
                          <span>Our Mission</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-nav-item">
                      <a href="#about-mr-pani">
                        <div className="footer-nav-link">
                          <span>
                            {' '}
                            About Mr. Pani
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-nav-item">
                      <a href="#homepage">
                        <div className="footer-nav-link">
                          <span>Leadership</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-nav-item">
                      <a href="#homepage">
                        <div className="footer-nav-link">
                          <span>Achievements</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-nav-column">
                  <h4 className="footer-nav-title">Our Work</h4>
                  <ul className="footer-nav-list">
                    <li className="footer-nav-item">
                      <a href="#homepage">
                        <div className="footer-nav-link">
                          <span>Healthcare for All</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-nav-item">
                      <a href="#homepage">
                        <div className="footer-nav-link">
                          <span>Digital Odisha</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-nav-item">
                      <a href="#homepage">
                        <div className="footer-nav-link">
                          <span>Education Programs</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-nav-item">
                      <a href="#homepage">
                        <div className="footer-nav-link">
                          <span>Disaster Relief</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-nav-column">
                  <h4 className="footer-nav-title">Get Involved</h4>
                  <ul className="footer-nav-list">
                    <li className="footer-nav-item">
                      <a href="#support-volunteer">
                        <div className="footer-nav-link">
                          <span>Volunteer</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-nav-item">
                      <a href="#support-volunteer">
                        <div className="footer-nav-link">
                          <span>Donate</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-nav-item">
                      <a href="#support-volunteer">
                        <div className="footer-nav-link">
                          <span>
                            {' '}
                            Partner with Us
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-nav-item">
                      <a href="#homepage">
                        <div className="footer-nav-link">
                          <span>Contact</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-nav-column">
                  <h4 className="footer-nav-title">Connect</h4>
                  <div className="footer-social-links">
                    <a href="#">
                      <div
                        aria-label="Follow us on Facebook"
                        className="footer-social-link"
                      >
                        <svg
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </a>
                    <a href="#">
                      <div
                        aria-label="Follow us on Twitter"
                        className="footer-social-link"
                      >
                        <svg
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </a>
                    <a href="#">
                      <div
                        aria-label="Connect on LinkedIn"
                        className="footer-social-link"
                      >
                        <svg
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                            <circle r="2" cx="4" cy="4"></circle>
                          </g>
                        </svg>
                      </div>
                    </a>
                    <a href="#">
                      <div
                        aria-label="Follow us on Instagram"
                        className="footer-social-link"
                      >
                        <svg
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <rect
                              x="2"
                              y="2"
                              rx="5"
                              ry="5"
                              width="20"
                              height="20"
                            ></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                          </g>
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div className="footer-newsletter">
                    <p className="footer-newsletter-text">
                      {' '}
                      Stay updated with our initiatives
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <div className="footer-newsletter-form">
                      <input
                        type="email"
                        placeholder="Your email"
                        className="footer-newsletter-input"
                      />
                      <button
                        type="submit"
                        className="btn footer-newsletter-btn btn-primary"
                      >
                        {' '}
                        Subscribe
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-divider"></div>
            <div className="footer-bottom-section">
              <div className="footer-bottom-content">
                <div className="footer-copyright">
                  <p className="footer-copyright-text">
                    <span>
                      {' '}
                      © 2025 Empower Odisha. Made with
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="footer-footer-heart-icon">
                      <svg
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <span>
                      {' '}
                      for the people of Odisha
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </p>
                </div>
                <div className="footer-legal-links">
                  <a href="#">
                    <div className="footer-legal-link">
                      <span>Privacy Policy</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer-legal-link">
                      <span>Terms of Service</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer-legal-link">
                      <span>Transparency Report</span>
                    </div>
                  </a>
                </div>
              </div>
              <button
                id="footerBackToTop"
                aria-label="Back to top"
                className="footer-back-to-top"
              >
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m5 12l7-7l7 7m-7 7V5"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
          .footer-container2 {
            display: none;
          }
          .footer-container3 {
            display: contents;
          }
          .footer-container4 {
            display: none;
          }
          .footer-container5 {
            display: contents;
          }
          .footer-footer-heart-icon {
            color: var(--color-accent);
            display: inline-flex;
            animation: heartbeat 2s ease-in-out infinite;
            align-items: center;
          }
        `}
      </style>
    </>
  )
}

export default Footer
