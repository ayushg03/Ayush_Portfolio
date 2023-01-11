import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

//components
import App from "./App"

import "./Style/index.scss"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
)
