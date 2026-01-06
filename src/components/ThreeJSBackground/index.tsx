import { useRef, useEffect } from "react";
import * as THREE from "three";

interface UserData {
  rotSpeed: { x: number; y: number };
  floatSpeed: number;
  initialY: number;
}

export function ThreeJSBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // --- INIT THREE.JS ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020617, 0.002); // Slate-950 match

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current?.appendChild(renderer.domElement);

    // --- OBJECTS ---

    // 1. The "Floor" Grid - Engineering style
    const gridHelper = new THREE.GridHelper(200, 100, 0x06b6d4, 0x1e293b);
    gridHelper.position.y = -10;
    scene.add(gridHelper);

    // 2. Floating Geometric "Artifacts"
    const geometryGroup = new THREE.Group();
    scene.add(geometryGroup);

    const materials = [
      new THREE.MeshBasicMaterial({
        color: 0x06b6d4,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      }), // Cyan
      new THREE.MeshBasicMaterial({
        color: 0x64748b,
        wireframe: true,
        transparent: true,
        opacity: 0.1,
      }), // Slate
    ];

    // Create random floating shapes
    const shapes: THREE.Mesh[] = [];
    for (let i = 0; i < 25; i++) {
      const type = Math.random();
      let geo;
      if (type < 0.33)
        geo = new THREE.IcosahedronGeometry(Math.random() * 2 + 1, 0);
      else if (type < 0.66)
        geo = new THREE.BoxGeometry(
          Math.random() * 3,
          Math.random() * 3,
          Math.random() * 3,
        );
      else geo = new THREE.TorusGeometry(Math.random() * 2, 0.1, 8, 20);

      const mesh = new THREE.Mesh(
        geo,
        materials[Math.floor(Math.random() * materials.length)],
      );

      // Random positions spread out vertically
      mesh.position.set(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 60 - 20,
      );

      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);

      // Custom velocity for animation
      mesh.userData = {
        rotSpeed: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
        },
        floatSpeed: Math.random() * 0.02 + 0.005,
        initialY: mesh.position.y,
      };

      shapes.push(mesh);
      geometryGroup.add(mesh);
    }

    // --- ANIMATION LOOP ---
    let mouseY = 0;
    let mouseX = 0;
    let targetCameraY = 0;
    let targetCameraZ = 10; // Zoom level

    // Scroll listener for "flying" through the scene
    const handleScroll = () => {
      const scrollPercent =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      // Move camera deeper into the scene as we scroll
      targetCameraZ = 10 - scrollPercent * 30;
      // Move camera up/down
      targetCameraY = -(scrollPercent * 20);

      // Rotate the entire group slightly based on scroll
      geometryGroup.rotation.y = scrollPercent * Math.PI;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.001;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.001;
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      // Smooth camera movement
      camera.position.z += (targetCameraZ - camera.position.z) * 0.05;
      camera.position.y += (targetCameraY - camera.position.y) * 0.05;

      // Mouse Parallax
      camera.rotation.x += (mouseY - camera.rotation.x) * 0.05;
      camera.rotation.y += (-mouseX - camera.rotation.y) * 0.05;

      // Animate Shapes
      shapes.forEach((mesh) => {
        mesh.rotation.x += (mesh.userData as UserData).rotSpeed.x;
        mesh.rotation.y += (mesh.userData as UserData).rotSpeed.y;
        // Bobbing effect
        mesh.position.y =
          (mesh.userData as UserData).initialY +
          Math.sin(Date.now() * 0.001 * mesh.userData.floatSpeed * 100) * 2;
      });

      // Grid movement effect (infinite floor)
      gridHelper.position.z = camera.position.z % 10;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none" />
  );
}
