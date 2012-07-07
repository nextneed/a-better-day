define([
		'underscoreLoader',
		'backboneLoader',
		'views/main-view',
		'views/new-view',
		'views/list-view',
		'views/stats-view',
	],
	function(
		_,
		Backbone,
		MainView,
		NewView,
		ListView,
		StatsView
	) {
    return Backbone.Router.extend({
        routes: {
            "new": "newTodoRoute",
            "list/:day": "listTodoRoute",
            "stats": "statsRoute",
            "*actions": "defaultRoute" // matches http://example.com/#anything-here
        },
        defaultRoute: function( actions ){
            // The variable passed in matches the variable in the route definition "actions"
            console.log( actions );
            var app = new MainView({
					el : document.getElementById('content')
            });
        },
        newTodoRoute: function(){
            // The variable passed in matches the variable in the route definition "actions"
            var app = new NewView({
					el : document.getElementById('content')
            });
        },
        listTodoRoute: function(day){
            // The variable passed in matches the variable in the route definition "actions"
            var app = new ListView({
					el : document.getElementById('content')
            });
        },
        statsRoute: function(){
            // The variable passed in matches the variable in the route definition "actions"
            console.log("stats");
            var app = new StatsView({
					el : document.getElementById('content')
            });
        }
        
    });

});