document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('boton-animado');
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    boton.addEventListener('click', () => {
        boton.classList.add('boton-activo');
        setTimeout(() => {
            boton.classList.remove('boton-activo');
        }, 500);
    });

    menuToggle.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
});

// Este codigo permite animar el boton interactivo y desplegar el menu de navegacion para dispositivos moviles