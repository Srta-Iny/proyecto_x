
function anadirMensaje(){
	var listaMsj = document.getElementById('conversacion');
//rescatar texto
	var textMensaje = document.getElementById('mensajes').value;
//nodo texto
	var textNuevo = document.createTextNode(textMensaje);
//var elementos de Mensaje
	var cajaTexto = document.createElement('div');
	var cajaMensaje = document.createElement('div');
	var pMjs = document.createElement('p');
// añadir atributos
	cajaTexto.setAttribute('class', 'w-message-text');
 	cajaMensaje.setAttribute('class', 'w-message w-message-out');
//existe texto?
	if(textMensaje === ""){
		return false;
	}else{
	//agregando texto
	pMjs.appendChild(textNuevo);
	cajaTexto.appendChild(pMjs);
	cajaMensaje.appendChild(cajaTexto);
	listaMsj.appendChild(cajaMensaje);
	}
// dejando espacio en blanco
	textMensaje = document.getElementById('mensajes').value = "";
}
function conversacion(){
	var perfil = document.getElementById('perfil');
	//var foto = document.querySelector('wh-44');
	var nombrePerfil = document.querySelector('w-contact-name');
//crear elementos header
	var img = document.createElement('img');
	var nombre = document.createElement('h4');
// crear elementos chat 
// añadir atributos
// creando nueva pag
	nombre.appendChild(nombrePerfil);
	//img.appendChild(foto);
	//perfil.appendChild(foto);
	perfil.appendChild(nombre);
}
function nuevoChat(){
	var perfil = document.getElementById('perfil');
 	var chat = document.getElementById('chat');
 	chat.classList.toggle('hidden');
 	perfil.classList.toggle('hidden');
}
