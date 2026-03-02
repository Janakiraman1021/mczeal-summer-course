"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeDBackground() {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // SCENE, CAMERA, RENDERER
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x0b0f19, 0.001); // MATCH THEME BG
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mountRef.current.appendChild(renderer.domElement);

        // PARTICLES (Elegant Grid / Neural)
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 800;

        const posArray = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount * 3; i++) {
            // Spread particles
            posArray[i] = (Math.random() - 0.5) * 15;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        // Custom Material
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.03,
            color: 0x3b82f6, // subtle blue from theme
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        camera.position.z = 5;

        // Mouse Interaction
        let mouseX = 0;
        let mouseY = 0;

        const animateParticles = (event: MouseEvent) => {
            mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
            mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
        }

        document.addEventListener("mousemove", animateParticles);

        // ANIMATION LOOP
        const clock = new THREE.Clock();

        const animate = () => {
            requestAnimationFrame(animate);
            const elapsedTime = clock.getElapsedTime();

            particlesMesh.rotation.y = elapsedTime * 0.05;
            // Subtle mouse parallax
            particlesMesh.rotation.x += (mouseY * 0.5 - particlesMesh.rotation.x) * 0.02;
            particlesMesh.rotation.y += (mouseX * 0.5 - particlesMesh.rotation.y) * 0.02;

            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("mousemove", animateParticles);
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} className="absolute inset-0 z-0 pointer-events-none opacity-50" />;
}
