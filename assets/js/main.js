document.addEventListener('DOMContentLoaded', () => {
    const currentUser = JSON.parse(localStorage.getItem('CURRENT_USER'));
  
    if (currentUser) {
      const headerList = document.getElementById('header-list');
      headerList.innerHTML += `<li><a class="header-link" href="#">${currentUser.name}</a></li>`;
    }
  });

  //Este código muestra el nombre del usuario que ha iniciado sesión en el sitio web. Si el usuario está guardado en el localStorage (bajo la clave 'CURRENT_USER'), se agrega su nombre como un enlace en una lista del encabezado de la página