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
  const container = document.getElementById("cinematicText");
  const btn = document.getElementById("continueBtn");

  container.innerHTML = ""; // clear properly
  index = 0;
  btn.style.opacity = 0;

  function nextLine(){
    if(index < lines.length){
      typeText(lines[index], container, () => {
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
function typeText(line, container, callback){
  const lineElement = document.createElement("div");
  container.appendChild(lineElement);

  let i = 0;

  function typing(){
    if(i < line.length){
      lineElement.innerHTML += line[i];  // 👈 IMPORTANT CHANGE
      i++;
      setTimeout(typing, 40);
    }else{
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
