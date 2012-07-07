define([
	'underscoreLoader',
    'backboneLoader',
    'views/main-view',
    'router'
],
	function (
	    _,
	    Backbone,
		MainView,
		router
	) {
		"use strict";
		
		return {
			initialize : function () {
				/*var app = new MainView({
					el : document.getElementById('content')
				});*/
				// Initiate the router
				var app_router = new router;
				// Start Backbone history a neccesary step for bookmarkable URL's
				Backbone.history.start();
			}
		};
	}
);