// 移动设备控制器代码 - 完全重写版本
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, setting up mobile controls');
    
    // 直接插入HTML到body
    const controlsHTML = `
        <div id="mobileControls" style="position: fixed; bottom: 20px; left: 0; width: 100%; display: flex; justify-content: space-between; padding: 10px 20px; box-sizing: border-box; z-index: 9999999;">
            <div style="display: flex; gap: 15px;">
                <button id="leftBtn" style="width: 80px; height: 80px; background-color: rgba(0, 0, 0, 0.8); border: 4px solid white; border-radius: 50%; color: white; font-size: 36px; font-weight: bold; -webkit-appearance: none;">←</button>
                <button id="rightBtn" style="width: 80px; height: 80px; background-color: rgba(0, 0, 0, 0.8); border: 4px solid white; border-radius: 50%; color: white; font-size: 36px; font-weight: bold; -webkit-appearance: none;">→</button>
            </div>
            <div style="display: flex; gap: 15px;">
                <button id="upBtn" style="width: 80px; height: 80px; background-color: rgba(0, 0, 0, 0.8); border: 4px solid white; border-radius: 50%; color: white; font-size: 36px; font-weight: bold; -webkit-appearance: none;">↑</button>
                <button id="downBtn" style="width: 80px; height: 80px; background-color: rgba(0, 0, 0, 0.8); border: 4px solid white; border-radius: 50%; color: white; font-size: 36px; font-weight: bold; -webkit-appearance: none;">↓</button>
            </div>
        </div>
    `;
    
    // 检测是否是移动设备
    function isMobileDevice() {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    }
    
    // 如果是移动设备，添加控制按钮
    if (isMobileDevice()) {
        console.log('Mobile device detected');
        
        // 添加控制按钮到页面
        document.body.insertAdjacentHTML('beforeend', controlsHTML);
        console.log('Mobile controls HTML inserted');
        
        // 获取按钮元素
        const leftBtn = document.getElementById('leftBtn');
        const rightBtn = document.getElementById('rightBtn');
        const upBtn = document.getElementById('upBtn');
        const downBtn = document.getElementById('downBtn');
        
        // 键盘按键代码
        const KEY_UP = 38;
        const KEY_DOWN = 40;
        const KEY_LEFT = 37;
        const KEY_RIGHT = 39;
        
        // 模拟键盘事件
        function simulateKey(keyCode, isDown) {
            console.log('Simulating key:', keyCode, isDown ? 'down' : 'up');
            const eventType = isDown ? 'keydown' : 'keyup';
            const event = new KeyboardEvent(eventType, {
                bubbles: true,
                cancelable: true,
                keyCode: keyCode,
                which: keyCode
            });
            document.dispatchEvent(event);
        }
        
        // 添加按钮事件
        if (leftBtn) {
            leftBtn.addEventListener('touchstart', function(e) {
                e.preventDefault();
                this.style.backgroundColor = 'rgba(76, 175, 80, 0.9)';
                simulateKey(KEY_LEFT, true);
            });
            
            leftBtn.addEventListener('touchend', function(e) {
                e.preventDefault();
                this.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                simulateKey(KEY_LEFT, false);
            });
            console.log('Left button events added');
        }
        
        if (rightBtn) {
            rightBtn.addEventListener('touchstart', function(e) {
                e.preventDefault();
                this.style.backgroundColor = 'rgba(76, 175, 80, 0.9)';
                simulateKey(KEY_RIGHT, true);
            });
            
            rightBtn.addEventListener('touchend', function(e) {
                e.preventDefault();
                this.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                simulateKey(KEY_RIGHT, false);
            });
            console.log('Right button events added');
        }
        
        if (upBtn) {
            upBtn.addEventListener('touchstart', function(e) {
                e.preventDefault();
                this.style.backgroundColor = 'rgba(76, 175, 80, 0.9)';
                simulateKey(KEY_UP, true);
            });
            
            upBtn.addEventListener('touchend', function(e) {
                e.preventDefault();
                this.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                simulateKey(KEY_UP, false);
            });
            console.log('Up button events added');
        }
        
        if (downBtn) {
            downBtn.addEventListener('touchstart', function(e) {
                e.preventDefault();
                this.style.backgroundColor = 'rgba(76, 175, 80, 0.9)';
                simulateKey(KEY_DOWN, true);
            });
            
            downBtn.addEventListener('touchend', function(e) {
                e.preventDefault();
                this.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                simulateKey(KEY_DOWN, false);
            });
            console.log('Down button events added');
        }
    }
});

// 添加视口设置
const metaTag = document.createElement('meta');
metaTag.name = 'viewport';
metaTag.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
document.head.appendChild(metaTag);

// 确保控制器在游戏开始后也可见
window.addEventListener('load', function() {
    console.log('Window loaded');
    
    // 如果控制器不存在，尝试再次添加
    if (isMobileDevice() && !document.getElementById('mobileControls')) {
        console.log('Controls not found after window load, adding again');
        const controlsHTML = `
            <div id="mobileControls" style="position: fixed; bottom: 20px; left: 0; width: 100%; display: flex; justify-content: space-between; padding: 10px 20px; box-sizing: border-box; z-index: 9999999;">
                <div style="display: flex; gap: 15px;">
                    <button id="leftBtn" style="width: 80px; height: 80px; background-color: rgba(0, 0, 0, 0.8); border: 4px solid white; border-radius: 50%; color: white; font-size: 36px; font-weight: bold; -webkit-appearance: none;">←</button>
                    <button id="rightBtn" style="width: 80px; height: 80px; background-color: rgba(0, 0, 0, 0.8); border: 4px solid white; border-radius: 50%; color: white; font-size: 36px; font-weight: bold; -webkit-appearance: none;">→</button>
                </div>
                <div style="display: flex; gap: 15px;">
                    <button id="upBtn" style="width: 80px; height: 80px; background-color: rgba(0, 0, 0, 0.8); border: 4px solid white; border-radius: 50%; color: white; font-size: 36px; font-weight: bold; -webkit-appearance: none;">↑</button>
                    <button id="downBtn" style="width: 80px; height: 80px; background-color: rgba(0, 0, 0, 0.8); border: 4px solid white; border-radius: 50%; color: white; font-size: 36px; font-weight: bold; -webkit-appearance: none;">↓</button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', controlsHTML);
    }
    
    // 检测是否是移动设备
    function isMobileDevice() {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    }
    
    // 如果存在startGame函数，修改它
    if (typeof window.startGame === 'function') {
        const originalStartGame = window.startGame;
        window.startGame = function() {
            originalStartGame();
            
            // 确保控制器在游戏开始后可见
            setTimeout(function() {
                const controls = document.getElementById('mobileControls');
                if (controls) {
                    controls.style.display = 'flex';
                    console.log('Controls visibility ensured after game start');
                } else {
                    console.log('Controls not found after game start');
                }
            }, 500);
        };
    }
});

// 防止页面缩放
document.addEventListener('touchmove', function(e) {
    if (e.touches.length > 1) {
        e.preventDefault();
    }
}, { passive: false });

document.addEventListener('gesturestart', function(e) {
    e.preventDefault();
}, { passive: false }); 