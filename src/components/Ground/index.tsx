import React from "react";
import { usePlane } from "@react-three/cannon";
import { NearestFilter, RepeatWrapping } from "three";
import { groundTexture } from "../../images/textures";
import { useStore } from "../../hooks/useStore";
import { ThreeEvent } from "@react-three/fiber";

export const Ground: React.FC = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0],
  }));
  const [addCube] = useStore((state) => [state.addCube]);

  groundTexture.repeat.set(100, 100);

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    const [x, y, z] = Object.values(e.point).map((value) => Math.ceil(value));
    addCube(x, y, z);
  };

  return (
    <mesh ref={ref} onClick={handleClick}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" map={groundTexture} />
    </mesh>
  );
};
