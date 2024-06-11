function menu() {

    let lastScrollTop = 0;
    const navbar = document.querySelector('.main-header');

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            navbar.classList.add('hidden'); // Scrolling down
        } else {
            navbar.classList.remove('hidden'); // Scrolling up
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });

    //Mobile Menu SideBar
    const openButton = document.querySelector('.open-menu-button');
    const closeButton = document.querySelector('.close-menu-button');
    const mobileMenu = document.querySelector('.mobile-header');
    const body = document.querySelector('body');
    const linkButton = document.querySelectorAll('.mobile-menu-item');

    if(openButton) {
        openButton.addEventListener('click', () => {
            mobileMenu.classList.add('show-menu')
            body.classList.add('no-scroll')
        })
    }

    if(closeButton) {
        closeButton.addEventListener('click', () => {
            mobileMenu.classList.remove('show-menu')
            body.classList.remove('no-scroll')
        })
    }

    linkButton.forEach((button, e) => {
        button.addEventListener('click', () => {
            if(!button.classList.contains('active')) {
            mobileMenu.classList.remove('show-menu');
            body.classList.remove('no-scroll');
            }
        })
    })

}

export default menu;