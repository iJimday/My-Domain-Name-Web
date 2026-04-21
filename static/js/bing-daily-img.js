        // 加载 Bing 每日图片并应用背景
        (function() {
            const header = document.getElementById('header');
            const imageUrl = 'https://bing.img.run/1920x1080.php';
            
            // 创建临时图片对象来预加载
            const img = new Image();
            img.onload = function() {
                // 图片加载成功，设置背景并触发动画
                header.style.backgroundImage = `url('${imageUrl}')`;
                // 使用 requestAnimationFrame 确保样式更新后再添加类
                requestAnimationFrame(() => {
                    header.classList.add('loaded');
                });
            };
            img.onerror = function() {
                // 图片加载失败，保持蓝色背景
                console.warn('Failed to load Bing daily image');
            };
            img.src = imageUrl;
        })();