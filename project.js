var oneNav = document.getElementById('scroll'),
    oneImg = document.getElementById('img');
    
window.onscroll = function () {
    'use strict';
    if (window.scrollY >= 65) {
        oneNav.style.display = "block";
    } else {
        oneNav.style.display = "none";
    }
    if (window.scrollY >= 360) {
        oneImg.style.transform = 'translate(0,20px)';
    } else {
        oneImg.style.transform = 'translate(0,100px)';
    }
};
