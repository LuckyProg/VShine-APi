'use strict'
module.exports = function(app){
	var List = require('../controllers/ListController');

	//USUARIOS
	app.route('/usuario/validar')
		.get(List.validarUsuario);

	app.route('/usuarios')
		.get(List.mostrarUsuarios)
		.post(List.registrarUsuario);

	app.route('/usuarioById/:Id_Usuario')
	    .get(List.mostrarUsuarioById)
	    .put(List.actualizarUsuarioById)
	    .delete(List.borrarUsuarioById);


	//LAVADOS
	app.route('/lavados')
		.get(List.mostrarLavados)
		.post(List.agendarLavado);

	app.route('/lavadoByFecha/:Fecha_Lavado')
		.get(List.mostrarLavadosByFecha)
		.delete(List.borrarLavadosByFecha);

	app.route('/lavadoById/:Id_Lavado')
		.get(List.mostrarLavadoById)
		.put(List.borrarLavadoById);

	app.route('/lavadoById_Usuario/:Id_Usuario')
		.get(List.mostrarLavadoPorIdUsuario);


	//ADMIN
	app.route('/admin')
		.get(List.admin);
}