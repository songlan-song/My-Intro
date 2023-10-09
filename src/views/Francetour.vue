<template>
    <div class="wrap">
        <div class="page1">
            <div class="picture-ring" :style="{ transform: `rotateY(${ringRotation}deg)` }">
                <img v-for="item in allPicture" :src="item" :key="item" @click="toLargeimg(item)">
            </div>
            <div class="btn-container">
                <el-button-group>
                    <el-button round plain @mousedown="startRotation('left')" @mouseup="stopRotation">
                        <el-icon class="el-icon--left">
                            <ArrowLeft />
                        </el-icon>旋转
                    </el-button>
                    <el-button round plain @mousedown="startRotation('right')" @mouseup="stopRotation">
                        旋转<el-icon class="el-icon--right">
                            <ArrowRight />
                        </el-icon>
                    </el-button>
                </el-button-group>
            </div>
            <div class="large-image" :style="{ display: largeDisplay }">
                <div class="close" @click="closepic"><el-icon :size="30">
                        <Close style="color: aliceblue;" />
                    </el-icon></div>
                <img :src="largeimg">
            </div>
        </div>
    </div>
</template>
    
<script setup>
import { ref } from 'vue'
let isRotating =ref(false)
const ringRotation = ref(0)
let rotationInterval = null
const allPicture = [
    "/France-compression/1.jpg",
    "/France-compression/2.jpg",
    "/France-compression/3.jpg",
    "/France-compression/4.jpg",
    "/France-compression/5.jpg",
    "/France-compression/6.jpg",
    "/France-compression/7.jpg",
    "/France-compression/8.jpg",
    "/France-compression/9.jpg",
    "/France-compression/10.jpg",
    "/France-compression/11.jpg",
    "/France-compression/12.jpg",
    "/France-compression/13.jpg",
    "/France-compression/14.jpg",
    "/France-compression/15.jpg",
    "/France-compression/16.jpg",
    "/France-compression/17.jpg",
]
rotationInterval = setInterval(() => {
    ringRotation.value += 360;
}, 8);

setTimeout(() => {
    clearInterval(rotationInterval);
    // ringRotation.value = 0;
}, 1000);

const startRotation = (direction) => {
    if(!isRotating){
        if (direction === 'left') {
        rotationInterval = setInterval(() => {
            ringRotation.value += 0.5;
        }, 10); // 调整旋转速度，这里是每 10 毫秒增加 1.5 度
    } else if (direction === 'right') {
        rotationInterval = setInterval(() => {
            ringRotation.value -= 0.5;
        }, 10); // 调整旋转速度，这里是每 10 毫秒减少 1.5 度
    }
    isRotating = true;
    }

}

const stopRotation = () => {
    if (rotationInterval) {
        clearInterval(rotationInterval);
    }
    isRotating = false;
}

const largeDisplay = ref("none")
const largeimg = ref("")
const pngpic = ["1.jpg"]
function toLargeimg(item) {
    largeDisplay.value = "block"
    if (!pngpic.includes(item.split("/").pop())) {
        largeimg.value = "/France/" + item.split("/").pop()
    }
    else {
        largeimg.value = "/France/" + item.split("/").pop().split(".").shift() + ".png"
    }

}
function closepic() {
    largeDisplay.value = 'none'
}
</script>
    
<style lang="scss" scoped>
@use "sass:math";

.wrap {
    background: linear-gradient(135deg, #fff 10%, #000)
}

.page1 {
    overflow: hidden;
    perspective: 2000px;
    box-sizing: border-box;
    position: relative;
}

.picture-ring {
    width: 100vw;
    height: 100vh;
    transform-style: preserve-3d;
    transition: transform 0.3s linear;

    img {
        cursor: pointer;
        position: absolute;
        $imgHeight: 400px;
        $imgWidth: 600px;
        left: 50%;
        top: 50%;
        width: $imgWidth;
        height: $imgHeight;
        margin-left: math.div(-$imgWidth, 2);
        margin-top: math.div(-$imgHeight, 2);
        transform: translate3d(0, 0, -500px);
        $n: 17;
        $r: 1700px;
        $pDeg: calc(360deg / $n);
        backface-visibility: hidden;
        opacity: 0.5;

        &:hover {
            opacity: 1;
        }

        @for $i from 1 through $n {
            &:nth-child(#{$i}) {
                $d: $i*$pDeg - 10;
                $x: $r*math.sin($d);
                $z: $r*math.cos($d);
                transform: translate3d(#{$x}, 0, #{$z}) rotateY(180deg+$d);
            }
        }
    }
}

.btn-container {
    position: absolute;
    width: 100%;
    top: 610px;
    left: 775px;
}

.large-image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 800px;
    background-size: cover;
}

.large-image img {
    max-width: 100%;
    /* 设置图片的最大宽度为容器宽度 */
    max-height: 100%;
    /* 设置图片的最大高度为容器高度 */
    width: 800px;
    /* 自动调整宽度以保持宽高比 */
    height: auto;
    /* 自动调整高度以保持宽高比 */
}

.close {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
    cursor: pointer;
}
</style>
  