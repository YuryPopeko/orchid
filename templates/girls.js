document.write('\
	<section class="girls">\
		<h2 class="wrapper">Наши девушки</h2>\
		<p class="wrapper">Посмотрите на наших красавиц</p>\
		<div class="owl-carousel wrapper">\
			<a href="girl.html" class="fade">\
				<img src="images/girl.jpg">\
				<span>Ирина, 26</span>\
			</a>\
			<a href="girl.html" class="fade">\
				<img src="images/services1.jpg">\
				<span>Ирина, 26</span>\
			</a>\
			<a href="girl.html" class="fade">\
				<img src="images/services2.jpg">\
				<span>Ирина, 26</span>\
			</a>\
		</div>\
	</section>\
	<script>\
		document.addEventListener("DOMContentLoaded", function(event) {\
			$("section.girls .owl-carousel").owlCarousel({\
				items: 1,\
				autoHeight: true,\
				dots: false,\
				nav: true,\
				navText: arrows\
			});\
		});\
	</script>\
');