import React, { useEffect, useState } from "react"
import aboutStyles from "../styles/about.module.scss"
import VizSensor from "react-visibility-sensor"
import Portrait from "../images/portrait.jpg"
import JavaLogo from "../images/java.png"
import PythonLogo from "../images/python.png"
import JSLogo from "../images/javascript.png"
import ReactLogo from "../images/reactjs.png"
import NodeLogo from "../images/nodejs.png"
import BootstrapLogo from "../images/bootstrap.png"
import HTML5Logo from "../images/html.png"
import CSSLogo from "../images/css.png"

function About() {
  const [visible, setVisible] = useState(false)

  return (
    <VizSensor
      partialVisibility={true}
      minTopValue={500}
      onChange={isVisible => {
        if (visible !== true) {
          setVisible(isVisible)
        }
      }}
    >
      <section
        id="about"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 1000ms linear",
        }}
      >
        <div class={`${aboutStyles.wrapper}`}>
          <div class="container-lg">
            <div className="sectionTitle">
              <h2>About Me</h2>
              <hr />
            </div>
            <div class="row align-items-center">
              <div className={`col-sm-6 ${aboutStyles.portraitContainer}`}>
                <img
                  src={Portrait}
                  className={`img-fluid ${aboutStyles.portrait}`}
                  alt="portrait"
                />
              </div>
              <div class={`col-sm-6 py-4 px-4`}>
                <p>
                  Hello! My name is Kento, and I am an undergraduate student
                  studying Computer Science at Brown University.
                </p>
                <p>
                  I am a passionate software engineer, and my expertise lie on
                  building web/iOS applications and natural language processing.
                  Outside of programming, some of my hobbies include playing the
                  piano, reading non-fiction books, running, and playing
                  basketball.
                </p>
                <p>
                  Upon graduating Brown, I would love to work at a tech company
                  where I can continuously learn and implement meaningful
                  projects!
                </p>
              </div>

              <div className={`container ${aboutStyles.skills}`}>
                <h3>Programming Skills</h3>
                <h4>Here are some of the technologies I've worked with</h4>

                <div className="slider">
                  <div className="slide">
                    <img src={JavaLogo} alt="java logo" />
                    <img src={PythonLogo} alt="python logo" />
                    <img src={JSLogo} alt="javascript logo" />
                    <img src={ReactLogo} alt="reactjs logo" />
                    <img src={NodeLogo} alt="nodejs logo" />
                    <img src={BootstrapLogo} alt="bootstrap logo" />
                    <img src={HTML5Logo} alt="html logo" />
                    <img src={CSSLogo} alt="css logo" />
                  </div>
                  <div class="slide">
                    <img src={JavaLogo} alt="java logo" />
                    <img src={PythonLogo} alt="python logo" />
                    <img src={JSLogo} alt="javascript logo" />
                    <img src={ReactLogo} alt="reactjs logo" />
                    <img src={NodeLogo} alt="nodejs logo" />
                    <img src={BootstrapLogo} alt="bootstrap logo" />
                    <img src={HTML5Logo} alt="html logo" />
                    <img src={CSSLogo} alt="css logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </VizSensor>
  )
}

export default About
