document.addEventListener('DOMContentLoaded', () => {
  const cookiesBanner = document.querySelector('[data-cookies]');
  const acceptBtn = document.querySelector('[data-accept]');
  const declineBtn = document.querySelector('[data-decline]');

  const COOKIES_KEY = 'cookies-consent';

  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (localStorage.getItem(COOKIES_KEY)) {
    cookiesBanner.style.display = 'none';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.overflow = '';
    window.scrollTo(0, scrollTop);
    return;
  }

  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollTop}px`;
  document.body.style.overflow = 'hidden';
  document.body.style.width = '100%';

  function handleCookiesResponse(choice) {
    localStorage.setItem(COOKIES_KEY, choice);
    cookiesBanner.style.display = 'none';

    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.overflow = '';
    document.body.style.width = '';
    window.scrollTo(0, scrollTop);
  }

  acceptBtn.addEventListener('click', () => handleCookiesResponse('accepted'));
  declineBtn.addEventListener('click', () => handleCookiesResponse('declined'));
});
