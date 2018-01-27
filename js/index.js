
const images = document.querySelectorAll('.parallax-img');
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset;

    images.forEach(img => {
      const offsetTop = img.parentNode.offsetTop;
      const distance = offsetTop - scrollTop;
      if (distance > window.innerHeight || distance < -window.innerHeight) return;
      img.style.transform = `translateY(${-distance}px)`
    })
});
