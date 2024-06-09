document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.getElementById('wrapper');
    const fullImg = document.getElementById('fullImg');
    const closeBtn = document.getElementById('closeBtn');
    const images = document.querySelectorAll('.img-gallery img');

    images.forEach(img => {
        img.addEventListener('click', () => {
            const fullSrc = img.getAttribute('data-full');
            fullImg.src = fullSrc;
            wrapper.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        wrapper.style.display = 'none';
    });
});




