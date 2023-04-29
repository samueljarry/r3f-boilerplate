import { useGLTF } from "@react-three/drei";
import { forwardRef } from "react";

const Logo = forwardRef(
    function Logo({ iridescence, ior, thicknessRange, color, scale }, ref) {
        const { nodes } = useGLTF("./models/logo.gltf");
        return (
            <group ref={ref}>
                <mesh
                    geometry={nodes["O"].geometry}
                    rotation={[1.57, 0, 0]}
                    scale={scale}
                >
                    <meshPhysicalMaterial
                        color={color}
                        iridescence={iridescence}
                        iridescenceIOR={ior}
                        iridescenceThicknessRange={thicknessRange}
                    />
                </mesh>
                <mesh
                    geometry={nodes["S"].geometry}
                    rotation={[1.57, 0, 0]}
                    scale={scale}
                >
                    <meshPhysicalMaterial
                        color={color}
                        iridescence={iridescence}
                        iridescenceIOR={ior}
                        iridescenceThicknessRange={thicknessRange}
                    />
                </mesh>
            </group>
        );
    }
);

Logo.displayName = "Logo";

useGLTF.preload("/models/logo.gltf");

export default Logo;
