define([
		'underscoreLoader',
		'backboneLoader',
		'text!templates/new.html'
	],
	function(
		_,
		Backbone,
		NewTemplate
	) {
		"use strict";
		
		return Backbone.View.extend({
			template : _.template(NewTemplate),
			
			initialize : function() {
				
				this.render();
			},
			
			render : function() {
				this.$el.html(this.template({}));
				return this;
			}
		});
	}
);
