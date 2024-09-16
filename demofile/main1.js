import * as THREE from 'three';
 const canvas =document.getElementById('canvas');
//  Scene
const scene= new THREE.Scene();
scene.background=new THREE.Color('#F0F0F0');

// Camera
const camera =new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z=5;

// object
const geometry= new THREE.DodecahedronGeometry();
const material = new THREE.MeshBasicMaterial({color:'#D7D7D7'});
const dodecahedron= new THREE.Mesh(geometry,material);

const boxGeometry= new THREE.BoxGeometry(1,2,3);
const boxmaterial = new THREE.MeshBasicMaterial({color:'#d7d7d7' });
const box=new THREE.Mesh(boxGeometry,boxmaterial);
box.position.y=-1.5;

 scene.add(box);
 scene.add(dodecahedron);

//  light
const light=new THREE.SpotLight(0x006769,100);
light .position.set(1,1,1);
scene.add(light);

const renderer = new THREE.WebGLRenderer({canvas});

renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.render(scene, camera);




