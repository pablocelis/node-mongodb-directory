window.EmployeeListView = Backbone.View.extend({
	
	tagName: 'ul',
	className: 'nav nav-list',

	initialize: function() {
		var self = this;
		this.model.bind("reset", this.render, this);
		this.model.bind("add", function( employee){
			self.$el.append(new ItemView({ model: employee }).render().el);
		});
	},

	render: function() {
		this.$el.empty();
		_.each(this.model.models, function (employee) {
			this.$el.append(new ItemView({ model: employee }).render().el);
		}, this);
		return this;
	}
});

window.ItemView = Backbone.View.extend({

	tagName: 'li',

	template: _.template($('#template-employeelistview').html()),

	initialize: function() {
		this.model.bind("change", this.render, this);
		this.model.bind("close", this.close, this);
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});