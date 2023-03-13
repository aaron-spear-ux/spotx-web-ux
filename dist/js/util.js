// OPEN Nav
// ========================
$('.leftmenu-trigger').click(function(){
	$('body').toggleClass('left-nav-open');
	$('body').toggleClass('mobile-nav-open');
	$(this).toggleClass('active');
	event.preventDefault()
});

$('.nav-side li.level-1').click(function(){
	$('.level-1').removeClass('active');
	$(this).toggleClass('active');
});

$('.minimize-toggle').click(function(){
	$('body').toggleClass('maximize');
	$('body').removeClass('shift-right');
	$('.main').removeClass('preview-show');
	$('.main').removeClass('sidebar-show');
	//$('.level-1').removeClass('active');
	$(this).toggleClass('active');
	event.preventDefault()
});

$('.search').parent().click(function(){
	$(this).parents().eq(6).toggleClass('search-open');
	$("#sitewide").focus();
	event.preventDefault()
});

$('.search-expanded .close-search').click(function(){
	$(this).parents().eq(3).toggleClass('search-open');
	event.preventDefault()
});

$('.add-creative').click(function(){
	$(this).parent().toggleClass('modal-open');
	event.preventDefault()
});

$('.close-alert').click(function(){
	$(this).parent().addClass('alert-close');
	event.preventDefault()
});

// $('.pill-container .pill').click(function(){
// 	//$('.pill-container').removeClass('pill-box-open');
// 	$(this).parent().siblings().removeClass('pill-box-open');
// 	$(this).parent().toggleClass('pill-box-open');
// 	event.preventDefault()
// });

$('.close-nav').click(function(){
	$(this).parents().eq(1).toggleClass('active');
	event.preventDefault()
});

$('.banner-show').click(function(){
	$(this).parents().eq(5).toggleClass('show-banner');
});

$('.drop-arrow').click(function(){
	$(this).parents().eq(3).siblings().removeClass('active');
	$(this).parents().eq(3).toggleClass('active');
});

$('.upload-video-btn').click(function(){
	$(this).parents().eq(1).addClass('upload-show');
});

$('.hide-upload-btn').click(function(){
	$(this).parents().eq(4).toggleClass('upload-show');
});

$('.create-name').click(function(){
	$(this).parents().eq(8).toggleClass('preview-show');
	$(this).parents().eq(11).toggleClass('shift-right');
	$(this).parents().eq(11).removeClass('maximize');
});

$('.filter-selection').click(function(){
	$(this).parent().toggleClass('filter-active');
	$(this).parents().eq(8).toggleClass('preview-show');
	$(this).parents().eq(11).toggleClass('shift-right');
	$(this).parents().eq(11).removeClass('maximize');
});

$('.cancel-filter').click(function(){
	$(this).parents().eq(3).toggleClass('preview-show');
	$(this).parents().eq(6).toggleClass('shift-right');
	$(this).parents().eq(6).removeClass('maximize');
});

$("input#filter-file").change(function () {
	$(this).parents().eq(4).addClass('filter-active');
	$(this).parents().eq(5).toggleClass('show-filter-number');
});

$('.close-preview').click(function(){
	$(this).parents().eq(4).toggleClass('preview-show');
	$(this).parents().eq(7).removeClass('shift-right');
});

$('.close-exclusion-preview').click(function(){
	$(this).parents().eq(6).toggleClass('preview-show');
	$(this).parents().eq(9).removeClass('shift-right');
});

$('.collapse-filter').click(function(){
	$(this).parent().toggleClass('filter-collapse');
});

$('.btn-forecast').click(function(){
	$(this).parents().eq(2).toggleClass('sidebar-show');
	$(this).parents().eq(5).toggleClass('shift-right');
	$(this).parents().eq(5).removeClass('maximize');
});

$('.show-sidebar').click(function(){
	$(this).parents().eq(1).toggleClass('sidebar-show');
	$(this).parents().eq(4).toggleClass('shift-right');
	$(this).parents().eq(4).removeClass('maximize');
});

