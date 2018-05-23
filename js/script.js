document.querySelector('button.menu').onclick = function() {
	document.body.classList.toggle('menu')
}



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



$('.modal-gallery .owl-carousel').owlCarousel({
	items: 1,
	autoHeight: true,
	dots: false
});

$('.girls .owl-carousel').owlCarousel({
	items: 1,
	autoHeight: true,
	dots: false,
	nav: true,
	navText: [
		'<svg class="icon-arrow"><use xlink:href="#icon-arrow"></use></svg>',
		'<svg class="icon-arrow"><use xlink:href="#icon-arrow"></use></svg>'
	]
});

$('.instagram .owl-carousel').owlCarousel({
	items: 2,
	dots: false
});



var map,
	orchid = {lat: 59.9274324, lng: 30.3497684};
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: orchid,
		zoom: 17
	});

	var marker = new google.maps.Marker({
    	position: orchid,
		map: map,
		icon: 'images/marker.png'
    });
}