document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main") || document.body;

  // Contoh animasi muncul saat scroll
  const cards = document.querySelectorAll(".card");
  const options = {
    threshold: 0.3,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, options);

  cards.forEach(card => observer.observe(card));
});

document.querySelectorAll('.social-icons a').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('clicked');
    setTimeout(() => {
      button.classList.remove('clicked');
    }, 300);
  });
});

