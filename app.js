// 添加触摸事件监听器
element.addEventListener('touchstart', handleTouchStart);
element.addEventListener('touchmove', handleTouchMove);
element.addEventListener('touchend', handleTouchEnd);

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
}

// 处理触摸移动
function handleTouchMove(event) {
    event.preventDefault();
    
    const touch = event.touches[0];
    const x = touch.clientX;
    const y = touch.clientY;
    
    // 在这里添加您的触摸移动逻辑
    console.log('Touch moved to:', x, y);
}

// 处理触摸结束
function handleTouchEnd(event) {
    event.preventDefault();
    
    // 在这里添加您的触摸结束逻辑
    console.log('Touch ended');
} 