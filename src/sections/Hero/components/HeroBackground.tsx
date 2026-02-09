import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const HeroBackground = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);

        if (!containerRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 50;

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance'
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 1);
        containerRef.current.appendChild(renderer.domElement);

        // Particle system - Stars/Network nodes
        const particleCount = isMobile ? 150 : 350;
        const positions = new Float32Array(particleCount * 3);
        const originalPositions = new Float32Array(particleCount * 3);
        const velocities = new Float32Array(particleCount * 3);
        const sizes = new Float32Array(particleCount);

        // Create particles spread across the viewport
        for (let i = 0; i < particleCount; i++) {
            const x = (Math.random() - 0.5) * 120;
            const y = (Math.random() - 0.5) * 80;
            const z = (Math.random() - 0.5) * 30;

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            originalPositions[i * 3] = x;
            originalPositions[i * 3 + 1] = y;
            originalPositions[i * 3 + 2] = z;

            // Slow random drift velocities
            velocities[i * 3] = (Math.random() - 0.5) * 0.02;
            velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
            velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.01;

            // Varying star sizes
            sizes[i] = Math.random() * 2 + 1;
        }

        // Points geometry
        const pointsGeometry = new THREE.BufferGeometry();
        pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        pointsGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        // Star material with glow effect
        const starTexture = createStarTexture();
        const pointsMaterial = new THREE.PointsMaterial({
            size: 3,
            map: starTexture,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            vertexColors: false,
            color: 0xffffff,
            sizeAttenuation: true,
        });

        const stars = new THREE.Points(pointsGeometry, pointsMaterial);
        scene.add(stars);

        // Lines geometry for constellation connections
        const linesMaterial = new THREE.LineBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.15,
            blending: THREE.AdditiveBlending,
        });

        const linesGeometry = new THREE.BufferGeometry();
        const lineSegments = new THREE.LineSegments(linesGeometry, linesMaterial);
        scene.add(lineSegments);

        // Mouse tracking
        const mouse = {
            x: 0, y: 0,
            targetX: 0, targetY: 0,
            worldX: 0, worldY: 0,
            isMoving: false
        };

        let mouseTimeout: ReturnType<typeof setTimeout>;

        const handleMouseMove = (event: MouseEvent) => {
            mouse.targetX = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.targetY = -(event.clientY / window.innerHeight) * 2 + 1;
            mouse.isMoving = true;

            clearTimeout(mouseTimeout);
            mouseTimeout = setTimeout(() => {
                mouse.isMoving = false;
            }, 100);
        };

        if (!isMobile) {
            window.addEventListener('mousemove', handleMouseMove);
        }

        let animationId: number;

        // Create star texture with glow
        function createStarTexture() {
            const canvas = document.createElement('canvas');
            canvas.width = 64;
            canvas.height = 64;
            const ctx = canvas.getContext('2d')!;

            // Create radial gradient for glow effect
            const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
            gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
            gradient.addColorStop(0.1, 'rgba(255, 255, 255, 0.8)');
            gradient.addColorStop(0.4, 'rgba(200, 200, 255, 0.3)');
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 64, 64);

            const texture = new THREE.CanvasTexture(canvas);
            return texture;
        }

        // Update constellation lines based on proximity
        function updateLines() {
            const linePositions: number[] = [];
            const connectionDistance = 15;
            const cursorConnectionDistance = 25;

            for (let i = 0; i < particleCount; i++) {
                const x1 = positions[i * 3];
                const y1 = positions[i * 3 + 1];
                const z1 = positions[i * 3 + 2];

                // Connect to nearby particles
                for (let j = i + 1; j < particleCount; j++) {
                    const x2 = positions[j * 3];
                    const y2 = positions[j * 3 + 1];
                    const z2 = positions[j * 3 + 2];

                    const distance = Math.sqrt(
                        Math.pow(x2 - x1, 2) +
                        Math.pow(y2 - y1, 2) +
                        Math.pow(z2 - z1, 2)
                    );

                    if (distance < connectionDistance) {
                        linePositions.push(x1, y1, z1, x2, y2, z2);
                    }
                }

                // Connect particles near cursor
                const cursorDist = Math.sqrt(
                    Math.pow(x1 - mouse.worldX, 2) +
                    Math.pow(y1 - mouse.worldY, 2)
                );

                if (cursorDist < cursorConnectionDistance) {
                    // Find other particles near cursor to connect
                    for (let j = i + 1; j < particleCount; j++) {
                        const x2 = positions[j * 3];
                        const y2 = positions[j * 3 + 1];
                        const z2 = positions[j * 3 + 2];

                        const cursorDist2 = Math.sqrt(
                            Math.pow(x2 - mouse.worldX, 2) +
                            Math.pow(y2 - mouse.worldY, 2)
                        );

                        if (cursorDist2 < cursorConnectionDistance) {
                            const particleDist = Math.sqrt(
                                Math.pow(x2 - x1, 2) +
                                Math.pow(y2 - y1, 2)
                            );

                            if (particleDist < cursorConnectionDistance * 1.5) {
                                linePositions.push(x1, y1, z1, x2, y2, z2);
                            }
                        }
                    }
                }
            }

            linesGeometry.setAttribute(
                'position',
                new THREE.Float32BufferAttribute(linePositions, 3)
            );
        }

        const animate = () => {
            animationId = requestAnimationFrame(animate);

            // Smooth mouse follow
            mouse.x += (mouse.targetX - mouse.x) * 0.08;
            mouse.y += (mouse.targetY - mouse.y) * 0.08;

            // Convert to world coordinates
            mouse.worldX = mouse.x * 50;
            mouse.worldY = mouse.y * 35;

            const positionAttribute = pointsGeometry.getAttribute('position') as THREE.BufferAttribute;
            const posArray = positionAttribute.array as Float32Array;

            // Update particle positions
            for (let i = 0; i < particleCount; i++) {
                const origX = originalPositions[i * 3];
                const origY = originalPositions[i * 3 + 1];
                const origZ = originalPositions[i * 3 + 2];

                // Base gentle drift
                let newX = origX + Math.sin(Date.now() * 0.0003 + i) * 0.5;
                let newY = origY + Math.cos(Date.now() * 0.0002 + i * 0.5) * 0.3;
                let newZ = origZ;

                // Cursor interaction - particles are attracted/repelled
                const dx = newX - mouse.worldX;
                const dy = newY - mouse.worldY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const interactionRadius = 30;

                if (distance < interactionRadius && distance > 0) {
                    const force = (1 - distance / interactionRadius);
                    const angle = Math.atan2(dy, dx);

                    // Create swirling/gravitational effect
                    const attractStrength = force * 8;
                    const tangentStrength = force * 3;

                    // Pull toward cursor
                    newX -= Math.cos(angle) * attractStrength * 0.3;
                    newY -= Math.sin(angle) * attractStrength * 0.3;

                    // Add tangential movement for swirl effect
                    newX += Math.cos(angle + Math.PI / 2) * tangentStrength;
                    newY += Math.sin(angle + Math.PI / 2) * tangentStrength;

                    // Push forward in z
                    newZ = origZ + force * 10;
                }

                // Smooth interpolation
                posArray[i * 3] += (newX - posArray[i * 3]) * 0.1;
                posArray[i * 3 + 1] += (newY - posArray[i * 3 + 1]) * 0.1;
                posArray[i * 3 + 2] += (newZ - posArray[i * 3 + 2]) * 0.1;
            }

            positionAttribute.needsUpdate = true;

            // Update line connections
            updateLines();

            // Subtle camera movement
            camera.position.x += (mouse.x * 3 - camera.position.x) * 0.02;
            camera.position.y += (mouse.y * 2 - camera.position.y) * 0.02;
            camera.lookAt(0, 0, 0);

            // Animate line opacity based on cursor movement
            linesMaterial.opacity = mouse.isMoving ? 0.25 : 0.12;

            renderer.render(scene, camera);
        };

        if (!isMobile) {
            animate();
        } else {
            // Static render for mobile with basic drift
            const mobileAnimate = () => {
                animationId = requestAnimationFrame(mobileAnimate);

                const positionAttribute = pointsGeometry.getAttribute('position') as THREE.BufferAttribute;
                const posArray = positionAttribute.array as Float32Array;

                for (let i = 0; i < particleCount; i++) {
                    const origX = originalPositions[i * 3];
                    const origY = originalPositions[i * 3 + 1];

                    posArray[i * 3] = origX + Math.sin(Date.now() * 0.0002 + i) * 0.3;
                    posArray[i * 3 + 1] = origY + Math.cos(Date.now() * 0.00015 + i * 0.5) * 0.2;
                }

                positionAttribute.needsUpdate = true;
                updateLines();
                renderer.render(scene, camera);
            };

            mobileAnimate();
        }

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('mousemove', handleMouseMove);
            clearTimeout(mouseTimeout);
            if (animationId) cancelAnimationFrame(animationId);

            pointsGeometry.dispose();
            pointsMaterial.dispose();
            linesGeometry.dispose();
            linesMaterial.dispose();
            starTexture.dispose();
            renderer.dispose();

            if (containerRef.current && renderer.domElement) {
                containerRef.current.removeChild(renderer.domElement);
            }
        };
    }, [isMobile]);

    return (
        <>
            {/* Three.js Canvas - Full Viewport */}
            <div
                ref={containerRef}
                className="absolute inset-0 w-full h-full"
                style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #000000 50%, #050510 100%)' }}
            />

            {/* Soft vignette overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.4) 100%)'
                }}
            />

            {/* Bottom fade for section transition */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </>
    );
};
