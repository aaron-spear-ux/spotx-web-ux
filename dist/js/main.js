require.config({
	baseUrl: "../dist/js",
    map: {
        '*': {
        'less': 'requirejs/require-less/less', // path to less
        'css': 'requirejs/require-css/css' // path to css
        }
    },	
	paths: {
		"angularjs": "lib/angular.min",
		"ngRoute": "lib/angular-route.min",
		"ngAnimate": "lib/angular-animate.min",
    "jquery": "lib/jquery-1.11.2.min",
		"ui.bootstrap": "lib/ui-bootstrap.min",
		"bootstrap-input": "lib/bootstrap-input",
		"sortable": "lib/jquery-sortable",
		"perfect_scrollbar": "lib/angular-perfect-scrollbar",
		"smart-table": "lib/smart-table.min",
		"lrDragNDrop": "lib/lrDragNDrop",
    "select2": "lib/select2-4.0.4/js/select2.full",
		"ui.grid": "lib/ui-grid",
		"ng-grid": "lib/ng-grid",
		"timepicker": "lib/timepicker",
		"highcharts-ng": "lib/highcharts-ng",
		"viewport-fix": "lib/ie10-viewport",
    "prettify": "lib/prettify",
    "jquery-ui": "lib/jquery-ui.min",
    "jquery-progress": "lib/jquery.ui.progressbar",
		"zeroclipboard": "lib/ng-clip",
    "modernizr": "lib/modernizr",
		"dirPagination": "lib/dirPagination",
		"styleApp": "styleApp"
	},
	
  shim: {
		'angularjs': {
			deps: [
				"jquery"
			]
		},    
    "ngAnimate": {
      exports: "ngAnimate",

      deps: [
        "angularjs",
        "jquery"
      ]
    },
    "ngRoute": {
      exports: "ngRoute",

      deps: [
        "angularjs"
      ]
    }, 
    "angularjs": {
      exports: "angular",
      
      deps: [
	      "jquery"
      ]
    },
    "sortable": {
      deps: [
        "jquery"
      ]
    },
    "jquery-ui": {
      deps: [
        "jquery"
      ]
    },
    "jquery-progress": {
      deps: [
        "jquery",
        "jquery-ui"
      ]
    },
    "bootstrap-input": {
      deps: [
        "jquery"
      ]
    },    
    "bootstrap": {
      deps: [
        "jquery"
      ],
      exports: "jQuery.fn.modal"
    },
    "ui.bootstrap": {
      deps: [
        "angularjs"
      ]
    },  
    "ui.grid": {
      deps: [
        "angularjs"
      ]
    }, 
    "ng-grid": {
      deps: [
        "angularjs"
      ]
    },      
    "perfect_scrollbar": {
      deps: [
        "angularjs",
        "lib/perfect-scrollbar.min"
      ]
    },  
    "lib/perfect-scrollbar.min": {
      deps: [
				"jquery",
				"lib/jquery.mousewheel"
      ]
    }, 
    "lib/jquery.mousewheel": {
      deps: [
				"jquery"
      ]
    },                 
    "timepicker": {
      deps: [
        "jquery"
      ]
    },
    "prettify": {
      deps: [
        "jquery"
      ]
    }, 
    "zeroclipboard": {
      deps: [
        "angularjs",
        "zeroclipboardfix"
      ]
    },        
    "lib/zeroclipboard": {
      deps: [
        "jquery"
      ]
    },
    "select2": {
      deps: [
        "jquery"
      ]
    },
    "util": {
      deps: [
        "jquery"
      ]
    },
    "vmap": {
      deps: [
        "jquery"
      ]
    }, 
    "croc": {
      deps: [
        "jquery"
      ]
    },          
    "smart-table": {
      deps: [
        "angularjs"
      ]
    },
    "lrDragNDrop": {
      deps: [
        "angularjs"
      ]
    },       
    "highcharts-ng": {
      deps: [
        "angularjs",
        "lib/highcharts.src"
      ]
    },
    "dirPagination": {
      deps: [
        "angularjs"
      ]
    }, 
    "lib/highcharts.src": {
      deps: [
        "jquery"
      ]
    }          
  }
	
});

// ZeroClipboard is modularized but ng-clip is not. Ng-clip can't find ZeroClipboard. Below is a fix.
define("zeroclipboardfix",[
  "lib/zeroclipboard"  
],
function(zeroclipboard){
	window.ZeroClipboard = zeroclipboard;
});

define([
  "angularjs",
  "styleApp",
  "controllers",
  "directives",
  "filters",
  "services",
  "bootstrap-input",
  "sortable",
  "timepicker",
  "select2",
  "prettify",
  "jquery-ui",
  "jquery-progress",
  "zeroclipboard",
  "util",
  "vmap",
  "croc",
  "perfect_scrollbar",
  "lrDragNDrop",
  "dirPagination", 
  'css!../../../css/main'    
],
function(angular, uxModule){
    "use strict";
    return uxModule;
});




