import type { Points as TPoints } from "three";
import { inSphere } from "maath/random";
import { useRef } from "react";
import { useTheme } from "../../hooks/use-theme";
import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, Points } from "@react-three/drei";

function StarParticles(): JSX.Element {
  const { theme } = useTheme();
  const ref = useRef<TPoints>(null);

  useFrame((_state, delta) => {
    if (ref.current !== null) {
      ref.current.rotation.y -= delta / 15;
      ref.current.rotation.x -= delta / 10;
    }
  });
  return (
    // eslint-disable-next-line react/no-unknown-property
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
