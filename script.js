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
const geometry1 = new THREE.CylinderGeometry( 1, 1, 5, 10 );
//FLAT SHADING!!
const materials = new THREE.MeshNormalMaterial( { flatShading: true } ) ;
const cylinder = new THREE.Mesh( geometry1, materials );

// this variable makes it refresh everytime the screen gets bigger/smaller
// var render = function() {
// renderer.render(scene, camera);
// }
// render();


var light = new THREE.AmbientLight (0xffffff, 1);
scene.add(light);

const geometry2 = new THREE.ConeGeometry( 1, 4, 5.8 );
const cone = new THREE.Mesh( geometry2, materials );
        cone.position.x = 0;
				cone.position.y = 4.5;
				cone.position.z = 0;

const geometry5 = new THREE.ConeGeometry( 1, 4, 5.8 );
const coner = new THREE.Mesh( geometry5, materials );
        coner.position.x = 0;
				coner.position.y = -4.5;
				coner.position.z = 0;
        coner.rotation.x = 3;




class CustomSinCurve extends THREE.Curve {

	constructor( scale = 1 ) {

		super();

		this.scale = scale;

	}

	getPoint( t, optionalTarget = new THREE.Vector3() ) {

		const tx = t * 3 - 1.5;
		const ty = Math.sin( 2 * Math.PI * t );
		const tz = 0;

		return optionalTarget.set( tx, ty, tz ).multiplyScalar( this.scale );

	}

}

const path = new CustomSinCurve( 2 );
const geometry = new THREE.TubeGeometry( path, 50, .4, 10, false );
const tube = new THREE.Mesh( geometry, materials );
        tube.position.x = 3;
				tube.position.y = .5;
				tube.position.z = 0;
scene.add( tube );


const geometry4 = new THREE.TubeGeometry( path, 50, .4, 10, false );
const tuber = new THREE.Mesh( geometry4, materials );
        tuber.position.x = -3;
				tuber.position.y = .5;
				tuber.position.z = 0;
        tuber.rotation.x = 3
const group = new THREE.Group();
group.add( tuber );
group.add( tube );
group.add( coner );
group.add( cone );
group.add( cylinder );

scene.add( group );



var render = function() {
requestAnimationFrame(render);
cylinder.rotation.y += 0.01;
cone.rotation.y +=0.01;
coner.rotation.y+=0.01;
renderer.render(scene, camera);
}
render();
// var render = function() {
// renderer.render(scene, camera);
// }
// render();


var loader = new THREE.JSONLoader();
loader.load('THREEFINALLY.json'), function (g,m){
    obj = new THREE.mesh(g,m)
    scene.add(obj);
};

