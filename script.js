document.addEventListener('DOMContentLoaded', () => {
    const showBtn = document.getElementById('show-popup-btn');
    const closeBtn = document.getElementById('close-popup-btn');
    const overlay = document.getElementById('popup-overlay');
    const content = document.getElementById('popup-content');

    const openPopup = () => {
        overlay.classList.remove('hidden');
    };

    const closePopup = () => {
        overlay.classList.add('hidden');
    };

    showBtn.addEventListener('click', openPopup);
    closeBtn.addEventListener('click', closePopup);
});
