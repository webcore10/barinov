document.addEventListener('DOMContentLoaded', function () {
	var navbar = document.querySelector('.ios-navbar');
	var titleEl = document.querySelector('.ios-navbar-title');
	if (!navbar || !titleEl) return;

	var crumb = document.querySelector('.breadcrumbs .crumb-current');
	titleEl.textContent = crumb ? crumb.textContent.trim() : 'Главная';

	var threshold = 56;
	var onScroll = function () {
		if (window.scrollY > threshold) {
			navbar.classList.add('is-visible');
		} else {
			navbar.classList.remove('is-visible');
		}
	};

	window.addEventListener('scroll', onScroll, { passive: true });
	onScroll();
});
