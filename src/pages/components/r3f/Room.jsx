import {
  Center,
  OrbitControls,
  PerspectiveCamera,
  PresentationControls,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { sRGBEncoding } from "three";

export default function Room() {
  return (
    <div className="h-full w-full aspect-auto object-contain">
      <Canvas
        shadows
        gl={{ antialias: true, outputEncoding: sRGBEncoding }}
        camera={{ fov: 45, position: [15, 15, 25] }}
        className="cursor-grab active:cursor-grabbing"
      >
        <OrbitControls
          autoRotate
          enableDamping
          enableZoom={false}
          enablePan={false}
        />
        <Box />
        {/* <ambientLight intensity={0.5} />
        <pointLight position={[0, 20, 0]} intensity={0.75} /> */}
      </Canvas>
    </div>
  );
}

const Box = () => {
  const room = useGLTF("/RoomV3.glb");
  const texture = useTexture("https://localhost:3000/RoomV2.hdr");
  texture.flipY = false;
  //   room.scene.children.forEach((mesh) => {
  //     console.log(mesh);
  //     mesh.castShadow = true;
  //     mesh.receiveShadow = true;
  //   });
  const [scale, setScale] = useState(0);
  const [start, setStart] = useState(false);

  let prevTime = useFrame((state) => {
    const currentTime = state.clock.elapsedTime;
    const deltaTime = currentTime - prevTime;
    prevTime = state.clock.elapsedTime;

    if (!start) {
      setTimeout(() => {
        setStart(true);
      }, 1800);
    }

    if (scale <= 1 && start) {
      setScale((prev) => prev + 0.005 * deltaTime);
    }
  });
  return (
    <Center>
      <primitive scale={scale} object={room?.scene}>
        <meshBasicMaterial map={texture} />
      </primitive>
    </Center>
  );
};
