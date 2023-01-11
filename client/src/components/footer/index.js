import "./footer.scss"
import { scrollSmoothTransition } from "../../functions/scrollSmoothTransition"

//icons
import { FaReact } from "react-icons/fa"

const Footer = () => {
  return (
    <>
      <div className="footer-bg">
        <footer id="footer" className="footer-section">
          <div>
            <div>
              <span>Built with</span>
              <span>
                <FaReact style={{ width: "20px", height: "20px" }} />{" "}
              </span>
              <span> ReactJS</span>
            </div>
            <div>
              <span>© 2023 </span>
              <span
                className="author"
                onClick={(e) => {
                  scrollSmoothTransition(e, "#home")
                }}
              >
                Ayush Gupta.
              </span>

            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer
