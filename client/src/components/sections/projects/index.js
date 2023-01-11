import "./projects.scss"

import ProjectItem from "./ProjectItem"
import { BsGithub } from "react-icons/bs"
import {RiShareBoxFill} from "react-icons/ri"

const Projects = () => {
  return (
    <>
      <div className="project-bg">
        {/* svg line curve */}
        <div className="curve1">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M 321.39 56.44 c 58 -10.79 73.61 -13.44 163.61 -35.44 c 36 -8 118 -29 262 7 C 831 49 906.67 72 985.66 92.83 c 70.05 18.48 146.53 26.09 214.34 3 V 0 H 0 V 27.35 A 600.21 600.21 0 0 0 321.39 56.44 Z"></path>
          </svg>
        </div>

        <section id="project" className="project-section">
          <div
            data-aos="fade-right"
            data-aos-delay="0"
            data-aos-duration="800"
            data-aos-easing="ease-out"
            data-aos-once="true"
          >
            <h2>
              My <span>Projects</span>
            </h2>
          </div>

          <div className="project-list-grid">
            <ProjectItem
              image={
                window.location.origin + "/assets/pictures/project1.png"
              }
              // no="#01"
              title="Sahpathi"
              description="Socio-Academic portal of my college in which user can get notes,books & many more and also get notified about upcoming events."
              technology={["ReactJS", "NodeJS", "MongoDB", "ExpressJS"]}
              live={
                <a href="https://sahpathi.onrender.com/" title="Live">
                  <RiShareBoxFill />
                </a>
              }
              links={
                <a href="https://github.com/ayushg03/Sahpathi" title="Github">
                  <BsGithub />
                </a>
              
              }
              delay={200}
            />
            <ProjectItem
              image={
                window.location.origin + "/assets/pictures/project2.png"
              }
              // no="#02"
              title="Portfolio"
              description="My personal developer portfolio made using react,node and express."
              technology={["ReactJS","NodeJS","Express","SCSS"]}
              live={
                <a href="/" title="Live">
                  <RiShareBoxFill />
                </a>
              }
              links={
                <a href="https://github.com/ayushg03/Ayush_Portfolio" title="Github">
                  <BsGithub />
                </a>
              }
              delay={200}
            />
            <ProjectItem
              image={
                window.location.origin + "/assets/pictures/project3.png"
              }
              // no="#01"
              title="Get Together"
              description="Developed a cross-platform social media application utilising email and social
              authentication(Google Facebook) and have basic functionalities like posting, editing profile, and many more."
              technology={["React-Native", "NodeJS", "Firebase"]}
              live={
                <a href="https://drive.google.com/file/d/1_1ET_AE63woYhzH6t1kR0kOy-y0Igkvx/view?usp=share_link" title="Demo Video">
                  <RiShareBoxFill />
                </a>
              }
              links={
                <a href="https://github.com/ayushg03/gettogether" title="Github">
                  <BsGithub />
                </a>
              
              }
              delay={200}
            />
          </div>
        </section>

        {/* svg line curve */}
        <div className="curve2">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M 321.39 56.44 c 58 -10.79 73.61 -13.44 163.61 -35.44 c 36 -8 118 -29 262 7 C 831 49 906.67 72 985.66 92.83 c 70.05 18.48 146.53 26.09 214.34 3 V 0 H 0 V 27.35 A 600.21 600.21 0 0 0 321.39 56.44 Z"></path>
          </svg>
        </div>
      </div>
    </>
  )
}

export default Projects
