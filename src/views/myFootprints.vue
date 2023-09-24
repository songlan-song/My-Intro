<template>
<div class="tour-wrap">
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
    </div>
</div>
</template>
<script setup>
import { reactive, ref } from 'vue'


</script>
<style  scoped>
.UK-tour {
    width: 100%;
    height: 100vh;
    background: url("/UK/9.jpg");
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


.UK-name {
    font-size: 80px;
    background-image: linear-gradient(to top, #22a6b3, #7ed6df);
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

    background-image: linear-gradient(to top, #f0932b, #ffbe76);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: block;
}

.France-more-information::before,
.UK-more-information::before,
.Spain-more-information::before{
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
.France-more-information:hover::before,
.UK-more-information:hover::before,
.Spain-more-information:hover::before {
    opacity: 1; /* 显示覆盖层 */
    content: "探索更多";
    color: #fff;
    display: flex; /* 使用 flex 布局 */
    align-items: flex-end; /* 垂直居中对齐 */
    justify-content: center; /* 水平居中对齐 */
}
</style>