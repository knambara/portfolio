import React from "react"
import App from "../components/App"
import { Helmet } from "react-helmet"

function Index() {
  return (
    <>
      <Helmet>
        <title>Kento Nambara</title>
        <meta
          name="description"
          content="Kento Nambara is a student in Brown University studying Computer Science. He specializes in building fullstack applications as well as in iOS development."
        />
      </Helmet>
      <App />
    </>
  )
}

export default Index
