// 获取要添加触摸功能的元素
const touchElement = document.getElementById('touch-area'); // 替换成您想要的元素ID

// 添加触摸事件监听器
touchElement.addEventListener('touchstart', handleTouchStart);
touchElement.addEventListener('touchmove', handleTouchMove);
touchElement.addEventListener('touchend', handleTouchEnd);

// 处理触摸开始
function handleTouchStart(event) {
    // 阻止默认行为(如滚动)
    event.preventDefault();
    
    // 获取触摸点坐标
    const touch = event.touches[0];
    const x = touch.clientX;
    const y = touch.clientY;
    
    // 在这里添加您的触摸开始逻辑
    console.log('Touch started at:', x, y);
    touchElement.style.backgroundColor = 'red'; // 添加视觉反馈
}

// 处理触摸移动
function handleTouchMove(event) {
    event.preventDefault();
    
    const touch = event.touches[0];
    const x = touch.clientX;
    const y = touch.clientY;
    
    // 在这里添加您的触摸移动逻辑
    console.log('Touch moved to:', x, y);
    touchElement.style.transform = `translate(${x}px, ${y}px)`; // 让元素跟随手指移动
}

// 处理触摸结束
function handleTouchEnd(event) {
    event.preventDefault();
    
    // 在这里添加您的触摸结束逻辑
    console.log('Touch ended');
    touchElement.style.backgroundColor = ''; // 恢复原始颜色
} 