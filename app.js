// 获取游戏画布
const gameCanvas = document.getElementById('gameCanvas');

// 创建控制按钮容器
const controlsContainer = document.createElement('div');
controlsContainer.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    box-sizing: border-box;
    pointer-events: auto;
`;

// 创建方向按钮容器（左右）
const directionButtons = document.createElement('div');
directionButtons.style.cssText = `
    display: flex;
    gap: 20px;
`;

// 创建左按钮
const leftButton = document.createElement('button');
leftButton.innerHTML = '←';
leftButton.style.cssText = `
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.8);
    border: 2px solid #333;
    font-size: 24px;
    cursor: pointer;
`;

// 创建右按钮
const rightButton = document.createElement('button');
rightButton.innerHTML = '→';
rightButton.style.cssText = `
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.8);
    border: 2px solid #333;
    font-size: 24px;
    cursor: pointer;
`;

// 创建跳跃按钮
const jumpButton = document.createElement('button');
jumpButton.innerHTML = '↑';
jumpButton.style.cssText = `
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.8);
    border: 2px solid #333;
    font-size: 30px;
    cursor: pointer;
`;

// 组装按钮
directionButtons.appendChild(leftButton);
directionButtons.appendChild(rightButton);
controlsContainer.appendChild(directionButtons);
controlsContainer.appendChild(jumpButton);

// 添加按钮事件处理
leftButton.addEventListener('touchstart', (e) => {
    e.preventDefault();
    console.log('向左移动');
    // 这里调用向左移动的函数
});

leftButton.addEventListener('touchend', (e) => {
    e.preventDefault();
    console.log('停止移动');
    // 这里调用停止移动的函数
});

rightButton.addEventListener('touchstart', (e) => {
    e.preventDefault();
    console.log('向右移动');
    // 这里调用向右移动的函数
});

rightButton.addEventListener('touchend', (e) => {
    e.preventDefault();
    console.log('停止移动');
    // 这里调用停止移动的函数
});

jumpButton.addEventListener('touchstart', (e) => {
    e.preventDefault();
    console.log('跳跃');
    // 这里调用跳跃的函数
});

// 检测是否是移动设备
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

// 只在移动设备上显示控制按钮
if (isMobileDevice()) {
    document.body.appendChild(controlsContainer);
}

// 防止移动设备上的双击缩放
document.addEventListener('touchstart', (e) => {
    if (e.touches.length > 1) {
        e.preventDefault();
    }
}, { passive: false }); 