const sticker = document.querySelector('.sticker');

window.onscroll = function () {
    if (window.pageYOffset > 76) {
        sticker.classList.add('active');
    } else {
        sticker.classList.remove('active');
    };
};
