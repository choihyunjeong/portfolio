import * as THREE from 'three';
import { OrbitControls } from '/three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from '/three/examples/jsm/loaders/GLTFLoader.js';

const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.set(-0.4, 0.1, -0.2);
camera.lookAt(0.5, 0, -0.5)

const scene = new THREE.Scene();
let desktop;
const loader = new GLTFLoader();
loader.load('/three/public/Untitled.glb',
    function (gltf) {
        desktop = gltf.scene;
        desktop.position.set(2.5, -1.3, -0.5)
        desktop.rotation.set(0, 3, 0)
        scene.add(desktop);
    },
    function (xhr) { },
    function (error) { }
);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container3D').appendChild(renderer.domElement);



const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
directionalLight.position.set(-1, 3, 0.5)
scene.add(directionalLight)
directionalLight.castShadow = true

const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5)
directionalLight2.position.set(0.5, 2.5, 1)
scene.add(directionalLight2)
directionalLight2.castShadow = true

const reRender3D = () => {
    requestAnimationFrame(reRender3D);
    renderer.render(scene, camera);
};
reRender3D();

//const controls = new OrbitControls( camera, renderer.domElement );