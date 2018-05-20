document.addEventListener('click', function(e) {
	e = e || window.event;
	const target = e.target;

	if (target.closest('button.close')) {
		target.closest('button.close').parentElement.classList.remove('open');
	} else if (target.closest('[class*=modal-]')) {
		const modalClass = 'div.modal-' + target.closest('[class*=modal-]').className.slice(6);
		const modalWindow = document.querySelector(modalClass);
		modalWindow.classList.add('open')
	}
});

$('.owl-carousel').owlCarousel({
	items: 1
});