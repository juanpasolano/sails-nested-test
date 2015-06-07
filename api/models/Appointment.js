/**
* Appointment.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	date:{
  		type: 'date'
  	},
    procedures: {
      collection: 'procedure',
      via: 'appointment'
    }
  },

  seedData: [
  	{
  		id: 1,
  		date: new Date(),
  		procedures: [1, 2]
  	}

  ]
};

