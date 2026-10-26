document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.link-card');

  cards.forEach(card => {
    card.addEventListener('mousedown', () => {
      card.style.transform = 'scale(0.98)';
    });

    card.addEventListener('mouseup', () => {
      card.style.transform = '';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
});
