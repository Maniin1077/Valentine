// Enhanced JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Enhanced Parallax
    const bannerImg = document.querySelector('.banner img');
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      bannerImg.style.transform = `translateY(${scrolled * 0.4}px)`;
    });
  
    // Intersection Observer with staggered animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
  
    document.querySelectorAll('.card, .gallery-grid img, .promise-card').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(50px)';
      el.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      observer.observe(el);
    });
  
    // Heart Click Animation
    document.querySelector('.heart').addEventListener('click', () => {
      createHearts(10);
    });
  
    // Create floating hearts
    function createHearts(count) {
      for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '❤';
        document.body.appendChild(heart);
  
        setTimeout(() => {
          heart.remove();
        }, 3000);
      }
    }
  });
  
  const galleryImages = document.querySelectorAll(".gallery img");
  const fullScreenDiv = document.createElement("div");
  fullScreenDiv.classList.add("fullscreen-img");
  document.body.appendChild(fullScreenDiv);
  
  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      fullScreenDiv.innerHTML = `<img src="${img.src}" alt="full-image">`;
      fullScreenDiv.style.display = "flex";
    });
  });
  
  fullScreenDiv.addEventListener("click", () => {
    fullScreenDiv.style.display = "none";
  });
  