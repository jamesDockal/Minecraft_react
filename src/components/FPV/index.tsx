import { PointerLockControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React from "react";

export const FPV: React.FC = () => {
  const { camera, gl } = useThree();

  return <PointerLockControls args={[camera, gl.domElement]} />;
};