document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('boton-animado');
    
    boton.addEventListener('click', () => {
        boton.classList.add('boton-activo');
        setTimeout(() => {
            boton.classList.remove('boton-activo');
        }, 500);
    });
});

//Este código permite crear una animación en un botón. Al hacer clic en el botón, se le agrega temporalmente una clase que probablemente cambia su apariencia. Después de 500 milisegundos, la clase se elimina, lo que hace que el botón vuelva a su estado original. 