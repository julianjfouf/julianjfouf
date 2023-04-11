import { Center, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

export default function Earth({ show }) {
  return (
    <Canvas
      gl={{ antialias: true }}
      camera={{ fov: 45, position: [15, 15, 15] }}
      className="cursor-grab active:cursor-grabbing"
    >
      <OrbitControls autoRotate enableDamping enablePan={false} enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, -5]} />
      <Center>
        <Item show={show} />
      </Center>
    </Canvas>
  );
}

const Item = ({ show }) => {
  const earth = useGLTF("https://julianjfoufportfolio.vercel.app/lowpoly_earth.glb");
  const [scale, setScale] = useState(0);
  const [start, setStart] = useState(false);
  const item = useRef();

  let prevTime = useFrame((state) => {

    const currentTime = state.clock.elapsedTime;
    const deltaTime = currentTime - prevTime;
    prevTime = state.clock.elapsedTime;

    if (show && !start) {
      setTimeout(() => {
        setStart(true);
      }, 1700);
    }

    if (show && scale <= 0.075 && start) {
      setScale((prev) => prev + 0.00025 * deltaTime);
      item.current.rotation.y += 0.005 * deltaTime;
    }

  });

  return <primitive scale={scale} ref={item} object={earth.scene} />;
};
