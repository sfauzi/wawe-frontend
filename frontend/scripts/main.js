// let swiperCards = new Swiper('.card__content', {

// loop: true,

// // If we need pagination
// pagination: {
// el: '.swiper-pagination',
// },

// // Navigation arrows
// navigation: {
// nextEl: '.swiper-button-next',
// prevEl: '.swiper-button-prev',
// },


// });

let prevScrollpos = window.pageYOffset; /* Simpan posisi scroll sebelumnya */

window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
document.getElementById("navbar").style.top = "20px"; /* Scroll ke atas, tampilkan navbar */
} else {
document.getElementById("navbar").style.top = "-80px"; /* Scroll ke bawah, sembunyikan navbar */
}
prevScrollpos = currentScrollPos;
}


