document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('boton-animado');
    
    boton.addEventListener('click', () => {
        boton.classList.add('boton-activo');
        setTimeout(() => {
            boton.classList.remove('boton-activo');
        }, 500);
    });
});
