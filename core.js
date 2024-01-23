document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.menu-icon');
  const navList = document.querySelector('.nav-main_list');

  menuIcon.addEventListener('click', function () {
      navList.classList.toggle('show');
  });

  // Close the menu when a link is clicked
  const navLinks = document.querySelectorAll('.nav-main_link');
  navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
          navList.classList.remove('show');
      });
  });
});