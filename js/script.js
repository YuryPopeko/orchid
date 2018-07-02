let scrolledTop = 0;
const arrow = '<svg class="icon"><use xlink:href="#icon-arrow"></use></svg>';
const arrows = [arrow, arrow];



document.addEventListener('click', function(e) {

	e = e || window.event;
	const target = e.target;

	// закрытие модального окна
	if (target.closest('button.close')) modalClose(target)

	// открытие модального окна
	else if (target.closest('[class*=modal-]')) modalOpen(target)

	else if (target.closest('button.menu')) {

		if (!document.body.classList.contains('menu')) scrollAfterOpen();
		else scrollAfterClose();

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

	else if (target.closest('button.accordion')) {

		const accordionBtn = target.closest('button.accordion');

		accordionBtn.classList.toggle('active');
		const panel = accordionBtn.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		} 

	}

});



// открывая меню, устанвить top: прокручено пикселей
function scrollAfterOpen() {

	if(!scrolledTop) return;

	scrolledTop = window.pageYOffset || document.documentElement.scrollTop;
	document.body.style.top = '-' + scrolledTop + 'px';

}
// закрывая, прокрутить на это значение
function scrollAfterClose() {

	if(!scrolledTop) return;

	document.body.style.top = '';
	setTimeout( () => { window.scrollTo(0, scrolledTop) }, 0);

}



function modalOpen(target) {

	scrollAfterOpen();

	const modalWindow = document.querySelector('div.' + target.closest('[class*=modal-]').classList[0]);
	const modalTitle = modalWindow.querySelector('h2');

	if (target.hasAttribute('title') && modalTitle.classList.contains('insert')) {
		modalTitle.textContent = target.title
	}

	document.body.classList.add('modal');
	modalWindow.classList.add('open')

}



function modalClose(target) {

	scrollAfterClose();

	target.closest('button.close').parentElement.classList.remove('open');
	document.body.classList.remove('modal')

}



(function setActiveAccordionsHeight() {

	const activeAccordions = document.querySelectorAll('.accordion.active');
	if (!activeAccordions.length) return;

	activeAccordions.forEach(item => {
		const panel = item.nextElementSibling;
		panel.style.maxHeight = panel.scrollHeight + "px"
	})

})();



(function pricesFormatting() {

	const prices = document.querySelectorAll('.price');
	if (!prices.length) return;

	prices.forEach(item => {
		item.innerHTML = item.textContent.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1&#8202;')
	})

})();



function togglePriceList(value) {

	document.querySelector('.select-content.active').classList.remove('active');
	document.querySelector('.select-content.' + value).classList.add('active')

}



function initMap() {

	var map,
		orchid = {lat: 59.9271230, lng: 30.3546023},
		hotel = {lat: 59.9302777, lng: 30.3612273},
		vladimirskaya = {lat: 59.9275064, lng: 30.3479397},
		markerPedestrian = 'images/pedestrian.png';

	map = new google.maps.Map(document.getElementById('map'), {

		center: orchid,
		zoom: 17

	});

	var markerOrchid = new google.maps.Marker({
	    	position: orchid,
			map: map,
			icon: 'images/marker.png'
	    }),
    	markerHotel = new google.maps.Marker({
	    	position: hotel,
			map: map,
			icon: markerPedestrian
	    }),
    	markerVladimirskaya = new google.maps.Marker({
	    	position: vladimirskaya,
			map: map,
			icon: markerPedestrian
	    }),
    	pathHotel = [
			new google.maps.LatLng(59.93027773297446, 30.36122739315033),
			new google.maps.LatLng(59.93011517788171, 30.360821982362495),
			new google.maps.LatLng(59.926568723395846, 30.3585840622834),
			new google.maps.LatLng(59.927124722976174, 30.354602336883545)
		],
		pathVladimrskaya = [
			new google.maps.LatLng(59.92750643322401, 30.34793972969055),
			new google.maps.LatLng(59.92778709072788, 30.348287461388622),
			new google.maps.LatLng(59.92712337891824, 30.354602336883545)
		];

	var lineHotel = new google.maps.Polyline(drawPath(pathHotel)),
		lineVladimrskaya = new google.maps.Polyline(drawPath(pathVladimrskaya));

	lineHotel.setMap(map);
	lineVladimrskaya.setMap(map);

	function drawPath(place) {

		return {
			path: place,
			strokeOpacity: 0,
			icons: [{
				icon: {
					path: 'M 0,-1 0,1',
					strokeOpacity: .5,
					scale: 4,
					strokeColor: "rgb(234, 45, 152)",
					strokeWeight: 5
				},
				offset: '0',
				repeat: '20px'
			}]
		}

	}
	
}