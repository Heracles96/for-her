// ===== Section Navigation =====
function showSection(id){
  document.getElementById('menu').style.display='none';
  const sections=['galaxy','meter','surprise','cool','giftCard','adoptMe'];
  sections.forEach(sec=> document.getElementById(sec).style.display='none');
  document.getElementById(id).style.display='block';
}
function backToMenu(){
  const sections=['galaxy','meter','surprise','cool','giftCard','adoptMe'];
  sections.forEach(sec=> document.getElementById(sec).style.display='none');
  document.getElementById('menu').style.display='block';
}

// ===== Homepage Continue Button =====
document.getElementById('continueBtn').addEventListener('click', ()=>{
  document.getElementById('home').style.display='none';
  document.getElementById('menu').style.display='block';
});

// ===== Galaxy Simulation =====
const galaxyCanvas=document.getElementById("galaxyCanvas");
if(galaxyCanvas){
  const ctx=galaxyCanvas.getContext("2d");
  galaxyCanvas.width=galaxyCanvas.offsetWidth;
  galaxyCanvas.height=galaxyCanvas.offsetHeight;
  const stars=[];
  const numStars=80;
  for(let i=0;i<numStars;i++){
    stars.push({x:Math.random()*galaxyCanvas.width,y:Math.random()*galaxyCanvas.height,r:Math.random()*2+1,dx:(Math.random()-0.5)*0.2,dy:(Math.random()-0.5)*0.2,color:"white",special:i===numStars-1});
  }
  function drawStars(){
    ctx.clearRect(0,0,galaxyCanvas.width,galaxyCanvas.height);
    stars.forEach(s=>{
      ctx.beginPath();
      ctx.arc(s.x,s.y,s.r+(s.special?Math.sin(Date.now()/300)*2:0),0,Math.PI*2);
      ctx.fillStyle=s.special?"gold":s.color;
      ctx.shadowBlur=s.special?20:5;
      ctx.shadowColor=s.special?"gold":"white";
      ctx.fill();ctx.closePath();
      s.x+=s.dx;s.y+=s.dy;
      if(s.x<0)s.x=galaxyCanvas.width;if(s.x>galaxyCanvas.width)s.x=0;
      if(s.y<0)s.y=galaxyCanvas.height;if(s.y>galaxyCanvas.height)s.y=0;
    });
    requestAnimationFrame(drawStars);
  }
  drawStars();
  galaxyCanvas.addEventListener('click',(e)=>{
    const rect=galaxyCanvas.getBoundingClientRect();
    const mx=e.clientX-rect.left,my=e.clientY-rect.top;
    stars.forEach(s=>{
      const dx=s.x-mx,dy=s.y-my;
      if(Math.sqrt(dx*dx+dy*dy)<10){
        createSparkle(mx,my);
        if(s.special)alert("🌟 You found the magical star! 🌟");
      }
    });
  });
}

// ===== Shared sparkle =====
function createSparkle(x,y){
  for(let i=0;i<5;i++){
    const sparkle=document.createElement("div");
    sparkle.innerText="✨";
    sparkle.style.position="absolute";
    sparkle.style.left=(x+Math.random()*40-20)+"px";
    sparkle.style.top=(y+Math.random()*40-20)+"px";
    sparkle.style.fontSize=(Math.random()*20+10)+"px";
    sparkle.style.pointerEvents="none";
    document.body.appendChild(sparkle);
    setTimeout(()=>sparkle.remove(),1000);
  }
}

// ===== Talking Meter =====
const fill=document.getElementById("meterFill");
const text=document.getElementById("meterText");
let meterProgress=0;
if(fill){
  document.getElementById("meterContainer").addEventListener("click",()=>{
    if(meterProgress<100){
      let inc=Math.floor(Math.random()*8)+5;
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
let clickCount=0;
const surprises=["You again? 😏","This is fun! 🎉","You keep clicking 👀","I like this vibe 😎","Random fun just for you ✨","Click master unlocked 💪","You're interesting 😏","Keep going! 🐣","Your smile makes this fun 😁","I like your energy ✨"];
const surpriseBtn=document.getElementById("surpriseBtn");
if(surpriseBtn){
  const surpriseText=document.getElementById("surpriseText");
  surpriseBtn.addEventListener("click",()=>{
    clickCount++;
    let msg;
    if(clickCount===10) msg="And in the end, you still gonna waste time 😏… it was supposed to make you smile!";
    else if(Math.random()<0.2) msg="You're truly amazing 😏💛";
    else msg=surprises[Math.floor(Math.random()*surprises.length)];
    surpriseText.innerText=msg;
    surpriseText.style.color=`hsl(${Math.random()*360},80%,70%)`;
    surpriseText.classList.remove("active"); void surpriseText.offsetWidth; surpriseText.classList.add("active");
    if(Math.random()<0.3) createSparkle();
  });
}

// ===== Why You're Amazing / Cool =====
const coolCanvas=document.getElementById("coolCanvas");
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
  function displayCoolReason(msg,color){
    const el=document.getElementById("coolReasonDisplay");
    el.innerText=msg;
    el.style.color=color;
    el.style.opacity=0;
    el.style.transform="scale(0.8)";
    setTimeout(()=>{el.style.opacity=1;el.style.transform="scale(1)";},100);
  }
}

// ===== Secret Gift Card =====
document.getElementById("giftBtn").addEventListener("click",()=>{
  const input=document.getElementById("giftInput").value.trim().toLowerCase();
  const result=document.getElementById("giftResult");
  if(input==="nandini"){
    result.innerHTML=`<div id="giftCardResult">🎉 Congratulations! 🎉<br>You can redeem a dinner whenever you want 🍽️</div>`;
  } else {
    result.innerText="Wrong answer! Try again 😅";
    result.classList.add("shake");
    setTimeout(()=>result.classList.remove("shake"),500);
  }
});

// ===== Adopt Me =====
const adoptBtn=document.getElementById("adoptBtn");
const adoptResult=document.getElementById("adoptResult");
let adopted=false;
adoptBtn.addEventListener("click",()=>{
  if(!adopted){
    adopted=true;
    adoptResult.innerHTML="";
    sequentialText(["Good choice.","Harsh has been assigned to you.","👉 Handle with care."],adoptResult,1000);
    createSparkle(adoptBtn.getBoundingClientRect().left+50,adoptBtn.getBoundingClientRect().top+10);
  } else {
    const msgs=["Harsh is already yours.","No returns accepted."];
    adoptResult.innerText=msgs[Math.floor(Math.random()*msgs.length)];
    createSparkle(adoptBtn.getBoundingClientRect().left+50,adoptBtn.getBoundingClientRect().top+10);
  }
});
function sequentialText(arr,container,delay){
  let i=0;
  function showNext(){
    if(i<arr.length){
      const p=document.createElement("p");
      p.innerText=arr[i];
      p.style.opacity=0;
      container.appendChild(p);
      setTimeout(()=>{p.style.opacity=1;p.style.transform="scale(1.05)";},100);
      i++;
      setTimeout(showNext,delay);
    }
  }
  showNext();
}
