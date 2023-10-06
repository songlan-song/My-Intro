<template>
    <div class="wrap">
        <div class="container" style="margin-top: 30px;">
            <div class="line" v-for="(line, lineIndex) in lines" :key="lineIndex">
                <img class="item" v-for="(item, itemIndex) in line" :key="itemIndex" :src="item" @click="toLargeimg(item)">
            </div>
        </div>
        <div class="large-image" :style="{ display: largeDisplay }">
            <div class="close" @click="closepic"><el-icon :size="30">
                    <Close style="color: aliceblue;"/>
                </el-icon></div>
            <img :src="largeimg">
        </div>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
const allPicture = [
    "/UK-compression/1.jpg",
    "/UK-compression/2.jpg",
    "/UK-compression/3.jpg",
    "/UK-compression/4.jpg",
    "/UK-compression/5.jpg",
    "/UK-compression/7.jpg",
    "/UK-compression/8.jpg",
    "/UK-compression/9.jpg",
    "/UK-compression/10.jpg",
    "/UK-compression/12.jpg",
    "/UK-compression/13.jpg",
    "/UK-compression/14.jpg",
    "/UK-compression/15.jpg",
    "/UK-compression/16.jpg",
    "/UK-compression/17.jpg",
    "/UK-compression/18.jpg",
    "/UK-compression/19.jpg",
    "/UK-compression/20.jpg",
    "/UK-compression/21.jpg",
    "/UK-compression/20.jpg",
    "/UK-compression/21.jpg",
    "/UK-compression/22.jpg",
    "/UK-compression/23.jpg",
    "/UK-compression/24.jpg",
    "/UK-compression/25.jpg",
    "/UK-compression/26.jpg",
    "/UK-compression/27.jpg",
    "/UK-compression/28.jpg",
    "/UK-compression/29.jpg",
    "/UK-compression/30.jpg",
    "/UK-compression/31.jpg",
    "/UK-compression/32.jpg",
    "/UK-compression/33.jpg",
    "/UK-compression/34.jpg",
    "/UK-compression/35.jpg",
    "/UK-compression/36.jpg",
    "/UK-compression/37.jpg",
    "/UK-compression/38.jpg",
    "/UK-compression/39.jpg",
    "/UK-compression/40.jpg",
    "/UK-compression/41.jpg",
    "/UK-compression/42.jpg",
    "/UK-compression/43.jpg",
    "/UK-compression/44.jpg",
    "/UK-compression/45.jpg",
    "/UK-compression/46.jpg",
    "/UK-compression/47.jpg",
    "/UK-compression/48.jpg",
    "/UK-compression/49.jpg",
    "/UK-compression/50.jpg",
    "/UK-compression/51.jpg",
    "/UK-compression/52.jpg",
    "/UK-compression/53.jpg",
    "/UK-compression/54.jpg",
    "/UK-compression/55.jpg",
    "/UK-compression/56.jpg",
    "/UK-compression/57.jpg",
]
const lines = reactive([
    [allPicture[0], allPicture[1], allPicture[2], allPicture[3], allPicture[4], allPicture[5], allPicture[6], allPicture[7], allPicture[8], allPicture[10000]],
    [allPicture[9], allPicture[10], allPicture[11], allPicture[12], allPicture[13], allPicture[14], allPicture[15], allPicture[16], allPicture[17], allPicture[18]],
    [allPicture[19], allPicture[20], allPicture[21], allPicture[22], allPicture[23], allPicture[24], allPicture[25], allPicture[26], allPicture[27], allPicture[10000]],
    [allPicture[28], allPicture[29], allPicture[30], allPicture[31], allPicture[32], allPicture[33], allPicture[34], allPicture[35], allPicture[36], allPicture[37]],
    [allPicture[38], allPicture[39], allPicture[40], allPicture[41], allPicture[42], allPicture[43], allPicture[44], allPicture[45], allPicture[46], allPicture[10000]],
    [allPicture[47], allPicture[48], allPicture[49], allPicture[50], allPicture[51], allPicture[52], allPicture[53], allPicture[54], allPicture[55], allPicture[56]],
])

const largeDisplay = ref("none")
const largeimg = ref("")
const pngpic = ["2.jpg", "3.jpg", "5.jpg", "8.jpg", "10.jpg","50.jpg"]
function toLargeimg(item) {
    largeDisplay.value = "block"
    if (!pngpic.includes(item.split("/").pop())) {
        largeimg.value = "/UK/" + item.split("/").pop()
    }
    else {
        largeimg.value = "/UK/" + item.split("/").pop().split(".").shift() + ".png"
    }

}

function closepic() {
    largeDisplay.value = 'none'
}
</script>
<style lang="scss" scoped>
@use "sass:math";

.wrap {
    overflow: hidden;
}

$n: 9;
$size: math.div(100vw, $n);


.line {
    display: flex;
    margin-top: math.div(-$size, 5);


    &:nth-child(even) {
        transform: translateX(calc(-1 * $size / 2));

    }
}

.item {
    width: $size;
    height: $size;
    background-color: rgba($color: #000000, $alpha: 0.5);
    clip-path: polygon(50% 0, 97% 25%, 97% 75%, 50% 100%, 3% 75%, 3% 25%);
    flex-shrink: 0;
    background-size: cover;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out, scale 0.3s ease-in-out;

    &:hover {
        opacity: 1;
        scale: 0.8;
    }
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
  