import React, { useEffect, useState } from "react"

function SideDrawer(props) {
  const [sideDrawerClasses, setSideDrawerClasses] = useState("side-drawer")

  const scroll = sectionID => {
    const section = document.querySelector(sectionID)
    section.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  useEffect(() => {
    if (props.show) {
      setSideDrawerClasses("side-drawer open")
    } else {
      setSideDrawerClasses("side-drawer")
    }
  }, [props.show])

  return (
    <nav className={sideDrawerClasses}>
      <ul>
        <li>
          <a
            href="#"
            onClick={event => {
              event.preventDefault()
              props.close()
              scroll("#about")
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={event => {
              event.preventDefault()
              props.close()
              scroll("#projects")
            }}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={event => {
              event.preventDefault()
              props.close()
              scroll("#experience")
            }}
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={event => {
              event.preventDefault()
              props.close()
              scroll("#contact")
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default SideDrawer
