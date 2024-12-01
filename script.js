document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Recoger datos del formulario
        const nombre = contactForm.querySelector('input[type="text"]').value;
        const telefono = contactForm.querySelector('input[type="tel"]').value;
        const mensaje = contactForm.querySelector('textarea').value;
        
        // Validación básica
        if (!nombre || !telefono || !mensaje) {
            alert('Por favor, rellene todos los campos');
            return;
        }
        
        // Simulación de envío (sustituir con llamada real a backend)
        alert(`Gracias ${nombre}, hemos recibido tu solicitud. Te contactaremos pronto al ${telefono}.`);
        contactForm.reset();
    });

    // Smooth scrolling para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
