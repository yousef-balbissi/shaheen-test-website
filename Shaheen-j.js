// let slideIndex = 0;
// const slides = document.getElementsByClassName("slide");
// function showSlides() {
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   slideIndex++;
//   if (slideIndex > slides.length - 1) {
//     slideIndex = 0;
//   }
//   slides[slideIndex].style.display = "block";
//   slides[slideIndex].style.width = "100%";
//   slides[slideIndex].classList.add("fade-in");
//   setTimeout(showSlides, 2000); 
// }
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const slideInterval = setInterval(showSlides, 2000); // Adjust interval as needed

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  }

  slides[slideIndex].style.display = "block";
  slides[slideIndex].classList.add('fade-in'); // Assuming you have a CSS fade-in animation

  // Optional: Clear the interval if needed
  // if (/* some condition, e.g., user interaction */) {
  //   clearInterval(slideInterval);
  // }
}

// ... rest of your code ...
const scrollRevealOption = {
  distance: "50px", 
  origin: "bottom",
  duration: 1000, 
};

scrollRevealOption().reveal(".betcoin-image", {
  ...scrollRevealOption, 
});
scrollRevealOption().reveal(".blockchain-image", {
  ...scrollRevealOption, 
  delay: 500, 
});
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
});
const elementsToObserve = document.querySelectorAll('.UK, .Europe, .India, .Australia, .USA, .Turkey, .UAE');
elementsToObserve.forEach(country => {
  observer.observe(country);
});