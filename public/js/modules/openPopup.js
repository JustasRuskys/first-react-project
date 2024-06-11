const openPopup = (popupClass) => {

    const openButtons = document.querySelectorAll('.open-popup');
    const popupModal = document.querySelector(popupClass);
    const closeButton = document.querySelectorAll('.close-modal');

    
    openButtons.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            popupModal.classList.add('active');
            document.querySelector('body').classList.add('modal-is-open');
        })
    })

    const closeModal = () => {
        popupModal.classList.remove('active');
        document.querySelector('body').classList.remove('modal-is-open');
    }

    closeButton.forEach(item => {
        item.addEventListener('click', closeModal)
    })

    window.addEventListener('keyup', function (e) {
        if (e.keyCode == 27) {
            closeModal();
        }
    })

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains(popupClass)) {
            for (let index in popupModal) {
                if (typeof popupModal.style !== 'undefined') {
                    closeModal();
                }
            }
        }
    });
}

export default openPopup;