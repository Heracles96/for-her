// ===== NAVIGATION =====
function showPage(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

// ===== GALAXY =====
const gCanvas = document.getElementById("galaxyCanvas");
if(gCanvas){
const gCtx = gCanvas.getContext("2d");

function resize(){
  gCanvas.width = gCanvas.offsetWidth;
  gCanvas.height = gCanvas.offsetHeight;
}
resize();

const stars = Array.from({length:60},()=>({
  x:Math.random()*gCanvas.width,
  y:Math.random()*gCanvas.height,
  r:Math.random()*2+1
}));

function draw(){
  gCtx.clearRect(0,0,gCanvas.width,gCanvas.height);
  stars.forEach(s=>{
    gCtx.beginPath();
    gCtx.arc(s.x,s.y,s.r,0,Math.PI*2);
    gCtx.fillStyle="white";
    gCtx.fill();
  });
  requestAnimationFrame(draw);
}
draw();
}

// ===== AMAZING =====
const aCanvas=document.getElementById("amazingCanvas");
if(aCanvas){
const ctx=aCanvas.getContext("2d");
aCanvas.width=aCanvas.offsetWidth;
aCanvas.height=aCanvas.offsetHeight;

const reasons=[
"Your vibe is different 😏",
"You make things fun 🎉",
"Your smile is contagious 😁",
"You’re strong 💛",
"I trust you 🌟"
];

const stars=reasons.map((r)=>({
  x:Math.random()*aCanvas.width,
  y:Math.random()*aCanvas.height,
  r:10,
  text:r
}));

function draw(){
  ctx.clearRect(0,0,aCanvas.width,aCanvas.height);
  stars.forEach(s=>{
    ctx.beginPath();
    ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
    ctx.fillStyle="white";
    ctx.fill();
  });
  requestAnimationFrame(draw);
}
draw();

aCanvas.onclick=(e)=>{
  const rect=aCanvas.getBoundingClientRect();
  const x=e.clientX-rect.left;
  const y=e.clientY-rect.top;

  stars.forEach(s=>{
    if(Math.hypot(s.x-x,s.y-y)<s.r){
      document.getElementById("reasonText").innerText=s.text;
    }
  });
};
}

// ===== METER =====
let progress=0;
const meter=document.getElementById("meterFill");
const msg=document.getElementById("meterMsg");

document.getElementById("meterBox")?.addEventListener("click",()=>{
  if(progress<100){
    progress+=10;
    meter.style.width=progress+"%";

    if(progress<30) msg.innerText="Starting 😏";
    else if(progress<70) msg.innerText="This is fun 😁";
    else if(progress<100) msg.innerText="Almost addicted 😎";
    else msg.innerText="Ok I’ll wait for your text 😒";
  }
});

// ===== SURPRISE =====
document.getElementById("surpriseBtn")?.addEventListener("click",()=>{
  const arr=["You’re cute 😏","I like this 😁","Keep clicking 👀"];
  surpriseText.innerText=arr[Math.floor(Math.random()*arr.length)];
});

// ===== ADOPT =====
let adopted=false;
document.getElementById("adoptBtn")?.addEventListener("click",()=>{
  const msg=document.getElementById("adoptMsg");
  if(!adopted){
    msg.innerText="Good choice. Handle with care.";
    adopted=true;
  }else{
    msg.innerText="Already yours 😏";
  }
});

// ===== GIFT =====
document.getElementById("giftBtn")?.addEventListener("click",()=>{
  if(document.getElementById("giftInput").value.toLowerCase()=="nandini"){
    document.getElementById("giftCard").classList.remove("hidden");
  }else{
    alert("Wrong 😏");
  }
});
