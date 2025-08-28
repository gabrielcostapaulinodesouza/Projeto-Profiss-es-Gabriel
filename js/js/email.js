// Inicialização do EmailJS
(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // Substitua pela sua chave pública do EmailJS
})();

// Função para enviar o formulário de contato
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação básica
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !subject || !message) {
                showMessage('Por favor, preencha todos os campos.', 'error');
                return;
            }
            
            // Enviar email usando EmailJS
            emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
                .then(function() {
                    showMessage('Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');
                    contactForm.reset();
                }, function(error) {
                    console.error('Falha ao enviar mensagem:', error);
                    showMessage('Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.', 'error');
                });
        });
    }
    
    function showMessage(text, type) {
        formMessage.textContent = text;
        formMessage.className = 'form-message ' + type;
        
        // Esconder a mensagem após 5 segundos
        setTimeout(() => {
            formMessage.style.opacity = '0';
            setTimeout(() => {
                formMessage.className = 'form-message';
                formMessage.style.opacity = '1';
            }, 500);
        }, 5000);
    }
});
