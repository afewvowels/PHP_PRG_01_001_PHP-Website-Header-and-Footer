var elem = document.getElementById('icon');
var menu = document.getElementById('menu');
var menuicon = document.getElementById('menu_icon');
elem.onclick = function() {
  elem.classList.toggle('menu_icon_light');
  menu.classList.toggle('menu');
  menuicon.classList.toggle('menu_icon_move');
};
