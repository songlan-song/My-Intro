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
                <div class="message-board-wrap">
                    <div class="message-board">
                        <el-form :model="form">
                            <el-form-item class="comment-input-conainer">
                                <el-input class="comment-input" v-model="form.name" placeholder="欢迎留言交流" style="width: 750px;" />
                                <el-button  @click="onSubmit" style="margin-left: 20px;background-color: transparent;">发表</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </div>
        </div>
        <div class="tour-container">
            <div class="UK-tour">
                <div class="UK-chracter">
                    <span class="UK-name">伦敦</span>
                    <ul>
                        <li>伦敦，这座历史悠久而又充满活力的城市，以其独特的魅力吸引着世界各地的游客。伦敦不仅是英国的首都，更是一个文化、艺术、历史和时尚的大熔炉，这里汇聚了无数的人文景观和自然美景，为每一位来访者提供了丰富多彩的体验。
                        </li>
                        <li>漫步在泰晤士河畔，您可以欣赏到大本钟和伦敦眼的壮丽景象，感受这座城市独特的历史韵味和现代气息的完美融合。白金汉宫的卫兵换岗仪式，是体验英国皇家传统的不二之选。塔桥更是以其独特的设计和卓越的工程技术成为了伦敦的象征之一。来到历史悠久的贝克街，仿佛能感受到福尔摩斯侦探故事中的神秘氛围。这里，每一扇门后都似乎藏着未解之谜，每一道巷口都充满了侦探故事的味道。
                        </li>
                    </ul>
                </div>
                <div class="UK-more-information" ref="franceMoreInformation"></div>
                <div class="cover-black" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave"
                    :style="{ opacity: imageOpacity }">
                    <div class="moreinfo-character">
                        <span>探索更多</span>
                        <TopRight
                            style="width: 1.3em; height: 1.3em; color: #fff;position: absolute;right: 55px;top: 1px;" />
                    </div>
                </div>
            </div>
            <div class="Spain-tour">
                <div class="Spain-chracter">
                    <span class="Spain-name">巴塞罗那</span>
                    <ul>
                        <li>毫无疑问，巴塞罗那是一座充满艺术氛围、热情开放的城市，她位于西班牙东北部，坐拥美丽的地中海海岸线。这座城市以其丰富的历史、独特的建筑、美味的美食和活力四射的文化生活而闻名于世。</li>
                        <li>巴塞罗那是世界著名建筑大师安东尼·高迪的艺术殿堂。当您漫步在这座城市的大街小巷时，会不时地遇见高迪独具一格的建筑作品。其中，圣家堂无疑是最为人们熟知的地标之一，其独特的设计和宏伟的塔尖令人叹为观止。除此之外，帕克·吉厄尔、米拉之家和巴特约之家等都是高迪留给这座城市的珍贵遗产。
                        </li>
                    </ul>
                </div>
                <div class="Spain-more-information" ref="franceMoreInformation"></div>
                <div class="cover-black" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave"
                    :style="{ opacity: imageOpacity }">
                    <div class="moreinfo-character">
                        <span>探索更多</span>
                        <TopRight
                            style="width: 1.3em; height: 1.3em; color: #fff;position: absolute;right: 55px;top: 1px;" />
                    </div>
                </div>
            </div>
            <div class="France-tour">
                <div class="France-chracter">
                    <span class="France-name">巴黎</span>
                    <ul>
                        <li>巴黎，被誉为“光之城”，是一座充满浪漫与艺术氛围的城市。这里是时尚的发源地，艺术的殿堂，美食的天堂。巴黎的每一条街道、每一座建筑都仿佛在讲述着一段古老而浪漫的故事。</li>
                        <li>艾菲尔铁塔是巴黎乃至全球最为人们所熟知的地标之一，她伫立在塞纳河畔，以其优雅的姿态和独特的设计吸引着世界各地的游客。当夜幕降临，艾菲尔铁塔上的灯光闪烁，整个城市都仿佛被浪漫的氛围所包围。
                        </li>
                        <li>巴黎还是世界著名的艺术之都。卢浮宫博物馆收藏着丰富的艺术珍品，如《蒙娜丽莎》和《胜利女神像》等，是艺术爱好者的必游之地。</li>
                        <li>这座城市无论在哪个角落，都充满了浪漫和诗意，无论是漫步在塞纳河畔，还是欣赏夜晚的巴黎，都会让您感受到这座城市独特的魅力，留下难以忘怀的回忆。</li>
                    </ul>
                </div>
                <div class="France-more-information" ref="franceMoreInformation"></div>
                <div class="cover-black" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave"
                    :style="{ opacity: imageOpacity }">
                    <div class="moreinfo-character">
                        <span>探索更多</span>
                        <TopRight
                            style="width: 1.3em; height: 1.3em; color: #fff;position: absolute;right: 55px;top: 1px;" />
                    </div>
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
const screenDom = ref(null)
const text1 = ref(null)
const text2 = ref(null)
const text3 = ref(null)
const text4 = ref(null)
const imageOpacity = ref(0)

