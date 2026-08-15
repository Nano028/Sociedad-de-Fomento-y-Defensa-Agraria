document.querySelectorAll(".gallery-slider").forEach((slider) => {
  const slides = slider.querySelector(".slides");
  const images = slider.querySelectorAll("img");
  const prev = slider.querySelector(".prev");
  const next = slider.querySelector(".next");

  let index = 0;

  function update() {
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  next.addEventListener("click", () => {
    index = (index + 1) % images.length;
    update();
  });

  prev.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    update();
  });
});

const heroSlider = document.querySelector(".hero-slider");

if (heroSlider) {
  const heroSlides = heroSlider.querySelectorAll(".hero-slide");
  const heroDots = heroSlider.querySelectorAll(".hero-dot");
  const previousButton = heroSlider.querySelector(".hero-prev");
  const nextButton = heroSlider.querySelector(".hero-next");

  let currentHeroSlide = 0;
  let heroInterval;

  function showHeroSlide(index) {
    heroSlides[currentHeroSlide].classList.remove("active");
    heroDots[currentHeroSlide].classList.remove("active");

    currentHeroSlide = (index + heroSlides.length) % heroSlides.length;

    heroSlides[currentHeroSlide].classList.add("active");
    heroDots[currentHeroSlide].classList.add("active");
  }

  function startHeroSlider() {
    heroInterval = setInterval(() => {
      showHeroSlide(currentHeroSlide + 1);
    }, 4500);
  }

  function restartHeroSlider() {
    clearInterval(heroInterval);
    startHeroSlider();
  }

  previousButton.addEventListener("click", () => {
    showHeroSlide(currentHeroSlide - 1);
    restartHeroSlider();
  });

  nextButton.addEventListener("click", () => {
    showHeroSlide(currentHeroSlide + 1);
    restartHeroSlider();
  });

  heroDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showHeroSlide(index);
      restartHeroSlider();
    });
  });

  heroSlider.addEventListener("mouseenter", () => {
    clearInterval(heroInterval);
  });

  heroSlider.addEventListener("mouseleave", startHeroSlider);

  startHeroSlider();
}
