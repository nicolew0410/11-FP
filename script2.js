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

// var loader = new THREE.ObjectLoader();
// loader.load('pleasefinally.obj', 
// function (object){
//     scene.add(object);
// });

function loadModel() {
    var loader = new THREE.OBJLoader();
    object.rotation.z = Math.PI;
    loader.load( 'pleasefinally.obj', function ( object ) {
      scene.add( object );
    });
};

var render = function() {
requestAnimationFrame(render);
renderer.render(scene, camera);
}

render();
loadModel();