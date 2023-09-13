//Default Values
var xhs = new XMLHttpRequest();//XML Http Request
var date = new Date(); //Date
/***************************************/
xhs.open('POST', 'http://localhost:7700/');
xhs.send();
/*
  Open/Close Navigation Container
*/
//Open Navigation Container
document.getElementById('menu').addEventListener('click', () => {
  document.getElementById('nav-container').style.width = '100%'; //Set The Width of Navigation Container is 100%
  document.getElementById('nav-container').style.height = '100%'; //Set The Height of Navigation Container is 0
  document.getElementById('nav-container').style.borderBottomRightRadius = '0'; //Set The Bottom Right Border Radius of Navigation Container is 0 pixels
});
//Close Navigation Container
document.getElementById('close-menu').addEventListener('click', () => {
  document.getElementById('nav-container').style.width = '0'; //Set The Width of Navigation Container is 0
  document.getElementById('nav-container').style.height = '0'; //Set The Height of Navigation Container is 0
  document.getElementById('nav-container').style.borderBottomRightRadius = '500px'; //Set The Bottom Right Border Radius of Navigation Container is 500 pixels
});
//Navigation
var navToHomeBtn = document.getElementById('nav-to-home');
var topNavToHomeBtn = document.getElementById('top nav-to-home');
var leftSideNavToHomeBtn = document.getElementById('left nav-to-home');
var navToAboutBtn = document.getElementById('nav-to-about');
var topNavToAboutBtn = document.getElementById('top nav-to-about');
var leftSideNavToAboutBtn = document.getElementById('left nav-to-about');
var navToSettingBtn = document.getElementById('nav-to-setting');
var topNavToSettingBtn = document.getElementById('top nav-to-setting');
var leftSideNavSettingBtn = document.getElementById('left nav-to-setting');
//Home Page
function navToHome() {
  document.getElementById('main-content').innerHTML = '<div class="container rounder border black-text-color"><h1>New Era of AB</h1><p>With Arctic style design</p><button id="explore-ac728d" class="outlined-button rounded-pill-button black-text-color"><span class="material-symbols-sharp">explore</span>Explore</button></div><div class="container rounder border"><h1>What\'s New?</h1><ul><li>New Interface</li><li>New Features</li></ul></div><div class="container rounder border black-text-color"><h1>Our Github</h1><ul><li><a href="https://github.com/INNERID/">INNERID</a></li></ul></div><div class="container rounder border black-text-color"><h1>For Devs</h1><a href="style.css" download>Download Arctic Style CSS</a></div><div class="container rounder border"><h1>Services</h1><ul><li><a href="">Maps</a></li><li><a href="clouds.ab.io">Cloud Storage</a></li><li><a href="market.ab.io">Marketplace</a></li></ul></div>';
  navToHomeBtn.classList.add('active');
  topNavToHomeBtn.classList.add('active');
  leftSideNavToHomeBtn.classList.add('active');
  navToAboutBtn.classList.remove('active');
  topNavToAboutBtn.classList.remove('active');
  leftSideNavToAboutBtn.classList.remove('active');
  navToSettingBtn.classList.remove('active');
  topNavToSettingBtn.classList.remove('active');
  leftSideNavSettingBtn.classList.remove('active');
  document.getElementById('page-title').innerHTML = '<span class="material-symbols-sharp">home</span>Home';//Change The Content of Page Title to Home
  document.getElementById('nav-container').style.width = '0'; //Set The Width of Navigation Container is 0
  document.getElementById('nav-container').style.height = '0'; //Set The Height of Navigation Container is 0
  document.getElementById('nav-container').style.borderBottomRightRadius = '500px'; //Set The Bottom Right Border Radius of Navigation Container is 500 pixels
};
//About Page
function navToAbout() {
  document.getElementById('main-content').innerHTML = '<div class="container rounder border black-text-color"><label class="header-label"><span class="material-symbols-sharp" style="font-size:36px;">info</span><h1>About us</h1></label><p><a href="index.html">ab.io</a> is A website created by <a href="direct_to_a_media-social.html" onclick="directToCreatorMediaSocialPage("https://vt.tiktok.com/@albybarayanuar", "https://instagram.com/alby_233", "https://m.facebook.com/profile.php/?id=100089070820202&name=xhp_nt__fb__action__open_user")">AlbyBara</a></p></div>';
  navToAboutBtn.classList.add('active');
  topNavToAboutBtn.classList.add('active');
  leftSideNavToAboutBtn.classList.add('active');
  navToSettingBtn.classList.remove('active');
  topNavToSettingBtn.classList.remove('active');
  leftSideNavSettingBtn.classList.remove('active');
  navToHomeBtn.classList.remove('active');
  topNavToHomeBtn.classList.remove('active');
  leftSideNavToHomeBtn.classList.remove('active');
  document.getElementById('page-title').innerHTML = '<span class="material-symbols-sharp">info</span>About';//Change The Content of Page Title to About
  document.getElementById('nav-container').style.width = '0'; //Set The Width of Navigation Container is 0
  document.getElementById('nav-container').style.height = '0'; //Set The Height of Navigation Container is 0
  document.getElementById('nav-container').style.borderBottomRightRadius = '500px'; //Set The Bottom Right Border Radius of Navigation Container is 500 pixels
};
//Setting Page
function navToSetting() { 
  document.getElementById('main-content').innerHTML = '<div class="container rounder border black-text-color"><label class="header-label"><span class="material-symbols-sharp" style="font-size:36px;">settings</span><h1>Setting</h1></label><!--<input type="search" id="search-setting" name="search-setting" class="search-setting" placeholder="Search..." style="display:flex;width:100%;"/>--></div><div class="container rounder border black-text-color" id="section-personaliation"><label class="header-label"><span class="material-symbols-sharp bgcpalette-1 circle black-text-color" style="font-size:36px;">architecture</span><h1>Personalisation</h1></label><br><label for="toggle-dark-light-mode" class="setting-option-label black-text-color"><input type="button" id="toggle-dark-light-mode" name="toggle-dark-light-mode" onclick="darkMode()" style="display:none;"/>Dark Mode <span class="switch-indicator uppercase-text" id="switch-indicator-3828id"></span></label></div><div class="container rounder border black-text-color" id="section-other"><label class="header-label"><span class="material-symbols-sharp bgcpalette-1 circle black-text-color">more_vert</span><h1>Other</h1></label><br>';
  navToSettingBtn.classList.add('active');
  topNavToSettingBtn.classList.add('active');
  leftSideNavSettingBtn.classList.add('active');
  navToHomeBtn.classList.remove('active');
  topNavToHomeBtn.classList.remove('active');
  leftSideNavToHomeBtn.classList.remove('active');
  navToAboutBtn.classList.remove('active');
  topNavToAboutBtn.classList.remove('active');
  leftSideNavToAboutBtn.classList.remove('active');
  document.getElementById('page-title').innerHTML = '<span class="material-symbols-sharp">settings</span>Setting';//Change The Content of Page Title to Setting
  document.getElementById('nav-container').style.width = '0'; //Set The Width of Navigation Container is 0
  document.getElementById('nav-container').style.height = '0'; //Set The Height of Navigation Container is 0
  document.getElementById('nav-container').style.borderBottomRightRadius = '500px'; //Set The Bottom Right Border Radius of Navigation Container is 500 pixels
};
/*
function directToCreatorMediaSocialPage(token, token2, token3) {
  function directToTiktok(token) {
    location.href = token;
  };
  function directToInstagram(token2) {
    location.href = token2;
  };
  function directToFacebook(token3) {
    location.href = token3;
  };
};
*/
//Scroll to top of page when user start scrolling
window.onscroll = () => {onScrollDisplayButton()};
function onScrollDisplayButton() {
  if (document.body.scrollTop > 50 ) {
    document.getElementById('go-top-of-page-button').style.display = 'block';
  } else {
    document.getElementById('go-top-of-page-button').style.display = 'none';
  }
}
//When user click the button, scroll to top of page
function scrollToTop() {
  document.body.scrollTop = 0;
}

//Show page
function showContent() {
  document.getElementById('body-content').style.display = 'block';
  document.getElementById('loading-page').style.display = 'none';
}
function showContentTimeout() {
  setTimeout(showContent, 5000);
}
//Setting Actions
//Personalisation
//Dark Mode
function darkMode() {
  var body = document.body;
  body.classList.toggle('dark');
};
function darkModeSwitchIndicator() {
  if (document.body.classList.contains('dark') == true) {
    document.getElementById('switch-indicator-3828id').innerHTML = 'on';
    document.getElementById('switch-indicator-3828id').style.color = '#00FF00';
    document.getElementsByClassName('ab-logo').src = '/res/image/AB_Logo_2023-08-18_Dark_Theme.png';
    document.getElementById('section-personaliation').
  } else {
    var darkModeIndicator = document.getElementById('switch-indicator-3828id').innerHTML = 'off';
    var darkModeIndicator = document.getElementById('switch-indicator-3828id').style.color = '#FF0000';
    document.getElementsByClassName('ab-logo').src = '/res/image/AB_Logo_2023-08-18_Bright_Theme.png';
  };
  setTimeout(darkModeSwitchIndicator, 100);
};
