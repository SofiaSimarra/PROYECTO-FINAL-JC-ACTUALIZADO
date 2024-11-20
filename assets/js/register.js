document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const genero = document.getElementById('genero').value;

        const user = {
            name,
            email,
            password,
            genero
        };

        const users = JSON.parse(localStorage.getItem('USERS')) || [];

        users.push(user);

        localStorage.setItem('USERS', JSON.stringify(users));

        window.location.href = './login.html';
    });
});

// El document.addEventListener('DOMContentLoaded', () => { ... }) se utiliza para asegurarse de que el documento HTML esté completamente cargado antes de ejecutarse.

// El DOMContentLoaded es un evento que se activa cuando el html ha cargado completamente y el DOM está listo para ser manipulado.

// El const registerForm = document.getElementById('register-form'); se utiliza para seleccionar el formulario de registro en el html usando su ID.

// El registerForm.addEventListener('submit', (e) => { ... }); este bloque está esperando a que se envie el formulario de registro para ejecutar la funcion dentro del bloque.

// El submit es el evento que se activa cuando se envia el formulario.

// El e.preventDefault(); Este evento evita el la accion predeterminada de los formularios, la cual generalmente es enviar los datos y recargar la pagina, en este caso se utiliza para evitar que se recargue la pagina y poder hacer la validacion.

// El JSON.parse() permite convertir los datos guardados como texto en un pbjeto o arreglo, en caso de que no hayan se crea un arreglo vacio.
