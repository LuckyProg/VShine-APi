'use strict'

var mongoose  = require('mongoose');
var path = require('path');
	var Usuario = mongoose.model('usuario');
	var Lavado = mongoose.model('lavado');

	//USUARIOS
	exports.validarUsuario = function(req, res){
		Usuario.find({$and:[{correo: req.query.correo},{pass: req.query.pass}]}, function(err, usuario){
			if(err)
				res.send(err);
			res.json(usuario);	
		});
	};

	exports.mostrarUsuarios = function(req, res){
		Usuario.find({}, function(err, usuario){
			if(err)
				res.send(err);
			res.json(usuario);
		});
	};

	exports.registrarUsuario = function(req, res){
		var usuariotemp = new Usuario(req.body);
		usuariotemp.save(function(err, usuario){
			if(err)
				res.send(err);
			res.json(usuario);
		});
	};

	exports.mostrarUsuarioById = function(req, res){
		Usuario.findById(req.params.Id_Usuario, function(err, usuario){
			if(err)
				res.send(err);
			res.json(usuario);
		});
	};

	exports.actualizarUsuarioById = function(req, res){
		Usuario.findOneAndUpdate({_id: req.params.Id_Usuario}, req.body, {new: true}, function(err, usuario){
			if(err)
				res.send(err);
			res.json(usuario);
		});
	};

	exports.borrarUsuarioById = function(req, res){
		Usuario.remove({_id: req.params.Id_Usuario}, function(err, usuario){
			if(err)
				res.send(err);
			res.json({message: 'Borrado Papu'});
		});
	};

	//LAVADOS
	exports.mostrarLavados = function(req, res){
		Lavado.find({}, function(err, lavado){
			if(err)
				res.send(err);
			res.json(lavado);
		});
	};

	exports.agendarLavado = function(req, res){
		var lavadotemp = new Lavado(req.body);
		lavadotemp.save(function(err, lavado){
			if(err)
				res.send(err)
			res.json(lavado);
		})
	};

	exports.mostrarLavadosByFecha = function(req, res){
		Lavado.find({fecha: req.params.FechaLavado}, function(err, lavado){
			if(err)
				res.send(err);
			res.json(lavado);
		});
	};

	exports.borrarLavadosByFecha = function(req, res){
		Lavado.remove({fecha: req.params.Fecha_Lavado},function(err, lavado){
			if(err)
				res.send(err);
			res.json({message: 'Borrado Papu'});
		});
	};

	exports.mostrarLavadoById = function(req, res){
		Lavado.find({_id: req.params.Id_Lavado},function(err, lavado){
			if(err)
				res.send(err);
			res.json(lavado);
		});
	};

	exports.borrarLavadoById = function(req, res){
		Lavado.delete({_id: req.params.Id_Lavado},function(err, lavado){
			if(err)
				res.send(err);
			res.json({message: 'borrado Papu'});
		});
	};

	//ADMIN
	exports.admin = function(req, res){
		res.sendFile(path.resolve('admin.html'));
	};

