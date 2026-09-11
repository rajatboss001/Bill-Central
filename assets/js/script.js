document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  // Initialize the first item if it has the 'active' class on load
  faqItems.forEach(item => {
    const content = item.querySelector('.faq-content');
    if (item.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });

  
  faqItems.forEach(item => {
    const toggleButton = item.querySelector('.faq-toggle');
    const content = item.querySelector('.faq-content');

    toggleButton.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // 1. Close all open items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        otherItem.querySelector('.faq-toggle').setAttribute('aria-expanded', 'false');
        otherItem.querySelector('.faq-content').style.maxHeight = null;
      });

      // 2. Toggle the clicked item state
      if (!isActive) {
        item.classList.add('active');
        toggleButton.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        item.classList.remove('active');
        toggleButton.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = null;
      }
    });
  });
});


const sliderTrack = document.getElementById("sliderTrack");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;

  const cards = sliderTrack.children;
  const cardWidth = 364 + 24; // Card width + gap
  const totalCards = cards.length;

  function updateSlider() {
    sliderTrack.style.transform =
      `translateX(-${currentIndex * cardWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    if (currentIndex < totalCards - 1) {
      currentIndex++;
      updateSlider();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });