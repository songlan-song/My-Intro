<template>
    <div class="home">
        <div class="wrap">
            <div class="intro-container" id="intro-container">
                <div class="logo-container">
                    <div class="logo"></div>
                    <span>songsong.com</span>
                </div>
                <div class="canvas-container" ref="screenDom" id="canvas-container"></div>
                <div class="scrollCharacter-container">
                    <span style="font-size: 54px ;color: #fff;display: block;">Hi，你好! 我是</span>
                    <span class="name">Lan Song</span>
                    <span class="job">前端开发</span>
                    <ul class="all-charters">
                        <li class="text1" ref="text1" style="opacity: 1;">一个简单的代码爱好者,热衷于学习前端的各种技术，目前是一个前端开发工程师。</li>
                        <li class="text2" ref="text2">乐观和热情是我的礼物，不敲代码的时候，有时是玩家，有时是运动员。热爱LOL，热爱篮球，偶尔看剧，喜欢美食。</li>
                        <li class="text3" ref="text3">如果你也喜欢开源，喜欢创造，喜欢分享，欢迎在我的网站留言。</li>
                        <li class="text4" ref="text4">
                            这句话支持着我一直前进，希望你也能从中获取一些力量：勇敢是当你还未开始就已经知道自己会输，可你依然要去做，而且无论如何都要把它坚持到底，你很少能赢，但有时也会。</li>
                    </ul>
                </div>
                <messageBoard />
            </div>
        </div>
        <div class="tabs-container">
            <div class="main-content-container">
                <div class="row" style="width: 100%;height: 33%;">
                    <el-card  class="card1" @click="toFootPrints">
                        <div ><h1 style="color: #fff;cursor: pointer;">我的足迹</h1></div>
                    </el-card>
                    <el-card  class="card2"> 最近在听 </el-card>
                </div>
                <div class="row" style="width: 100%;height: 33%;">
                    <el-card  class="card3"> Hover </el-card>
                    <el-card class="card4"> Hover </el-card>
                </div>
                <div class="row" style="width: 100%;height: 33%;">
                    <el-card  class="card5"> Hover </el-card>
                    <el-card  class="card6"> Hover </el-card>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, reactive } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/all';
import Header from "../components/Header.vue"
import messageBoard from '../components/messageBoard.vue';
import { useRouter } from 'vue-router';
const screenDom = ref(null)
const text1 = ref(null)
const text2 = ref(null)
const text3 = ref(null)
const text4 = ref(null)
const router = useRouter()

function toFootPrints(){
    router.push("/myFootprints")
}
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
        gltf.scene.position.set(2.5, -0.75, 0)
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

    //当用户往下滚动看不到3d渲染界面式，不再渲染
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
        trigger: ".wrap",
        start: "top top",
        end: "+=1000",
        scrub: true,
        pin: true,
        animation: gsap.timeline()
            .to(".text1", { opacity: 1, duration: 1 })
            .to(".text1", { opacity: 0.3, duration: 1 })
            .to(".text2", { opacity: 1, duration: 1.5 })
            .to(".text2", { opacity: 0.3, duration: 1.5 })
            .to(".text3", { opacity: 1, duration: 1.5 })
            .to(".text3", { opacity: 0.3, duration: 1.5 })
            .to(".text4", { opacity: 1, duration: 1 })
    });

    //intro-container淡出效果
    ScrollTrigger.create({
        trigger: ".tabs-container",
        start: "top 800px",
        end: "+=800",
        scrub: true,
        onEnter: () => {
            gsap.to(".intro-container", {
                bottom: "-130px",
                scale: 0.8,
                transformOrigin: "center center",
                duration: 0.5,
                transform: "translateZ(-200px)"
            });
        },
        onLeaveBack: () => {
            gsap.to(".intro-container", {
                scale: 1,
                bottom: 0,
                transformOrigin: "center center",
                duration: 0.5,
                transform: "translateZ(0px)"
            });
        }
    });



})


</script>
<style  scoped>
.wrap {
    width: 1690px;
    height: 100vh;
    position: relative;
    perspective: 1000px;
    overflow-x: hidden;

}

.canvas-container {
    overflow-x: hidden;
}

.intro-container {
    width: 1690px;
    height: 100vh;
    overflow: hidden !important;
    margin: 0 auto;
    transform-origin: center center;
    position: absolute;
    overflow-x: hidden;
}

.name {
    font-size: 100px;
    background-image: linear-gradient(to top, pink, violet);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: block;
}

.job {
    font-size: 30px;
    background-image: linear-gradient(to top, pink, violet);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.home {
    position: relative
}

.scrollCharacter-container {
    width: 44vw;
    height: 55vh;
    position: absolute;
    top: 20vh;
    left: 60px;
}

.scrollCharacter-container li {
    line-height: 1.2;
    font-weight: 600;
    font-size: 30px;
    font-weight: 700;
    color: #fff;
    opacity: 0.3;
    overflow-wrap: break-word;
    text-align: justify;
    list-style-type: none
}

.logo {
    position: absolute;
    display: inline;
    background: url("/logo.png");
    width: 80px;
    height: 80px;
    background-size: cover;
}

.logo-container {
    width: 300px;
    height: 80px;
    position: absolute;
    top: 20px;
    left: 20px;

}

.logo-container span {
    position: absolute;
    left: 80px;
    top: 30px;
    font-size: 20px;
    background-image: linear-gradient(to right, #f39c12, #f1c40f);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.tabs-container {
    width: 100%;
    height: 100vh;
    margin-top: 0;
    position: relative;
}

.main-content-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.row{
    display: flex;
    position: relative;
}
.card1 {
    width: 60%;
    height: 100%;
    background: url("/Spain/6.jpg");
    background-size: cover;
    position: relative;
    cursor: pointer;
    
}
.card2{
    width: 40%;
    height: 100%;
    position: relative;
    cursor: pointer;
}
.card3{
    width: 40%;
    height: 100%;
    position: relative;
    cursor: pointer;
}
.card4{
    width: 60%;
    height: 100%;
    position: relative;
    cursor: pointer;
}
.card5{
    width: 50%;
    height: 100%;
    position: relative;
    cursor: pointer;
}
.card6{
    width: 50%;
    height: 100%;
    position: relative;
    cursor: pointer;
}

/* 添加覆盖层样式 */
.card1::before,
.card2::before,
.card3::before,
.card4::before,
.card5::before,
.card6::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3); /* 透明度为0.4的黑色背景 */
    opacity: 0; /* 默认情况下不可见 */
    transition: opacity 0.3s ease-in-out; /* 添加渐变效果 */
    pointer-events: none; /* 防止覆盖层阻挡交互 */
}

/* 当鼠标悬停在卡片上时显示覆盖层 */
.card1:hover::before,
.card2:hover::before,
.card3:hover::before,
.card4:hover::before,
.card5:hover::before,
.card6:hover::before {
    opacity: 1; /* 显示覆盖层 */
}
</style>