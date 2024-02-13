import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import React from 'react'
import Experience from "./Experience";
import { Shadow } from "@react-three/drei";

const Scene = () => {
  return (
<Canvas id="canvas"  shadows dpr={[1, 2]}>

<Experience/>





</Canvas>
  )
}

export default Scene
