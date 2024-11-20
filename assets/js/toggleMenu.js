function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// Esta funcion tiene el proposito de esconder o mostrar el boton de navegacion para dispositivos moviles
// El document.querySelector() es un metodo que busca un elemnto html que coincida con lo el selector css que le pasemos como argumento
// Este codigo se define con una función llamada toggleMenu, la cual encuentra el elemento con la clase .nav-links y cambia su visiblilidad alternando la clase show; si está visible la elimina, y si no está la muestra, haciendo que el menú se muestre o se oculte.