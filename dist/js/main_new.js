require.config({
  baseUrl: "dist/js",
  map: {
    "*": {
      less: "requirejs/require-less/less", // path to less
      css: "requirejs/require-css/css", // path to css
    },
  },
  paths: {
    angularjs: "lib/angular.min",
    ngRoute: "lib/angular-route.min",
    ngAnimate: "lib/angular-animate.min",
    jquery: "lib/jquery-1.11.2.min",
    bootstrap: "lib/bootstrap.bundle.min",
    "ui.bootstrap": "lib/ui-bootstrap.min",
    "bootstrap-input": "lib/bootstrap-input",
    sortable: "lib/jquery-sortable",
    perfect_scrollbar: "lib/angular-perfect-scrollbar",
    "smart-table": "lib/smart-table.min",
    lrDragNDrop: "lib/lrDragNDrop",
    select2: "lib/select2-4.0.4/js/select2.full",
    prism: "lib/prism/prism",
    "ui.grid": "lib/ui-grid",
    "ng-grid": "lib/ng-grid",
    timepicker: "lib/timepicker",
    "highcharts-ng": "lib/highcharts-ng",
    "viewport-fix": "lib/ie10-viewport",
    prettify: "lib/prettify",
    zeroclipboard: "lib/ng-clip",
    modernizr: "lib/modernizr",
    draggable: "lib/Draggable.min",
    tween: "lib/TweenMax.min",
    tweenlite: "lib/TweenLite.min",
    cssplugin: "lib/CSSPlugin",
    dirPagination: "lib/dirPagination",
    styleApp: "styleApp",
  },

  shim: {
    angularjs: {
      deps: ["jquery"],
    },
    ngAnimate: {
      exports: "ngAnimate",
      deps: ["angularjs", "jquery"],
    },
    ngRoute: {
      exports: "ngRoute",
      deps: ["angularjs"],
    },
    angularjs: {
      exports: "angular",

      deps: ["jquery"],
    },
    sortable: {
      deps: ["jquery"],
    },
    madm: {
      deps: ["jquery"],
    },
    bootstrap: {
      deps: ["jquery"],
      exports: "jQuery.fn.modal",
    },
    "ui.bootstrap": {
      deps: ["angularjs"],
    },
    "bootstrap-input": {
      deps: ["jquery"],
    },
    "ui.grid": {
      deps: ["angularjs"],
    },
    "ng-grid": {
      deps: ["angularjs"],
    },
    perfect_scrollbar: {
      deps: ["angularjs", "lib/perfect-scrollbar.min"],
    },
    "lib/perfect-scrollbar.min": {
      deps: ["jquery", "lib/jquery.mousewheel"],
    },
    "lib/jquery.mousewheel": {
      deps: ["jquery"],
    },
    timepicker: {
      deps: ["jquery"],
    },
    prettify: {
      deps: ["jquery"],
    },
    zeroclipboard: {
      deps: ["angularjs", "zeroclipboardfix"],
    },
    "lib/zeroclipboard": {
      deps: ["jquery"],
    },
    select2: {
      deps: ["jquery"],
    },
    prism: {
      deps: ["jquery"],
    },
    util: {
      deps: ["jquery"],
    },
    "smart-table": {
      deps: ["angularjs"],
    },
    lrDragNDrop: {
      deps: ["angularjs"],
    },
    "highcharts-ng": {
      deps: [
        "angularjs",
        "lib/highcharts.src",
        "lib/highcharts-more",
        "lib/highcharts-maps",
      ],
    },
    dirPagination: {
      deps: ["angularjs"],
    },
    "lib/highcharts.src": {
      deps: ["jquery"],
    },
    "lib/highcharts-more": {
      deps: ["jquery"],
    },
    "lib/highcharts-maps": {
      deps: ["jquery"],
    },
    draggable: {
      deps: ["jquery"],
    },
    tween: {
      deps: ["jquery"],
    },
    tweenlite: {
      deps: ["jquery"],
    },
    cssplugin: {
      deps: ["jquery"],
    },
    loading: {
      deps: ["jquery"],
    },
  },
});
// ZeroClipboard is modularized but ng-clip is not. Ng-clip can't find ZeroClipboard. Below is a fix.
define("zeroclipboardfix", ["lib/zeroclipboard"], function (zeroclipboard) {
  window.ZeroClipboard = zeroclipboard;
});
define([
  "angularjs",
  "styleApp",
  "controllers",
  "directives",
  "filters",
  "services",
  "bootstrap",
  "bootstrap-input",
  "sortable",
  "timepicker",
  "select2",
  "prism",
  "prettify",
  "zeroclipboard",
  "util",
  "madm",
  "loading",
  "draggable",
  "tween",
  "tweenlite",
  "cssplugin",
  "perfect_scrollbar",
  "lrDragNDrop",
  "dirPagination",
  "css!../../../../assets/css/style",
], function (angular, uxModule) {
  "use strict";
  return uxModule;
});
