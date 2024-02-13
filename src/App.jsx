import ReactLenis from "@studio-freight/react-lenis"
import Scene from "./Components/Scene"
import HomePage from "./Pages/Home/HomePage"
import AnimatedCursor from "react-animated-cursor"

function App() {


  return (
    <>
<Scene/>
<div id="dom">



<ReactLenis root options={{easings : function easeInSine(x) {
  return 1 - Math.cos((x * Math.PI) / 2);
}, }} >
<HomePage/>
</ReactLenis>
</div>


    </>
  )
}

export default App
