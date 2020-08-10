import React, { useEffect, useState } from "react"
import Button from "@material-ui/core/Button"
import VizSensor from "react-visibility-sensor"
import contactStyles from "../styles/contact.module.scss"

function Contact() {
  const [visible, setVisible] = useState(false)

  return (
    <VizSensor
      partialVisibility={true}
      minTopValue={300}
      onChange={isVisible => {
        if (visible !== true) {
          setVisible(isVisible)
        }
      }}
    >
      <section
        id="contact"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 1000ms linear",
        }}
      >
        <div className={`${contactStyles.wrapper}`}>
          <div className="container py-5 mb-0">
            <h2>Contact Me</h2>
            <hr style={{ borderColor: "white" }} />
            <div className={`container ${contactStyles.getInTouch}`}>
              <h3>Get In Touch</h3>
              <h5 style={{ marginTop: "30px" }}>
                Feel free to shoot me an email or add me on LinkedIn if you'd
                like to connect! <br /> I would love to chat!
              </h5>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginTop: "30px" }}
                href="mailto:kento_nambara@brown.edu"
              >
                Say Hi!
              </Button>
            </div>
          </div>
        </div>
      </section>
    </VizSensor>
  )
}

export default Contact
