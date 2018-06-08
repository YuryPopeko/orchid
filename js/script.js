let scrolledTop = 0;


document.addEventListener('click', function(e) {
	e = e || window.event;
	const target = e.target;

	if (target.closest('button.close')) {
		target.closest('button.close').parentElement.classList.remove('open');
	}

	else if (target.closest('[class*=modal-]')) {
		const modalClass = 'div.modal-' + target.closest('[class*=modal-]').className.slice(6);
		const modalWindow = document.querySelector(modalClass);
		modalWindow.classList.add('open')
	}

	else if (target.closest('button.menu')) {
		// открывая меню, устанвить top: прокручено пикселей
		if (!document.body.classList.contains('menu')) {
			scrolledTop = window.pageYOffset || document.documentElement.scrollTop;
			document.body.style.top = '-' + scrolledTop + 'px';
		} else { // закрывая, прокрутить на это значение
			document.body.style.top = '';
			setTimeout( () => { window.scrollTo(0, scrolledTop) }, 0);
		}

		var submenuOpen = document.querySelector('.submenu.open');
		if (submenuOpen) submenuOpen.classList.remove('open');

		document.body.classList.toggle('menu')
	}

	else if (target.closest('button.submenu')) {
		target.closest('button.submenu').nextElementSibling.classList.toggle('open')
	}

	else if (target.closest('button.back')) {
		target.closest('.submenu').classList.remove('open')
	}
});



$('.modal-gallery .owl-carousel').owlCarousel({
	items: 1,
	autoHeight: true,
	dots: false
});

var arrow = '<svg class="icon-arrow"><use xlink:href="#icon-arrow"></use></svg>';
$('.girls .owl-carousel').owlCarousel({
	items: 1,
	autoHeight: true,
	dots: false,
	nav: true,
	navText: [arrow, arrow]
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