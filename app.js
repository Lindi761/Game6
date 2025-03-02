// 等待 DOM 加载完成
window.addEventListener('load', function() {
    console.log('Page loaded, setting up mobile controls');
    
    // 创建控制按钮容器
    const controlsContainer = document.createElement('div');
    controlsContainer.id = 'mobileControls';
    controlsContainer.style.cssText = `
        position: fixed;
        bottom: 50px;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 10px;
        box-sizing: border-box;
        z-index: 99999;
        pointer-events: auto;
    `;

    // 通用按钮样式
    const buttonStyle = `
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.8);
        border: 4px solid white;
        color: white;
        font-size: 30px;
        font-weight: bold;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
        position: relative;
        z-index: 100000;
        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;
        touch-action: manipulation;
        margin: 5px;
    `;

    // 创建方向键容器
    const directionPad = document.createElement('div');
    directionPad.style.cssText = `
        display: grid;
        grid-template-columns: repeat(3, 70px);
        grid-template-rows: repeat(3, 70px);
        gap: 10px;
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
        console.log('Simulating key event:', type, keyCode);
        const event = new KeyboardEvent(type, {
            bubbles: true,
            cancelable: true,
            keyCode: keyCode,
            which: keyCode
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
        upButton.style.background = 'rgba(76, 175, 80, 0.9)';
        console.log('Up button pressed');
    });

    upButton.addEventListener('touchend', (e) => {
        e.preventDefault();
        simulateKeyEvent(KEY_UP, 'keyup');
        upButton.style.background = 'rgba(0, 0, 0, 0.8)';
    });

    downButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        simulateKeyEvent(KEY_DOWN, 'keydown');
        downButton.style.background = 'rgba(76, 175, 80, 0.9)';
        console.log('Down button pressed');
    });

    downButton.addEventListener('touchend', (e) => {
        e.preventDefault();
        simulateKeyEvent(KEY_DOWN, 'keyup');
        downButton.style.background = 'rgba(0, 0, 0, 0.8)';
    });

    leftButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        simulateKeyEvent(KEY_LEFT, 'keydown');
        leftButton.style.background = 'rgba(76, 175, 80, 0.9)';
        console.log('Left button pressed');
    });

    leftButton.addEventListener('touchend', (e) => {
        e.preventDefault();
        simulateKeyEvent(KEY_LEFT, 'keyup');
        leftButton.style.background = 'rgba(0, 0, 0, 0.8)';
    });

    rightButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        simulateKeyEvent(KEY_RIGHT, 'keydown');
        rightButton.style.background = 'rgba(76, 175, 80, 0.9)';
        console.log('Right button pressed');
    });

    rightButton.addEventListener('touchend', (e) => {
        e.preventDefault();
        simulateKeyEvent(KEY_RIGHT, 'keyup');
        rightButton.style.background = 'rgba(0, 0, 0, 0.8)';
    });

    // 检测是否是移动设备
    function isMobileDevice() {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        console.log('User agent:', userAgent);
        return /iPhone|iPad|iPod|Android/i.test(userAgent);
    }

    // 立即添加控制按钮到页面
    if (isMobileDevice()) {
        console.log('Mobile device detected, adding controls');
        document.body.appendChild(controlsContainer);
        
        // 确保按钮在所有情况下都可见
        setTimeout(function() {
            console.log('Ensuring controls are visible');
            const controls = document.getElementById('mobileControls');
            if (controls) {
                controls.style.display = 'flex';
            }
        }, 1000);
    } else {
        console.log('Not a mobile device, skipping controls');
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

// 添加视口设置以确保正确缩放
const viewportMeta = document.createElement('meta');
viewportMeta.name = 'viewport';
viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
document.head.appendChild(viewportMeta); 