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
    z-index: 1000;  // 确保按钮在最上层
`;

// 创建方向按钮容器（左右）
const directionButtons = document.createElement('div');
directionButtons.style.cssText = `
    display: flex;
    gap: 20px;
`;

// 通用按钮样式
const buttonStyle = `
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.5);
    border: 3px solid white;
    color: white;
    font-size: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    transition: transform 0.1s, background 0.1s;
`;

// 创建左按钮
const leftButton = document.createElement('button');
leftButton.innerHTML = '←';
leftButton.style.cssText = buttonStyle;

// 创建右按钮
const rightButton = document.createElement('button');
rightButton.innerHTML = '→';
rightButton.style.cssText = buttonStyle;

// 创建跳跃按钮
const jumpButton = document.createElement('button');
jumpButton.innerHTML = '↑';
jumpButton.style.cssText = buttonStyle + `
    width: 90px;
    height: 90px;
    font-size: 40px;
    background: rgba(76, 175, 80, 0.5);  // 绿色背景
`;

// 添加按钮按下效果
const buttons = [leftButton, rightButton, jumpButton];
buttons.forEach(button => {
    button.addEventListener('touchstart', (e) => {
        e.preventDefault();
        button.style.transform = 'scale(0.95)';
        button.style.background = button === jumpButton ? 
            'rgba(76, 175, 80, 0.8)' : 'rgba(0, 0, 0, 0.8)';
    });

    button.addEventListener('touchend', (e) => {
        e.preventDefault();
        button.style.transform = 'scale(1)';
        button.style.background = button === jumpButton ? 
            'rgba(76, 175, 80, 0.5)' : 'rgba(0, 0, 0, 0.5)';
    });
});

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
    return (typeof window.orientation !== "undefined") || 
           (navigator.userAgent.indexOf('IEMobile') !== -1) ||
           (navigator.userAgent.match(/mobile|android|iphone|ipad|tablet/i));
}

// 只在移动设备上显示控制按钮
if (isMobileDevice()) {
    document.body.appendChild(controlsContainer);
    console.log('移动设备控制按钮已添加');
}

// 防止移动设备上的双击缩放
document.addEventListener('touchstart', (e) => {
    if (e.touches.length > 1) {
        e.preventDefault();
    }
}, { passive: false }); 