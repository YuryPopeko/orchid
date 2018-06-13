document.write('\
	<section class="instagram">\
		<h2 class="wrapper">Инстаграм</h2>\
		<p class="wrapper">Подписывайтесь на наш инстаграм. Здесь весело :)</p>\
		<div class="owl-carousel">\
			<img src="images/instagram-1.jpg">\
			<img src="images/instagram-2.jpg">\
			<img src="images/instagram-3.jpg">\
			<img src="images/instagram-1.jpg">\
			<img src="images/instagram-2.jpg">\
			<img src="images/instagram-3.jpg">\
		</div>\
	</section>\
	<script>\
		document.addEventListener("DOMContentLoaded", function(event) {\
			$(".instagram .owl-carousel").owlCarousel({\
				dots: false,\
				items: 2\
			});\
		});\
	</script>\
');