buttonSubmit.disabled = true
setTimeout(() => {
	let nombre = document.querySelector('#nombre').value
	let apellidos = document.querySelector('#apellidos').value
	let email = document.querySelector('#email').value
	let mensaje = 'send?phone=' + telefono + '&text=*_Formulario Easy App CODE_*%0A*¿Cual es tu nombre?*%0A' + nombre + '%0A*¿Cuáles son tus apellidos?*%0A' + apellidos + '%0A*¿Cuál es tu correo electrónico?*%0A' + email + ''
	if(isMobile()) {
		window.open(urlMobile + mensaje, '_blank')
	}else{
		window.open(urlDesktop + mensaje, '_blank')
	}
	buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
	buttonSubmit.disabled = false
}, 3000);
