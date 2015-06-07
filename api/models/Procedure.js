/**
* Procedure.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    description: {
      type: 'text'
    },
    procedureItem: {
      model: 'procedureItem'
    },
    appointment: {
      model: 'appointment'
    },
  },

  seedData: [
  {
  	id: 1,
  	description: 'Test procedure @ 1',
  	procedureItem: 1
  },
  {
  	id: 2,
  	description: 'Test procedure @ 2',
  	procedureItem: 2
  },
  ]
};

