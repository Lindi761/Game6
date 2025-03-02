// 获取游戏画布
const gameCanvas = document.getElementById('gameCanvas');

// 初始化触摸状态
let isTouching = false;
let currentAction = null;

// 处理触摸开始
function handleTouchStart(event) {
    event.preventDefault();
    isTouching = true;
    
    const touch = event.touches[0];
    const rect = gameCanvas.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    
    // 将屏幕分为三个区域：左、中、右
    const screenWidth = gameCanvas.width;
    const leftThird = screenWidth / 3;
    const rightThird = screenWidth * 2 / 3;
    
    if (x < leftThird) {
        currentAction = 'left';
        console.log('向左移动');
        // 这里调用游戏中的左移方法
    } else if (x > rightThird) {
        currentAction = 'right';
        console.log('向右移动');
        // 这里调用游戏中的右移方法
    } else {
        currentAction = 'jump';
        console.log('跳跃');
        // 这里调用游戏中的跳跃方法
    }
}

// 处理触摸结束
function handleTouchEnd(event) {
    event.preventDefault();
    isTouching = false;
    currentAction = null;
    console.log('停止动作');
    // 这里调用停止移动的方法
}

// 处理触摸移动
function handleTouchMove(event) {
    if (!isTouching) return;
    event.preventDefault();
    
    const touch = event.touches[0];
    const rect = gameCanvas.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    
    // 将屏幕分为三个区域
    const screenWidth = gameCanvas.width;
    const leftThird = screenWidth / 3;
    const rightThird = screenWidth * 2 / 3;
    
    let newAction;
    if (x < leftThird) {
        newAction = 'left';
    } else if (x > rightThird) {
        newAction = 'right';
    } else {
        newAction = 'jump';
    }
    
    // 只在动作改变时触发
    if (newAction !== currentAction) {
        currentAction = newAction;
        console.log(`切换到${currentAction}`);
        // 这里调用相应的动作方法
    }
}

// 添加触摸事件监听器
gameCanvas.addEventListener('touchstart', handleTouchStart, { passive: false });
gameCanvas.addEventListener('touchend', handleTouchEnd, { passive: false });
gameCanvas.addEventListener('touchmove', handleTouchMove, { passive: false });

// 添加提示区域的视觉反馈（可选）
const overlay = document.createElement('div');
overlay.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    display: flex;
    opacity: 0.1;
`;

const leftArea = document.createElement('div');
leftArea.style.cssText = `
    flex: 1;
    background-color: blue;
`;

const jumpArea = document.createElement('div');
jumpArea.style.cssText = `
    flex: 1;
    background-color: green;
`;

const rightArea = document.createElement('div');
rightArea.style.cssText = `
    flex: 1;
    background-color: blue;
`;

overlay.appendChild(leftArea);
overlay.appendChild(jumpArea);
overlay.appendChild(rightArea);

// 只在移动设备上显示区域提示
if (isMobileDevice()) {
    gameCanvas.parentElement.style.position = 'relative';
    gameCanvas.parentElement.appendChild(overlay);
}

// 检测是否是移动设备
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
} 