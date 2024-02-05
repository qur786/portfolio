import { useRef, useContext } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { inSphere } from "maath/random";
import type {
  BufferGeometry,
  NormalBufferAttributes,
  Material,
  Object3DEventMap,
  Points as TPoints,
} from "three";
import { ThemeContext } from "../../context/theme-context";

function StarParticles(): JSX.Element {
  const { theme } = useContext(ThemeContext);
  const ref =
    useRef<
      TPoints<
        BufferGeometry<NormalBufferAttributes>,
        Material | Material[],
        Object3DEventMap
      >
    >(null);

  useFrame((_state, delta) => {
    if (ref.current !== null) {
      ref.current.rotation.y -= delta / 15;
      ref.current.rotation.x -= delta / 10;
    }
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={
          inSphere(new Float32Array(5000), { radius: 6 }) as Float32Array
        }
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color={theme === "dark" ? "white" : "black"}
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export function Stars() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <StarParticles />
    </Canvas>
  );
}
