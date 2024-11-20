document.addEventListener('DOMContentLoaded', () => {
    const currentUser = JSON.parse(localStorage.getItem('CURRENT_USER'));
  
    if (currentUser) {
      const headerList = document.getElementById('header-list');
      headerList.innerHTML += `<li><a class="header-link" href="#">${currentUser.name}</a></li>`;
    }
  });