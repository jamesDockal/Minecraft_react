import { useBox } from "@react-three/cannon";
import { ThreeEvent } from "@react-three/fiber";
import React, { useState } from "react";
import { Vector3 } from "three";
import { useStore } from "../../hooks/useStore";
import * as textures from "../../images/textures";

type Props = {
  position: any;
  texture: any;
};

export const Cube: React.FC<Props> = ({ position, texture }) => {
  const [isHovered, setIsHovered] = useState(false);

  const [ref] = useBox(() => ({
    type: "Static",
    position,
  }));

  const [addCube, removeCube] = useStore((state) => [
    state.addCube,
    state.removeCube,
  ]);

  const activeTexture = textures[texture + "Texture"];

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();

    console.log("e.nativeEvent.button", e.nativeEvent.button);

    const { x, y, z } = ref.current?.position as Vector3;

    if (e.nativeEvent.button === 2) {
      return removeCube(x, y, z);
    }

    const clickedFace = Math.floor(e.faceIndex / 2);

    if (clickedFace === 0) {
      return addCube(x + 1, y, z);
    } else if (clickedFace === 1) {
      return addCube(x - 1, y, z);
    } else if (clickedFace === 2) {
      return addCube(x, y + 1, z);
    } else if (clickedFace === 3) {
      return addCube(x, y - 1, z);
    } else if (clickedFace === 4) {
      return addCube(x, y, z + 1);
    } else if (clickedFace === 5) {
      return addCube(x, y, z - 1);
    }
  };

  return (
    <mesh
      ref={ref}
      onClick={handleClick}
      onPointerMove={(e) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setIsHovered(false);
      }}
    >
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial
        color={isHovered ? "lightgray" : "white"}
        map={activeTexture}
        transparent={true}
        opacity={texture === "glass" ? 0.6 : 1}
        attach="material"
      />
    </mesh>
  );
};
