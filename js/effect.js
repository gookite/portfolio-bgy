// import * as THREE from "https://esm.sh/three";
// import { OrbitControls } from "https://esm.sh/three/addons/controls/OrbitControls.js";

// // Scene setup
// const scene = new THREE.Scene();
// scene.background = new THREE.Color(0x000000);

// // Camera setup
// const camera = new THREE.PerspectiveCamera(
//   60,
//   1980 / 1080, // Aspect ratio of the canvas
//   1,
//   10000
// );
// camera.position.setZ(30);

// // Renderer setup
// const renderer = new THREE.WebGLRenderer({
//   canvas: document.querySelector("#bg1"),
// });
// renderer.setSize(1980, 1080); // Set the canvas size
// renderer.setPixelRatio(window.devicePixelRatio);

// // Controls setup
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.update();

// const cols = [0x1f913d, 0xa80d87, 0xa80d0d, 0x0da88e];

// function addLines() {
//   const vertices = [];
//   for (let i = 0; i < 3000; i++) {
//     const x = THREE.MathUtils.randFloatSpread(1980);
//     const y = THREE.MathUtils.randFloatSpread(1080);
//     const z = THREE.MathUtils.randFloatSpread(1980 * 1080);

//     vertices.push(x, y, z);
//   }
//   const stargeometry = new THREE.BufferGeometry();
//   stargeometry.setAttribute(
//     "position",
//     new THREE.Float32BufferAttribute(vertices, 3)
//   );

//   const target = Math.floor(Math.random() * cols.length);
//   const starmaterial = new THREE.PointsMaterial({
//     color: cols[target],
//     size: 5,
//   });
//   const stars = new THREE.Points(stargeometry, starmaterial);
//   stars.name = "points";
//   scene.add(stars);

//   renderer.render(scene, camera);
// }

// function resize() {
//   camera.aspect = 1980 / 1080;
//   camera.updateProjectionMatrix();
//   renderer.setSize(1980, 1080);
//   renderer.render(scene, camera);
// }

// function animate() {
//   setTimeout(() => {
//     scene.remove(scene.getObjectByName("points"));
//   }, 200);
//   controls.update();
//   camera.position.z -= 0.05; // 속도 조정
//   addLines();
//   renderer.render(scene, camera);
// }

// function scrollToTop() {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// }

// // Attach event listeners
// document.getElementById("scrollButton").addEventListener("click", scrollToTop);

// window.addEventListener("resize", resize);
// resize(); // Set the initial size
// renderer.setAnimationLoop(animate);
