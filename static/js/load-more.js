// 查看更多 / 收起功能
document.addEventListener('DOMContentLoaded', function() {
	const cards = document.querySelectorAll('.domain-list-container .card:not(.sold)');
	const loadMoreBtn = document.getElementById('loadMoreBtn');
	const showCount = 12; // 默认显示数量
	let isExpanded = false;

	// 初始化隐藏超出的卡片
	function initCards() {
		cards.forEach((card, index) => {
			if (index >= showCount) {
				card.classList.add('hidden-card');
			}
		});
		// 如果总数不超过12个，隐藏按钮
		if (cards.length <= showCount) {
			loadMoreBtn.style.display = 'none';
		}
	}

	// 切换显示/隐藏
	function toggleCards() {
		isExpanded = !isExpanded;
		cards.forEach((card, index) => {
			if (index >= showCount) {
				if (isExpanded) {
					card.classList.remove('hidden-card');
				} else {
					card.classList.add('hidden-card');
				}
			}
		});
		loadMoreBtn.textContent = isExpanded ? '收起' : '查看更多';
	}

	// 绑定按钮事件
	loadMoreBtn.addEventListener('click', toggleCards);

	// 初始化
	initCards();
});