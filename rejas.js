
const accordionButtons = document.querySelectorAll('.accordion__button');

accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    const accordionContent = button.nextElementSibling;
    if (accordionContent.style.display === 'block') {
      accordionContent.style.display = 'none';
    } else {
      accordionContent.style.display = 'block';
    }
  });
});
