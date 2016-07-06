import THREE from 'three';
import createPoints from './circle';


// App sizes
const fieldView = 75;
const aspectRatio = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 1000;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(fieldView, aspectRatio, near, far);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('main').appendChild(renderer.domElement);

// A circle
const dots1 = createPoints(-1);
const dots2 = createPoints(1);
scene.add(dots1);
scene.add(dots2);

camera.position.z = 4;

// Render loop
function render() {
  requestAnimationFrame(render);
  dots1.rotation.x += 0.01;
  dots1.rotation.y += 0.01;

  dots2.rotation.x -= 0.01;
  dots2.rotation.y += 0.001;

  renderer.render(scene, camera);
}
render();
