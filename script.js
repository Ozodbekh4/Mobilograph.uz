// document.getElementById("navbar_menu_icon").addEventListener("click", function () {
//     document.getElementById("navbar_menu").classList.toggle("show");
// });



document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    // Menyu tugmasi bosilganda menyuni ochish/yopish
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Har bir <a> link bosilganda menyuni yopish
    const navLinks = document.querySelectorAll('#nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                navMenu.classList.remove('active');
            }
        });
    });
});





document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.3 }); // 30% ko‘rinishi yetarli

    const elementsToObserve = document.querySelectorAll('.section2 .left, .section2 .right, section4 .top, .section4 .bot');
    elementsToObserve.forEach(el => observer.observe(el));
});



function toggleCard(card) {
    // Faqat bitta karta uchun o'zgarishni amalga oshirish
    const cards = document.querySelectorAll('.card');
    cards.forEach(c => {
        if (c !== card) {
            c.classList.remove('active'); // Boshqa kartalardan 'active' sinfini olib tashlash
            c.classList.remove('card-swapped'); // "card-swapped" sinfini olib tashlash
        }
    });

    // Bosilgan kartaga 'active' sinfini qo'shish va "card-swapped" sinfini almashtirish
    card.classList.toggle('active');
    card.classList.toggle('card-swapped');
}



const card = document.querySelector('.card');
const info = card.querySelector('.info');

card.addEventListener('mouseover', () => {
    info.style.maxWidth = '1170px';
});

card.addEventListener('mouseout', () => {
    info.style.maxWidth = '1170px';
});



function swapImages() {
    document.getElementById('imageContainer').classList.toggle('swapped');
}


function scrollToCenter(card) {
    const carouselRect = carousel.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const offset = cardRect.left - carouselRect.left - (carouselRect.width / 2 - cardRect.width / 2);
    carousel.scrollBy({ left: offset, behavior: 'smooth' });
}

function swapCards(i, j) {
    [data[i], data[j]] = [data[j], data[i]];
}

function goToCard(index) {
    if (index < 0) index = 0;
    if (index >= data.length) index = data.length - 1;
    activeIndex = index;
    renderCarousel();
    scrollToCenter(document.querySelector('.card.active'));
}

renderCarousel();


