import { useCallback } from "react"
import Particles from "react-particles"
import { loadFull } from "tsparticles"
import particlesJSON from "./particles.json"

//styles
import "./particles.scss"

const ParticlesBG = (props) => {
  //to instance an object and initialize new value from props
  let prtcls = JSON.parse(JSON.stringify(particlesJSON))

  prtcls.particles.color.value = props.color
  prtcls.particles.line_linked.color = props.linkedColor
  prtcls.background.color.value = props.bgColor
  prtcls.background.opacity = 1

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  // const particlesLoaded = useCallback(async (container) => {
  // }, [])

  return (
    <>
      <Particles
        id={props.id}
        init={particlesInit}
        options={prtcls}
      />
    </>
  )
}

export default ParticlesBG
