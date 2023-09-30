<template>
    <div class="message-board-wrap">
        <div class="message-board">
            <div class="message-show-container">
                <!-- 渲染新消息 -->
                <span class="span" v-for="(message, index) in newMessages" :key="index"
                    :style="{ top: message.randomTop + 'px',animationDelay: message.randomDelay + 's' }">{{
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
import axios from 'axios'


const form = reactive({name: ''})

const newMessages = ref([]);  


const onSubmit = async() => {
    if (form.name.trim() !== '') {
        // 为新消息创建一个对象，包含消息内容和新的 randomTop 值
        const newMessage = {
            content: form.name,
            randomTop: generateRandomTop(),
           randomDelay:generateRandomDelay()
        };
        try {
            await axios.post('http://localhost:5174/submit', newMessage);
            newMessages.value.push(newMessage);
            form.name = '';
        } catch (error) {
            console.error('Error submitting message:', error);
        }
    }
}

onMounted(async() => {
    //修改评论区背景颜色 和按钮背景颜色
    const elInputWrappers = document.querySelectorAll('.el-input__wrapper');
    elInputWrappers.forEach(wrapper => {
        wrapper.style.backgroundColor = 'transparent';
    });
    //运行防止重叠的弹幕随机速度效果函数
    applyRandomAnimationTimingFunction();

    try{
        const response = await axios.get('http://localhost:5174/getMessages');
        newMessages.value = response.data;
    } catch (error) {
        console.error('Error fetching messages:', error);
    }
})

const generateRandomTop = () => {
    // 生成0到270之间的随机数
    return Math.floor(Math.random() * 271);
};
const generateRandomDelay = () => {
    // 例如, 生成0到3之间的随机数,保留小数点后一位
    const randomNumber = Math.random() * 3;
    return randomNumber.toFixed(1);
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
    white-space: nowrap;
    /* top: 0到270px之间的随机值 */
    animation: scrolling-message 10s infinite;
    opacity: 0;
}

@keyframes scrolling-message {
    0% {
        right: -200px;
        opacity: 0;
    }
    1%{
        opacity: 1;
        right: -200px;
    }
    100% {
        right: 1000px;
        opacity: 1;
    }
}
</style>