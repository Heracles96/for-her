// -------------------------
// LOADING + ENTRY
// -------------------------
window.onload = function() {
  const loading = document.getElementById("loading");
  const entry = document.getElementById("entry");
  loading.classList.add("active");
  setTimeout(() => {
    loading.classList.remove("active");
    entry.style.display = "block";
  }, 2000);
};

function enterSite() {
  document.getElementById("entry").style.display = "none";
  showSection("home");
}

// -------------------------
// GENERAL NAVIGATION
// -------------------------
function goToMenu() { showSection("menu"); }
function openPage(page) { showSection(page); }
function goBack() { showSection("menu"); }

function showSection(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// -------------------------
// SURPRISE
// -------------------------
const surprises = [
  "You again? 😏",
  "This is fun!",
  "You keep clicking 👀",
  "I like this vibe",
  "You're interesting 😎",
  "Click master unlocked",
  "Random fun just for you"
];

function showSurprise() {
  const text = surprises[Math.floor(Math.random()*surprises.length)];
  document.getElementById("surpriseText").innerText = text;
}

// -------------------------
// METER
// -------------------------
const slider = document.getElementById("slider");
if(slider){
  slider.oninput = function() {
    this.value = 100;
    document.getElementById("meterText").innerText = "I wait for your messages 😏";
  };
}

// -------------------------
// COOL
// -------------------------
const reasons = [
  "Your vibe is different… in a good way.",
  "You make things fun without even trying.",
  "You’re one of those people who just… makes things better by being there.",
  "Your smile is lowkey contagious.",
  "Even normal conversations aren’t normal with you.",
  "Your expressions are actually elite.",
  "You’ve got way too many talents… it’s unfair.",
  "You act calm but you’re actually really strong.",
  "You’re someone I can actually trust."
];

let reasonIndex = 0;
function showReason() {
  const reasonText = document.getElementById("reasonText");
  reasonText.innerText = reasons[reasonIndex];

  if(reasonIndex === reasons.length - 1){
    reasonText.style.color = "#FFD700";
    reasonText.style.fontWeight = "bold";
  } else {
    reasonText.style.color = "white";
    reasonText.style.fontWeight = "normal";
  }

  reasonIndex++;
  if(reasonIndex >= reasons.length) reasonIndex = 0;
}

// -------------------------
// ADOPT
// -------------------------
function adopt() {
  document.getElementById("adoptText").innerText = "Good choice 😏";
}

// -------------------------
// SPECIAL OFFER
// -------------------------
function checkAnswer() {
  const input = document.getElementById("answer").value.trim().toLowerCase();
  if(input === "nandini"){
    document.getElementById("offerText").innerText = "Congratulations 🎉";
    document.getElementById("giftCard").style.display = "block";
  } else {
    document.getElementById("offerText").innerText = "Hmm… try again 😏";
  }
}
