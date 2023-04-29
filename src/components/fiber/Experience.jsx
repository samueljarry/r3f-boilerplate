import { Bounds, Environment } from "@react-three/drei";
import Logo from "./Logo.jsx";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Experience = () =>
{
    const logoRef = useRef();

    useFrame((_, delta) =>
    {
        logoRef.current.rotation.y += delta
    })

    return (
    <>
        <Environment preset={'apartment'}  />

        <Bounds observe damping={3} margin={3}>
            <Logo
                ref={ logoRef }
                iridescence={ 0.5 }
                ior={ 1 }
                color={ '#010101' }
                thicknessRange={ [400, 500] }
                scale={ 10 }
            />
        </Bounds>
    </>
    )
}

export default Experience