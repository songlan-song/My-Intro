<template>
    <div class="home">
        <div class="canvas-container" ref="screenDom"></div>
    </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { gsap } from "gsap"
let screenDom = ref(null)
onMounted(() => {
    //创建场景
    const scene = new THREE.Scene()

    //创建相机
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.set(0, 0, 10)

    //创建渲染器
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    //将画布添加到页面中
    screenDom.value.appendChild(renderer.domElement)

    //创建时钟
    const clock = new THREE.Clock();
    let mixer; // 在最外部定义mixer

    //创建星空背景
    let url = "/images.png"
    let envTexture = new THREE.TextureLoader().load(url)
    envTexture.mapping = THREE.EquirectangularReflectionMapping
    scene.background = envTexture
    scene.environment = envTexture

    //创建模型
    let gltfLoader = new GLTFLoader()
    gltfLoader.load("/robot/scene.gltf", (gltf) => {
        // gltf.scene.scale.set(0.1,0.1,0.1)
        gltf.scene.position.set(3, 0, 0)
        scene.add(gltf.scene)

         mixer = new THREE.AnimationMixer(gltf.scene); // 假设您想对整个场景进行动画。
        // 对于gltf模型中的每一个动画...
        gltf.animations.forEach((clip) => {
            // 创建一个动画操作并播放它
            const action = mixer.clipAction(clip);
            action.play();
        });

        //监听鼠标滚动移动相机
        window.addEventListener("mousewheel",e=>{
            //往下滚
            if(e.wheelDelta <0){

            }
            //往上滚
            else if(e.wheelDelta > 0){

            }
        })
    })

   gltfLoader.load("/moon/scene.gltf",gltf=>{
    // gltf.scene.scale.set(0.1,0.1,0.1)
    // scene.add(gltf.scene)

    let moon = gltf.scene.children[0].children[0].children[0].children[0].children[0]
    for (let j = 0; j < 10; j++) {
      let moonInstance = new THREE.InstancedMesh(
        moon.geometry,
        moon.material,
        100
      );

      // scene.add(moon);
      for (let i = 0; i < 100; i++) {
        let x = Math.random() * 1000 - 500;
        let y = Math.random() * 1000 - 500;
        let z = Math.random() * 1000 - 500;

        let matrix = new THREE.Matrix4();
        let size = Math.random() * 20 - 8;
        matrix.makeScale(size, size, size);
        matrix.makeTranslation(x, y, z);
        moonInstance.setMatrixAt(i, matrix);
      }

      gsap.to(moonInstance.position, {
        duration: Math.random() * 10 + 2,
        z: -1000,
        ease: "linear",
        repeat: -1,
      });
    scene.add(moonInstance)
}
   }) 
    function render() {
        requestAnimationFrame(render)
            if(mixer){
                const delta = clock.getDelta(); // clock是THREE.Clock的实例，用于获取自上次调用以来经过的时间。
                mixer.update(delta);  // 更新mixer，这将播放动画
            }

            renderer.render(scene, camera)
        }
        render()

    //创建光源
    let light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(0, 0, 1)
    scene.add(light)
    let light2 = new THREE.DirectionalLight(0xffffff, 0.5)
    light.position.set(0, 0, -1)
    scene.add(light2)
    let light3 = new THREE.DirectionalLight(0xffffff, 0.5)
    light.position.set(-1, 1, 1)
    scene.add(light3)

    //监听窗口变化，重重窗口大小
    window.addEventListener("resize", () => {
        //充值渲染器宽高比
        renderer.setSize(window.innerWidth, window.innerHeight)
        //重置相机宽高比
        camera.aspect = window.innerWidth / window.innerHeight
        //更新相机投影矩阵
        camera.updateProjectionMatrix()
    })

})





</script>
<style  scoped></style>