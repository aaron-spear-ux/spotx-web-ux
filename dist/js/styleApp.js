// app.js

define([
  "angularjs",
  "ngRoute",
  "ngAnimate",
  "ui.bootstrap",
  "ui.grid",
  "ng-grid",
  "smart-table",
  "perfect_scrollbar",
  "highcharts-ng",
  "lrDragNDrop",
  "dirPagination",
], function (angular) {
  var styleApp = angular.module("styleApp", [
    "ngRoute",
    "ngAnimate",
    "ui.bootstrap",
    "ngGrid",
    "ui.grid",
    "ui.grid.moveColumns",
    "ui.grid.pagination",
    "ui.grid.selection",
    "smart-table",
    "perfect_scrollbar",
    "highcharts-ng",
    "ngClipboard",
    "lrDragNDrop",
    "angularUtils.directives.dirPagination",
  ]);

  // configure our routes
  styleApp.config(function ($routeProvider) {
    $routeProvider

      .when("/", {
        templateUrl: "pages/overview.html",
        controller: "overviewController",
      })

      .when("/overview", {
        templateUrl: "pages/overview.html",
        controller: "overviewController",
      })

      .when("/logo", {
        templateUrl: "pages/logo.html",
        controller: "logoController",
      })

      .when("/colors", {
        templateUrl: "pages/colors.html",
        controller: "colorsController",
      })

      .when("/typography", {
        templateUrl: "pages/typography.html",
        controller: "typographyController",
      })

      .when("/layout", {
        templateUrl: "pages/layout.html",
        controller: "layoutController",
      })

      .when("/forms", {
        templateUrl: "pages/forms.html",
        controller: "formsController",
      })

      .when("/buttons", {
        templateUrl: "pages/buttons.html",
        controller: "buttonsController",
      })

      .when("/tables", {
        templateUrl: "pages/tables.html",
        controller: "tablesController",
      })

      .when("/css", {
        templateUrl: "pages/css.html",
        controller: "cssController",
      })

      .when("/icons", {
        templateUrl: "pages/icons.html",
        controller: "iconsController",
      })

      .when("/graphs", {
        templateUrl: "pages/graphs.html",
        controller: "graphsController",
      })

      .when("/pagenotfound", {
        templateUrl: "pages/pagenotfound.html",
        controller: "pagenotfoundController",
      })

      .when("/loading", {
        templateUrl: "pages/loading.html",
        controller: "loadingController",
      })

      // SX-STYLES

      .when("/", {
        templateUrl: "sx-pages/sx-prototypes.html",
        controller: "overviewController",
      })

      .when("/sx-prototypes", {
        templateUrl: "sx-pages/sx-prototypes.html",
        controller: "overviewController",
      })

      .when("/sx-logo", {
        templateUrl: "sx-pages/sx-logo.html",
        controller: "logoController",
      })

      .when("/boost", {
        templateUrl: "sx-pages/boost.html",
        controller: "colorsController",
      })

      .when("/flexbox", {
        templateUrl: "sx-pages/flexbox.html",
        controller: "flexController",
      })

      .when("/css-less", {
        templateUrl: "sx-pages/css-less.html",
        controller: "cssController",
      })

      .when("/sx-typography", {
        templateUrl: "sx-pages/sx-typography.html",
        controller: "typographyController",
      })

      .when("/sx-forms", {
        templateUrl: "sx-pages/sx-forms.html",
        controller: "formsController",
      })

      .when("/sx-buttons", {
        templateUrl: "sx-pages/sx-buttons.html",
        controller: "buttonsController",
      })

      .when("/sx-tables", {
        templateUrl: "sx-pages/sx-tables.html",
        controller: "tablesController",
      })

      .when("/sx-graphs", {
        templateUrl: "sx-pages/sx-graphs.html",
        controller: "graphsController",
      })

      .when("/sx-pagenotfound", {
        templateUrl: "sx-pages/sx-404.html",
        controller: "pagenotfoundController",
      })

      .when("/sx-loading", {
        templateUrl: "sx-pages/sx-loading.html",
        controller: "loadingController",
      });
  });
  return styleApp;
});
