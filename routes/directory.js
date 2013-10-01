// Directory methods
//
var mongo = require('mongodb');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/directory');

////////////////////
// Database connection
////////////////////
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
	console.log("connected to the Database");
/*
	var employee1 = new Directory({id: 1, firstName: 'James', lastName: 'King', fullName: 'James King', managerId: 0, managerName: '', title: 'President and CEO', department: 'Corporate', cellPhone: '617-000-0001', officePhone: '781-000-0001', email: 'jking@fakemail.com', city: 'Boston, MA', pic: 'james_king.jpg', twitterId: '@fakejking', blog: 'http://coenraets.org'});
	employee1.save(function (err, data){
		if(err) console.debug("ERROR inserting");
	});
	var employee2 = new Directory({id: 2, firstName: 'Julie', lastName: 'Taylor', fullName: 'Julie Taylor', managerId: 1, managerName: 'James King', title: 'VP of Marketing', department: 'Marketing', cellPhone: '617-000-0002', officePhone: '781-000-0002', email: 'jtaylor@fakemail.com', city: 'Boston, MA', pic: 'julie_taylor.jpg', twitterId: '@fakejtaylor', blog: 'http://coenraets.org'});
	employee2.save(function (err, data){
		if(err) console.debug("ERROR inserting");
	});
	var employee3 = new Directory({id: 3, firstName: 'Eugene', lastName: 'Lee', fullName: 'Eugene Lee', managerId: 1, managerName: 'James King', title: 'CFO', department: 'Accounting', cellPhone: '617-000-0003', officePhone: '781-000-0003', email: 'elee@fakemail.com', city: 'Boston, MA', pic: 'eugene_lee.jpg', twitterId: '@fakeelee', blog: 'http://coenraets.org'});
	employee3.save(function (err, data){
		if(err) console.debug("ERROR inserting");
	});
	console.log("Database filled");
*/

});

var Schema = mongoose.Schema;
var directorySchema = new Schema({
	id: Number,
	firstName: String,
	lastName: String,
	fullName: String,
	managerId: Number,
	managerName: String,
	title: String,
	department: String,
	cellPhone: String,
	officePhone: String,
	email: String,
	city: String,
	pic: { data: Buffer, contentType: String},
	twitterId: String,
	blog: String
});

var Directory = mongoose.model('employees', directorySchema);


exports.findById = function(req, res) {
	var Id = parseInt(req.params.id);
	console.log(req.params);
	console.log('findById: ' + req.params.id);
	Directory.findOne({ id: Id }, function(err, doc){
		res.json(doc);
	});
};

exports.findByName = function(req, res){
	var name = req.query.name;
	console.log(name);
	Directory.find({ firstName: name }, function(err, doc){
		res.json(doc);
	});
};

exports.findAll = function(req, res) {
	Directory.find({}, function(err, docs){
		res.json(docs);
	});
};

exports.findByManager = function(req, res) {
	var manager = parseInt(req.params.id);
	console.log('ManagerId: ' + manager);
	Directory.find({ managerId: manager}, function(err, doc){
		res.json(doc);
	});


}
