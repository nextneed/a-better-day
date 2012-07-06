(function() {
	"use strict";
	
	var libsPath = 'libs/'; //libsPath relative to 'basePath'
	
	require.config({
		paths : {
		    orbits: libsPath + 'foundation/jquery.orbit-1.4.0',
			jquery : libsPath + 'jquery',		//return module but also keeps it in the global scope
			jqueryLoader : libsPath + 'jquery-loader',	//loads module and removes it from the global scope
			underscore : libsPath + 'underscore',
			underscoreLoader: libsPath + 'underscore-loader',
			backbone : libsPath + 'backbone',
			backboneLoader : libsPath + 'backbone-loader',
			orbit: libsPath + 'foundation/jquery.orbit-1.4.0',
			customforms: libsPath + 'foundation/jquery.customforms',
			placeholder: libsPath + 'foundation/jquery.placeholder.min',
			tooltips: libsPath + 'foundation/jquery.tooltips',
			reveal: libsPath + 'foundation/jquery.reveal',
			appfoundation: libsPath + 'app_foundation'
		},
		baseUrl : 'app',
		urlArgs: "bust=" +  (new Date()).getTime()	//cache-busting for development
	});
	
	require(['application'],
		function(App) {
			App.initialize();
		}
	);
})();
