
window.addEventListener('scroll', () => {
    const image = document.querySelector('.travel-image');
    const rect = image.getBoundingClientRect();
    const windowHeight = window.innerHeight;
  
    // Check if the element is in view
    if (rect.top < windowHeight && rect.bottom > 0) {
        image.classList.add('show');
    }
  });
  window.addEventListener('scroll', () => {
    const image = document.querySelector('.Shopping-image');
    const rect = image.getBoundingClientRect();
    const windowHeight = window.innerHeight;
  
    // Check if the element is in view
    if (rect.top < windowHeight && rect.bottom > 0) {
        image.classList.add('show');
    }
  });
  window.addEventListener('scroll', () => {
    const image = document.querySelector('.Insurance-image');
    const rect = image.getBoundingClientRect();
    const windowHeight = window.innerHeight;
  
    // Check if the element is in view
    if (rect.top < windowHeight && rect.bottom > 0) {
        image.classList.add('show');
    }
  });