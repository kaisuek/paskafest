// Add your inline JS here

<script>
  const gallery = document.getElementById('artistGallery');
  const scrollAmount = 300; // pikselimäärä per painallus

  document.querySelector('.scroll-btn.left').addEventListener('click', () => {
    gallery.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  document.querySelector('.scroll-btn.right').addEventListener('click', () => {
    gallery.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
</script>
