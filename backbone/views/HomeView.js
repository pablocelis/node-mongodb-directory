window.HomeView = Backbone.View.extend({
	
	template: _.template($('#template-home').html()),


	initialize: function() {
		console.log("Starting HomeView");
	},

	events: {
		"click #searchField" : "searchField"
	},

	render: function() {
		this.$el.html(this.template());
		return this;
	},

	searchField: function() {
		app.headerView.search();
	}
});