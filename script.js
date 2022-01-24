const hamburgerMenuIcon = document.querySelector('.hamburger_menu_icon');
const sideNavigationBar = document.querySelector('.mobile_side_nav');
const menuLinks = document.querySelectorAll('.menu_link');

const openMenu = () => {
  sideNavigationBar.classList.add('mobile_side_nav_active');
};

const closeMenu = () => {
  sideNavigationBar.classList.remove('mobile_side_nav_active');
};

hamburgerMenuIcon.addEventListener('click', openMenu);
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', closeMenu);
});
