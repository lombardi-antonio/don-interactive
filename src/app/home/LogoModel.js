'use client';

import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
    const gltf = useLoader(GLTFLoader, "/logo.gltf");
    return (
        <>
            <primitive object={gltf.scene} scale={1} />
        </>
    );
};

function LogoModel() {
    return (
        <div className="logo-model h-full max-h-[1000]">
            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 3.5] }}>
                <Suspense fallback={null}>
                    <Model />
                    <Environment preset="city" />
                </Suspense>
                <OrbitControls autoRotate autoRotateSpeed={-1} enableZoom={false} />
            </Canvas>
        </div>
    )
}

module.exports = LogoModel;