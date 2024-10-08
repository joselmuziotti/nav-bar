// get items
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

// option 1
// navToggle.addEventListener('click', () => {
//   if(links.classList.contains('show-links')){
//     links.classList.remove('show-links');
//   } else {
//     links.classList.add('show-links');
//   }
// })

// option 2
navToggle.addEventListener('click', () => {
  links.classList.toggle('show-links');
})