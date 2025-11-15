function loadSideMenu() {
    fetch('components/side-menu.html')
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML('afterbegin', html);

            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            
            if (currentPage === 'index.html' || currentPage === '') {
                document.getElementById('nav-home').classList.add('active');
            } else if (currentPage === 'projects.html') {
                document.getElementById('nav-projects').classList.add('active');
            }
        })
        .catch(error => {
            console.error('사이드 메뉴 로드 중 오류 발생:', error);
        });
}

document.addEventListener('DOMContentLoaded', loadSideMenu);