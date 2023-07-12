//Open/Close Navigation Drawer
document.getElementById('menu').addEventListener('click', () => {
  document.getElementById('nav-container').style.width = '100%';
});
document.getElementById('close-menu').addEventListener('click', () => {
  document.getElementById('nav-container').style.width = '0';
});

document.getElementById('user').addEventListener('click', () => {
  location.href = 'https://innerid.github.com/ab.io/login.html';
});

//Navigation
document.getElementById('nav-to-home').addEventListener('click', () => {
  document.body.innerHTML = '<header class="header"><button class="outlined-button" id="menu" style="float:left;"><span class="material-symbols-sharp">menu</span></button><button class="outlined-button" id="user" style="float:right;"><span class="material-symbols-sharp">person</span></button></header><br><br><br><br><br><div class="nav-container" id="nav-container"><div class="content"><button id="nav-to-home" class="active"><span class="material-symbols-sharp">home</span><h1>Home</h1></button><button id="nav-to-about"><span class="material-symbols-sharp">info</span> <h1>About</h1></button><button id="nav-to-setting"><span class="material-symbols-sharp">settings</span> <h1>Setting</h1></button><button id="nav-to-feedback"><span class="material-symbols-sharp">feedback</span> <h1>Feedback</h1></button><button id="close-menu"><span class="material-symbols-sharp">close</span><h1>Close</h1></button></div></div><div class="container rb">h1>New Era of AB</h1><p>With Arctic style design</p><button id="explore-ac728d" class="outlined-button rounded-pill-button"><span class="material-symbols-sharp">explore</span>Explore</button>br><button id="back-vi92bs" class="outlined-button rounded-pill-button" onclick="location.href="https://innerid.github.io/ab.io/";"><span class="material-symbols-sharp">arrow_back</span>Back To Main Web</button></div>';
});

document.getElementById('nav-to-about').addEventListener('click', () => {
  document.body.innerHTML = '<header class="header"><button class="outlined-button" id="menu" style="float:left;"><span class="material-symbols-sharp">menu</span></button><button class="outlined-button" id="user" style="float:right;"><span class="material-symbols-sharp">person</span></button></header><br><br><br><br><br><div class="nav-container" id="nav-container"><div class="content"><button id="nav-to-home"><span class="material-symbols-sharp">home</span><h1>Home</h1></button><button id="nav-to-about" class="active"><span class="material-symbols-sharp">info</span> <h1>About</h1></button><button id="nav-to-setting"><span class="material-symbols-sharp">settings</span> <h1>Setting</h1></button><button id="nav-to-feedback"><span class="material-symbols-sharp">feedback</span> <h1>Feedback</h1></button><button id="close-menu"><span class="material-symbols-sharp">close</span><h1>Close</h1></button></div></div><div class="container rb">h1>About</h1><p><a href="index.html">ab.io</a> is A website</p></div>';
});

document.getElementById('nav-to-setting').addEventListener('click', () => {
  document.body.innerHTML = '<header class="header"><button class="outlined-button" id="menu" style="float:left;"><span class="material-symbols-sharp">menu</span></button><button class="outlined-button" id="user" style="float:right;"><span class="material-symbols-sharp">person</span></button></header><br><br><br><br><br><div class="nav-container" id="nav-container"><div class="content"><button id="nav-to-home"><span class="material-symbols-sharp">home</span><h1>Home</h1></button><button id="nav-to-about" class="active"><span class="material-symbols-sharp">info</span> <h1>About</h1></button><button id="nav-to-setting"><span class="material-symbols-sharp">settings</span> <h1>Setting</h1></button><button id="nav-to-feedback"><span class="material-symbols-sharp">feedback</span> <h1>Feedback</h1></button><button id="close-menu"><span class="material-symbols-sharp">close</span><h1>Close</h1></button></div></div><div class="container rb"><h1>Setting</h1><br><button id="setting-1" class="outlined-button"><span class="material-symbols-sharp">architecture</span> Personalisation</button><option><select>English(UK)</select><select>Русский(RU)</select></option></div>';
});
