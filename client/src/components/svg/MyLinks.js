import "./mylinks.scss"

//icons
import { IconContext } from "react-icons"
import { BsGithub, BsInstagram, BsTwitter } from "react-icons/bs"
import { FaLinkedinIn } from "react-icons/fa"

const MyLinks = (props) => {
  var delayValue = props.delay||0
  const getDelayValue = () => {
    return (delayValue += 100)
  }
  return (
    <>
      <div className="social-icons">
        <IconContext.Provider value={{ color: props.color }}>
          <div
            data-aos="zoom-in"
            data-aos-delay={getDelayValue()}
            data-aos-duration="500"
            data-aos-easing="ease-out-back"
            data-aos-once="true"
          >
            <a title="Github" href="https://github.com/ayushg03">
              <BsGithub />
            </a>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-delay={getDelayValue()}
            data-aos-duration="500"
            data-aos-easing="ease-out-back"
            data-aos-once="true"
          >
            <a title="Twitter" href="https://twitter.com/AyushGu75343194">
              <BsTwitter />
            </a>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay={getDelayValue()}
            data-aos-duration="500"
            data-aos-easing="ease-out-back"
            data-aos-once="true"
          >
            <a
              title="Linkedin"
              href="https://www.linkedin.com/in/ayushg03/"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </IconContext.Provider>
      </div>
    </>
  )
}

export default MyLinks
