// 获取游戏画布
const gameCanvas = document.getElementById('gameCanvas');

// 添加虚拟按钮
const virtualControls = document.createElement('div');
virtualControls.className = 'virtual-controls';
virtualControls.innerHTML = `
    <button id="leftBtn" class="control-btn">←</button>
    <button id="rightBtn" class="control-btn">→</button>
    <button id="jumpBtn" class="control-btn">↑</button>
`;
gameCanvas.parentElement.appendChild(virtualControls);

// 添加虚拟按钮的样式
const style = document.createElement('style');
style.textContent = `
    .virtual-controls {
        position: fixed;
        bottom: 20px;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        box-sizing: border-box;
    }
    .control-btn {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        border: 2px solid #333;
        font-size: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
        touch-action: none;
    }
    @media (min-width: 800px) {
        .virtual-controls {
            display: none;
        }
    }
`;
document.head.appendChild(style);

// 控制状态
let isMovingLeft = false;
let isMovingRight = false;
let isJumping = false;

// 触摸事件处理
function handleButton(buttonId, isPressed) {
    switch(buttonId) {
        case 'leftBtn':
            isMovingLeft = isPressed;
            if (isPressed) {
                // 调用向左移动的函数
                console.log('向左移动');
            }
            break;
        case 'rightBtn':
            isMovingRight = isPressed;
            if (isPressed) {
                // 调用向右移动的函数
                console.log('向右移动');
            }
            break;
        case 'jumpBtn':
            isJumping = isPressed;
            if (isPressed) {
                // 调用跳跃的函数
                console.log('跳跃');
            }
            break;
    }
}

// 为每个按钮添加触摸事件
['leftBtn', 'rightBtn', 'jumpBtn'].forEach(btnId => {
    const btn = document.getElementById(btnId);
    
    btn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        handleButton(btnId, true);
    });

    btn.addEventListener('touchend', (e) => {
        e.preventDefault();
        handleButton(btnId, false);
    });

    // 防止触摸移出按钮时卡住
    btn.addEventListener('touchcancel', (e) => {
        e.preventDefault();
        handleButton(btnId, false);
    });
});

// 检测是否是移动设备
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

// 在页面加载时检测是否显示虚拟按钮
window.addEventListener('load', () => {
    virtualControls.style.display = isMobileDevice() ? 'flex' : 'none';
}); 