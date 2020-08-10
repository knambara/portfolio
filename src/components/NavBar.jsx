import React, { useState, useEffect } from "react"
import Slide from "@material-ui/core/Slide"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

function NavBar(props) {
  const [checked, setChecked] = useState(false)

  const scroll = sectionID => {
    const section = document.querySelector(sectionID)
    section.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  useEffect(() => setTimeout(() => setChecked(true), 750), [])

  return (
    <Slide direction="down" in={checked} mountOnEnter unmountOnExit>
      <div className="fixed-top navbar-wrapper">
        <nav className="navbar navbar-custom navbar-expand-lg py-3 mx-auto">
          <button
            class="navbar-toggler ml-auto custom-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={props.sideMenuClick}
          >
            <FontAwesomeIcon
              icon={faBars}
              size="lg"
              style={{ color: "#21e6c1" }}
            />
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  onClick={event => {
                    event.preventDefault()
                    scroll("#about")
                  }}
                >
                  About
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  onClick={event => {
                    event.preventDefault()
                    scroll("#experience")
                  }}
                >
                  Experience
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  onClick={event => {
                    event.preventDefault()
                    scroll("#projects")
                  }}
                >
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  onClick={event => {
                    event.preventDefault()
                    scroll("#contact")
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Slide>
  )
}

export default NavBar
