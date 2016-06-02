$('.btn-edit-fields').click(function(event) {
		___parent = $(this).parent().parent().parent();
		___parent.addClass('edit-mode');
});

$('.btn-canel-fields').click(function(event) {
		___parent = $(this).parent().parent().parent();
		___parent.removeClass('edit-mode');
});

$('body').on('click', '.btn-show-box', function(event) {
	event.preventDefault();
	
	var _target = $(this).data('target'); 
	console.log(_target);
	$(_target).slideDown('slow', function() {
		
	});
	
});

$('body').on('click', '.btn-close-box', function(event) {
	event.preventDefault();
	
	var _target = $(this).data('target');
	console.log(_target);
	$(_target).slideUp('slow', function() {
		
	});
	
});