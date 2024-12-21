function voltarAoTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


const inputElement = document.getElementById('whatsapp');
const maskOptions = {
    mask: '(00) 00000-0000'
};
IMask(inputElement, maskOptions);


function showAlert(message, type) {
    const alertBox = document.getElementById('alertBox');

    // Define a mensagem e o tipo de alerta
    alertBox.textContent = message;
    alertBox.className = `alert ${type} show`;
    

    // Exibe o alerta por 3 segundos e depois o esconde
    setTimeout(() => {
        alertBox.className = 'alert'; // Remove as classes adicionais
    }, 3000);
}



// Captura o formulário pelo ID
const form = document.getElementById('userForm');

// Adiciona um evento de envio ao formulário
form.addEventListener('submit', async (event) => {
    // Previne o comportamento padrão de recarregar a página
    event.preventDefault();

    // Captura os valores dos campos do formulário
    const formData = {
        name: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('whatsapp').value
    };

    try {
        // Faz a requisição POST para a API
        const response = await fetch('https://54.87.163.140/leads/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        // Verifica a resposta da API
        if (response.ok) {
            const result = await response.json();
            showAlert('Dados enviados com sucesso!', 'success');
            form.reset();
        } else {
            showAlert(`Erro ao enviar os dados: ${response.status}`, 'error');
        }
    } catch (error) {
        showAlert(`Erro de conexão`, 'error');
    }
});



