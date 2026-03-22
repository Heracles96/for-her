// Homepage → Menu
function goToMenu(){
  document.getElementById('home').style.display='none';
  document.getElementById('menu').style.display='block';
}

// Show section
function showSection(id){
  document.getElementById('menu').style.display='none';
  const sections = ['galaxy','meter','surprise','cool','giftCard','adoptMe'];
  sections.forEach(sec=> document.getElementById(sec).style.display='none');
  document.getElementById(id).style.display='block';
}

// Back to menu
function backToMenu(){
  const sections = ['galaxy','meter','surprise','cool','giftCard','adoptMe'];
  sections.forEach(sec=> document.getElementById(sec).style.display='none');
  document.getElementById('menu').style.display='block';
}

// ===== Galaxy Simulation =====
const galaxyCanvas = document.getElementById("galaxyCanvas");
if(galaxyCanvas){
  const ctx = galaxyCanvas.getContext("2d");
  galaxyCanvas.width = galaxyCanvas.offsetWidth;
  galaxyCanvas.height = galaxyCanvas.offsetHeight;
  const stars = [];
  const numStars=80;
  for(let i=0;i<numStars;i++){
    stars.push({x:Math.random()*galaxyCanvas.width,y:Math.random()*galaxyCanvas.height,r:Math.random()*2+1,dx:(Math.random()-0.5)*0.2,dy:(Math.random()-0.5)*0.2,color:"white",special:i===numStars-1});
  }
  function drawStars(){
    ctx.clearRect(0,0,galaxyCanvas.width,galaxyCanvas.height);
    stars.forEach(s=>{
      ctx.beginPath();
      ctx.arc(s.x,s.y,s.r+(s.special?Math.sin(Date.now()/300)*2:0),0,Math.PI*2);
      ctx.fillStyle = s.special?"gold":s.color;
      ctx.shadowBlur = s.special?20:5;
      ctx.shadowColor = s.special?"gold":"white";
      ctx.fill();ctx.closePath();
      s.x+=s.dx;s.y+=s.dy;
      if(s.x<0)s.x=galaxyCanvas.width;if(s.x>galaxyCanvas.width)s.x=0;
      if(s.y<0)s.y=galaxyCanvas.height;if(s.y>galaxyCanvas.height)s.y=0;
    });
    requestAnimationFrame(drawStars);
  }
  drawStars();
  galaxyCanvas.addEventListener('click',(e)=>{
    const rect = galaxyCanvas.getBoundingClientRect();
    const mx = e.clientX-rect.left; const my = e.clientY-rect.top;
    stars.forEach(s=>{
      const dx=s.x-mx,dy=s.y-my;
      if(Math.sqrt(dx*dx+dy*dy)<10){createSparkle(mx,my);if(s.special)alert("🌟 You found the magical star! 🌟");}
    });
  });
}

// ===== Shared sparkle function =====
function createSparkle(x,y){
  for(let i=0;i<5;i++){
    const sparkle = document.createElement("div");
    sparkle.innerText="✨";
    sparkle.style.position="absolute";
    sparkle.style.left = (x+Math.random()*40-20)+"px";
    sparkle.style.top = (y+Math.random()*40-20)+"px";
    sparkle.style.fontSize = (Math.random()*20+10)+"px";
    sparkle.style.pointerEvents="none";
    document.body.appendChild(sparkle);
    setTimeout(()=>sparkle.remove(),1000);
  }
}

// ===== Talking Meter =====
const fill = document.getElementById("meterFill");
const text = document.getElementById("meterText");
let meterProgress = 0;
if(fill){
  document.getElementById("meterContainer").addEventListener("click",()=>{
    if(meterProgress<100){
      let inc = Math.floor(Math.random()*8)+5;
      meterProgress+=inc;if(meterProgress>100)meterProgress=100;
      fill.style.width=meterProgress+"%";
      fill.style.boxShadow="0 0 20px #fbbf24,0 0 40px #fef3c7";
      text.innerText=meterProgress+"%";
      createSparkleMeter();
      if(meterProgress===100){
        text.innerText="100% – Talking to you is the best 😏🎉";
        fill.style.boxShadow="0 0 25px #fef3c7,0 0 50px #fbbf24";
        createConfettiMeter();
      }
      setTimeout(()=>fill.style.boxShadow="0 0 10px #fbbf24",300);
    }
  });
}
function createSparkleMeter(){for(let i=0;i<5;i++){const s=document.createElement("div");s.innerText="✨";s.style.position="absolute";s.style.left=Math.random()*80+10+"%";s.style.top=Math.random()*50+10+"%";s.style.fontSize=Math.random()*15+10+"px";s.style.pointerEvents="none";document.body.appendChild(s);setTimeout(()=>s.remove(),800);}}
function createConfettiMeter(){for(let i=0;i<20;i++){const c=document.createElement("div");c.innerText="🎉";c.style.position="absolute";c.style.left=Math.random()*90+"%";c.style.top=Math.random()*50+"%";c.style.fontSize=`${Math.random()*20+15}px`;c.style.pointerEvents="none";document.body.appendChild(c);setTimeout(()=>c.remove(),2000);}}

