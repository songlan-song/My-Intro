<template>
    <div class="message-board-wrap">
        <div class="message-board">
            <div class="message-show-container">
                <!-- 渲染新消息 -->
                <span class="span" v-for="(message, index) in newMessages" :key="index"
                    :style="{ top: message.randomTop + 'px' }">{{
                        message.content }}</span>
            </div>
            <el-form :model="form">
                <el-form-item class="comment-input-conainer">
                    <el-input class="comment-input" v-model="form.name" placeholder="欢迎留言交流" style="width: 750px;"
                    @keydown.enter.prevent="onSubmit" />
                    <el-button @click="onSubmit" style="margin-left: 20px;background-color: transparent;">发表</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script setup>
import { onMounted, reactive, ref, computed } from 'vue'
const form = reactive({name: ''})

const newMessages = reactive([]); 

const onSubmit = () => {
    if (form.name.trim() !== '') {
        // 为新消息创建一个对象，包含消息内容和新的 randomTop 值
        const newMessage = {
            content: form.name,
            randomTop: generateRandomTop(),
        };
        // 将新消息添加到 newMessages 数组中
        newMessages.push(newMessage);
        // 清空输入框内容，恢复默认样式
        form.name = '';
    }
}

onMounted(() => {
    //修改评论区背景颜色 和按钮背景颜色
    const elInputWrappers = document.querySelectorAll('.el-input__wrapper');
    elInputWrappers.forEach(wrapper => {
        wrapper.style.backgroundColor = 'transparent';
    });
    //运行防止重叠的弹幕随机速度效果函数
    applyRandomAnimationTimingFunction();
})
const generateRandomTop = () => {
    // 生成0到270之间的随机数
    return Math.floor(Math.random() * 271);
};

//防止重叠的弹幕随机速度效果
const applyRandomAnimationTimingFunction = () => {
    const spans = document.querySelectorAll('.message-show-container span');
    spans.forEach(span => {
        const randomTimingFunction = getRandomTimingFunction();
        span.style.animationTimingFunction = randomTimingFunction;
    });
};

//获取随机的一个动画timing值
const getRandomTimingFunction = () => {
    const animationTimingFunctions = [
        'linear',
        'ease',
        'ease-in',
        'ease-out',
        'ease-in-out'
    ];

    const randomIndex = Math.floor(Math.random() * animationTimingFunctions.length);
    return animationTimingFunctions[randomIndex];
};
</script>
<style  scoped>
.comment-input-conainer {
    position: absolute;
    bottom: 0;
    left: 0;
}

.message-board {
    position: absolute;
    top: 0;
    right: 0;
    width: 880px;
    height: 380px;
}

.message-show-container {
    width: 825px;
    height: 300px;
    position: absolute;
    right: 53px;
    top: 20px;
    overflow: hidden;
}

.message-show-container span {
    color: #fff;
    font-size: 20px;
    position: absolute;
    right: 0;
    white-space: nowrap;
    /* top: 0到270px之间的随机值 */
    animation: scrolling-message 10s infinite;
}

@keyframes scrolling-message {
    0% {
        right: -200px;
        /* 第一次从右侧 0px 开始 */
    }

    100% {
        right: 1000px;
        /* 最终位置 */
    }
}
</style>