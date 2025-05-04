const openBtnEl = document.querySelector('[data-action="open"]');
const closeBtnEl = document.querySelector('[data-action="close"]');
const burgerMenuEl = document.querySelector('[data-visible]');
const modalLinks = document.querySelectorAll('[data-goto]');

openBtnEl.addEventListener('click', () => {
  burgerMenuEl.dataset.visible = 'open';
});

closeBtnEl.addEventListener('click', () => {
  burgerMenuEl.dataset.visible = 'close';
});

modalLinks.forEach(link => {
  link.addEventListener('click', () => {
    burgerMenuEl.dataset.visible = 'close';
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
