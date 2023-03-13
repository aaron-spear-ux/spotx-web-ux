$(document).ready(function() {
    $('.offset-select').select2({
        placeholder: "select an endpoint",
        allowClear: true
    });
	$(".offset-select").on("select2:select", function (e) { 
		var select_val = $('.offset-select :selected').text();
        document.getElementById('offset-name').innerHTML = select_val;
        var select_val_class = $('.offset-select :selected').text().replace(/\s+/g, '').toLowerCase();
        $(this).parents().eq(2).removeClass('everynseconds');
        $(this).parents().eq(2).removeClass('fixedtimestamps');
        $(this).parents().eq(2).removeClass('percentage');
        $(this).parents().eq(2).removeClass('sequence');
        $(this).parents().eq(2).addClass(select_val_class);
    });
    $('.add-midroll').click(function(){
        $(this).parents().eq(1).addClass('show-row');
    });
    $('.remove-line').click(function(){
        $(this).parent(s().eq(4)).removeClass('show-row');
    });
});

$(function () {
    $('.seconds').spinner({
        step: 5,
        spin: function (event, ui) {
            if (ui.value >= 60) {
                $(this).spinner('value', ui.value - 60);
                $('.minutes').spinner('stepUp');
                return false;
            } else if (ui.value < 0) {
                $(this).spinner('value', ui.value + 60);
                $('.minutes').spinner('stepDown');
                return false;
            }
        }
    });
    $('.minutes').spinner({
        spin: function (event, ui) {
            if (ui.value >= 60) {
                $(this).spinner('value', ui.value - 60);
                return false;
            } else if (ui.value < 0) {
                $(this).spinner('value', ui.value + 60);
                return false;
            }
        }
    });
});