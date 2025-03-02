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
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.7);
        border: 3px solid white;
        color: white;
        font-size: 24px;
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

    // 创建方向键容器
    const directionPad = document.createElement('div');
    directionPad.style.cssText = `
        display: grid;
        grid-template-columns: repeat(3, 60px);
        grid-template-rows: repeat(3, 60px);
        gap: 5px;
    `;

    // 创建方向按钮
    const upButton = document.createElement('button');
    const downButton = document.createElement('button');
    const leftButton = document.createElement('button');
    const rightButton = document.createElement('button');

    // 设置按钮文本和样式
    upButton.innerHTML = '↑';
    downButton.innerHTML = '↓';
    leftButton.innerHTML = '←';
    rightButton.innerHTML = '→';

    [upButton, downButton, leftButton, rightButton].forEach(button => {
        button.style.cssText = buttonStyle;
    });

    // 创建方向键布局
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.style.cssText = 'display: flex; justify-content: center; align-items: center;';
        
        if (i === 1) cell.appendChild(upButton);
        else if (i === 3) cell.appendChild(leftButton);
        else if (i === 5) cell.appendChild(rightButton);
        else if (i === 7) cell.appendChild(downButton);
        
        directionPad.appendChild(cell);
    }

    // 组装控制器
    controlsContainer.appendChild(directionPad);

    // 模拟键盘事件
    function simulateKeyEvent(keyCode, type) {
        const event = new KeyboardEvent(type, {
            bubbles: true,
            cancelable: true,
            keyCode: keyCode
        });
        document.dispatchEvent(event);
    }

    // 键盘按键代码
    const KEY_UP = 38;
    const KEY_DOWN = 40;
    const KEY_LEFT = 37;
    const KEY_RIGHT = 39;

    // 添加按钮事件处理
    upButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        simulateKeyEvent(KEY_UP, 'keydown');
        upButton.style.background = 'rgba(0, 0, 0, 0.9)';
    });

    upButton.addEventListener('touchend', (e) => {
        e.preventDefault();
        simulateKeyEvent(KEY_UP, 'keyup');
        upButton.style.background = 'rgba(0, 0, 0, 0.7)';
    });

    downButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        simulateKeyEvent(KEY_DOWN, 'keydown');
        downButton.style.background = 'rgba(0, 0, 0, 0.9)';
    });

    downButton.addEventListener('touchend', (e) => {
        e.preventDefault();
        simulateKeyEvent(KEY_DOWN, 'keyup');
        downButton.style.background = 'rgba(0, 0, 0, 0.7)';
    });

    leftButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        simulateKeyEvent(KEY_LEFT, 'keydown');
        leftButton.style.background = 'rgba(0, 0, 0, 0.9)';
    });

    leftButton.addEventListener('touchend', (e) => {
        e.preventDefault();
        simulateKeyEvent(KEY_LEFT, 'keyup');
        leftButton.style.background = 'rgba(0, 0, 0, 0.7)';
    });

    rightButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        simulateKeyEvent(KEY_RIGHT, 'keydown');
        rightButton.style.background = 'rgba(0, 0, 0, 0.9)';
    });

    rightButton.addEventListener('touchend', (e) => {
        e.preventDefault();
        simulateKeyEvent(KEY_RIGHT, 'keyup');
        rightButton.style.background = 'rgba(0, 0, 0, 0.7)';
    });

    // 检测是否是移动设备
    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    // 添加控制按钮到页面
    if (isMobileDevice()) {
        document.body.appendChild(controlsContainer);
        console.log('移动设备控制按钮已添加');
        
        // 确保按钮可见
        controlsContainer.style.display = 'flex';
        
        // 修改原有的 startGame 函数
        const originalStartGame = window.startGame;
        window.startGame = function() {
            if (originalStartGame) originalStartGame();
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