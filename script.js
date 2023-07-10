function openDrawer() {
    document.getElementById('act-bar').style.opacity = '100%';
    document.getElementById('act-bar').style.backdropFilter = 'blur(8px)';
}
function closeDrawer() {
    document.getElementById('act-bar').style.opacity = '0%';
    document.getElementById('act-bar').style.backdropFilter = 'none';
}
function goBackToMain() {
    location.href="index.html";
}
function aboutPage() {
    document.body.innerHTML = '<div id="act-bar" class="act-bar"><a id="i92ba9" href="javascript:void(0)" style="float:right;" onclick="closeDrawer()"><span class="material-symbols-outlined">close</span></a><br /><button id="top" onclick="settingPage()"><span class="material-symbols-outlined">settings</span>Setting</button><button onclick="feedbackPage()"><span class="material-symbols-outlined">feedback</span>Feedback</button><button class="active" id="bottom" onclick="aboutPage()"><span class="material-symbols-outlined">info</span>About</button><br /><button class="non-bg" onclick="goBackToMain()"><span class="material-symbols-outlined">arrow_back</span>Go back to main page</button></div><header class="heading"><a id="92nd" href="javascript:void(0)" onclick="openDrawer()" style="background-color:#000000;border:none;padding:2.5%;color:#FFFFFF;left:0;"><span class="material-symbols-outlined">menu</span></a><img style="float:right;" src="" onclick="location.href=index.html;"/></header><br /><br /><br /><div class="banner"><h1>About Us</h1><br /><a href="index.html">ab.io<a/> is a website that </div>'
}
function settingPage() {
    document.body.innerHTML = '<div id="act-bar" class="act-bar"><a id="i92ba9" href="javascript:void(0)" style="float:right;" onclick="closeDrawer()"><span class="material-symbols-outlined">close</span></a><br /><button class="active" id="top" onclick="settingPage()"><span class="material-symbols-outlined">settings</span>Setting</button><button onclick="feedbackPage()"><span class="material-symbols-outlined">feedback</span>Feedback</button><button id="bottom" onclick="aboutPage()"><span class="material-symbols-outlined">info</span>About</button><br /><button class="non-bg" onclick="goBackToMain()"><span class="material-symbols-outlined">arrow_back</span>Go back to main page</button></div><header class="heading"><a id="92nd" href="javascript:void(0)" onclick="openDrawer()" style="background-color:#000000;border:none;padding:2.5%;color:#FFFFFF;left:0;"><span class="material-symbols-outlined">menu</span></a><img style="float:right;" src="" onclick="location.href=index.html;"/></header><br /><br /><br /><div class="banner"><h1>Setting</h1><br /><button class="outlined-button" onclick="toggleDarkMode()"><span class="material-symbols-outlined">dark_mode</span> Dark mode</button></div>'
}
function feedbackPage() {
    document.body.innerHTML = '<div id="act-bar" class="act-bar"><a id="i92ba9" href="javascript:void(0)" style="float:right;" onclick="closeDrawer()"><span class="material-symbols-outlined">close</span></a><br /><button id="top" onclick="settingPage()"><span class="material-symbols-outlined">settings</span>Setting</button><button class="active" onclick="feedbackPage()"><span class="material-symbols-outlined">feedback</span>Feedback</button><button id="bottom" onclick="aboutPage()"><span class="material-symbols-outlined">info</span>About</button><br /><button class="non-bg" onclick="goBackToMain()"><span class="material-symbols-outlined">arrow_back</span>Go back to main page</button></div><header class="heading"><a id="92nd" href="javascript:void(0)" onclick="openDrawer()" style="background-color:#000000;border:none;padding:2.5%;color:#FFFFFF;left:0;"><span class="material-symbols-outlined">menu</span></a><img style="float:right;" src="" onclick="location.href=index.html;"/></header><br /><br /><br /><div class="banner"><h1>Feedbacl</h1><br /><a href="https://github.com/INNERID><span class="material-symbols-outlined">github</span> Github</a></div>'
}
