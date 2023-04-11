import React, { useRef, useState } from "react";
import { Center, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

const Cat = ({ show }) => {
  return (
    <Canvas
      gl={{ antialias: true }}
      className="cursor-grab active:cursor-grabbing"
    >
      <OrbitControls enableDamping autoRotate enableZoom={false} enablePan={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 2.5, 5]} />
      <Icon show={show} />
    </Canvas>
  );
};

const Icon = ({ show }) => {
  const [scale, setScale] = useState(0);
  const [rotation, setRotation] = useState(0);
  const { scene } = useGLTF("/react_logo.glb");
  const [start, setStart] = useState(false);
  const item = useRef();

  let prevTime = useFrame((state) => {
    const currentTime = state.clock.elapsedTime;
    const deltaTime = currentTime - prevTime;
    prevTime = state.clock.elapsedTime;
    if (show && !start) {
      setTimeout(() => {
        setStart(true);
      }, 2500);
    }
    if (show && scale <= 1.25 && start) {
      setScale((prev) => prev + 0.005 * deltaTime);
      item.current.rotation.y += 0.005 * deltaTime;
    }
  });

  return (
    <Center>
      <primitive scale={scale} ref={item} object={scene} />
    </Center>
  );
};

export default Cat;
