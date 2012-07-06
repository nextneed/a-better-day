define([
		'underscoreLoader',
		'backboneLoader',
		'text!templates/main.html',
		'jquery',
		'orbit',
	],
	function(
		_,
		Backbone,
		MainTemplate,
		$,
		orbit
	) {
		"use strict";
		
		return Backbone.View.extend({
			template : _.template(MainTemplate),
			
			initialize : function() {
				
				this.render();
			},
			
			render : function() {
				this.$el.append(this.template({}));
				return this;
			}
		});
	}
);
