window.Router = Backbone.Router.extend({
	
	routes: {
		"": "home",
		"employees/:id": "employeeDetails"
	},

	initialize: function() {
		this.headerView = new HeaderView();
		$('.header').html(this.headerView.render().el);
		$('body').click(function (){
			$('.dropdown').removeClass("open");
		});
	},

	home: function() {
		// Home view will be render just once
		if(!this.homeView) {
			this.homeView = new HomeView();
			this.homeView.render();
		} else {
			this.homeView.delegateEvents();
		}

		$('#content').html(this.homeView.el);
		this.headerView.select('home-menu');
	},

	employeeDetails: function(id) {
		var employee = new Employee({ id: id });
		employee.fetch({
			success: function(data) {
				$('#content').html(new EmployeeView({ model: data }).render().el);
			}
		});
	}
});

Backbone.history.start();