import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useCustomization } from "./Customization";
import * as THREE from "three";

export default function Chair(props) {
  const { nodes, materials } = useGLTF("./models/model.gltf");

  const { material, chairColor, cushionColor } = useCustomization();

  const leather = useTexture({
    map: "./textures/leather/Leather_008_Base Color.jpg",
    normalMap: "./textures/leather/Leather_008_Normal.jpg",
    roughnessMap: "./textures/leather/Leather_008_Roughness.jpg",
    aoMap: "./textures/leather/Leather_008_Ambient Occlusion.jpg",
  });

  leather.map.repeat.set(2, 2);
  leather.normalMap.repeat.set(2, 2);
  leather.roughnessMap.repeat.set(2, 2);
  leather.aoMap.repeat.set(2, 2);

  leather.map.wrapS = leather.map.wrapT = THREE.RepeatWrapping;
  leather.normalMap.wrapS = leather.normalMap.wrapT = THREE.RepeatWrapping;
  leather.roughnessMap.wrapS = leather.roughnessMap.wrapT =
    THREE.RepeatWrapping;
  leather.aoMap.wrapS = leather.aoMap.wrapT = THREE.RepeatWrapping;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.chair.geometry}
        material={materials["BrownDark.052"]}
      >
        <meshStandardMaterial {...leather} color={chairColor.color} />
      </mesh>
    </group>
  );
}

useGLTF.preload("./models/model.gltf");
