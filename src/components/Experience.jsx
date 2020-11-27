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
              <h3 style={{ color: "white" }}>Independent Contractor</h3>
              <h4 style={{ color: "white" }}>Software Developer</h4>
              <p style={{ color: "white", marginTop: "15px" }}>
                • Designed, developed, and deployed applications for various
                clients using Python and React.js • Utilized GraphQL to connect
                client applications with Headless CMS for seamless query for web
                pages
              </p>
            </TimelineItem>
            <TimelineItem
              key="002"
              dateText="05/2019 – 08/2019"
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
                • Built an automation system in Python that extracts and
                pre-processes 5 million language data per day • Designed
                algorithm to handle API calls from data source and store
                normalized data to Amazon RDS • Trained a Japanese NLP model to
                accurately model semantic correlations between various social
                trends • Implemented a pipeline between MySQL database and NLP
                model and deployed using Docker and AWS
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
              <h4 style={{ color: "white" }}>Major: Computer Science</h4>
              <p style={{ color: "white", marginTop: "15px" }}>
                Transferred to Brown University, concentrating in Computer
                Science.
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
              <h4 style={{ color: "white" }}>Major: International Relations</h4>
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
