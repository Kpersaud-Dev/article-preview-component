const shareButton = document.querySelectorAll('.share');
const socialFooter = document.querySelector('.social');
const mainFooter = document.querySelector('.main-footer');
// Share Button for active social footer
const activeShareButton = document.querySelector('.share-icon');

// shareButton.forEach(button => {
//   button.addEventListener('click', () => {
//     socialFooter.classList.toggle('active');
//     mainFooter.classList.toggle('active');
//   })
// })

// activeShareButton.addEventListener('click', () => {
//   socialFooter.classList.remove('active');
//     mainFooter.classList.remove('active');
// })

// Desktop Media Query Variable
const mediaQuery = window.matchMedia('(min-width: 1024px)');
// Media Query Function
const mediaQueryChange = (e) => {

  //If Desktop, else other devices

  if(e.matches) {
    shareButton.forEach(button => {
      button.addEventListener('click', () => {
        socialFooter.classList.toggle('active');
        activeShareButton.remove();
      })
    })
    activeShareButton.addEventListener('click', () => {
      socialFooter.classList.remove('active');
    })
  } else {
    shareButton.forEach(button => {
      button.addEventListener('click', () => {
        socialFooter.classList.toggle('active');
        mainFooter.classList.toggle('active');
      })
    })
    
    activeShareButton.addEventListener('click', () => {
      socialFooter.classList.remove('active');
        mainFooter.classList.remove('active');
    })
  }
}

mediaQueryChange(mediaQuery);