$('.close-sidebar').click(function(){
	$(this).parents().eq(5).removeClass('sidebar-show');
	$(this).parents().eq(8).removeClass('shift-right');
});

$('.btn-sidebar').click(function(){
	$(this).parents().eq(6).removeClass('sidebar-show');
	$(this).parents().eq(9).removeClass('shift-right');
});

$('.validate').click(function(){
	$(this).parents().eq(3).toggleClass('validation-active');
	$(this).parents().eq(4).toggleClass('validation-active');
	$("html, body").animate({ scrollTop: 0 }, 300);
	setTimeout(function() {
		$('.alert').addClass("alert-close");
	}, 5000);
	event.preventDefault()
});

$('.validate-lisa').click(function(){
	$(this).parents().eq(4).toggleClass('validation-active');
	$("html, body").animate({ scrollTop: 0 }, 300);
	setTimeout(function() {
		$('.alert-red').addClass("alert-close");
	}, 5000);
	event.preventDefault()
});

$(".required-control").on('focus blur', function(){
	$(this).parents().eq(3).removeClass('invalid');
	$(this).parents().eq(1).removeClass('invalid');
})

$('.open-step1').click(function(){
	$(this).parents().eq(3).removeClass('step2-open');
	$('html,body').scrollTop(0);
	event.preventDefault()
});


$('.open-step2').click(function(){
	$(this).parents().eq(4).addClass('step2-open');
	$(this).parents().eq(4).removeClass('step3-open');
	$('html,body').scrollTop(0);
	event.preventDefault()
});

$('.open-step3').click(function(){
	$(this).parents().eq(3).addClass('step3-open');
	$(this).parents().eq(3).removeClass('step2-open');
	$('html,body').scrollTop(0);
	event.preventDefault()
});

$('.close-modal').click(function(){
	$(this).parents().eq(4).removeClass('modal-open');
	$(this).parents().eq(3).removeClass('step2-open');
	$(this).parents().eq(3).removeClass('step3-open');
	$(this).parents().eq(3).removeClass('step4-open');
	event.preventDefault()
});

$('.pagination a').click(function(){
	$(this).addClass('active');
});

$('.top-link').click(function (e) {
	$(this).parents().eq(3).addClass('close-nav-drop');
	$(this).siblings().removeClass('open');
	$(this).toggleClass('open');
	e.stopPropagation();
});

$('.modal-container .nav-tabs li').click(function (e) {
	$(this).siblings().removeClass('active');
	$(this).toggleClass('active');
	e.stopPropagation();
});

$('.modal-container .nav-tabs .library').click(function (e) {
	$(this).parent().addClass('active');
	e.stopPropagation();
});

$(document).click(function(){
	$(".top-link").removeClass('open');
	$(".create-container").removeClass('open');
});

$('.create').click(function(e){
	$(this).parent().toggleClass('open');
	e.stopPropagation();
});

$('.sidebar-minimized .level-1').click(function(){
	$(this).siblings().removeClass('active');
	$(this).toggleClass('active');
	event.preventDefault()
});

$('.nav-tabs li').click(function(){
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
	event.preventDefault()
});

$('.calendar-toggle').click(function(){
    $(this).parents().eq(2).addClass('calendar-open');
});

$('.revenue').click(function(){
	$(this).parents().eq(3).addClass('revenue-show');
	$(this).parents().eq(3).removeClass('traffic-show');
	$(this).parents().eq(3).removeClass('quality-show');
	$(this).parents().eq(3).removeClass('report-show');
	$(this).parents().eq(3).removeClass('campaign-show');
});

$('.traffic').click(function(){
	$(this).parents().eq(3).addClass('traffic-show');
	$(this).parents().eq(3).removeClass('revenue-show');
	$(this).parents().eq(3).removeClass('quality-show');
	$(this).parents().eq(3).removeClass('report-show');
	$(this).parents().eq(3).removeClass('campaign-show');
});

$('.quality').click(function(){
	$(this).parents().eq(3).addClass('quality-show');
	$(this).parents().eq(3).removeClass('traffic-show');
	$(this).parents().eq(3).removeClass('revenue-show');
	$(this).parents().eq(3).removeClass('report-show');
	$(this).parents().eq(3).removeClass('campaign-show');
});

$('.report').click(function(){
	$(this).parents().eq(3).addClass('report-show');
	$(this).parents().eq(3).removeClass('traffic-show');
	$(this).parents().eq(3).removeClass('revenue-show');
	$(this).parents().eq(3).removeClass('quality-show');
	$(this).parents().eq(3).removeClass('campaign-show');

	$('.form-container').addClass('report-show');
	$('.form-container').removeClass('traffic-show');
	$('.form-container').removeClass('revenue-show');
	$('.form-container').removeClass('quality-show');
	$('.form-container').removeClass('campaign-show');

	$('body').addClass('hide-widget');
});

$('.campaign').click(function(){
	$('.form-container').addClass('campaign-show');
	$('.form-container').removeClass('traffic-show');
	$('.form-container').removeClass('revenue-show');
	$('.form-container').removeClass('quality-show');
	$('.form-container').removeClass('report-show');

	$('body').addClass('hide-widget');
});

$('.performance').click(function(){
	$('.form-container').addClass('revenue-show');
	$('.form-container').removeClass('traffic-show');
	$('.form-container').removeClass('campaign-show');
	$('.form-container').removeClass('quality-show');
	$('.form-container').removeClass('report-show');

	$('body').removeClass('hide-widget');
});

$('.traffic').click(function(){
	$('.form-container').addClass('traffic-show');
	$('.form-container').removeClass('revenue-show');
	$('.form-container').removeClass('campaign-show');
	$('.form-container').removeClass('quality-show');
	$('.form-container').removeClass('report-show');

	$('body').removeClass('hide-widget');
});

$('.quality').click(function(){
	$('.form-container').addClass('quality-show');
	$('.form-container').removeClass('revenue-show');
	$('.form-container').removeClass('campaign-show');
	$('.form-container').removeClass('traffic-show');
	$('.form-container').removeClass('report-show');

	$('body').removeClass('hide-widget');
});


$('.col-lg .fa-calendar-plus-o').click(function(e){
    $(this).parents().eq(1).toggleClass('full');
    e.preventDefault()
});

$('.col-lg .fa-clock-o').click(function(e){
    $(this).parent().toggleClass('set-time');
    e.preventDefault()
});

$('.col-lg .calendar-week').click(function(e){
    $(this).parents().eq(2).toggleClass('full');
    e.preventDefault()
});

$(document).on("keyup", "input.form-control", function(){
  $(this).parent().toggleClass("error", (this.value==""));
});

$('.auto-gran-btn').click(function(){
	$(this).parents().eq(3).removeClass('dense-gran-show');
	$(this).parents().eq(3).addClass('auto-gran-show');
});

$('.dense-gran-btn').click(function(){
	$(this).parents().eq(3).removeClass('auto-gran-show');
	$(this).parents().eq(3).addClass('dense-gran-show');
});

$('.creative-btn').click(function(){
	$(this).parents().eq(3).removeClass('creative-set-show');
	$(this).parents().eq(3).addClass('creative-show');
});

$('.creative-set-btn').click(function(){
	$(this).parents().eq(3).removeClass('creative-show');
	$(this).parents().eq(3).addClass('creative-set-show');
});

$('.creative-new-btn').click(function(){
	$(this).parents().eq(3).removeClass('creative-existing-show');
	$(this).parents().eq(3).addClass('creative-new-show');
});

$('.creative-existing-btn').click(function(){
	$(this).parents().eq(3).removeClass('creative-new-show');
	$(this).parents().eq(3).addClass('creative-existing-show');
});

