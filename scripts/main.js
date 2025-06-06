// NAV LINKS
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");
    // Check "open" state
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen?"ri-close-line":"ri-menu-line")
});

// Hide Menu when user click items in navLinks
navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    // set icon from close to menu
    menuBtnIcon.setAttribute("class", "ri-menu-line");
})


// SCROLL HEADER
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
}

ScrollReveal().reveal(".header__container p", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header__container .header__flex", {
    ...scrollRevealOption,
    delay: 1000,
});


// FAQ SHOW - HIDE
const faq = document.querySelector(".faq__grid");

faq.addEventListener("click", (e) => {
    const target = e.target;
    // Tìm thẻ .faq__card gần nhất chứa phần tử được click. Dùng closest() để tìm cha gần nhất khớp selector.
    const faqCard = target.closest(".faq__card");
    if (target.classList.contains("ri-arrow-down-s-line")) {
        if(faqCard.classList.contains("active")){
            faqCard.classList.remove("active")
        }else {
            Array.from(faq.children).forEach((item) => {
                item.classList.remove("active")
            })
            faqCard.classList.add("active");
        }
    }
})

ScrollReveal().reveal(".faq__image img", {
    ...scrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal(".faq__card", {
    ...scrollRevealOption,
    interval: 500,
});


// ARTICLE SECTION
ScrollReveal().reveal(".article__card", {
    ...scrollRevealOption,
    interval: 500,
});


// CLIENT
const swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
        el:".swiper-pagination"
    }
})

