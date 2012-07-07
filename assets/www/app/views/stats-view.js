define([
		'underscoreLoader',
		'backboneLoader',
		'text!templates/stats.html'
	],
	function(
		_,
		Backbone,
		StatsTemplate
	) {
		"use strict";
		
		return Backbone.View.extend({
			template : _.template(StatsTemplate),
			
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
