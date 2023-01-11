const ProjectItem = (props) => {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-delay={props.delay || 0}
        data-aos-duration="800"
        data-aos-easing="ease-out"
        data-aos-once="true"
      >
        <div className="project-item radius">
          <div className="top-container">
            <img className="" src={props.image} alt="" />
            <div className="gradient"></div>

            <div className="top-details">
              <div
                className="number"
                data-aos="fade-left"
                data-aos-delay={props.delay + 400}
                data-aos-duration="500"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                {props.no}
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay={props.delay + 600}
                data-aos-duration="500"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                <div className="title">{props.title}</div>
              </div>

              <ul className="technology">
                {/* list of technology */}
                {props.technology &&
                  props.technology.map((tech, idx) => (
                    <div
                      key={idx}
                      data-aos="zoom-in"
                      data-aos-delay={props.delay + 900 + idx * 100}
                      data-aos-duration="400"
                      data-aos-easing="ease-out"
                      data-aos-once="true"
                    >
                      <li key={idx}>{tech}</li>
                    </div>
                  ))}
              </ul>
            </div>
          </div>
          <div className="bottom-container">
            {/* details sections */}
            <div
              data-aos="fade-left"
              data-aos-delay={props.delay + 200}
              data-aos-duration="400"
              data-aos-easing="ease-out"
              data-aos-once="true"
            >
              <p>{props.description}</p>
            </div>

            <div className="icon">

              <div
                className="links"
                data-aos="fade-up"
                data-aos-delay={props.delay + 250}
                data-aos-duration="400"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                {props.live}
              </div>
              <div
                className="links"
                data-aos="fade-up"
                data-aos-delay={props.delay + 250}
                data-aos-duration="400"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                {props.links}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectItem
