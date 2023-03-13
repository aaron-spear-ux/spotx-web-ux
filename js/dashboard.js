// Highcharts won't automatically set its height and won't adjust
// its width, so we need to set height and call reflow.
function resizeChart(elem) {
	var $elem = $(elem);
	var $chart = $(elem).find('> div > div');
	$chart.find('> div').height($elem.height());
	Highcharts.charts[$chart.data('highchartsChart')].reflow();
}



// Prepare demo data
var mapData = [
    {
        "hc-key": "na",
        "value": 0
    },
    {
        "hc-key": "oc",
        "value": 1
    },
    {
        "hc-key": "af",
        "value": 2
    },
    {
        "hc-key": "as",
        "value": 3
    },
    {
        "hc-key": "eu",
        "value": 4
    },
    {
        "hc-key": "sa",
        "value": 5
    }
];


Highcharts.chart('container', {
    chart: {
        type: 'line'
    },
    options: {
        legend: {
            align: 'center',
            shadow: false
        }
    },
    title: {
        text: 'Revenue & Fill Rate',
        align: 'left',
        x: 65,
        style: {
            fontSize: '24px',
            fontFamily: 'Open Sans, "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontWeight: 300
        }
    },
    xAxis: {
        categories: ['July 6', 'July 7', 'July 8', 'July 9', 'July 10', 'July 11', 'July 12']
    },
    yAxis: [{
        lineWidth: 1,
        title: {
            text: 'Revenue',
            style: {'color': '#1B9DD0'}
        },
        labels: {
            formatter: function () {
                return this.value + 'k';
            },
            style: {'color': '#1B9DD0'}
        }
    }, {
        lineWidth: 1,
        opposite: true,
        title: {
            text: 'Fill Rate',
            style: {'color': '#8EC641'}
        },
        labels: {
            formatter: function () {
                return this.value + '%';
            },
            style: {'color': '#8EC641'}
        }
    }],
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: true
        }
    },
    series: [{
        name: 'Revenue',
        data: [4.4, 4.3, 4.4, 4.2, 4.2, 4.4, 4.3],
        color: '#1B9DD0',
        yAxis: 1
    }, {
        name: 'Fill Rate',
        data: [6.2, 6.4, 6.3, 6.2, 6.3, 6.2, 6.3],
        color: '#8EC641'
    }]
});


Highcharts.chart('container2', {
    chart: {
        type: 'column'
    },
    options: {
        legend: {
            align: 'center',
            shadow: false
        }
    },
    title: {
        text: 'Yesterday & Today',
        align: 'left',
        x: 20,
        style: {
            fontSize: '22px',
            fontFamily: 'Open Sans, "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontWeight: 300
        }
    },
    subtitle: {
        text: 'GMT Timezone',
        align: 'left',
        x: 20,
        style: {
            fontSize: '12px',
            fontFamily: 'Open Sans, "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontWeight: 300
        }
    },
    legend: {
        shadow: false
    },
    xAxis: {
        categories: ['Revenue', 'Fill Rate']
    },
    yAxis: {
        visible: false
    },
    plotOptions: {
        column: {}
    },
    series: [{
        name: 'April 16',
        color: '#ddd',
        data: [[.015, 175], [1, 75]],
        pointPadding: -0.4
    }, {
        name: 'April 17',
        color: '#1B9DD0',
        data: [[.205, 150], null],
        pointPadding: -0.4
    }, {
        linkedTo:':previous',
        name: '04/12/2017',
        color: '#8EC641',
        data: [null, [1, 90]],
        pointPadding: -0.4
    }]
});


Highcharts.mapChart('container5', {
    title: {
        text: 'Region',
        align: 'left',
        x: 20,
        style: {
            fontSize: '22px',
            fontFamily: 'Open Sans, "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontWeight: 300
        }
    },
    series : [{
        name: 'Impressions',
        data: mapData,
        color: '#EB8C06',
        mapData: Highcharts.maps['custom/world-continents'],
        joinBy: 'hc-key'
    }, {
        name: 'Ads Available',
        data: mapData,
        color: '#8EC641',
        mapData: Highcharts.maps['custom/world-continents'],
        joinBy: 'hc-key'
    }, {
        name: 'Ad Slots',
        data: mapData,
        color: '#1B9DD0',
        mapData: Highcharts.maps['custom/world-continents'],
        joinBy: 'hc-key'
    }]
});


Highcharts.chart('container4', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Traffic by Device Type',
        align: 'left',
        x: 20,
        style: {
            fontSize: '22px',
            fontFamily: 'Open Sans, "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontWeight: 300
        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Device',
        colorByPoint: true,
        data: [{
            name: 'Desktop',
            y: 61.41,
            sliced: true,
            selected: true,
            color: '#1B9DD0'
        }, {
            name: 'Mobile Device',
            y: 11.84,
            color: '#7B0051'
        }, {
            name: 'Connected TV',
            y: 10.85,
            color: '#8EC641'
        }, {
            name: 'Tablet',
            y: 4.18,
            color: '#EB8C06'
        }]
    }]
});


Highcharts.chart('container3', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Ad Slots',
        align: 'left',
        x: 20,
        style: {
            fontSize: '22px',
            fontFamily: 'Open Sans, "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontWeight: 300
        }
    },
    xAxis: {
        categories: ['April 14', 'April 15', 'April 16', 'April 17']
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'Impressions',
        data: [5, 3, 4, 7],
        color: '#1B9DD0'
    }, {
        name: 'Ads Available',
        data: [2, 2, 3, 2],
        color: '#7B0051'
    }, {
        name: 'Ad Slots',
        data: [3, 4, 4, 2],
        color: '#8EC641'
    }]
});



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
	//$('.level-1').removeClass('active');
	$(this).toggleClass('active');
	event.preventDefault()
});

$('.btn-history').click(function(){
	$('body').toggleClass('history');
});

$('.close-history').click(function(){
	$('body').removeClass('history');
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

$('.parent-row').click(function(){
	$(this).parent().toggleClass('expand');
});

$('.top-link').click(function (e) {
	$(this).parents().eq(3).addClass('close-nav-drop');
	$(this).siblings().removeClass('open');
	$(this).toggleClass('open');
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

$(document).ready(function() {
    $('.select2').select2();
	$('.select2-multiple').select2();
	$('.select2-tag').select2({
		tags: true
	});
	$('.select2-sm').select2({
		containerCssClass: 'select2-control-sm',
		tags: true
	});
});









