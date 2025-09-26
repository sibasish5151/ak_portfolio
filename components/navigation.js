import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Navigation = (props) => {
  return (
    <>
      <div className="navigation-container1">
        <div className="navigation-container2">
          <div className="navigation-container3">
            <Script
              html={`<style>
        @keyframes slideInRight {from {transform: translateX(100%);}
to {transform: translateX(0);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="navigation-container4">
          <div className="navigation-container5">
            <Script
              html={`<style>
@media (prefers-contrast: high) {
.navigation {
  border-bottom-width: 2px;
}
.navigation-link:focus-visible {
  outline-width: 3px;
}
}
@media (prefers-reduced-motion: reduce) {
.navigation, .navigation-link, .navigation-logo, .navigation-menu, .navigation-dropdown-menu, .navigation-dropdown-icon, .navigation-donate-btn {
  transition: none;
}
.navigation-content {
  animation: none;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="navigation-container6">
          <div className="navigation-container7">
            <Script
              html={`<script defer data-name="navigation">
(function(){
  // Navigation functionality
  const navigationToggle = document.getElementById("navigationToggle")
  const navigationClose = document.getElementById("navigationClose")
  const navigationMenu = document.getElementById("navigationMenu")
  const navigationOverlay = document.getElementById("navigationOverlay")
  const navigation = document.getElementById("navigation")

  // Mobile menu toggle functionality
  function openMobileMenu() {
    navigationMenu.setAttribute("data-open", "true")
    navigationToggle.setAttribute("aria-expanded", "true")
    document.body.style.overflow = "hidden"

    // Focus management
    const firstFocusableElement = navigationMenu.querySelector("button, a")
    if (firstFocusableElement) {
      setTimeout(() => firstFocusableElement.focus(), 300)
    }
  }

  function closeMobileMenu() {
    navigationMenu.setAttribute("data-open", "false")
    navigationToggle.setAttribute("aria-expanded", "false")
    document.body.style.overflow = ""
    navigationToggle.focus()
  }

  // Event listeners
  navigationToggle.addEventListener("click", openMobileMenu)
  navigationClose.addEventListener("click", closeMobileMenu)
  navigationOverlay.addEventListener("click", closeMobileMenu)

  // Close menu on escape key
  document.addEventListener("keydown", (e) => {
    if (
      e.key === "Escape" &&
      navigationMenu.getAttribute("data-open") === "true"
    ) {
      closeMobileMenu()
    }
  })

  // Dropdown functionality
  const dropdowns = document.querySelectorAll(".navigation-dropdown")

  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(".navigation-dropdown-toggle")
    const menu = dropdown.querySelector(".navigation-dropdown-menu")

    toggle.addEventListener("click", (e) => {
      e.preventDefault()
      const isExpanded = dropdown.getAttribute("data-expanded") === "true"

      // Close all other dropdowns
      dropdowns.forEach((otherDropdown) => {
        if (otherDropdown !== dropdown) {
          otherDropdown.setAttribute("data-expanded", "false")
          otherDropdown
            .querySelector(".navigation-dropdown-toggle")
            .setAttribute("aria-expanded", "false")
        }
      })

      // Toggle current dropdown
      dropdown.setAttribute("data-expanded", !isExpanded)
      toggle.setAttribute("aria-expanded", !isExpanded)
    })

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.setAttribute("data-expanded", "false")
        toggle.setAttribute("aria-expanded", "false")
      }
    })

    // Handle keyboard navigation
    toggle.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        toggle.click()
      }
    })
  })

  // Scroll behavior for navigation background
  let lastScrollTop = 0

  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > 20) {
      navigation.classList.add("navigation-scrolled")
    } else {
      navigation.classList.remove("navigation-scrolled")
    }

    lastScrollTop = scrollTop
  }

  // Throttled scroll listener
  let scrollTimeout
  window.addEventListener("scroll", () => {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout)
    }
    scrollTimeout = setTimeout(handleScroll, 10)
  })

  // Close mobile menu when window is resized to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 991) {
      closeMobileMenu()
    }
  })

  // Handle donation button click
  const donateBtn = document.querySelector(".navigation-donate-btn")
  if (donateBtn) {
    donateBtn.addEventListener("click", () => {
      // Close mobile menu if open
      if (navigationMenu.getAttribute("data-open") === "true") {
        closeMobileMenu()
      }

      // Smooth scroll to donation section or open donation modal
      const donationSection =
        document.getElementById("donate") ||
        document.querySelector('[data-section="donate"]')
      if (donationSection) {
        donationSection.scrollIntoView({ behavior: "smooth", block: "start" })
      } else {
        // Fallback: could open a modal or redirect to donation page
        console.log("Donation functionality would be triggered here")
      }
    })
  }

  // Initialize navigation state
  navigation.setAttribute("data-initialized", "true")
})()
</script>`}
            ></Script>
          </div>
        </div>
        <nav id="navigation" className="navigation">
          <div className="navigation-container">
            <div className="navigation-brand">
              <a href="#">
                <div
                  aria-label="Empower Odisha Homepage"
                  className="navigation-logo"
                >
                  <div className="navigation-logo-icon">
                    <svg
                      fill="none"
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                      height="40"
                      viewBox="0 0 40 40"
                    >
                      <circle
                        r="18"
                        cx="20"
                        cy="20"
                        fill="var(--color-primary)"
                        stroke="var(--color-surface)"
                        stroke-width="2"
                      ></circle>
                      <path
                        d="M15 18L18 21L25 14"
                        stroke="var(--color-on-primary)"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <circle
                        r="2"
                        cx="20"
                        cy="28"
                        fill="var(--color-on-primary)"
                      ></circle>
                    </svg>
                  </div>
                  <div className="navigation-logo-text">
                    <span className="navigation-logo-primary">Empower</span>
                    <span className="navigation-logo-secondary">Odisha</span>
                  </div>
                </div>
              </a>
            </div>
            <div id="navigationMenu" className="navigation-menu">
              <div id="navigationOverlay" className="navigation-overlay"></div>
              <div className="navigation-content">
                <div className="navigation-header">
                  <div className="navigation-mobile-logo">
                    <span className="navigation-logo-primary">Empower</span>
                    <span className="navigation-logo-secondary">Odisha</span>
                  </div>
                  <button
                    id="navigationClose"
                    aria-label="Close navigation menu"
                    className="navigation-close"
                  >
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M18 6L6 18M6 6l12 12"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
                <ul className="navigation-links">
                  <li className="navigation-item">
                    <a href="#about-mr-pani">
                      <div className="navigation-link">
                        <span>About Mr. Pani</span>
                      </div>
                    </a>
                  </li>
                  <li className="navigation-item navigation-dropdown">
                    <ul className="navigation-dropdown-menu">
                      <li>
                        <a href="#healthcare">
                          <div className="navigation-dropdown-link">
                            <span>
                              {' '}
                              Healthcare Initiative
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#digital-odisha">
                          <div className="navigation-dropdown-link">
                            <span>
                              {' '}
                              Digital Odisha Movement
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#education">
                          <div className="navigation-dropdown-link">
                            <span>
                              {' '}
                              Educational Programs
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#disaster-relief">
                          <div className="navigation-dropdown-link">
                            <span>
                              {' '}
                              Disaster Relief
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="navigation-item"></li>
                  <li className="navigation-item"></li>
                  <li className="navigation-item"></li>
                </ul>
                <div className="navigation-cta">
                  <button className="btn navigation-donate-btn btn-primary">
                    {' '}
                    Donate Now
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
            <button
              id="navigationToggle"
              aria-label="Open navigation menu"
              aria-expanded="false"
              className="navigation-toggle"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 5h16M4 12h16M4 19h16"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-container2 {
            display: none;
          }
          .navigation-container3 {
            display: contents;
          }
          .navigation-container4 {
            display: none;
          }
          .navigation-container5 {
            display: contents;
          }
          .navigation-container6 {
            display: none;
          }
          .navigation-container7 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Navigation