$('.radio-custom label.auto-gran-label').click(function(){
	$(this).parents().eq(4).removeClass('dense-gran-show');
	$(this).parents().eq(4).addClass('auto-gran-show');
});

$('.radio-custom label.dense-gran-label').click(function(){
	$(this).parents().eq(4).removeClass('auto-gran-show');
	$(this).parents().eq(4).addClass('dense-gran-show');
});

$('.creative-new-label').click(function(){
	$(this).addClass('active');
	$('.creative-existing-label').removeClass('active');
	$(this).parents().eq(3).removeClass('creative-existing-show');
	$(this).parents().eq(3).addClass('creative-new-show');
});

$('.creative-existing-label').click(function(){
	$(this).addClass('active');
	$('.creative-new-label').removeClass('active');
	$(this).parents().eq(3).removeClass('creative-new-show');
	$(this).parents().eq(3).addClass('creative-existing-show');
});

$('.tab-one').click(function(){
	$(this).parents().eq(3).removeClass('tab-two-show');
	$(this).parents().eq(3).removeClass('tab-three-show');
	$(this).parents().eq(3).addClass('tab-one-show');
});

$('.tab-two').click(function(){
	$(this).parents().eq(3).addClass('tab-two-show');
	$(this).parents().eq(3).removeClass('tab-three-show');
	$(this).parents().eq(3).removeClass('tab-one-show');
});

$('.tab-three').click(function(){
	$(this).parents().eq(3).removeClass('tab-two-show');
	$(this).parents().eq(3).addClass('tab-three-show');
	$(this).parents().eq(3).removeClass('tab-one-show');
});

$(document).ready(function() {
	$('.select2-multiple').select2();
	$('.select2-tag').select2({
		tags: true
	});
	$('.select2-sm').select2({
		containerCssClass: 'select2-control-sm',
		tags: true
	});
});

$('.adv_picker').on("select2-selecting", function(e) {
  $(this).parents().eq(3).toggleClass('adv_chosen');
});

$('.adv_picker').on("select2:select", function(e) { 
	$(this).parents().eq(3).toggleClass('adv_chosen');
});

$('.radio-specific').click(function(){
    $(this).parent().addClass('specific');
});

$('.radio-user').click(function(){
    $(this).parent().removeClass('specific');
});

$('.twelve-active').click(function(e){
    $(this).parents().eq(2).removeClass('switch-time');
    e.preventDefault()
});

$('.twenty-four-active').click(function(e){
    $(this).parents().eq(2).addClass('switch-time');
    e.preventDefault()
});

$('.display-def').click(function(e){
    $(this).parents().eq(2).toggleClass('definitions');
    e.preventDefault()
});

$('.btn-login').click(function(){
	$(this).parents().eq(2).addClass('logged-in');
	setTimeout(function() {
		$('.alert-green').addClass("alert-close");
	}, 5000);
});

$('.open-banner-upload').click(function(){
	$("html, body").animate({ scrollTop: $(document).height()-$(window).height() });
});

$(".bg-grad").mousemove(function(e) {
	parallaxIt(e, ".msg-container", -30);
	parallaxIt(e, ".login-bg", -100);
});

function parallaxIt(e, target, movement) {
	var $this = $(".bg-grad");
	var relX = e.pageX - $this.offset().left;
	var relY = e.pageY - $this.offset().top;

	TweenMax.to(target, 1, {
			x: (relX - $this.width() / 2) / $this.width() * movement,
			y: (relY - $this.height() / 2) / $this.height() * movement
	});
}

var range = $('#range');
range.on("select2:select", function(event) {
	var value = $(event.currentTarget).find("option:selected").val();
	$("#settings").toggleClass(value.replace(/\s/g, ''));
	console.log(value.replace(/\s/g, ''));
});

// var countdownNumberEl = document.getElementById('countdown-number');
// var countdown = 60;

// countdownNumberEl.textContent = countdown;

// setInterval(function() {
//   countdown = --countdown <= 0 ? 60 : countdown;

