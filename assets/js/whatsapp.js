


const $form = document.querySelector('#form');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const phone = '5492213602683';


$form.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true

    setTimeout(() => {
        let name = document.querySelector('#name').value
        let lastname = document.querySelector('#lastname').value
        let dni = document.querySelector('#dni').value
        let numeroafiliado = document.querySelector('#numeroafiliado').value
        let email = document.querySelector('#quantity').value
        let message = 'send?phone=' + phone + '&text=*IOMA MEPPES*%0A%0A'+' Nombre y Apellido: ' + name + 
     
        ' '+ lastname + '%0A%0A'+'DNI: ' + dni + '%0A%0A' +'Número de Afiliado: ' +
         numeroafiliado + '%0A%0A' + 'quantity: ' + cantidad+ '%0A%0A' + 'img: ' + img


        if (isMobile()) {
            window.open(urlMobile + message, '_blank')
        } else {
            window.open(urlDesktop + message, '_blank')
        }

        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false

    }, 4000);

});