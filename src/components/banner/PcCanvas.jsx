import { useEffect, Suspense } from "react";
import { Preload, useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import CanvasLoader from "../common/CanvasLoader";
import SwatchWrapper from "./SwatchWrapper";

const PCModel = () => {
  const pc = useGLTF("/assets/pc.gltf");

  return (
    <mesh rotation-y={Math.PI * 0.25}>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <pointLight intensity={1} />
      <primitive object={pc.scene} />
    </mesh>
  );
};

const PcCanvas = ({ activeData, swatchData, handleSwatchClick }) => {
  const Cam = () => {
    useThree(({ camera }) => {
      camera.position.y = 8;
      camera.lookAt(0, 0, 0);
    });
  };
  return (
    <div className="relative z-10 h-3/5 w-full  lg:h-full lg:w-1/2">
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [10, -5, 10], fov: 20 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Cam />
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            autoRotate={true}

            //   minPolarAngle={Math.PI / 2}
          />
          <PCModel />
        </Suspense>
        <Preload all />
      </Canvas>
      <SwatchWrapper
        activeData={activeData}
        swatchData={swatchData}
        handleSwatchClick={handleSwatchClick}
      />

      <div className="highlight absolute inset-x-40 top-0 -z-10 h-1/2 w-2/5 rounded-bl-full rounded-br-full bg-[#D7b172] opacity-50 md:inset-x-60" />
    </div>
  );
};

export default PcCanvas;
