window.onload=function(){

// ===== NAVIGATION =====
const pages=document.querySelectorAll(".page");
function showPage(id){pages.forEach(p=>p.classList.add("hidden"));document.getElementById(id).classList.remove("hidden");}
document.getElementById("continueBtn").onclick=()=>showPage("menu");
document.querySelectorAll(".menuBtn").forEach(btn=>{
  btn.onclick=()=>showPage(btn.dataset.target);
});
document.querySelectorAll(".backBtn").forEach(btn=>{
  btn.onclick=()=>showPage("menu");
});

// ===== GALAXY SIMULATION =====
const galaxyCanvas=document.getElementById("galaxyCanvas");
if(galaxyCanvas){
const ctx=galaxyCanvas.getContext("2d");
galaxyCanvas.width=galaxyCanvas.offsetWidth;
galaxyCanvas.height=galaxyCanvas.offsetHeight;
const stars=[];for(let i=0;i<80;i++){stars.push({x:Math.random()*galaxyCanvas.width,y:Math.random()*galaxyCanvas.height,r:Math.random()*2+1,dx:(Math.random()-0.5)*0.3,dy:(Math.random()-0.5)*0.3,color:"white",special:i===79});}
function drawStars(){ctx.clearRect(0,0,galaxyCanvas.width,galaxyCanvas.height);stars.forEach(s=>{ctx.beginPath();const radius=s.r+(s.special?Math.sin(Date.now()/300)*2:0);ctx.arc(s.x,s.y,radius,0,Math.PI*2);ctx.fillStyle=s.special?"gold":s.color;ctx.shadowBlur=s.special?20:5;ctx.shadowColor=s.special?"gold":"white";ctx.fill();ctx.closePath();s.x+=s.dx;s.y+=s.dy;if(s.x<0)s.x=galaxyCanvas.width;if(s.x>galaxyCanvas.width)s.x=0;if(s.y<0)s.y=galaxyCanvas.height;if(s.y>galaxyCanvas.height)s.y=0;});requestAnimationFrame(drawStars);}
drawStars();
galaxyCanvas.addEventListener("click",(e)=>{const rect=galaxyCanvas.getBoundingClientRect();const mx=e.clientX-rect.left;const my=e.clientY-rect.top;stars.forEach(s=>{const dx=s.x-mx,dy=s.y-my;if(Math.sqrt(dx*dx+dy*dy)<10){createSparkle(mx,my);if(s.special)alert("🌟 You found the magical star! 🌟");}});});
}

// ===== WHY YOU’RE AMAZING =====
const coolCanvas=document.getElementById("coolCanvas");
if(coolCanvas){
const ctxC=coolCanvas.getContext("2d");coolCanvas.width=coolCanvas.offsetWidth;coolCanvas.height=coolCanvas.offsetHeight;
const reasons=["Your vibe is different… in a good way 😏","You make things fun without even trying 🎉","You make things better by being there ✨","Your smile is lowkey contagious 😁","Even normal conversations aren’t normal with you 😂","Your expressions are actually elite 😎","You’ve got way too many talents… it’s unfair 💪","You act calm but you’re actually really strong 💛","You’re someone I can actually trust 🌟"];
const starsR=reasons.map((reason,i)=>({x:Math.random()*coolCanvas.width,y:Math.random()*coolCanvas.height,r:15,reason:reason,color:i===reasons.length-1?"gold":"white",clicked:false,dx:(Math.random()-0.5)*0.2,dy:(Math.random()-0.5)*0.2}));
function drawCoolStars(){ctxC.clearRect(0,0,coolCanvas.width,coolCanvas.height);starsR.forEach(s=>{ctxC.beginPath();const radius=s.r+(s.color==="gold"?Math.sin(Date.now()/300)*2:0);ctxC.arc(s.x,s.y,radius,0,Math.PI*2);ctxC.fillStyle=s.color;ctxC.shadowBlur=s.clicked?20:10;ctxC.shadowColor=s.color;ctxC.fill();ctxC.closePath();s.x+=s.dx;s.y+=s.dy;if(s.x<0)s.x=coolCanvas.width;if(s.x>coolCanvas.width)s.x=0;if(s.y<0)s.y=coolCanvas.height;if(s.y>coolCanvas.height)s.y=0;});requestAnimationFrame(drawCoolStars);}
drawCoolStars();
coolCanvas.addEventListener("click",(e)=>{const rect=coolCanvas.getBoundingClientRect();const mx=e.clientX-rect.left;const my=e.clientY-rect.top;starsR.forEach(s=>{const dx=s.x-mx,dy=s.y-my;if(Math.sqrt(dx*dx+dy*dy)<s.r){s.clicked=true;displayReason(s.reason,s.color);createSparkle(mx,my);}});});
function displayReason(msg,color){const el=document.getElementById("coolReasonDisplay");el.innerText=msg;el.style.color=color;el.style.opacity=0;el.style.transform="scale(0.8)";setTimeout(()=>{el.style.opacity=1;el.style.transform="scale(1)";},100);}
}

// ===== TALKING METER =====
const fill=document.getElementById("meterFill");const text=document.getElementById("meterText");let meterProgress=0;
const meterMessages=[{max:10,msg:"0-10% – Just started 😏"},{max:20,msg:"11-20% – Getting interesting 🙂"},{max:40,msg:"21-40% – Loving it 😁"},{max:60,msg:"41-60% – Can’t stop 😎"},{max:80,msg:"61-80% – Really fun ✨"},{max:99,msg:"81-99% – Almost there 😏"},{max:100,msg:"100% – Ok, I’ll wait for your text 😒"}];
if(fill){document.getElementById("meterContainer").addEventListener("click",()=>{if(meterProgress<100){let inc=Math.floor(Math.random()*8)+5;meterProgress+=inc;if(meterProgress>100)meterProgress=100;fill.style.width=meterProgress+"%";const currentMsg=meterMessages.find(m=>meterProgress<=m.max).msg;text.innerText=currentMsg;createSparkle();}});}

// ===== CLICK FOR SURPRISE =====
const surpriseBtn=document.getElementById("surpriseBtn");
const surpriseText=document.getElementById("surpriseText");
if(surpriseBtn){surpriseBtn.onclick=()=>{
  const surprises=["You just made my day 😄","I’m secretly smiling 😏","You’re awesome 🌟","Can’t stop thinking about you 💛"];
  const msg=surprises[Math.floor(Math.random()*surprises.length)];
  surpriseText.innerText=msg;
  createSparkle();
};}

// ===== ADOPT ME =====
const adoptBtn=document.getElementById("adoptBtn");
const adoptMsg=document.getElementById("adoptMsg");
if(adoptBtn){
  adoptBtn.onclick=()=>{
    if(adoptMsg.innerText===""){adoptMsg.innerText="Good choice.\nHarsh has been assigned to you.\nHandle with care.";}
    else{adoptMsg.innerText="Harsh is already yours. No returns accepted.";}
    createSparkle();
  };
}

// ===== SPECIAL GIFT =====
const giftBtn=document.getElementById("giftBtn");
const giftCard=document.getElementById("giftCard");
if(giftBtn){
  giftBtn.onclick=()=>{
    const answer=document.getElementById("giftAnswer").value.trim().toLowerCase();
    if(answer==="nandini"){giftCard.classList.remove("hidden");createSparkle();}
    else{alert("Try again 😉");}
  };
}

// ===== SPARKLE =====
function createSparkle(x,y){for(let i=0;i<5;i++){const s=document.createElement("div");s.innerText="✨";s.style.position="absolute";s.style.left=(x||Math.random()*window.innerWidth)+"px";s.style.top=(y||Math.random()*window.innerHeight)+"px";s.style.fontSize=(Math.random()*20+10)+"px";s.style.pointerEvents="none";document.body.appendChild(s);setTimeout(()=>s.remove(),1000);}}
