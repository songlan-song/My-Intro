<template></template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
//创建场景
const scene = new THREE.Scene()

//创建相机
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)

//创建渲染器
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

//实例化加载器
const gltfLoader = new GLTFLoader()
//加载模型
gltfLoader.load("/scene.gltf", (gltf) => {
    let vertices = [];
    let colors = [];

    // 遍历模型中的每一个mesh
    gltf.scene.traverse((child) => {
        if (child.isMesh) {
            let positionArray = child.geometry.attributes.position.array;
            for (let i = 0; i < positionArray.length; i += 3) {
                // 提取顶点
                vertices.push(positionArray[i], positionArray[i + 1], positionArray[i + 2]);

                // 为每个顶点分配一个随机颜色
                const r = Math.random();
                const g = Math.random();
                const b = Math.random();
                colors.push(r, g, b);
            }
        }
    });

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({ size: 0.01, vertexColors: true });
    const nebula = new THREE.Points(geometry, material);
    scene.add(nebula);
    const nebulaRotationSpeed = 0.01;
    //设置相机位置
    camera.position.z = 5
    camera.position.y = 3
    camera.position.x = 2
    camera.lookAt(0, 0, 0)

    function animate() {
        // 更新星云的旋转
        nebula.rotation.x += nebulaRotationSpeed;
        nebula.rotation.y += nebulaRotationSpeed;

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    animate();
});

//添加世界坐标辅助器(括号中为线段长度)
const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)

//添加轨道控制器
const controls = new OrbitControls(camera, renderer.domElement)
//设置带阻尼的惯性
controls.enableDamping = true

//监听窗口变化，重重窗口大小
window.addEventListener("resize", () => {
    //充值渲染器宽高比
    renderer.setSize(window.innerWidth, window.innerHeight)
    //重置相机宽高比
    camera.aspect = window.innerWidth / window.innerHeight
    //更新相机投影矩阵
    camera.updateProjectionMatrix()
})


</script>
<style  scoped></style>