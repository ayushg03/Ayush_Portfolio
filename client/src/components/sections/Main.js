import { useEffect } from "react"

//component
import ParticlesBG from "../particles/Particles-app"
import Home from "./home"
import About from "./about"
import Projects from "./projects"
import Experience from "./experience"
import Achievement from "./Achievement"
import Contact from "./contact"

//exported from sass variables
import sass_colors from "../../abstract/_colors.module.scss"

import "./main.scss"

const Main = () => {
  const topClassParticlesID = "particles-container-top"

  const winListen = () => {
    const cnvsParticle1 = document.querySelector(`#${topClassParticlesID}`)

    window.addEventListener("scroll", () => {
      let value = window.scrollY

      //move the Y particles1 to make parallax effect
      cnvsParticle1.style.transform = `translateY(-${value / 30}px)`

    })
  }

  useEffect(() => {
    winListen()
  }, [])

  return (
    <main>
      <ParticlesBG
        id={topClassParticlesID}
        color={sass_colors.color2}
        linkedColor={sass_colors.color2}
        bgColor={sass_colors.color1}
      />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Achievement/>
      <Contact />
    </main>
  )
}

export default Main
