import { useEffect } from "react"
import "./header.scss"
import { scrollSmoothTransition } from "../../functions/scrollSmoothTransition"

//icons
import { GiHamburgerMenu } from "react-icons/gi"
import { IoCloseSharp } from "react-icons/io5"

import MyLogo from "../svg/MyLogo"

const Navbar = () => {
  const indicatorMovement = (indicator, aLink) => {
    const navRectX = document.querySelector("nav").getBoundingClientRect().x

    indicator.style.transform = `translateX(${
      aLink.getBoundingClientRect().x - navRectX - 5
    }px)`

    indicator.style.width = `${aLink.offsetWidth + 10}px`
  }

  //for menu toggle
  const toggleMenu = (toCloseByScroll) => {
    const btn = document.querySelector(".toggle-menu")
    const ul = document.querySelector(".navigation")
    const header = document.querySelector("header")

    if (
      btn.getAttribute("aria-expanded") === "false" &&
      toCloseByScroll === false
    ) {
      btn.setAttribute("aria-expanded", true)
      ul.setAttribute("data-visible", true)
      header.classList.add("default-bg-color")
    } else {
      btn.setAttribute("aria-expanded", false)
      ul.setAttribute("data-visible", false)
      header.classList.remove("default-bg-color")
    }
  }

  useEffect(() => {
    const listNav = document.querySelectorAll("nav ul li")
    const indicator = document.querySelector(".indicator")
    const getActiveLink = document.querySelector("nav ul li .active")

    listNav.forEach((a) => {
      //onclick function from {a} element
      a.childNodes[0].addEventListener("click", (e) => {
        //to force close the menu
        toggleMenu(true)
        listNav.forEach((el) => {
          el.children[0].classList.remove("active")
        })
        e.target.classList.add("active")

        //smooth transition for anchor link behaviour
        scrollSmoothTransition(e, e.target.getAttribute("href"))
      })
    })

    //set default indicator position
    indicatorMovement(indicator, getActiveLink)
  }, [])

  useEffect(() => {
    var lastScrolltop = 0
    const header = document.querySelector("header")
    const headerHeight = header.offsetHeight
    const sections = document.querySelectorAll("section")
    const indicator = document.querySelector(".indicator")

    window.addEventListener("scroll", () => {
      var scrollTop = window.scrollY || document.documentElement.scrollTop

      //to force close the menu
      toggleMenu(true)

      if (scrollTop > lastScrolltop) {
        header.style.top = `-${headerHeight}px`
      } else {
        header.style.top = 0
        if (scrollTop > headerHeight) {
          if (!header.classList.contains("with-backdrop-filter")) {
            header.classList.add("with-backdrop-filter")
          }
        } else {
          if (header.classList.contains("with-backdrop-filter")) {
            header.classList.remove("with-backdrop-filter")
          }
        }
      }

      lastScrolltop = scrollTop

      //change position of an indicator when scrolling
      sections.forEach((sec) => {
        let secTop = sec.getBoundingClientRect().top
        let secAttrId = sec.getAttribute("id")

        if (secTop >= 0 && secTop <= headerHeight + 50) {
          if (secAttrId !== null) {
            document.querySelector("a.active").classList.remove("active")
            let activeLink = document.querySelector(`a[href='#${secAttrId}']`)
            activeLink.classList.add("active")
            indicatorMovement(indicator, activeLink)
          }
        }
      })
    })
  }, [])

  return (
    <>
      <section id="home"></section>
      <header className="header">
        <div className="header-content">
          <div
            className="logo"
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-duration="800"
            data-aos-easing="ease-out-back"
            onClick={(e) => {
              scrollSmoothTransition(e, "#home")
            }}
          >
  
          </div>
          <nav>
            <button
              className="toggle-menu"
              aria-controls="navigation"
              aria-expanded="false"
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-easing="ease-out-back"
              onClick={() => {
                toggleMenu(false)
              }}
            >
              <GiHamburgerMenu />
              <IoCloseSharp />
            </button>
            <ul id="navigation" data-visible="false" className="navigation">
              <div className="indicator"></div>
              <li
                data-aos="fade-down"
                data-aos-once="true"
                data-aos-delay="200"
                data-aos-duration="800"
                data-aos-easing="ease-out-back"
              >
                <a href="#home" className="active">
                  Home
                </a>
              </li>
              <li
                data-aos="fade-down"
                data-aos-once="true"
                data-aos-delay="300"
                data-aos-duration="800"
                data-aos-easing="ease-out-back"
              >
                <a href="#about">About</a>
              </li>
              <li
                data-aos="fade-down"
                data-aos-once="true"
                data-aos-delay="400"
                data-aos-duration="800"
                data-aos-easing="ease-out-back"
              >
                <a href="#project">Project</a>
              </li>
              <li
                data-aos="fade-down"
                data-aos-once="true"
                data-aos-delay="500"
                data-aos-duration="800"
                data-aos-easing="ease-out-back"
              >
                <a href="#experience">Education</a>
              </li>
              <li
                data-aos="fade-down"
                data-aos-once="true"
                data-aos-delay="600"
                data-aos-duration="800"
                data-aos-easing="ease-out-back"
              >
                <a href="#achievement">Achievement</a>
              </li>
              <li
                data-aos="fade-down"
                data-aos-once="true"
                data-aos-delay="700"
                data-aos-duration="800"
                data-aos-easing="ease-out-back"
              >
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar
