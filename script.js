// var scene
// var camera

// camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 5000);
// camera.position.set(0, 0, 200);

// scene = new THREE.Scene();
// scene.add(camera);


// const shape = new THREE.BoxBufferGeometry( 100, 100, 100 );
// var box = new THREE.Mesh(new THREE.BoxGeometry(30, 30, 30, 30, 30, 30), new THREE.MeshBasicMaterial({
//   vertexColors: THREE.VertexColors
// }));
// scene.add(box);

// var wireBox = new THREE.Mesh(new THREE.BoxGeometry(30, 30, 30, 30, 30, 30), new THREE.MeshBasicMaterial({
//   color: "white",
//   wireframe: true
// }));
// box.add(wireBox);

// var raycaster = new THREE.Raycaster();
// var mouse = new THREE.Vector2();
// var intersects = [];
// var faceIdx1 = -1, faceIdx2 = -1;
// var baseColor = new THREE.Color("white");
// var selectionColor = new THREE.Color("red");

// window.addEventListener("mousemove", function(event) {
//   mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//   mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
// }, false);

// window.addEventListener("mousedown", function(event){
//   raycaster.setFromCamera(mouse, camera);
//   intersects = raycaster.intersectObject(box);
//   if (intersects.length === 0) return;
  
//   // set previously selected faces to white
//   setFaceColor(faceIdx1, baseColor);
//   setFaceColor(faceIdx2, baseColor);
  
//   // find the new indices of faces
//   faceIdx1 = intersects[0].faceIndex;
//   faceIdx2 = faceIdx1 % 2 === 0 ? faceIdx1 + 1: faceIdx1 - 1;
  
//   // set newly selected faces to red
//   setFaceColor(faceIdx1, selectionColor);
//   setFaceColor(faceIdx2, selectionColor);
// }, false)

// function setFaceColor(idx, color){
//   if (idx === -1) return;
//   box.geometry.faces[idx].color.copy(color);
//   box.geometry.colorsNeedUpdate = true;
// }

