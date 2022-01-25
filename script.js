// Mobile menu implementation
const hamburgerMenuIcon = document.querySelector('.hamburger_menu_icon');
const sideNavigationBar = document.querySelector('.mobile_side_nav');
const menuLinks = document.querySelectorAll('.menu_link');
const mobileMenu = document.querySelector('.parent_main');
const logo = document.querySelector('.logo');

const openMenu = () => {
  sideNavigationBar.classList.add('mobile_side_nav_active');
  hamburgerMenuIcon.classList.add('vanish');
  mobileMenu.classList.add('blur');
  logo.classList.add('blur');
};

const closeMenu = () => {
  sideNavigationBar.classList.remove('mobile_side_nav_active');
  mobileMenu.classList.remove('blur');
  hamburgerMenuIcon.classList.remove('vanish');
  logo.classList.remove('blur');
};

hamburgerMenuIcon.addEventListener('click', openMenu);
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', closeMenu);
});

// Pop-up modal implementation
const btnProjectOne = document.querySelector('.proj_1');
const btnProjectTwo = document.querySelector('.proj_2');
const btnProjectThree = document.querySelector('.proj_3');
const btnProjectFour = document.querySelector('.proj_4');

const popupModal = document.querySelector('.modal');
const closeModal = document.querySelector('.close');
const nameDom = document.querySelector('.open_view_proj_title');
const descriptionDom = document.querySelector('.project_full_desc_opened');
const technologiesDom = document.querySelector('.open_view_tag');
const sourceLinkDom = document.querySelector('.btn_view_src');
const demoLinkDom = document.querySelector('.btn_see_live');
const projectImageLinkDom = document.querySelector('.view_proj_img');

const firstProject = {
  name: 'Tonic',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  imageLink: 'images/project1.png',
  technologies: ['html', 'css', 'javascript'],
  sourceLink: '#',
  demoLink: '#',
};

const secondProject = {
  name: 'Multi-Post Stories',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  imageLink: 'images/project2.png',
  technologies: ['html', 'css', 'javascript'],
  sourceLink: '#',
  demoLink: '#',
};

const thirdProject = {
  name: 'Tonic',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  imageLink: 'images/project3.png',
  technologies: ['html', 'css', 'javascript'],
  sourceLink: '#',
  demoLink: '#',
};

const fourthProject = {
  name: 'Multi-Post Stories',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  imageLink: 'images/project4.png',
  technologies: ['html', 'css', 'javascript'],
  sourceLink: '#',
  demoLink: '#',
};

btnProjectOne.addEventListener('click', () => {
  nameDom.innerHTML = firstProject.name;
  descriptionDom.innerHTML = firstProject.description;
  projectImageLinkDom.src = firstProject.imageLink;
  sourceLinkDom.action = firstProject.sourceLink;
  demoLinkDom.action = firstProject.demoLink;
  technologiesDom.innerHTML = '';
  for (let i = 0; i < firstProject.technologies.length; i += 1) {
    technologiesDom.innerHTML = `${technologiesDom.innerHTML}<li class="project_tag">${firstProject.technologies[i]}</li>`;
  }
  popupModal.classList.remove('vanish');
  popupModal.classList.add('show');
  mobileMenu.classList.add('blur');
  logo.classList.add('blur');
  document.body.style.overflowY = 'hidden';
});

btnProjectTwo.addEventListener('click', () => {
  nameDom.innerHTML = secondProject.name;
  descriptionDom.innerHTML = secondProject.description;
  projectImageLinkDom.src = secondProject.imageLink;
  sourceLinkDom.action = secondProject.sourceLink;
  demoLinkDom.action = secondProject.demoLink;
  technologiesDom.innerHTML = '';
  for (let i = 0; i < secondProject.technologies.length; i += 1) {
    technologiesDom.innerHTML = `${technologiesDom.innerHTML}<li class="project_tag">${secondProject.technologies[i]}</li>`;
  }
  popupModal.classList.remove('vanish');
  popupModal.classList.add('show');
  mobileMenu.classList.add('blur');
  logo.classList.add('blur');
  document.body.style.overflowY = 'hidden';
});

btnProjectThree.addEventListener('click', () => {
  nameDom.innerHTML = thirdProject.name;
  descriptionDom.innerHTML = thirdProject.description;
  projectImageLinkDom.src = thirdProject.imageLink;
  sourceLinkDom.action = thirdProject.sourceLink;
  demoLinkDom.action = thirdProject.demoLink;
  technologiesDom.innerHTML = '';
  for (let i = 0; i < thirdProject.technologies.length; i += 1) {
    technologiesDom.innerHTML = `${technologiesDom.innerHTML}<li class="project_tag">${thirdProject.technologies[i]}</li>`;
  }
  popupModal.classList.remove('vanish');
  popupModal.classList.add('show');
  mobileMenu.classList.add('blur');
  logo.classList.add('blur');
  document.body.style.overflowY = 'hidden';
});

btnProjectFour.addEventListener('click', () => {
  nameDom.innerHTML = fourthProject.name;
  descriptionDom.innerHTML = fourthProject.description;
  projectImageLinkDom.src = fourthProject.imageLink;
  sourceLinkDom.action = fourthProject.sourceLink;
  demoLinkDom.action = fourthProject.demoLink;
  technologiesDom.innerHTML = '';
  for (let i = 0; i < fourthProject.technologies.length; i += 1) {
    technologiesDom.innerHTML = `${technologiesDom.innerHTML}<li class="project_tag">${fourthProject.technologies[i]}</li>`;
  }
  popupModal.classList.remove('vanish');
  popupModal.classList.add('show');
  mobileMenu.classList.add('blur');
  logo.classList.add('blur');
  document.body.style.overflowY = 'hidden';
});

closeModal.addEventListener('click', () => {
  popupModal.classList.remove('show');
  popupModal.classList.add('vanish');
  mobileMenu.classList.remove('blur');
  logo.classList.remove('blur');
  document.body.style.overflowY = 'scroll';
});