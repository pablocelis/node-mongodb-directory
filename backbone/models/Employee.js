window.Employee = Backbone.Model.extend({
	
	urlRoot: "/employees/",

	initialize: function() {
		this.managerOf = new Employees();
		this.managerOf.url = "/employees/" + this.id + "/managerOf";
	}
});

window.Employees = Backbone.Collection.extend({

	model: Employee,

	url: "/employees/all",

	findByName: function(name) {
		var url = (name == '') ? "/employees/all" : "/employees/search/?name=" + name;
		var self = this;
		$.ajax({
			url: url,
			dataType: "json",
			success:function (data) {
				console.log("data found: " + data.length)
				console.log(data);
				self.reset(data);
			}
		});
	}
});