const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})

const onSubmit = () => {
    console.log('submit!')
}
function handleMouseEnter() {
    imageOpacity.value = 0.4
}
function handleMouseLeave() {
    imageOpacity.value = 0
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
        trigger: ".tour-container",
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

    //修改评论区背景颜色 和按钮背景颜色
    const elInputWrappers = document.querySelectorAll('.el-input__wrapper');
    elInputWrappers.forEach(wrapper => {
        wrapper.style.backgroundColor = 'transparent';
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

.tour-container {
    width: 100%;
    height: 100vh;
    margin-top: 0;
}

.UK-tour {
    width: 100%;
    height: 100vh;
    background: url("/UK/2.png");
    background-size: cover;
    position: relative;
}

.UK-chracter {
    width: 30vw;
    height: 55vh;
    position: absolute;
    top: 5vh;
}

.UK-chracter li {
    line-height: 1.2;
    font-weight: 600;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    opacity: 0.8;
    list-style-type: none;
    overflow-wrap: break-word;
}

.Spain-tour {
    width: 100%;
    height: 100vh;
    background: url("/Spain/4.jpg");
    background-size: cover;
    position: relative;
}

.Spain-chracter {
    width: 30vw;
    height: 55vh;
    position: absolute;
    top: 5vh;
}

.Spain-chracter li {
    line-height: 1.2;
    font-weight: 600;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    opacity: 0.8;
    overflow-wrap: break-word;
    list-style-type: none;

}

.France-tour {
    width: 100%;
    height: 100vh;
    background: url("/France/2.jpg");
    background-size: cover;
    position: relative;
}

.France-chracter {
    width: 30vw;
    height: 55vh;
    position: absolute;
    top: 5vh;
}

.France-chracter li {
    line-height: 1.2;
    font-weight: 600;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    opacity: 0.8;
    overflow-wrap: break-word;
    list-style-type: none;

}

.France-more-information {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 200px;
    height: 200px;
    background: url("/France/1.png");
    background-size: cover;
    cursor: pointer;
}

.UK-more-information {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 200px;
    height: 200px;
    background: url("/UK/3.png");
    background-size: cover;
    cursor: pointer;
}

.Spain-more-information {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 200px;
    height: 200px;
    background: url("/Spain/1.jpg");
    background-size: cover;
    cursor: pointer;
}

.cover-black {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 200px;
    height: 200px;
    background: url("/black.jpg");
    background-size: cover;
    opacity: 0;
    cursor: pointer;
}

.moreinfo-character {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 30px;
    margin-bottom: 10px;

}

.moreinfo-character span {
    color: #fff;
    font-weight: 700;
    position: absolute;
    left: 65px;
    opacity: 1;
}

.UK-name {
    font-size: 80px;
    background-image: linear-gradient(to top, #f0932b, #ffbe76);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: block;
    padding-left: 6px;
}

.Spain-name {
    font-size: 80px;
    background-image: linear-gradient(to top, #eb4d4b, #ff7979);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: block;
}

.France-name {
    font-size: 80px;
    background-image: linear-gradient(to top, #22a6b3, #7ed6df);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: block;
}

.message-board {
    position: absolute;
    top: 0;
    right: 0;
    width: 880px;
    height: 380px;
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

.comment-input-conainer {
    position: absolute;
    bottom: 0;
    left: 0;
}
</style>