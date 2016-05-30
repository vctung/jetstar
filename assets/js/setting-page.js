$('.btn-edit-fields').click(function(event) {
		___parent = $(this).parent().parent().parent();
		___parent.addClass('edit-mode');
});

$('.btn-canel-fields').click(function(event) {
		___parent = $(this).parent().parent().parent();
		___parent.removeClass('edit-mode');
});