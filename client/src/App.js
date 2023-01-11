import React from "react"
import AOS from "aos"
import "aos/dist/aos.css"

//components
import Header from "./components/header/"
import Main from "./components/sections/Main"
import Footer from "./components/footer/"

const App = () => {
AOS.init({
  offset: 0
})
  return (
    <>
      <div className="app-main">
          <Header />
          <Main />
          <Footer />
      </div>
    </>
  )
}

export default App
