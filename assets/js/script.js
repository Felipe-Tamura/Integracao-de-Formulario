document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const formData = {
        name: name,
        email: email,
        message: message
    };

    //URL do App do Google Apps Script
    const webAppUrl = 'https://script.google.com/macros/s/AKfycbw3Y-OMiUg4l0I-jonjST1ilu1cyq-Jcsq0aRY23o4_S5OX3jnxDptiYzYUCeQizKi7AQ/exec';

    fetch(webAppUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if(data.result === 'success'){
            document.getElementById('response-message').textContent = 'Messagem enviada com sucesso!';
            document.getElementById('contact-form').reset();
        }else {
            document.getElementById('response-message').textContent = 'Erro ao enviar a mensagem. Tente novamente.';
        }
    })
    .catch(error => {
        console.error('Erro ao enviar o formulário: ', error);
        document.getElementById('response-message').textContent = 'Erro ao enviar a mensagem. Tente novamente.';
    })
})