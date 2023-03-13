// directives.js

define([
	"angularjs",
	"styleApp"
	
], function(angular, styleApp) {

	styleApp.directive('activenav', function() {
		return {
			link: function(scope, element, attrs) {
				element.bind('click', function() {
					$('.level-1').removeClass('active');
					$('.minimize-toggle').removeClass('active'); 
					element.parents().eq(5).removeClass('minimize');
					element.parents().eq(5).addClass('maximize');
					element.toggleClass('active');
				})
			},
		}
	});

	styleApp.directive('closesub', function() {
		return {
			link: function(scope, element, attrs) {
				element.bind('click', function() {
					$('.nav-drop').removeClass('active-sub');
					$('.nav-drop').removeClass('active-pub');
					$('.nav-drop').removeClass('active-adv');
					$('.collapse').removeClass('show');
					$(this).siblings().addClass('show');
					$('.side-bar').removeClass('search-open');
				})
			},
		}
	});

	styleApp.directive('activesubnav', function() {
		return {
			link: function(scope, element, attrs) {
				element.bind('click', function() {
					$(this).parent().toggleClass('active-sub');
				})
			},
		}
	});

	styleApp.directive('activepubnav', function() {
		return {
			link: function(scope, element, attrs) {
				element.bind('click', function() {
					$(this).parent().toggleClass('active-pub');
					$(this).parent().removeClass('active-adv');
				})
			},
		}
	});

	styleApp.directive('activeadvnav', function() {
		return {
			link: function(scope, element, attrs) {
				element.bind('click', function() {
					$(this).parent().toggleClass('active-adv');
					$(this).parent().removeClass('active-pub');
				})
			},
		}
	});

	styleApp.directive('active', function() {
		return {
			link: function(scope, element, attrs) {
				element.bind('click', function() {
					element.parent().children().removeClass('active');
					element.addClass('active');
				})
			},
		}
	});

    styleApp.directive('activeToggle', function() {
        return {
            link: function(scope, element, attrs) {
                element.bind('click', function() {
                    element.toggleClass('active');
                })
            },
        }
    });

    styleApp.directive('checkedToggle', function() {
        return {
            link: function(scope, element, attrs) {
                element.bind('click', function() {
                    element.parent().toggleClass('checked');
                })
            },
        }
    });

    styleApp.directive('removeAppliedFilter', function() {
        return {
            link: function(scope, element, attrs) {
                element.bind('click', function() {
                    element.parent().addClass('remove');
                })
            },
        }
    });

    styleApp.directive('collapseFilter', function() {
        return {
            link: function(scope, element, attrs) {
                element.bind('click', function() {
                    element.parent().toggleClass('collapse-filter');
                })
            },
        }
    });

    styleApp.directive('removeToggle', function() {
        return {
            link: function(scope, element, attrs) {
                element.bind('click', function() {
                    element.parent().nextAll(':lt(2)').toggleClass('remove');
                })
            },
        }
    });

    styleApp.directive('removeToggleAlt', function() {
        return {
            link: function(scope, element, attrs) {
                element.bind('click', function() {
                    element.parent().nextAll(':lt(2)').toggleClass('remove-alt');
                })
            },
        }
    });

	styleApp.directive('showAll', function() {
		return {
			link: function(scope, element, attrs) {
				element.bind('click', function() {
					element.parent().toggleClass('open');
					element.html($(this).html() == 'Show More' ? 'Show Less' : 'Show More');
				})
			},
		}
	});

    styleApp.directive('activateFiltering', function() {
        return {
            link: function(scope, element, attrs) {
                element.bind('click', function() {
                    element.parents().eq(6).addClass('filters-active');
                })
            },
        }
    });

    styleApp.directive('deactivateFiltering', function() {
        return {
            link: function(scope, element, attrs) {
                element.bind('click', function() {
                    element.parents().eq(6).removeClass('filters-active');
                })
            },
        }
    });

	styleApp.directive('showFiltering', function() {
		return {
			link: function(scope, element, attrs) {
				element.bind('click', function() {
					element.parent().parent().toggleClass('open');
					element.html($(this).html() == 'Advanced Filtering' ? 'Hide Advanced Filtering' : 'Advanced Filtering');
				})
			},
		}
	});

	styleApp.directive('showFilteringRows', function() {
		return {
			link: function(scope, element, attrs) {
				element.bind('click', function() {
					element.parents().eq(4).addClass('open-rows');
				})
			},
		}
	});

    styleApp.directive('hideFilteringRows', function() {
        return {
            link: function(scope, element, attrs) {
                element.bind('click', function() {
                    element.parents().eq(2).removeClass('open-rows');
                })
            },
        }
    });

	styleApp.directive('sub', function() {
		return {
			link: function(scope, element, attrs) {
				element.bind('click', function() {
					element.parent().children().removeClass('active');
					element.addClass('active');
				})
			},
		}
	});

	styleApp.directive('toggle', function() {
		return {
			link: function(scope, element, attrs) {
				element.bind('click', function() {
					element.toggleClass('open');
				})
			},
		}
	});

	styleApp.directive('toggleDropdown', function() {
		return {
			link: function(scope, element, attrs) {
				element.bind('click', function() {
					element.parent().toggleClass('open');
				})
			},
		}
	});

	styleApp.directive('uiGridRow', function () {
		return {
			restrict: 'C',
			link: function(scope, element, attrs) {
				element.on('$animate:close', function() {
					if (scope.row.approved || scope.row.deleted) {
						var iRowPosition = scope.grid.options.data.indexOf(scope.row.entity);
						scope.grid.options.data.splice(iRowPosition, 1);
						element.removeClass('approved');
						element.removeClass('deleted');
						//scope.row.entity.approved = scope.row.entity.deleted = false;
						//iRowPosition = scope.grid.renderContainers.body.renderedRows.indexOf(scope.row);
						//scope.grid.renderContainers.body.renderedRows.splice(iRowPosition,1);
						if (!scope.grid.appScope.$$phase) {
							scope.grid.appScope.$digest();
						}
					}
				})
			}
		}
	});

	styleApp.directive('headerCollapse', [function() {
		return {
			restrict: 'A',
			link: function(scope, element, oAttrs) {
				jQuery(window).scroll(function() {
					var scroll = jQuery(window).scrollTop();

					if (scroll >= 90) {
						element.addClass('alt');
					} else {
						element.removeClass("alt");
					}
				});

			}
		};
	}]);

	styleApp.directive('stepOneActive', [function() {
		return {
			restrict: 'A',
			link: function(scope, element, oAttrs) {
				jQuery(window).scroll(function() {
					var scroll = jQuery(window).scrollTop();

					if (scroll >= 90) {
						element.addClass('active');
						element.siblings().removeClass('active');
					}
				});

			}
		};
	}]);

	styleApp.directive('stepTwoActive', [function() {
		return {
			restrict: 'A',
			link: function(scope, element, oAttrs) {
				jQuery(window).scroll(function() {
					var scroll = jQuery(window).scrollTop();

					if (scroll >= 530) {
						element.addClass('active');
						element.siblings().removeClass('active');
					}
				});

			}
		};
	}]);

	styleApp.directive('stepThreeActive', [function() {
		return {
			restrict: 'A',
			link: function(scope, element, oAttrs) {
				jQuery(window).scroll(function() {
					var scroll = jQuery(window).scrollTop();

					if (scroll >= 1450) {
						element.addClass('active');
						element.siblings().removeClass('active');
					}
				});

			}
		};
	}]);

    styleApp.directive("stResetStatus", function() {
        return {
            restrict: 'EA',
            require: '^stTable',
            link: function(scope, element, attrs, ctrl) {
                return element.bind('click', function() {
                    return scope.$apply(function() {
                        var tableState;
                        tableState = ctrl.tableState();
                        tableState.search.predicateObject = {};
                        return ctrl.pipe();
                    });
                });
            }
        };
    })

    styleApp.directive('checkList', function() {
        return {
            scope: {
                list: '=checkList',
                value: '@'
            },
            link: function(scope, elem, attrs) {
                var handler = function(setup) {
                    var checked = elem.prop('checked');
                    var index = scope.list.indexOf(scope.value);

                    if (checked && index == -1) {
                        if (setup) elem.prop('checked', false);
                        else scope.list.push(scope.value);
                    } else if (!checked && index != -1) {
                        if (setup) elem.prop('checked', true);
                        else scope.list.splice(index, 1);
                    }
                };

                var setupHandler = handler.bind(null, true);
                var changeHandler = handler.bind(null, false);

                elem.on('change', function() {
                    scope.$apply(changeHandler);
                });
                scope.$watch('list', setupHandler, true);
            }
        };
    });
		
});		