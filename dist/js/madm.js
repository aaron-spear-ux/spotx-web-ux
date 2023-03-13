$(document).ready(function() {
	$('.endpoint-filter').select2({
		placeholder: "select an endpoint",
		containerCssClass: 'select2-control-sm',
		allowClear: true
	});
	$('.status-filter').select2({
		placeholder: "select a status",
		containerCssClass: 'select2-control-sm',
		allowClear: true
	});
	$(".endpoint-filter").on("select2:select", function (e) { 
		$(this).parents().eq(7).addClass('show-endpoint-filter');
		//var select_val = $('.endpoint-filter :selected').text();
		//document.getElementById('endpoint-name').innerHTML = select_val;
	});
	$(".status-filter").on("select2:select", function (e) { 
		$(this).parents().eq(6).addClass('show-status-filter');
		//var select_val = $('.status-filter :selected').text();
		//document.getElementById('status-name').innerHTML = select_val;
	});
});

$('.endpoint-filter-pill .choice_remove').click(function(){
	$(this).parents().eq(2).removeClass('show-endpoint-filter');
});

$('.status-filter-pill .choice_remove').click(function(){
	$(this).parents().eq(2).removeClass('show-status-filter');
});

$('.btn-row').click(function(){
	$(this).parents().eq(3).removeClass('hide-row');
});

$('.remove-line').click(function(){
	$(this).parents().eq(7).addClass('hide-row');
});