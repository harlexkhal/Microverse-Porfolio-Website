const hamburgerMenuIcon = document.querySelector('.hamburger_menu_icon');
const sideNavigationBar = document.querySelector('.mobile_side_nav');
const menuLinks = document.querySelectorAll('.menu_link');
const mobileMenu = document.querySelector('.parent_main');

const openMenu = () => {
  sideNavigationBar.classList.add('mobile_side_nav_active');
  mobileMenu.classList.add('parent_main_blur');
};

const closeMenu = () => {
  sideNavigationBar.classList.remove('mobile_side_nav_active');
  mobileMenu.classList.remove('parent_main_blur');
};

hamburgerMenuIcon.addEventListener('click', openMenu);
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', closeMenu);
});
