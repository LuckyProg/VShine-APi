'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
	nombre: {
	    type: String,
	    required: true
  	},
  	correo: {
	    type: String,
	    required: true,
	    unique: true
 	},
  	celular: {
	    type: String,
	    required: true,
	    unique: true
  	},
  	pass: {
  		type: String,
  		required: true
  	},
  	carros: [{
  		placa: String,
  		modelo: String,
  		color: String,
  		marca: String
  	}]
});

var LavadoSchema = new Schema({
	ubicacion: {
		latitud: Number,
		longitud: Number,
	},
	fecha: {
		type: Date,
		required :true
	},
	tipo: {
		type: String,
		enum: ['express','plus', 'pro', 'premium'],
		required: true
	},
	pago: {
		type : String,
		enum: ['tarjeta', 'efectivo'],
		required :true
	},
	status: {
		type: String,
		enum: ['espera', 'terminado'],
		default: 'Pendiente'
	},
	_idUsuario: {
		type: Schema.Types.ObjectId,
		ref: 'Usuario',
		required: true
	}
});

module.exports = mongoose.model('usuario', UsuarioSchema);
module.exports = mongoose.model('lavado', LavadoSchema);	