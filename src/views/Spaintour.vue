<template>
  <div class="wrap">
    <div class="container" style="margin-top: 30px;">
      <div class="line" v-for="(line, lineIndex) in lines" :key="lineIndex">
        <img class="item" v-for="(item, itemIndex) in line" :key="itemIndex" :src="item" @click="toLargeimg(item)">
      </div>
    </div>
    <div class="large-image" :style="{ display: largeDisplay }">
      <div class="close" @click="closepic"><el-icon :size="30">
          <Close />
        </el-icon></div>
      <img :src="largeimg">
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
const allPicture = [
  "/Spain-compression/1.jpg",
  "/Spain-compression/2.jpg",
  "/Spain-compression/3.jpg",
  "/Spain-compression/4.jpg",
  "/Spain-compression/5.jpg",
  "/Spain-compression/7.jpg",
  "/Spain-compression/8.jpg",
  "/Spain-compression/9.jpg",
  "/Spain-compression/10.jpg",
  "/Spain-compression/12.jpg",
  "/Spain-compression/13.jpg",
  "/Spain-compression/14.jpg",
  "/Spain-compression/15.jpg",
  "/Spain-compression/16.jpg",
  "/Spain-compression/17.jpg",
  "/Spain-compression/18.jpg",
  "/Spain-compression/19.jpg",
  "/Spain-compression/20.jpg",
  "/Spain-compression/21.jpg",
  "/Spain-compression/20.jpg",
  "/Spain-compression/21.jpg",
  "/Spain-compression/22.jpg",
  "/Spain-compression/23.jpg",
  "/Spain-compression/24.jpg",
  "/Spain-compression/25.jpg",
  "/Spain-compression/26.jpg",
  "/Spain-compression/27.jpg",
  "/Spain-compression/28.jpg",
  "/Spain-compression/29.jpg",
  "/Spain-compression/30.jpg",
  "/Spain-compression/31.jpg",
  "/Spain-compression/32.jpg",
  "/Spain-compression/33.jpg",
  "/Spain-compression/34.jpg",
  "/Spain-compression/35.jpg",
  "/Spain-compression/36.jpg",
  "/Spain-compression/37.jpg",
  "/Spain-compression/38.jpg",
  "/Spain-compression/39.jpg",
  "/Spain-compression/40.jpg",
  "/Spain-compression/41.jpg",
  "/Spain-compression/42.jpg",
  "/Spain-compression/43.jpg",
  "/Spain-compression/44.jpg",
  "/Spain-compression/45.jpg",
  "/Spain-compression/46.jpg",
  "/Spain-compression/47.jpg",
  "/Spain-compression/48.jpg",
  "/Spain-compression/49.jpg",
  "/Spain-compression/50.jpg",
  "/Spain-compression/51.jpg",
  "/Spain-compression/52.jpg",
  "/Spain-compression/53.jpg",
  "/Spain-compression/54.jpg",
  "/Spain-compression/55.jpg",
  "/Spain-compression/56.jpg",
  "/Spain-compression/57.jpg",

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

function toLargeimg(item) {
  largeDisplay.value = "block"
  largeimg.value = "/Spain/" + item.split("/").pop()
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
  max-height: 100%;
  width: 800px;
  height: auto;
}

.close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  cursor: pointer;
}</style>
