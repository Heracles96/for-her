// ===== NAVIGATION =====
function show(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// ===== ENTRY =====
function startExperience(){
  show("cinematic");
  playCinematic();
}

function nope(){
  document.getElementById("noMsg").innerText =
  "You sure? You might miss something interesting 😌";
}

// ===== CINEMATIC =====
const lines = [
"This site wasn't made for everyone.",
"In fact... most people wouldn't even get it.",
"But somehow...",
"You're here.",
"So yeah... it was made for you.",
"And the funny part is...",
"It doesn't really have a purpose.",
"Except maybe... making you smile."
];

let index = 0;

function playCinematic(){
  const text = document.getElementById("cinematicText");
  const btn = document.getElementById("continueBtn");

  text.textContent = ""; // clear once
  index = 0;
  btn.style.opacity = 0;

  function nextLine(){
    if(index < lines.length){
      typeText(lines[index], text, () => {
        index++;
        setTimeout(nextLine, 700);
      });
    }else{
      btn.style.opacity = 1;
    }
  }

  nextLine();
}

// ===== TYPEWRITER =====
function typeText(line, element, callback){
  let i = 0;

  function typing(){
    if(i < line.length){
      element.textContent += line.charAt(i);
      i++;
      setTimeout(typing, 35);
    }else{
      element.textContent += "\n"; // next line
      callback();
    }
  }

  typing();
}

// ===== MENU NAV =====
function go(page){
  window.location.href = page;
}

function goToMenu(){
  show("menu");
}
