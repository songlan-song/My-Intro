<template>
    <el-card class="card2">
        <el-row>
            <el-col :span="12">
                <h1 style="cursor: default">喜欢的歌</h1>
            </el-col>
            <el-col :span="12">
                <h4 class="yequ">夜曲-周杰伦</h4>
                <audio src="/mp3/yequ.mp3" controls="control"></audio>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <h4 class="fanfangxiang">反方向的钟-周杰伦</h4>
                <audio src="/mp3/fanfangxiang.mp3" controls="control"
                    style="position: absolute;padding-top: 20px;left: -10px;"></audio>
            </el-col>
            <el-col :span="12">
                <h4 class="yedediqizhang" style="padding-top: 20px;">夜的第七章-周杰伦</h4>
                <audio src="/mp3/yedediqizhang.mp3" controls="control" style="padding-top: 20px;"></audio>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <h4 class="anhao">暗号-周杰伦</h4>
                <audio src="/mp3/anhao.mp3" controls="control"
                    style="position: absolute;left: -10px;padding-top: 20px"></audio>
            </el-col>
            <el-col :span="12">
                <h4 class="yifuzhiming" style="padding-top: 20px;">以父之名-周杰伦</h4>
                <audio src="/mp3/yifuzhiming.mp3" controls="control" style="padding-top: 20px;"></audio>
            </el-col>
        </el-row>
    </el-card>
</template>
<script setup>
import { reactive, ref } from 'vue'

</script>
<style  scoped>
.card2 {
    width: 40%;
    height: 100%;
    position: relative;
    background: linear-gradient(135deg, #fff 10%, #000);
}

.yequ,.yedediqizhang,.yifuzhiming{
    position: absolute;
    top: -12px;
    left: 304px;
}
.fanfangxiang,.anhao{
    position: absolute;
    top: 8px;
    left: 10px;
}
audio{
  width: 283px;
  height: 63.3px;
}

 h1 {
    font-size: 3em;
    text-shadow:
        -1px 1px #bbb,
        -2px 2px #bbb,
        -3px 3px #bbb,
        -4px 4px #bbb,
        -8px 8px #0008;
    color: #fff;
    position: absolute;
    top: -5px;
}
</style>