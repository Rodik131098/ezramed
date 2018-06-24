document.addEventListener('DOMContentLoaded', function(){
	//Sliders settings
	(function(){

		$('.block-1__home-slider').slick({
			prevArrow: $('.block-1__arrow-left'),
			nextArrow: $('.block-1__arrow-right'),
			dots: true
		});
		if($('#services__slider').length){
			$('#services__slider').slick({
				slidesToShow: 4,
                prevArrow: $('.clinic-photo__arrow-left'),
                nextArrow: $('.clinic-photo__arrow-right'),
                responsive: [
                    {
                        breakpoint: 1100,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 815,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 570,
                        settings: {
                            slidesToShow: 1,
                        }
                    },
                ]
			});
		}
		$('.block-5__home-slider').slick({
			prevArrow: $('.block-5__arrow-left'),
			nextArrow: $('.block-5__arrow-right'),
		});

		$('.clinic-photo__slider-photo').slick({
			rows: 2,
			slidesPerRow: 3,
			prevArrow: $('.clinic-photo__arrow-left'),
			nextArrow: $('.clinic-photo__arrow-right'),
			responsive: [
				{
					breakpoint: 700,
					settings: {
						slidesPerRow: 2,
					}
				},
			]
		});

		$('.clinic-photo__slider-video').slick({
			slidesToShow: 5,
			prevArrow: $('.clinic-photo__video-arrow-left'),
			nextArrow: $('.clinic-photo__video-arrow-right'),
			responsive: [
				{
					breakpoint: 700,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 400,
					settings: {
						slidesToShow: 1,
					}
				},
			]
		});

	})();

	//yandes maps
	(function(){
		if(!document.getElementById('map')) return;
		ymaps.ready(init);
		var map,
       		myPlacemark;
		function init(){     
	        map = new ymaps.Map("map", {
	            center: [54.994093569719226, 73.36171699999991],
	            zoom: 17
	        });
	        myPlacemark = new ymaps.Placemark([54.994093569719226, 73.36171699999991], { 
	            hintContent: 'EZRAMED',
	            balloonContent: 'EZRAMED'
	        });
	        map.geoObjects.add(myPlacemark);
	    }
	})();

	//clear input
	(function clearInput(){
		var inputs = document.querySelectorAll('.js-clear-value');
		var count;
		console.log(inputs);
		for(count = 0; count < inputs.length; count++){

			inputs[count].addEventListener('focus', function(e){
				if(this.value == this.defaultValue){
					this.value = "";
				}
			});
			
			inputs[count].addEventListener('blur', function(e){
				if(this.value.length == 0){
					this.value = this.defaultValue;
				}
			});
		}
	})();

	// date/time picker
	(function(){
		$('#block-7_form-date').datetimepicker({
			format: "d/m/y"
		});
		$('#block-7_form-time').datetimepicker({
			datepicker: false,
			format: "h:i",
			step: 5
		});
	})();

	//fixed header
	(function(){
		var $nav = $('.nav');
		var navPos = $nav.offset().top;

		$(window).on('scroll', function(e){

			if($(window).width() < 865){
                $nav.removeClass('nav_fixed');
                return;
			}

			var scrollPos = $(window).scrollTop();

            if(navPos <= scrollPos){
            	$nav.addClass('nav_fixed');
			}else{
            	$nav.removeClass('nav_fixed');
			}

        });
	})();
});