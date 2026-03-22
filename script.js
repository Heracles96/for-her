// LOADING + ENTRY
window.onload = function() {
  const loading = document.getElementById("loading");
  const entry = document.getElementById("entry");
  loading.classList.add("active");
  setTimeout(()=>{ loading.classList.remove("active"); entry.style.display="block"; },2000);
};

function enterSite(){ document.getElementById("entry").style.display="none"; showSection("home"); }
function goToMenu(){ showSection("menu"); }
function openPage(page){ showSection(page); }
function goBack(){ showSection("menu"); }
function showSection(id){ document.querySelectorAll("section").forEach(s=>s.classList.remove("active")); document.getElementById(id).classList.add("active"); }

// SURPRISE
const surprises=["You again? 😏","This is fun!","You keep clicking 👀","I like this vibe","You're interesting 😎","Click master unlocked","Random fun just for you"];
function showSurprise(){ document.getElementById("surpriseText").innerText=surprises[Math.floor(Math.random()*surprises.length)]; }

// METER
const slider=document.getElementById("slider");
if(slider){ slider.oninput=function(){ this.value=100; document.getElementById("meterText").innerText="I wait for your messages 😏"; }; }

// COOL
const reasons=[
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
let reasonIndex=0;
function showReason(){
  const t=document.getElementById("reasonText");
  t.innerText=reasons[reasonIndex];
  if(reasonIndex===reasons.length-1){ t.style.color="#FFD700"; t.style.fontWeight="bold"; } else { t.style.color="white"; t.style.fontWeight="normal"; }
  reasonIndex++; if(reasonIndex>=reasons.length) reasonIndex=0;
}

// ADOPT
function adopt(){ document.getElementById("adoptText").innerText="Good choice 😏"; }

// SPECIAL OFFER
function checkAnswer(){
  const input=document.getElementById("answer").value.trim().toLowerCase();
  if(input==="nandini"){ document.getElementById("offerText").innerText="Congratulations 🎉"; document.getElementById("giftCard").style.display="block"; }
  else{ document.getElementById("offerText").innerText="Hmm… try again 😏"; }
}

// UNIVERSE
const canvas=document.getElementById("universeCanvas");
if(canvas){
  const ctx=canvas.getContext("2d");
  canvas.width=canvas.offsetWidth;
  canvas.height=canvas.offsetHeight;
  const stars=[];
  for(let i=0;i<150;i++){ stars.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*2+1,glow:Math.random()}); }
  const specialStar={x:canvas.width/2,y:canvas.height/2,r:4,glow:1};
  function drawStars(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    stars.forEach(s=>{ ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2); ctx.fillStyle=`rgba(255,255,255,${0.5+0.5*Math.sin(Date.now()/500+s.glow)})`; ctx.fill(); });
    ctx.beginPath(); ctx.arc(specialStar.x,specialStar.y,specialStar.r,0,Math.PI*2);
    ctx.fillStyle=`rgba(255,215,0,${0.8+0.2*Math.sin(Date.now()/300)})`; ctx.fill();
    requestAnimationFrame(drawStars);
  }
  drawStars();
}
