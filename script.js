const hamburgerMenuicon = document.querySelector('.hamburger_menu_icon');
const side_navigation_bar = document.querySelector('.mobile_side_nav');
const menu_links = document.querySelectorAll('.menu_link');

const openMenu = () => {
    side_navigation_bar.classList.add('mobile_side_nav_active'); 
};

const closeMenu = () => {
   side_navigation_bar.classList.remove('mobile_side_nav_active');
};

hamburger_menu_icon.addEventListener('click', openMenu);
menu_links.forEach((menu_link) => {
    menu_link.addEventListener('click', closeMenu);
});