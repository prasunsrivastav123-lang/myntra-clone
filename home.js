document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("bannerSlider");
    const slides = document.querySelectorAll(".banner-image");
    const dotsContainer = document.getElementById("bannerDots");

    let currentIndex = 0;

    slides.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("banner-dot");
        if (index === 0) dot.classList.add("active");

        dot.addEventListener("click", () => {
            currentIndex = index;
            updateSlider();
        });

        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".banner-dot");

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}vw)`;

        dots.forEach(dot => dot.classList.remove("active"));
        dots[currentIndex].classList.add("active");
    }
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }, 4300);
});
