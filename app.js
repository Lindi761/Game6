// 获取游戏画布
const gameCanvas = document.getElementById('gameCanvas');

// 创建虚拟按钮区域
const touchControls = {
    left: { x: 50, y: 350, width: 60, height: 60 },
    right: { x: 150, y: 350, width: 60, height: 60 },
    jump: { x: 690, y: 350, width: 60, height: 60 }
};

// 初始化触摸状态
let isTouching = false;
let touchX = 0;

// 处理触摸开始
function handleTouchStart(event) {
    event.preventDefault();
    const touch = event.touches[0];
    const rect = gameCanvas.getBoundingClientRect();
    touchX = touch.clientX - rect.left;
    const touchY = touch.clientY - rect.top;

    // 检测触摸位置并触发相应操作
    if (touchY > gameCanvas.height * 0.7) { // 底部区域作为控制区
        isTouching = true;
        if (touchX < gameCanvas.width / 2) {
            // 左半边屏幕触发左移
            // 这里需要调用您游戏中的移动方法
            console.log('向左移动');
        } else {
            // 右半边屏幕触发右移
            console.log('向右移动');
        }
    } else {
        // 屏幕上半部分触发跳跃
        console.log('跳跃');
    }
}

// 处理触摸移动
function handleTouchMove(event) {
    event.preventDefault();
    if (!isTouching) return;
    
    const touch = event.touches[0];
    const rect = gameCanvas.getBoundingClientRect();
    const newTouchX = touch.clientX - rect.left;
    
    // 检测滑动方向
    if (Math.abs(newTouchX - touchX) > 10) {
        if (newTouchX < touchX) {
            console.log('向左移动');
        } else {
            console.log('向右移动');
        }
    }
    touchX = newTouchX;
}

// 处理触摸结束
function handleTouchEnd(event) {
    event.preventDefault();
    isTouching = false;
    // 停止移动
    console.log('停止移动');
}

// 添加触摸事件监听器
gameCanvas.addEventListener('touchstart', handleTouchStart);
gameCanvas.addEventListener('touchmove', handleTouchMove);
gameCanvas.addEventListener('touchend', handleTouchEnd); 