function loadSideMenu() {
    // 모바일 환경에서는 사이드메뉴를 로드하지 않음
    if (window.innerWidth <= 768) {
        return;
    }
    
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

// 화면 크기 변경 시 사이드메뉴 표시/숨김 처리
function handleResize() {
    const sideMenu = document.querySelector('.side-menu');
    if (window.innerWidth <= 768) {
        if (sideMenu) {
            sideMenu.style.display = 'none';
        }
    } else {
        if (sideMenu) {
            sideMenu.style.display = 'flex';
        } else {
            loadSideMenu();
        }
    }
}

document.addEventListener('DOMContentLoaded', loadSideMenu);
window.addEventListener('resize', handleResize);