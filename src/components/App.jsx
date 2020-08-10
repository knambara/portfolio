import React, { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import Title from "../components/Title"
import About from "../components/About"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import SideDrawer from "../components/SideDrawer"
import BackDrop from "../components/Backdrop"

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const drawerToggleClickHandler = () => {
    setDrawerOpen(prevState => !prevState)
  }

  const backdropClickHandler = () => {
    setDrawerOpen(false)
  }

  return (
    <div style={{ height: "100%" }}>
      <NavBar sideMenuClick={drawerToggleClickHandler} />
      <SideDrawer show={drawerOpen} close={drawerToggleClickHandler} />
      {drawerOpen && <BackDrop click={backdropClickHandler} />}
      <Title />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
