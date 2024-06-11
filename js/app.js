import menu from "./header";
import accordion from "./modules/accordion";
import openPopup from "./modules/openPopup";

window.addEventListener('load', () => {
    menu();

    if(document.querySelector('.faq-block')) {
        accordion('.faq-accordion', '.accordion .information');
    }

    if(document.querySelector('.all-services-page')) {
        openPopup('.offer-popup-modal');
    }
});