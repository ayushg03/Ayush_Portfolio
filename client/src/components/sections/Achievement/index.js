import "./achievement.scss"

//icons
import {
  FaReact,
  FaNodeJs,
  FaSass,
  FaLink,
  FaCss3Alt,
  FaAngleRight,
  FaHtml5,
  FaGit,
  FaFigma,
} from "react-icons/fa"
import { DiJavascript1, DiMysql } from "react-icons/di"
import { SiCsharp,SiLeetcode,SiCodeforces,SiCodechef } from "react-icons/si"
import { Link } from "react-router-dom"

const Achievement = () => {
  return (
    <>
      <div className="about-bg">
        <section id="achievement" className="about-section">
          <div className="grid1">
            <div className="left-section">
              <div
                data-aos="fade-right"
                data-aos-delay="0"
                data-aos-duration="800"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                <h2>
                  Achievements
                </h2>
              </div>

              <p
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="800"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                <FaAngleRight/> Solved 250+ Problems on <a href="/">Leetcode</a>, <a href="/">Codeforces</a>, and <a href="/">Codechef</a>.
              </p>
              <p
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="800"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
               <FaAngleRight/> 3 Star Rating on Codechef (Max Rating 1662). <a href="https://www.codechef.com/users/ayushgupta03"><FaLink/></a>
              
              </p>
              <p
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="800"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                <FaAngleRight/> Secured 2989th rank in Round 2 among 27k participants in Meta Hackercup’22. <a href="https://drive.google.com/file/d/1Z0qgdR2kkzYIA21mQuE1inXyzSoR3kIZ/view?usp=sharing"><FaLink/></a>
              </p>
              <p
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="800"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                <FaAngleRight/> Secured 2788th rank among 13k participants in Google Kickstart’22 Round: F. <a href="https://drive.google.com/file/d/1ryOMEu1Mm-l-AJB08mib-WuPNoaLKUu2/view?usp=sharing"><FaLink/></a>
              </p>
              <p
                data-aos="fade-right"
                data-aos-delay="600"
                data-aos-duration="800"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                <FaAngleRight/> Secured Department Rank 01.
              </p>
              <p
                data-aos="fade-right"
                data-aos-delay="600"
                data-aos-duration="800"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                <FaAngleRight/> Awarded RGIPT Merit-Cum-Means Scholarship for the Top 10%* students in the CSE batch.

              </p>
              <p
                data-aos="fade-right"
                data-aos-delay="600"
                data-aos-duration="800"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                <FaAngleRight/> Qualified IIT-JEE Advanced 2020, with AIR of 15740.
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
                <h4>Profile
                </h4>
              </div>
              
              <div className="tech-icons-grid">
              <a href="https://leetcode.com/ayush7209/">
                <div
                  className="item"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                  data-aos-duration="500"
                  data-aos-easing="ease-out-back"
                  data-aos-once="true"
                >
                  <SiLeetcode />
                  <div className="icon-label">Leetcode</div>
                </div></a>
                <a href="https://www.codechef.com/users/ayushgupta03"><div
                  className="item"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                  data-aos-duration="500"
                  data-aos-easing="ease-out-back"
                  data-aos-once="true"
                >
                  <SiCodechef />
                  <div className="icon-label">Codechef</div>
                </div></a>
                <a href="https://codeforces.com/profile/ayush7209">
                <div
                  className="item"
                  data-aos="zoom-in"
                  data-aos-delay="600"
                  data-aos-duration="500"
                  data-aos-easing="ease-out-back"
                  data-aos-once="true"
                >
                  <SiCodeforces />
                  <div className="icon-label">Codeforces</div>
                </div></a>
                
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

export default Achievement
