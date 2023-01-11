import "./about.scss"

//icons
import {
  FaReact,
  FaNodeJs,
  FaSass,
  FaCss3Alt,
  FaHtml5,
  FaGit,
  FaFigma,
} from "react-icons/fa"
import { DiJavascript1, DiMysql } from "react-icons/di"
import { SiCsharp,SiMongodb,SiExpress,SiRedux,SiCplusplus,SiPython,SiFirebase} from "react-icons/si"

const About = () => {
  return (
    <>
      <div className="about-bg">
        <section id="about" className="about-section">
          <div className="grid">
            <div className="left-section">
              <div
                data-aos="fade-right"
                data-aos-delay="0"
                data-aos-duration="800"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                <h2>
                  About <span>me</span>
                </h2>
              </div>

              <p
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="800"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                Hi, I'm Ayush Gupta, a pre-final year student at Rajiv Gandhi Institute of Petroleum Technology. I am a aspiring software developer from India
              </p>
              <p
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="800"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                 
              
              </p>
              <p
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="800"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                <ol>
                <li>I’m currently working on MERN stack projects.</li>
                <li>I’m currently learning Data Structures and Algorithms.</li>
                <li>I’m looking to collaborate on MERN stack projects.</li>
                <li>Ask me about full stack development, I am happy to help</li>
              </ol>
              </p>
              <p
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="800"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                Currently, I am actively looking for Internships.
              </p>
              <p
                data-aos="fade-right"
                data-aos-delay="600"
                data-aos-duration="800"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                If you're interested in connecting with me, send me a message
                below!
              </p>
            </div>

            <div className="right-section">
              <div
                data-aos="fade-right"
                data-aos-delay="0"
                data-aos-duration="800"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                <h4>Skills & Technologies</h4>
              </div>
              <div className="tech-icons-grid">
                <div
                  className="item"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  data-aos-duration="500"
                  data-aos-easing="ease-out-back"
                  data-aos-once="true"
                >
                  <SiMongodb/>
                  <div className="icon-label">MongoDB</div>
                </div>
                <div
                  className="item"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                  data-aos-duration="500"
                  data-aos-easing="ease-out-back"
                  data-aos-once="true"
                >
                  <SiExpress />
                  <div className="icon-label">ExpressJS</div>
                </div>
                <div
                  className="item"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                  data-aos-duration="500"
                  data-aos-easing="ease-out-back"
                  data-aos-once="true"
                >
                  <FaReact />
                  <div className="icon-label">ReactJS</div>
                </div>
                <div
                  className="item"
                  data-aos="zoom-in"
                  data-aos-delay="600"
                  data-aos-duration="500"
                  data-aos-easing="ease-out-back"
                  data-aos-once="true"
                >
                  <FaNodeJs />
                  <div className="icon-label">NodeJS</div>
                </div>
                <div
                  className="item"
                  data-aos="zoom-in"
                  data-aos-delay="700"
                  data-aos-duration="500"
                  data-aos-easing="ease-out-back"
                  data-aos-once="true"
                >
                  <DiJavascript1 />
                  <div className="icon-label">Javascript</div>
                </div>
                <div
                  className="item"
                  data-aos="zoom-in"
                  data-aos-delay="700"
                  data-aos-duration="500"
                  data-aos-easing="ease-out-back"
                  data-aos-once="true"
                >
                  <FaCss3Alt />
                  <div className="icon-label">Css</div>
                </div>
                <div
                  className="item"
                  data-aos="zoom-in"
                  data-aos-delay="900"
                  data-aos-duration="500"
                  data-aos-easing="ease-out-back"
                  data-aos-once="true"
                >
                  <FaHtml5 />
                  <div className="icon-label">HTML5</div>
                </div>
                <div
                  className="item"
                  data-aos="zoom-in"
                  data-aos-delay="1000"
                  data-aos-duration="500"
                  data-aos-easing="ease-out-back"
                  data-aos-once="true"
                >
                  <SiRedux />
                  <div className="icon-label">Redux</div>
                </div>
                <div
                  className="item"
                  data-aos="zoom-in"
                  data-aos-delay="1100"
                  data-aos-duration="500"
                  data-aos-easing="ease-out-back"
                  data-aos-once="true"
                >
                    <SiFirebase />
                  <div className="icon-label">Firebase</div>
                </div>
                <div
                  className="item"
                  data-aos="zoom-in"
                  data-aos-delay="1100"
                  data-aos-duration="500"
                  data-aos-easing="ease-out-back"
                  data-aos-once="true"
                >
                  <SiCplusplus />
                  <div className="icon-label">C++</div>
                </div>
                <div
                  className="item"
                  data-aos="zoom-in"
                  data-aos-delay="1200"
                  data-aos-duration="500"
                  data-aos-easing="ease-out-back"
                  data-aos-once="true"
                >
                  <SiPython />
                  <div className="icon-label">Python</div>
                </div>
                <div
                  className="item"
                  data-aos="zoom-in"
                  data-aos-delay="1300"
                  data-aos-duration="500"
                  data-aos-easing="ease-out-back"
                  data-aos-once="true"
                >
                  <FaGit />
                  <div className="icon-label">Git</div>
                </div>
              </div>
            </div>

            {/* end of grid div*/}
          </div>
        </section>

        {/* svg line curve */}
        <div className="curve">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M 321.39 56.44 c 58 -10.79 73.61 -13.44 163.61 -35.44 c 36 -8 118 -29 262 7 C 831 49 906.67 72 985.66 92.83 c 70.05 18.48 146.53 26.09 214.34 3 V 0 H 0 V 27.35 A 600.21 600.21 0 0 0 321.39 56.44 Z"></path>
          </svg>
        </div>
      </div>
    </>
  )
}

export default About
