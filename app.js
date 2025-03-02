// 等待 DOM 加载完成
window.addEventListener('load', function() {
    // 获取游戏画布和内容容器
    const gameCanvas = document.getElementById('gameCanvas');
    const gameContent = document.getElementById('gameContent');

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
        z-index: 9999;
        pointer-events: auto;
    `;

    // 通用按钮样式
    const buttonStyle = `
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.7);
        border: 3px solid white;
        color: white;
        font-size: 30px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
        position: relative;
        z-index: 10000;
        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;
        touch-action: manipulation;
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
        background: rgba(76, 175, 80, 0.7);
    `;

    // 创建按钮组容器
    const leftGroup = document.createElement('div');
    leftGroup.style.cssText = `
        display: flex;
        gap: 20px;
    `;

    // 组装按钮
    leftGroup.appendChild(leftButton);
    leftGroup.appendChild(rightButton);
    controlsContainer.appendChild(leftGroup);
    controlsContainer.appendChild(jumpButton);

    // 添加按钮事件处理
    leftButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('向左移动');
        leftButton.style.background = 'rgba(0, 0, 0, 0.9)';
    });

    leftButton.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log('停止移动');
        leftButton.style.background = 'rgba(0, 0, 0, 0.7)';
    });

    rightButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('向右移动');
        rightButton.style.background = 'rgba(0, 0, 0, 0.9)';
    });

    rightButton.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log('停止移动');
        rightButton.style.background = 'rgba(0, 0, 0, 0.7)';
    });

    jumpButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('跳跃');
        jumpButton.style.background = 'rgba(76, 175, 80, 0.9)';
    });

    jumpButton.addEventListener('touchend', (e) => {
        e.preventDefault();
        jumpButton.style.background = 'rgba(76, 175, 80, 0.7)';
    });

    // 检测是否是移动设备
    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    // 添加控制按钮到页面
    if (isMobileDevice()) {
        // 将按钮添加到 gameContent 而不是 body
        gameContent.appendChild(controlsContainer);
        console.log('移动设备控制按钮已添加');
        
        // 修改原有的 startGame 函数
        const originalStartGame = window.startGame;
        window.startGame = function() {
            if (originalStartGame) originalStartGame();
            gameContent.style.display = 'block';
            controlsContainer.style.display = 'flex';
            console.log('游戏开始，显示控制按钮');
        };
    } else {
        console.log('非移动设备，不添加控制按钮');
    }
});

// 防止页面缩放和其他默认行为
document.addEventListener('touchmove', function(e) {
    if (e.touches.length > 1) {
        e.preventDefault();
    }
}, { passive: false });

document.addEventListener('gesturestart', function(e) {
    e.preventDefault();
}, { passive: false }); 