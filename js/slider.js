document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let index = 0;
  
    const showSlide = (i) => {
      slides.forEach((slide, idx) => {
        slide.classList.toggle("active", idx === i);
      });
    };
  
    document.getElementById("prev").addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      showSlide(index);
    });
  
    document.getElementById("next").addEventListener("click", () => {
      index = (index + 1) % slides.length;
      showSlide(index);
    });
  
    slides.forEach(slide => {
      slide.addEventListener("click", () => {
        location.hash = slide.dataset.target;
      });
    });
  
    showSlide(index);
  });