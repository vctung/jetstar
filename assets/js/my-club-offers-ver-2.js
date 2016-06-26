$('body').on('click', '#features-carousel .item', function(event) {
	event.preventDefault();
	var _target = $(this).data('target');

	$(_target).slideDown('400', function() {
		
	});
});


$('body').on('click', '.close-club-offer-ver-2', function(event) {
	event.preventDefault();
	

	var _parent =  $(this).parents('.section-detail-club-offer-ver-2').slideUp('400');
});