import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import VizSensor from "react-visibility-sensor"
import projectsStyles from "../styles/projects.module.scss"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Zoom from "@material-ui/core/Zoom"

//   export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug}}) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

function Projects(props) {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  })
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              date
              description
              link
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const [visible, setVisible] = useState(false)
  const [renderedProjects, setRenderedProjects] = useState([])

  useEffect(() => {
    if (visible) {
      scheduleNextUpdate()
    }
  }, [visible])

  const scheduleNextUpdate = () => {
    setTimeout(updateRenderedProjects, 150)
  }

  const updateRenderedProjects = () => {
    setRenderedProjects(prev => [
      ...prev,
      data.allMarkdownRemark.edges[prev.length],
    ])
  }

  useEffect(() => {
    if (
      renderedProjects.length !== 0 &&
      renderedProjects.length !== data.allMarkdownRemark.edges.length
    ) {
      console.log(renderedProjects.count)
      scheduleNextUpdate()
    }
  }, [renderedProjects])

  return (
    <VizSensor
      partialVisibility={true}
      onChange={isVisible => {
        if (isVisible === true && visible !== true) {
          console.log("h")
          setVisible(isVisible)
        }
      }}
    >
      <section
        id="projects"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 1000ms linear",
        }}
      >
        <div className={`${projectsStyles.wrapper}`}>
          <div className="container">
            <h2>Projects</h2>
            <hr />
            <div className="row">
              {renderedProjects.map(edge => {
                return (
                  <div className="col-lg-4 col-md-6 text-center">
                    <Zoom in={visible}>
                      <Card
                        className={`${classes.root} ${projectsStyles.card} my-4`}
                      >
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image={`${edge.node.fields.slug}.png`}
                            title={edge.node.frontmatter.title}
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              {edge.node.frontmatter.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              component="p"
                            >
                              {edge.node.frontmatter.description}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button size="small" color="primary">
                            <a
                              href={edge.node.frontmatter.link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Link
                            </a>
                          </Button>
                        </CardActions>
                      </Card>
                    </Zoom>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </VizSensor>
  )
}

export default Projects
