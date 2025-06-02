// Nuolinapit scrollaukseen
document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('artistTrack');
  const leftBtn = document.querySelector('.scroll-btn.left');
  const rightBtn = document.querySelector('.scroll-btn.right');

  if (!track || !leftBtn || !rightBtn) {
    console.warn("Scroll-elementit eivät löytyneet");
    return;
  }

  leftBtn.addEventListener('click', () => {
    track.scrollBy({ left: -300, behavior: 'smooth' });
  });

  rightBtn.addEventListener('click', () => {
    track.scrollBy({ left: 300, behavior: 'smooth' });
  });

  // Drag-to-scroll
  let isDown = false;
  let startX;
  let scrollLeft;

  track.addEventListener('mousedown', (e) => {
    isDown = true;
    track.classList.add('dragging');
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });

  track.addEventListener('mouseleave', () => {
    isDown = false;
    track.classList.remove('dragging');
  });

  track.addEventListener('mouseup', () => {
    isDown = false;
    track.classList.remove('dragging');
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    track.scrollLeft = scrollLeft - walk;
  });
});
