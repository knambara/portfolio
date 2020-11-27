import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Fade from "@material-ui/core/Fade"
import Grow from "@material-ui/core/Grow"
import Img1 from "../images/title1.jpg"
import titleStyles from "../styles/title.module.scss"

function Title() {
  const [mounted, setMounted] = useState(false)
  const [slideIn, setSlideIn] = useState(false)
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
      file(extension: { eq: "jpg" }, name: { eq: "title" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(maxWidth: 992, maxHeight: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const authorName = data.site.siteMetadata.author
  const titleImage = data.file.childImageSharp.fluid

  useEffect(() => setTimeout(() => setMounted(true), 1000), [])
  useEffect(() => setTimeout(() => setSlideIn(true), 1300), [])

  return (
    <Fade in={mounted}>
      <div className={`${titleStyles.wrapper}`}>
        <div className="container-lg px-0">
          <div className="row">
            <div className={`col-lg-4 ${titleStyles.titleText}`}>
              <Grow in={slideIn} timeout={1000}>
                <h1 className={titleStyles.text1}>Hi, I'm {authorName}. </h1>
              </Grow>
              <Grow in={slideIn} timeout={1500}>
                <h1 className={titleStyles.text2}>Welcome to my Website. </h1>
              </Grow>
            </div>
            <div className="col-lg-8">
              {/* <img
                src={Img1}
                className={`img-fluid ${titleStyles.image}`}
                alt="title"
              /> */}
              <Img fluid={titleImage} className={titleStyles.image} />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default Title
