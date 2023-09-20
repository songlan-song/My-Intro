<template>
    <div class="home">
        <div class="wrap">
            <div class="intro-container"  id="intro-container">
            <div class="canvas-container" ref="screenDom" id="canvas-container"></div>
            <div class="scrollCharacter-container">
                <ul class="all-charters">
                    <li class="text1" ref="text1" style="opacity: 1;">1111111111111111111111111111111</li>
                    <li class="text2" ref="text2">2222222222222222222222222222222</li>
                    <li class="text3" ref="text3">3333333333333333333333333333333</li>
                    <li class="text4" ref="text4">4444444444444444444444444444444</li>
                </ul>
            </div>
        </div>
        </div>
        <div class="tour-container">
            <div class="UK-tour"></div>
            <div class="Spain-tour"></div>
            <div class="France-tour"></div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/all';
import Header from "../components/Header.vue"
const screenDom = ref(null)
const text1 = ref(null)
const text2 = ref(null)
const text3 = ref(null)
const text4 = ref(null)
onMounted(() => {
    //创建场景
    const scene = new THREE.Scene()

    //创建相机
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.set(0, 0, 6.5)
    camera.lookAt(scene.position)

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

        //机器人跟随鼠标移动效果
        window.addEventListener("mousemove", e => {
            let x = (e.clientX / window.innerWidth) * 2 - 1;
            let y = (e.clientY / window.innerHeight) * 2 - 1;
            let timeline = gsap.timeline();
            timeline.to(gltf.scene.children[0].children[0].children[0].children[0].children[1].rotation, {
                duration: 0.5,
                x: y,
                y: x,
                duration: 1,
            });
        })

        //滑轮滚动摄影机拉远/拉近
        window.addEventListener("wheel", e => {
            // 使用e.deltaY来确定滚动方向
            let targetPosition = { x: camera.position.x, y: camera.position.y, z: camera.position.z };
            if (e.deltaY > 0) {
                targetPosition.z += 1.5;
                targetPosition.y += 0.2
                if (targetPosition.z > 10) targetPosition.z = 10
                if (targetPosition.y > 1) targetPosition.y = 1


            } else {
                targetPosition.z -= 1.5;
                targetPosition.y -= 0.2;
                if (targetPosition.z < 6) targetPosition.z = 6
                if (targetPosition.y < 0) targetPosition.y = 0
            }
            gsap.to(camera.position, { duration: 1, x: targetPosition.x, y: targetPosition.y, z: targetPosition.z })
        });

    })

    gltfLoader.load("/moon/scene.gltf", gltf => {

        let moon = gltf.scene.children[0].children[0].children[0].children[0].children[0]
        //创建多个随机行星
        for (let j = 0; j < 10; j++) {
            let moonInstance = new THREE.InstancedMesh(
                moon.geometry,
                moon.material,
                100
            );


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
            //行星向里移动效果
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
        if (mixer) {
            // clock是THREE.Clock的实例，用于获取自上次调用以来经过的时间。
            const delta = clock.getDelta();
            // 更新mixer，这将播放动画
            mixer.update(delta);
        }
        renderer.render(scene, camera)
    }
    render()

    //创建光源
    let light1 = new THREE.DirectionalLight(0xffffff, 1)
    light1.position.set(0, 0, 1)
    scene.add(light1)
    let light2 = new THREE.DirectionalLight(0xffffff, 0.5)
    light2.position.set(0, 0, -1)
    scene.add(light2)
    let light3 = new THREE.DirectionalLight(0xffffff, 0.5)
    light3.position.set(-1, 1, 1)
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

    //文字滚动高亮效果
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
        trigger: "#app",
        start: "top top",
        end: "+=800",
        scrub: true,
        pin: true,
        animation: gsap.timeline()
            .to(".text1", { opacity: 1, duration: 1 }) // 淡入
            .to(".text1", { opacity: 0.3, duration: 1 }) // 淡出
            .to(".text2", { opacity: 1, duration: 1.5 })
            .to(".text2", { opacity: 0.3, duration: 1.5 })
            .to(".text3", { opacity: 1, duration: 1.5 })
            .to(".text3", { opacity: 0.3, duration: 1.5 })
            .to(".text4", { opacity: 1, duration: 1 })

    });

    //intro-container淡出效果
    ScrollTrigger.create({
    trigger: ".tour-container",
    start: "top top",
    end: "+=800",
    scrub: true,
    onEnter: () => {
        gsap.to(".intro-container", {
            bottom:"-130px",
            scale: 0.8,
            transformOrigin: "center center",
            duration: 0.5,
            transform: "translateZ(-200px)"
        });
    },
    onLeaveBack: () => {
        gsap.to(".intro-container", {
            scale: 1,
            bottom:0,
            transformOrigin: "center center",
            duration: 0.5,
            transform: "translateZ(0px)"
        });
    }
});



})

</script>
<style  scoped>
.wrap{
    width: 100%;
    height: 100vh;
    position: relative;
    perspective: 1000px
}
.intro-container{
    width: 100%;
    height: 100vh;
    overflow: hidden;
    margin:0 auto;
    transform-origin: center center;
    position: absolute;
}

.home {
    position: relative
}

.scrollCharacter-container {
    width: 40vw;
    height: 55vh;
    position: absolute;
    top: 20vh;
}

.scrollCharacter-container li {
    display: inline;
    line-height: 1.2;
    font-weight: 600;
    font-size: 48px;
    font-weight: 700;
    color: #fff;
    opacity: 0.3;
    overflow-wrap: break-word;
}
.tour-container{
    widows: 100%;
    height: 100vh;
    margin-top: 0;
}
.UK-tour {
    width: 100%;
    height: 33vh;
    background-color: yellow;
}

.Spain-tour {
    width: 100%;
    height: 33vh;
    background-color: green
}

.France-tour {
    width:100%;
    height: 33vh;
    background-color: aqua
}
</style>