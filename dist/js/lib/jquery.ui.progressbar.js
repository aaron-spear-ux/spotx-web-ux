/*
 * jQuery UI Progressbar 1.8.2
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Progressbar
 *
 * Depends:
 *   jquery.ui.core.js
 *   jquery.ui.widget.js
 */
(function( $, undefined ) {

$.widget( "ui.progressbar", $.extend({}, $.ui.progressbar.prototype,{
	version: "1.9.1",
	options: {
		value: 0,
		max: 100,
                orientation : "horizontal"
	},

	min: 0,

	_create: function() {
		this.element
			.addClass( "ui-progressbar ui-widget ui-widget-content ui-corner-all" )
			.addClass("ui-progressbar-" + this.options.orientation)
			.attr({
				role: "progressbar",
				"aria-valuemin": this.min,
				"aria-valuemax": this.options.max,
				"aria-valuenow": this._value()
			});
		var orientationCornerClass = this.options.orientation == "horizontal"? "ui-corner-left" : "ui-corner-top"
		this.valueDiv = $( "<div class='ui-progressbar-value ui-widget-header " + orientationCornerClass +"'></div>" )
			.appendTo( this.element );

		this.oldValue = this._value();
		this._refreshValue();
	},

	_destroy: function() {
		this.element
			.removeClass( "ui-progressbar ui-widget ui-widget-content ui-corner-all" )
			.removeClass("ui-progressbar-" + this.options.orientation)
			.removeAttr( "role" )
			.removeAttr( "aria-valuemin" )
			.removeAttr( "aria-valuemax" )
			.removeAttr( "aria-valuenow" );

		this.valueDiv.remove();
	},

	value: function( newValue ) {
		if ( newValue === undefined ) {
			return this._value();
		}

		this._setOption( "value", newValue );
		return this;
	},

	_setOption: function( key, value ) {
		if ( key === "value" ) {
			this.options.value = value;
			this._refreshValue();
			if ( this._value() === this.options.max ) {
				this._trigger( "complete" );
			}
		}

		this._super( key, value );
	},

	_value: function() {
		var val = this.options.value;
		// normalize invalid value
		if ( typeof val !== "number" ) {
			val = 0;
		}
		return Math.min( this.options.max, Math.max( this.min, val ) );
	},

	_percentage: function() {
		return 100 * this._value() / this.options.max;
	},

	_refreshValue: function() {
		var value = this.value(), 
                    percentage = this._percentage();

		if ( this.oldValue !== value ) {
			this.oldValue = value;
			this._trigger( "change" );
		}

                if(this.options.orientation == "horizontal"){
                        this.valueDiv
                            .toggle( value >= this.min )
                            .toggleClass( "ui-corner-right", value === this.options.max )
                            .width( percentage.toFixed(0) + "%" );
		}
		else{
                        this.valueDiv
                            .toggle( value >= this.min )
                            .toggleClass( "ui-corner-bottom", value === this.options.max )
                            .height( percentage.toFixed(0) + "%" );
		}
		
                        
		this.element.attr( "aria-valuenow", value );
	}
}));

$.extend( $.ui.progressbar, {
	version: "1.9.1"
});

})( jQuery );