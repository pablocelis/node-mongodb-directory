window.EmployeeView = Backbone.View.extend({
	
	tagName: "div",
	
	template: _.template($('#template-employeeview').html()),

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		$('#details', this.el).html(new EmployeeFullView({ model: this.model }).render().el);
		this.model.managerOf.fetch({
			success: function(data) {
				if(data.length == 0){
					$('.no-manager').show();
				}
			}
		});
		$('#managerof', this.el).append(new EmployeeFullView({ model: this.model.managerOf }).render().el);
		return this;
	}
});

window.EmployeeFullView = Backbone.View.extend({

	tagName: "div",

	template: _.template($('#template-employeefullview').html()),

	initialize: function() {
		this.model.bind("change", this.render, this);
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});