// ===== Click for Surprise =====
let clickCount = 0;
const surprises=["You again? 😏","This is fun! 🎉","You keep clicking 👀","I like this vibe 😎","Random fun just for you ✨","Click master unlocked 💪","You're interesting 😏","Keep going! 🐣","Your smile makes this fun 😁","I like your energy ✨"];
function showSurprise(){
  clickCount++;
  const textEl=document.getElementById("surpriseText");
  let msg;
  if(clickCount===10) msg="And in the end, you still gonna waste time 😏… it was supposed to make you smile!";
  else if(Math.random()<0.2) msg="You're truly amazing 😏💛";
  else msg=surprises[Math.floor(Math.random()*surprises.length)];
  textEl.innerText=msg;
  textEl.style.color=`hsl(${Math.random()*360},80%,70%)`;
  textEl.classList.remove("active"); void textEl.offsetWidth; textEl.classList.add("active");
  if(Math.random()<0.3) createSparkle();
}

// ===== Why You’re Amazing / Cool =====
const coolCanvas = document.getElementById("coolCanvas");
if(coolCanvas){
  const ctxC=coolCanvas.getContext("2d");
  coolCanvas.width=coolCanvas.offsetWidth; coolCanvas.height=coolCanvas.offsetHeight;
  const coolReasons=["Your vibe is different… in a good way 😏","You make things fun without even trying 🎉","You make things better by being there ✨","Your smile is lowkey contagious 😁","Even normal conversations aren’t normal with you 😂","Your expressions are actually elite 😎","You’ve got way too many talents… it’s unfair 💪","You act calm but you’re actually really strong 💛","You’re someone I can actually trust 🌟"];
  const stars=[];
  for(let i=0;i<coolReasons.length;i++) stars.push({x:Math.random()*coolCanvas.width,y:Math.random()*coolCanvas.height,r:15,reason:coolReasons[i],color:i===coolReasons.length-1?"gold":"white",clicked:false,dx:(Math.random()-0.5)*0.2,dy:(Math.random()-0.5)*0.2});
  function drawCoolStars(){
    ctxC.clearRect(0,0,coolCanvas.width,coolCanvas.height);
    stars.forEach(s=>{
      ctxC.beginPath();
      const radius = s.r + (s.color==="gold"?Math.sin(Date.now()/300)*2:0);
      ctxC.arc(s.x,s.y,radius,0,Math.PI*2);
      ctxC.fillStyle=s.color;
      ctxC.shadowBlur = s.clicked?20:10;
      ctxC.shadowColor = s.color;
      ctxC.fill(); ctxC.closePath();
      s.x+=s.dx; s.y+=s.dy;
      if(s.x<0)s.x=coolCanvas.width;if(s.x>coolCanvas.width)s.x=0;
      if(s.y<0)s.y=coolCanvas.height;if(s.y>coolCanvas.height)s.y=0;
    });
    requestAnimationFrame(drawCoolStars);
  }
  drawCoolStars();
  coolCanvas.addEventListener('click',(e)=>{
    const rect=coolCanvas.getBoundingClientRect();
    const mx=e.clientX-rect.left; const my=e.clientY-rect.top;
    stars.forEach(s=>{
      const dx=s.x-mx,dy=s.y-my;
      if(Math.sqrt(dx*dx+dy*dy)<s.r){s.clicked=true;displayCoolReason(s.reason,s.color);createSparkle(mx,my);}
    });
  });
  function displayCoolReason(msg,color){const el=document.getElementById("coolReasonDisplay");el.innerText=msg;el.style.color=color;el.style.opacity=0;el.style.transform="scale(0.8)";setTimeout(()=>{el.style.opacity=1;el.style.transform="scale(1)";},100);}
}

// ===== Secret Gift Card =====
function checkGiftAnswer(){
  const input=document.getElementById("giftInput");
  const result=document.getElementById("giftResult");
  if(input.value.trim().toLowerCase()==="nandini"){
    result.innerHTML=`<div id="giftCardResult">🎉 Congratulations! 🎉<br>You can redeem a dinner whenever you want
