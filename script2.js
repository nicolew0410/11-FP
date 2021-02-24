var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
        camera.position.z = 7;
        
        var renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setClearColor("#b7d6eb");
//color of background ^
         renderer.setSize(window.innerWidth,window.innerHeight);

        document.body.appendChild(renderer.domElement);

        window.addEventListener('resize', () => {
            renderer.setSize(window.innerWidth,window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;

            camera.updateProjectionMatrix();
        })
var light = new THREE.AmbientLight (0xffffff, 1);
scene.add(light);


// var loader = new THREE.glTFLoader();
// loader.load(
//     'LAST.gltf',
//     function( object ){
//         scene.add(object)
//     }
//     );
// Future work WHY DOESNT THIS WORK -> My perfectionist side is making me frustrated
// Worked on it for 3 hours with 3 loaders and many diff file formats AND IT WONT WORK
// what does it mean to run things locally? i get the general basis but i havent been taught this

var render = function() {
requestAnimationFrame(render);
renderer.render(scene, camera);
}
// loader();
render();