//   countdownNumberEl.textContent = countdown;
// }, 170);


// SLIDER
// ========================
var rangeSlider = function(){
  var slider = $('.range-slider'),
      range = $('.range-slider__range'),
      value = $('.range-slider__value');
    
  slider.each(function(){

    value.each(function(){
      var value = $(this).prev().attr('value');
      $(this).html(value);
    });

    range.on('input', function(){
      $(this).next(value).html(this.value);
    });
  });
};

rangeSlider();


// NAV
// ========================
$(function() {
  var loc = window.location.href;
  if(/overview/.test(loc)) {
    $('.nav .overview').addClass('active');
  } else if(/logo/.test(loc)) {
	  $('.nav .logos').addClass('active');
  } else if(/colors/.test(loc)) {
	  $('.nav .colors').addClass('active');
  } else if(/typography/.test(loc)) {
	  $('.nav .typography').addClass('active');
  } else if(/layout/.test(loc)) {
	  $('.nav .layout').addClass('active');	  
	} else if(/forms/.test(loc)) {
	  $('.nav .forms').addClass('active');
	} else if(/buttons/.test(loc)) {
	  $('.nav .buttons').addClass('active');
	} else if(/tables/.test(loc)) {
	  $('.nav .tables').addClass('active');
	} else if(/graphs/.test(loc)) {
	  $('.nav .graphs').addClass('active');
	} else if(/css/.test(loc)) {
	  $('.nav .css').addClass('active');
	} else if(/icons/.test(loc)) {
	  $('.nav .icons').addClass('active');
	}
});



// COPY TO CLIPBOARD
// ========================
function copyToClipboard (text) {
  window.prompt ("Copy to clipboard: Ctrl+C, Enter", text);
}

$('.prettyprint').click(function(text) {
  window.prompt ("Copy to clipboard: Ctrl+C, Enter", text);
});


// Resize
// ========================

$(document).ready(function () {
  updateContainer();
  $(window).resize(function() {
    updateContainer();
  });
});

function updateContainer() {
  var $containerWidth = $(window).width();
  $(".scroller").perfectScrollbar('update'); 
	$('.mobile-nav li a').click(function() {
	  $('body').removeClass('mobile-nav-open');
	  $('.leftmenu-trigger').toggleClass('active');
	});  
  if ($containerWidth <= 768) {
    $('body').removeClass('left-nav-open');
    $('body').removeClass('mobile-nav-open');
    $('.leftmenu-trigger').removeClass('active');
  } else {
  	$('.ux-guide').addClass('left-nav-open');
  	$('.leftmenu-trigger').addClass('active');
  }
}






// $.getJSON(
//   'https://cdn.rawgit.com/highcharts/highcharts/057b672172ccc6c08fe7dbb27fc17ebca3f5b770/samples/data/usdeur.json',
//   function (data) {

//     Highcharts.chart('container', {
//       chart: {
//         margin: 0,
// 				height: 300,
// 				reflow: true
//       },
//       title: {
//         text: 'USD to EUR exchange rate over time'
//       },
//       subtitle: {
//         text: document.ontouchstart === undefined ?
//             'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
//       },
//       xAxis: {
//         type: 'datetime'
//       },
//       yAxis: {
//         title: {
//           text: 'Exchange rate'
//         }
//       },
//       legend: {
//         enabled: false
//       },
//       plotOptions: {
//         area: {
//           fillColor: {
//             linearGradient: {
//               x1: 0,
//               y1: 0,
//               x2: 0,
//               y2: 1
//             },
//             stops: [
//               [0, Highcharts.getOptions().colors[0]],
//               [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
//             ]
//           },
//           marker: {
//             radius: 2
//           },
//           lineWidth: 1,
//           states: {
//             hover: {
//               lineWidth: 1
//             }
//           },
//           threshold: null
//         }
//       },

//       series: [{
//         type: 'area',
//         name: 'USD to EUR',
//         data: data
//       }]
//     });
//   }
// );