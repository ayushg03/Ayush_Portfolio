import "./contact.scss"
import MyLinks from "../../svg/MyLinks"
import { AiOutlineCopy } from "react-icons/ai"
import { FiSend } from "react-icons/fi"
import { ToastContainer, toast } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"
import ContactUs from "../contactus/contactus"

const Contact = () => {
  const emojis = ["😁", "😎", "🤗", "🧐", "😇", "👌", "👋", "🤟", "🤝"]
  const myEmailAddress = "david.michael15.md@gmail.com"

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmailAddress)
    toast(
      `${emojis[Math.floor(Math.random() * emojis.length)]} Email successfully Copied.`,
      {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      }
    )
  }

  return (
    <>
      <div className="contact-bg">
        <section id="contact" className="contact-section">
          <div
            data-aos="zoom-in"
            data-aos-delay="0"
            data-aos-duration="500"
            data-aos-easing="ease-out-back"
            data-aos-once="true"
          >
            <h2>
              Let's <span>Talk</span>
            </h2>
         
            <ContactUs/>
            </div>

          <MyLinks />
        </section>
        <ToastContainer />
      </div>
    </>
  )
}

export default Contact
