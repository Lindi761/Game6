// 移动设备控制器代码
(function() {
    // 立即执行函数，确保代码尽快运行

    // 创建样式
    const style = document.createElement('style');
    style.textContent = `
        .mobile-controls {
            position: fixed;
            bottom: 20px;
            left: 0;
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 10px 20px;
            box-sizing: border-box;
            z-index: 999999;
        }
        
        .control-button {
            width: 80px;
            height: 80px;
            background-color: rgba(0, 0, 0, 0.7);
            border: 3px solid white;
            border-radius: 50%;
            color: white;
            font-size: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
        }
        
        .control-button:active {
            background-color: rgba(76, 175, 80, 0.9);
        }
        
        .direction-pad {
            display: flex;
            gap: 10px;
        }
    `;
    document.head.appendChild(style);

    // 创建HTML元素
    const controlsHTML = `
        <div class="mobile-controls" id="mobileControls">
            <div class="direction-pad">
                <div class="control-button" id="leftBtn">←</div>
                <div class="control-button" id="rightBtn">→</div>
            </div>
            <div class="direction-pad">
                <div class="control-button" id="upBtn">↑</div>
                <div class="control-button" id="downBtn">↓</div>
            </div>
        </div>
    `;

    // 添加视口设置
    const viewportMeta = document.createElement('meta');
    viewportMeta.name = 'viewport';
    viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
    document.head.appendChild(viewportMeta);

    // 检测是否是移动设备
    function isMobileDevice() {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    }

    // 模拟键盘事件
    function simulateKey(keyCode, isDown) {
        const eventType = isDown ? 'keydown' : 'keyup';
        const event = new KeyboardEvent(eventType, {
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

    // 添加控制器到页面
    function addControls() {
        // 创建一个临时容器
        const temp = document.createElement('div');
        temp.innerHTML = controlsHTML;
        
        // 将控制器添加到body
        document.body.appendChild(temp.firstElementChild);
        
        console.log('Mobile controls added to page');
        
        // 添加事件监听器
        document.getElementById('leftBtn').addEventListener('touchstart', function(e) {
            e.preventDefault();
            simulateKey(KEY_LEFT, true);
        });
        
        document.getElementById('leftBtn').addEventListener('touchend', function(e) {
            e.preventDefault();
            simulateKey(KEY_LEFT, false);
        });
        
        document.getElementById('rightBtn').addEventListener('touchstart', function(e) {
            e.preventDefault();
            simulateKey(KEY_RIGHT, true);
        });
        
        document.getElementById('rightBtn').addEventListener('touchend', function(e) {
            e.preventDefault();
            simulateKey(KEY_RIGHT, false);
        });
        
        document.getElementById('upBtn').addEventListener('touchstart', function(e) {
            e.preventDefault();
            simulateKey(KEY_UP, true);
        });
        
        document.getElementById('upBtn').addEventListener('touchend', function(e) {
            e.preventDefault();
            simulateKey(KEY_UP, false);
        });
        
        document.getElementById('downBtn').addEventListener('touchstart', function(e) {
            e.preventDefault();
            simulateKey(KEY_DOWN, true);
        });
        
        document.getElementById('downBtn').addEventListener('touchend', function(e) {
            e.preventDefault();
            simulateKey(KEY_DOWN, false);
        });
    }

    // 在页面加载完成后添加控制器
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            if (isMobileDevice()) {
                console.log('Mobile device detected, adding controls on DOMContentLoaded');
                addControls();
            }
        });
    } else {
        if (isMobileDevice()) {
            console.log('Mobile device detected, adding controls immediately');
            addControls();
        }
    }

    // 防止页面缩放
    document.addEventListener('touchmove', function(e) {
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    }, { passive: false });

    document.addEventListener('gesturestart', function(e) {
        e.preventDefault();
    }, { passive: false });
})();

// 确保控制器在游戏开始后也可见
window.addEventListener('load', function() {
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
                }
            }, 500);
        };
    }
}); 