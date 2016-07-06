import THREE from 'three';


function createPoints(startingPoint) {
  const geometry = new THREE.Geometry();
  const material = new THREE.PointsMaterial({
    size: 3,
    sizeAttenuation: false,
    color: 0x00f0f0,
  });
  for (let i = 0; i < 100; i++) {
    const y = -i * 0.01;
    const z = i * 0.02;
    geometry.vertices.push(new THREE.Vector3(startingPoint, y, z));
  }
  const point = new THREE.Points(geometry, material);

  return point;
}

export default createPoints;
