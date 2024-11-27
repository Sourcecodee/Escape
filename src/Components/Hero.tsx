import Adventure from "./Adventure"
import Call from "./Call"
import Core from "./Core"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Team from "./Team"
import Video from "./Video"

const Hero = () => {
  return (
    
    <div style={{overflow: 'hidden'}}>
        <Navbar/>
        <Adventure/>
        <Core/>
        <Video/>
        <Team/>
        <Call/>
        <Footer/>
    </div>

  )
}

export default Hero