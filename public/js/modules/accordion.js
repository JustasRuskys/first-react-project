const accordion = (btn, info) => {
    const buttons = document.querySelectorAll(btn);
    const panels = document.querySelectorAll(info);

    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
    
            const panel = btn.nextElementSibling;
            const chevron = btn.querySelector('.chevron');
            const isActive = btn.classList.contains('active');
    
            buttons.forEach(button => {
                button.classList.remove('active');
                button.querySelector('.chevron').classList.remove('rotate');
            });
            panels.forEach(panel => panel.classList.remove('active'));
            panels.forEach(panel => panel.style.maxHeight = null);
    
            
            if (!isActive) {
                btn.classList.add('active');
                panel.classList.add('active');
                chevron.classList.add('rotate');
                panel.style.maxHeight = "calc(" + panel.scrollHeight + "px" + " + 3rem)";
            }
        });
    });

}
export default accordion;
