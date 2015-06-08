/**
 * AppointmentController
 *
 * @description :: Server-side logic for managing appointments
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */




module.exports = {

	nested: function (req, res){
		Appointment.find(1).exec(function(err, appointments){
			if(err) return res.negotiate(err);
			_.each(appointments, function(a){a.procedures = 'fuckyou'})
			async.eachSeries(appointments, function(appointment, cb){
				Procedure.find({appointment: appointment.id}).populate('procedureItem').exec(function(errP, procedures){
					if(errP) return cb(errP);
					appointment.proceduress = procedures;
					appointment.procedures = procedures;
					cb()
				})
			}, function(errE){
				if(errE) return cb(errE);
				res.ok(appointments)
			})
		})
	},

	nestedToObject: function (req, res){
		Appointment.find(1).exec(function(err, appointments){
			if(err) return res.negotiate(err);
			var apps = [];
			async.eachSeries(appointments, function(appointment, cb){
				var app =  appointment.toObject();
				Procedure.find({appointment: appointment.id}).populate('procedureItem').exec(function(errP, procedures){
					if(errP) return cb(errP);
					app.procedures = procedures;
					app.proceduress = procedures;
					apps.push(app);
					cb();
				})
			}, function(errE, results){
				if(errE) return cb(errE);
				res.ok(apps)
			})
		})
	}
	
};

