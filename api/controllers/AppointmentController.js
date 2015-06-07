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
			async.eachSeries(appointments, function(appointment, cb){
				Procedure.find({appointment: appointment.id}).exec(function(errP, procedures){
					if(errP) return cb(errP);
					appointment.procedures = procedures;
					appointment.proceduress = procedures;
					cb()
				})
			}, function(errE){
				if(errE) return cb(errE);
				res.ok(appointments)
			})
		})
	}
	
};

