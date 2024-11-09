document.addEventListener("DOMContentLoaded", function () {
  const text1 = document.getElementById("text-1");
  const text2 = document.getElementById("text-2");
  const text3 = document.getElementById("text-3");

  const texts = [text1, text2, text3];

  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  // Initial text display
  texts.forEach((text, i) => {
    text.classList.toggle("hidden", i !== 0);
  });

  try {
    // Initialize Swiper after DOM elements are ready
    const swiper = new Swiper(".swiper-container", {
      loop: true,
      speed: 400,
      navigation: {
        nextEl: "#next-btn",
        prevEl: "#prev-btn",
      },
      on: {
        init: function () {
          // Using 'this' instead of 'swiper'
          const index = this.realIndex;
          texts.forEach((text, i) => {
            text.classList.toggle("hidden", i !== index);
          });
        },
        slideChange: function () {
          // Using 'this' instead of 'swiper'
          const index = this.realIndex;
          texts.forEach((text, i) => {
            text.classList.toggle("hidden", i !== index);
          });
        },
      },
    });
  } catch (error) {
    console.error("Error initializing Swiper:", error);
  }
});
