const shareButton = document.querySelectorAll('.share');
const socialFooter = document.querySelector('.social');
const mainFooter = document.querySelector('.main-footer');
// Share Button for active social footer
const activeShareButton = document.querySelector('.share-icon');

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