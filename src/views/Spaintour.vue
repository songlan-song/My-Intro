<template>
  <div class="wrap">
    <div class="container">
      <div class="line" v-for="(line, lineIndex) in lines" :key="lineIndex">
        <div class="item" v-for="(item, itemIndex) in line" :key="itemIndex" :style="{ backgroundImage: `url(${item})` }">
        </div>
      </div>
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
  "/Spain-compression/11.jpg",
]
const lines = reactive([
  [allPicture[0], allPicture[1], allPicture[2], allPicture[3], allPicture[4], allPicture[5], allPicture[6], allPicture[7], allPicture[8], allPicture[10000]],
  [allPicture[9], allPicture[10], allPicture[11], allPicture[12], allPicture[13], allPicture[14], allPicture[15], allPicture[16], allPicture[17], allPicture[18]],
  [allPicture[19], allPicture[20], allPicture[21], allPicture[22], allPicture[23], allPicture[24], allPicture[25], allPicture[26], allPicture[27], allPicture[10000]],
  [allPicture[28], allPicture[29], allPicture[30], allPicture[31], allPicture[32], allPicture[33], allPicture[34], allPicture[35], allPicture[36], allPicture[37]],

])


</script>
<style lang="scss" scoped>
.wrap {
  overflow: hidden;
}

$n: 9;
$size: 100vw/$n;

.line {
  display: flex;
  margin-top: (-$size / 5);

  &:nth-child(even) {
    transform: translateX(-$size / 2);
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
}

.item:hover {
  opacity: 1;
  scale: 0.8;
}
</style>



<!-- <template>
    <div class="wrap">
      <div class="page1">
        <div class="picture-ring" :style="{ transform: `rotateY(${ringRotation}deg)` }">
          <img src="/Spain/1.jpg" alt="">
          <img src="/Spain/2.jpg" alt="">
          <img src="/Spain/3.jpg" alt="">
          <img src="/Spain/4.jpg" alt="">
          <img src="/Spain/5.jpg" alt="">
          <img src="/Spain/6.jpg" alt="">
          <img src="/Spain/7.jpg" alt="">
          <img src="/Spain/8.jpg" alt="">
          <img src="/Spain/9.jpg" alt="">
          <img src="/Spain/10.jpg" alt="">
          <img src="/Spain/11.jpg" alt="">
        </div>
        <div class="btn-container">
          <el-button-group>
            <el-button round plain @mousedown="startRotation('left')" @mouseup="stopRotation">
              <el-icon class="el-icon--left"><ArrowLeft /></el-icon>旋转
            </el-button>
            <el-button round plain @mousedown="startRotation('right')" @mouseup="stopRotation">
              旋转<el-icon class="el-icon--right"><ArrowRight /></el-icon>
            </el-button>
          </el-button-group>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const ringRotation = ref(0)
  let isRotating = false
  let rotationInterval = null
  
  const startRotation = (direction) => {
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
  
  const stopRotation = () => {
    if (rotationInterval) {
      clearInterval(rotationInterval);
    }
    isRotating = false;
  }
  </script>
  
  <style lang="scss" scoped>
  @use "sass:math";
  
  .wrap {
    background-color: #1f2126;
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
      margin-left: -$imgWidth/2;
      margin-top: -$imgHeight/2;
      transform: translate3d(0, 0, -500px);
      $n: 11;
      $r: 1100px;
      $pDeg: 360deg/$n;
      backface-visibility: hidden;
      opacity: 0.5;
  
      &:hover {
        opacity: 1;
      }
  
      @for $i from 1 through $n {
        &:nth-child(#{$i}) {
          $d: $i*$pDeg;
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
  </style> -->
