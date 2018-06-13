function includeHTML() {
	var z, i, elmnt, file, xhttp;
	/*loop through a collection of all HTML elements:*/
	z = document.getElementsByTagName("*");
	for (i = 0; i < z.length; i++) {
		elmnt = z[i];
		/*search for elements with a certain atrribute:*/
		file = elmnt.getAttribute("include-html");
		if (file) {
			/*make an HTTP request using the attribute value as the file name:*/
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4) {
					if (this.status == 200) {elmnt.innerHTML = this.responseText;}
					if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
					/*remove the attribute, and call this function once more:*/
					elmnt.removeAttribute("include-html");
					includeHTML();
				}
			} 
			xhttp.open("GET", file, true);
			xhttp.send();
			return;
		}
	}
}
includeHTML();


let scrolledTop = 0;


document.addEventListener('click', function(e) {
	e = e || window.event;
	const target = e.target;

	// закрытие модального окна
	if (target.closest('button.close')) {
		target.closest('button.close').parentElement.classList.remove('open');
	}

	// открытие модального окна
	else if (target.closest('[class*=modal-]')) {
		const modalWindow = document.querySelector('div.' + target.closest('[class*=modal-]').classList[0]);
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



var map,
	orchid = {lat: 59.9271230, lng: 30.3546023},
	hotel = {lat: 59.9302777, lng: 30.3612273},
	vladimirskaya = {lat: 59.9275064, lng: 30.3479397},
	markerPedestrian = 'images/pedestrian.png';

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

function initMap() {
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
}