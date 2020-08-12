import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

function Footer() {
  return (
    <footer>
      <a
        href="https://github.com/knambara"
        target="_blank"
        rel="noreferrer"
        style={{ color: "white" }}
      >
        <FontAwesomeIcon className="footer__icon" icon={faGithub} size="2x" />
      </a>
      Created by Kento Nambara, © 2020
      <a
        href="https://www.linkedin.com/in/kento-nambara"
        target="_blank"
        rel="noreferrer"
        style={{ color: "white" }}
      >
        <FontAwesomeIcon className="footer__icon" icon={faLinkedin} size="2x" />
      </a>
    </footer>
  )
}

export default Footer
