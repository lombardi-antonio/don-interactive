'use client';

import Image from "next/image";
import { Suspense } from "react";
import { useState, useEffect } from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import HomeLogo from 'public/donModel.png';

const Placeholder = () => (
    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Image
            src={HomeLogo}
            width={500}
            height={500}
            alt="Beats from Outer Space Game Icon"
            className="rounded-2xl"
        />
    </div>
);

const Model = () => {
    const gltf = useLoader(GLTFLoader, "/logo.gltf");
    return (
        <>
            <primitive object={gltf.scene} scale={1} />
        </>
    );
};

function LogoModel() {
    const [isLoaded, setIsLoaded] = useState(false);

    const Loader = () => {
        const { gl } = useThree();
        useEffect(() => {
            setIsLoaded(true);
        }, [gl]);
        return null;
    }

    return (
        <div className="logo-model h-full max-h-[1000px]">
            {!isLoaded && <Placeholder />}
            <Suspense fallback={null}>
                <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 3.5] }}>
                    <Model />
                    <Environment preset="city" />
                    <OrbitControls autoRotate autoRotateSpeed={-1} enableZoom={false} />
                    <Loader />
                </Canvas>
            </Suspense>
        </div>
    )
}

module.exports = LogoModel;