define([
		'underscoreLoader',
		'backboneLoader',
		'text!templates/list.html'
	],
	function(
		_,
		Backbone,
		ListTemplate
	) {
		"use strict";
		
		return Backbone.View.extend({
			template : _.template(ListTemplate),
			
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
