import { Canvas } from "@react-three/fiber";
import Experience from "./components/fiber/Experience.jsx";

function App() {

  return (
    <>
        <Canvas className={'webgl'}>
            <Experience />
        </Canvas>
    </>
  )
}

export default App
