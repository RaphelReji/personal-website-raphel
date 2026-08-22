
function startMenu(){
    let menu=document.getElementById("nav-items");
    if (menu.style.display==="block"){
        menu.style.display="none";
    }

    else{
        menu.style.display="block";
    }
}

function settings(){
    let settingswindow=document.getElementById("settings-window");
  if  (settingswindow.style.display==="block"){
    settingswindow.style.display="none";
  }

  else{
    settingswindow.style.display="block";
  }
}

function nightimg(){
    let body=document.getElementById("body")
    body.style.backgroundImage="url(images/night.jpg)"

    let nightsettings=document.getElementById("nightbtn-image")
    nightsettings.style.border="3px solid red";
}

function dayimg(){
    let body=document.getElementById("body")
    body.style.backgroundImage="url(images/day.jpg)"

    let daysettings=document.getElementById("daybtn-image")
    daysettings.style.border="3px solid red";
}

function closebtn(){
    let settingswindow=document.getElementById("settings-window");
    settingswindow.style.display="none";
}