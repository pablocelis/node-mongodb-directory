window.HeaderView = Backbone.View.extend({
	

	template: _.template($('#template-header').html()),

	initialize: function() {
		this.results = new Employees();
		this.searchView = new EmployeeListView({ model: this.results, className: "search-menu"});
	},

	events: {
		"keyup .search-query": "search"
	},

	render: function() {
		this.$el.html(this.template());
		$('.navbar-search', this.el).append(this.searchView.render().el);
		return this;
	},

	search: function() {
		var name = $('#searchText').val();
		this.results.findByName(name);
		setTimeout(function() {
			$('.dropdown').addClass('open');
		});
	},

	select: function (menu) {
		$('.nav li').removeClass('active');
		$('.' + menu).addClass('active');
	}
});