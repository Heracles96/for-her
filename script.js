// ===== Navigation =====
function showMenu(){
  document.getElementById("homepage").style.display = "none";
  document.getElementById("menu").style.display = "block";
}

function showSection(id){
  document.getElementById("menu").style.display = "none";
  document.getElementById(id).style.display = "block";
}

function backToMenu(){
  document.querySelectorAll('section').forEach(s => s.style.display = 'none');
  document.getElementById("menu").style.display = "block";
}

// ===== Click for Surprise =====
let clickCount = 0;
const surprises = [
  "You again? 😏",
  "This is fun! 🎉",
  "You keep clicking 👀",
  "I like this vibe 😎",
  "Random fun just for you ✨",
  "Click master unlocked 💪",
  "You're interesting 😏",
  "Keep going! 🐣",
  "Your smile makes this fun 😁",
  "I like your energy ✨",
  "You make everything brighter 🌟"
];

function showSurprise(){
  clickCount++;
  const textEl = document.getElementById("surpriseText");
  let msg;
  if(clickCount === 10){
    msg = "And in the end, you still gonna waste time 😏… it was supposed to make you smile!";
  } else if(Math.random()<0.2){
    msg = "You're truly amazing 😏💛";
  } else {
    msg = surprises[Math.floor(Math.random()*surprises.length)];
  }

  textEl.innerText = msg;
  textEl.style.color = `hsl(${Math.random()*360}, 80%, 70%)`;
  textEl.classList.remove("active");
  void textEl.offsetWidth;
  textEl.classList.add("active");

  if(Math.random()<0.3) createSparkle();
}

function createSparkle(){
  const sparkle = document.createElement("div");
  sparkle.innerText = "✨";
  sparkle.style.position = "absolute";
  sparkle.style.left = `${Math.random()*80 + 10}%`;
  sparkle.style.top = `${Math.random()*50 + 10}%`;
  sparkle.style.fontSize = `${Math.random()*20 + 20}px`;
  sparkle.style.pointerEvents = "none";
  document.body.appendChild(sparkle);
  setTimeout(()=>sparkle.remove(), 800);
}

// ===== Talking Meter =====
let meterProgress = 0;
function fillMeterInteractive(){
  const fill = document.getElementById("meterFill");
  const text = document.getElementById("meterText");

  fill.addEventListener('click', ()=>{
    if(meterProgress<100){
      let inc = Math.floor(Math.random()*10)+5;
      meterProgress += inc;
      if(meterProgress>100) meterProgress=100;
      fill.style.width = meterProgress + "%";
      fill.style.boxShadow = "0 0 20px #fbbf24, 0 0 40px #fef3c7";
      text.innerText = meterProgress + "%";
      if(Math.random()<0.3) createSparkle();
      if(meterProgress===100){
        text.innerText = "100% – Talking to you is the best 😏🎉";
        fill.style.boxShadow = "0 0 25px #fef3c7,0 0 50px #fbbf24";
        createConfetti();
      }
      setTimeout(()=>fill.style.boxShadow="0 0 10px #fbbf24",300);
    }
  });
}
function createConfetti(){
  for(let i=0;i<20;i++){
    const conf = document.createElement("div");
    conf.innerText="🎉";
    conf.style.position="absolute";
    conf.style.left=Math.random()*90+"%";
    conf.style.top=Math.random()*50+"%";
    conf.style.fontSize=`${Math.random()*20+15}px`;
    conf.style.pointerEvents="none";
    document.body.appendChild(conf);
    setTimeout(()=>conf.remove(),2000);
  }
}
window.addEventListener('load', fillMeterInteractive);

// ===== Cool Stars =====
const coolCanvas = document.getElementById("coolCanvas");
const ctx = coolCanvas.getContext("2d");
coolCanvas.width = coolCanvas.offsetWidth;
coolCanvas.height = coolCanvas.offsetHeight;

const coolReasons = [
  "Your vibe is different… in a good way 😏",
  "You make things fun without even trying 🎉",
  "You’re one of those people who just… makes things better by being there ✨",
  "Your smile is lowkey contagious 😁",
  "Even normal conversations aren’t normal with you 😂",
  "Your expressions are actually elite 😎",
  "You’ve got way too many talents… it’s unfair 💪",
  "You act calm but you’re actually really strong 💛",
  "You’re someone I can actually trust 🌟"
];

const stars = [];
for(let i=0;i<9;i++){
  stars.push({
    x: Math.random()*coolCanvas.width,
    y: Math.random()*coolCanvas.height,
    r: 15,
    reason: coolReasons[i],
    color: i===8?'gold':'white',
    clicked: false
  });
}

coolCanvas.addEventListener('click',(e)=>{
  const rect = coolCanvas.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;

  stars.forEach(s=>{
    const dx = s.x - mx;
    const dy = s.y - my;
    if(Math.sqrt(dx*dx+dy*dy)<s.r){
      s.clicked=true;
      displayCoolReason(s.reason,s.color);
      sparkleEffect(mx,my);
    }
  });
});

function displayCoolReason(msg,color){
  const el = document.getElementById("coolReasonDisplay");
  el.innerText = msg;
  el.style.color=color;
  el.style.opacity=0;
  el.style.transform="scale(0.8)";
  setTimeout(()=>{
    el.style.opacity=1;
    el.style.transform="scale(1)";
  },100);
}

function drawStars(){
  ctx.clearRect(0,0,coolCanvas.width,coolCanvas.height);
  stars.forEach(s=>{
    ctx.beginPath();
    ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
    ctx.fillStyle=s.color;
    ctx.shadowBlur=s.clicked?20:10;
    ctx.shadowColor=s.color;
    ctx.fill();
    ctx.shadowBlur=0;
  });
  requestAnimationFrame(drawStars);
}
drawStars();

// ===== Gift Card =====
function checkGiftAnswer(){
  const input=document.getElementById("giftInput").value.trim().toLowerCase();
  const result=document.getElementById("giftResult");
  if(input==="nandini"){
    result.innerHTML=`<div class="correct">🎉 Congratulations! 🎉<br><strong>You can redeem a dinner whenever you want 😏</strong></div>`;
    createConfettiGift();
  } else {
    result.innerHTML=`<span style="color:#f87171">Try again! 😅</span>`;
  }
}

function createConfettiGift(){
  for(let i=0;i<30;i++){
    const conf=document.createElement("div");
    conf.innerText="✨";
    conf.style.position="absolute";
    conf.style.left=Math.random()*90+"%";
    conf.style.top=Math.random()*50+"%";
    conf.style.fontSize=`${Math.random()*20+15}px`;
    conf.style.pointerEvents="none";
    document.body.appendChild(conf);
    setTimeout(()=>conf.remove(),2000);
  }
}
