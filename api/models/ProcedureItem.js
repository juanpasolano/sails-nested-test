/**
* ProcedureItem.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    name: {
      type: 'string'
    },
    procedures: {
      collection: 'procedure',
      via: 'procedureItem'
    },
  },
  seedData:[
    {
    	id:1,
      	name:"Consulta"
    },
    {
    	id:2,
      	name:"SOAP"
    },
    {
    	id:3,
      	name:"Activyl pipeta"
    },
    {
    	id:4,
      	name:"Advantage Gato"
    },
    {
    	id:5,
      	name:"Capstar Tableta"
    }
  ]
};

