import React from "react"
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react"
import experienceStyles from "../styles/experience.module.scss"

function Experience() {
  return (
    <section id="experience">
      <div className={experienceStyles.wrapper}>
        <div className="container">
          <h2 style={{ color: "white" }}>Experience</h2>
          <hr style={{ borderColor: "white" }}></hr>
          <Timeline lineColor={"#f44292"}>
            <TimelineItem
              key="001"
              dateText="05/2020 – Current"
              dateInnerStyle={{ background: "#e86971", color: "white" }}
              bodyContainerStyle={{
                background: "#011931",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
              }}
            >
              <h3 style={{ color: "white" }}>Freelance</h3>
              <h4 style={{ color: "white" }}>Web Developer</h4>
              <p style={{ color: "white", marginTop: "15px" }}>
                Build websites and web apps using React.
              </p>
            </TimelineItem>
            <TimelineItem
              key="002"
              dateText="06/2019 – 08/2019"
              dateInnerStyle={{ background: "#e86971", color: "white" }}
              bodyContainerStyle={{
                background: "#011931",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
              }}
            >
              <h3 style={{ color: "white" }}>ChuraData</h3>
              <h4 style={{ color: "white" }}>Software Engineer Intern</h4>
              <p style={{ color: "white", marginTop: "15px" }}>
                Used modern technologies such as Docker and AWS to build a
                system that automates large-scale text data extraction and
                preprocessing, and trained a natural language model.
              </p>
            </TimelineItem>
            <TimelineItem
              key="003"
              dateText="08/2018 - Current"
              dateInnerStyle={{ background: "#e86971", color: "white" }}
              bodyContainerStyle={{
                background: "#011931",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
              }}
            >
              <h3 style={{ color: "white" }}>Brown University, Providence</h3>
              <h4 style={{ color: "white" }}>Matriculation</h4>
              <p style={{ color: "white", marginTop: "15px" }}>
                Transferred to Brown University, concentrating in CS.
              </p>
            </TimelineItem>
            <TimelineItem
              key="004"
              dateText="09/2016 - 08/2018"
              dateInnerStyle={{ background: "#e86971", color: "white" }}
              bodyContainerStyle={{
                background: "#011931",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
              }}
            >
              <h3 style={{ color: "white" }}>Waseda University, Tokyo</h3>
              <h4 style={{ color: "white" }}>Matriculation</h4>
              <p style={{ color: "white", marginTop: "15px" }}>
                Enrolled in Waseda University, concentrating in International
                Relations.
              </p>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </section>
  )
}

export default Experience
