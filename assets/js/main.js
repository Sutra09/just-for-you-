
function attachGlitter(){
  window.addEventListener('pointermove', (e)=>{
    const dot = document.createElement('div');
    dot.className = 'glitter-dot';
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    document.body.appendChild(dot);
    setTimeout(()=>dot.remove(),800);
  });
}

function floatingHearts(target){
  const rect = target.getBoundingClientRect();
  const h = document.createElement('img');
  h.src = 'assets/images/heart.svg';
  h.style.position='fixed';
  h.style.left = (rect.left + rect.width/2) + 'px';
  h.style.top = (rect.top + rect.height/2) + 'px';
  h.style.width='26px';
  h.style.pointerEvents='none';
  h.style.transition='all 0.9s ease-out';
  document.body.appendChild(h);
  requestAnimationFrame(()=>{
    h.style.transform='translateY(-60px) scale(1.1)';
    h.style.opacity='0';
  });
  setTimeout(()=>h.remove(),950);
}

function loadName(id){
  const n = localStorage.getItem('hername') || 'Friend';
  const el = document.getElementById(id);
  if(el) el.innerText = n;
}

function chibiInteractive(id){
  const c = document.getElementById(id);
  if(!c) return;
  c.addEventListener('click', ()=>{
    c.style.transform = 'translateY(-10px) scale(1.06) rotate(-3deg)';
    c.style.filter = 'drop-shadow(0 0 10px rgba(255,154,203,0.8))';
    floatingHearts(c);
    const audio = new Audio('assets/audio/pop.mp3');
    audio.volume = 0.6;
    audio.play().catch(()=>{});
    setTimeout(()=>{
      c.style.transform = '';
      c.style.filter = '';
    }, 260);
  });
}

function addBackgroundSparkles(){
  for(let i=0;i<4;i++){
    const s = document.createElement('img');
    s.src = 'assets/images/sparkle.svg';
    s.className = 'bg-sparkle';
    s.style.left = (10 + i*20 + Math.random()*10) + '%';
    s.style.bottom = (-40 - i*30) + 'px';
    s.style.animationDelay = (i*1.5) + 's';
    document.querySelector('.card')?.appendChild(s);
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  attachGlitter();
  addBackgroundSparkles();
});
