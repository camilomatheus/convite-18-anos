const festa = new Date(2026, 9, 11, 12, 0, 0).getTime();
const campos = { dias: document.querySelector('#dias'), horas: document.querySelector('#horas'), minutos: document.querySelector('#minutos'), segundos: document.querySelector('#segundos') };
let intervalo;
function atualizarContagem() {
  const restante = Math.max(0, festa - Date.now());
  const valores = { dias: Math.floor(restante / 86400000), horas: Math.floor(restante % 86400000 / 3600000), minutos: Math.floor(restante % 3600000 / 60000), segundos: Math.floor(restante % 60000 / 1000) };
  Object.entries(valores).forEach(([nome, valor]) => {
    const proximoValor = String(valor).padStart(2, '0');
    if (campos[nome].textContent !== proximoValor) {
      campos[nome].textContent = proximoValor;
      campos[nome].classList.remove('tick');
      void campos[nome].offsetWidth;
      campos[nome].classList.add('tick');
    }
  });
  if (!restante && intervalo) clearInterval(intervalo);
}
atualizarContagem(); intervalo = setInterval(atualizarContagem, 1000);

const progressBar = document.querySelector('#progressBar'); const topButton = document.querySelector('#topButton');
addEventListener('scroll', () => { const max = document.documentElement.scrollHeight - innerHeight; progressBar.style.width = `${max ? scrollY / max * 100 : 0}%`; topButton.classList.toggle('visible', scrollY > 500); }, { passive: true });
topButton.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

const menuButton = document.querySelector('.menu-toggle'); const menu = document.querySelector('#menu');
menuButton.addEventListener('click', () => { const aberto = menu.classList.toggle('open'); menuButton.setAttribute('aria-expanded', aberto); menuButton.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu'); menuButton.innerHTML = `<i class="fa-solid fa-${aberto ? 'xmark' : 'bars'}"></i>`; });
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menu.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>'; }));

const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .14 });
document.querySelectorAll('.reveal').forEach(item => observer.observe(item));

const pixButton = document.querySelector('.pix-code'); const pixMessage = document.querySelector('#pixMessage');
pixButton.addEventListener('click', async () => { try { await navigator.clipboard.writeText(pixButton.dataset.pix); pixMessage.textContent = 'PIX copiado!'; } catch { pixMessage.textContent = 'Copie o número: 54508658806'; } setTimeout(() => pixMessage.textContent = 'Toque para copiar', 2500); });

const lightbox = document.querySelector('#lightbox'); const lightboxImage = lightbox.querySelector('img');
document.querySelectorAll('.gallery-item img').forEach(image => image.closest('button').addEventListener('click', () => { lightboxImage.src = image.currentSrc || image.src; lightboxImage.alt = image.alt; lightbox.showModal(); }));
lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close()); lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });

const music = document.querySelector('#musica'); const musicButton = document.querySelector('#musicButton');
musicButton.addEventListener('click', async () => { if (music.paused) { try { await music.play(); musicButton.setAttribute('aria-pressed', 'true'); musicButton.setAttribute('aria-label', 'Pausar música'); musicButton.innerHTML = '<i class="fa-solid fa-pause"></i>'; } catch { musicButton.setAttribute('aria-label', 'Não foi possível tocar a música'); } } else { music.pause(); musicButton.setAttribute('aria-pressed', 'false'); musicButton.setAttribute('aria-label', 'Tocar música'); musicButton.innerHTML = '<i class="fa-solid fa-music"></i>'; } });

async function iniciarMusica() {
  if (!music.paused) return;
  try { await music.play(); musicButton.setAttribute('aria-pressed', 'true'); musicButton.setAttribute('aria-label', 'Pausar música'); musicButton.innerHTML = '<i class="fa-solid fa-pause"></i>'; } catch { musicButton.setAttribute('aria-label', 'Toque na tela para iniciar a música'); }
}
iniciarMusica();
addEventListener('pointerdown', function tocarNoPrimeiroToque() { iniciarMusica(); removeEventListener('pointerdown', tocarNoPrimeiroToque); }, { once: true });

const hero = document.querySelector('.hero');
const partyLayer = document.createElement('div'); partyLayer.className = 'party-layer'; hero.prepend(partyLayer);
const balloonColors = ['yellow', 'blue', 'navy', 'gold'];
for (let index = 0; index < 11; index += 1) {
  const balloon = document.createElement('span');
  balloon.className = `balloon ${balloonColors[index % balloonColors.length]}`;
  balloon.style.left = `${3 + index * 9.2}%`;
  balloon.style.setProperty('--speed', `${13 + (index % 5) * 1.4}s`);
  balloon.style.setProperty('--delay', `${-index * 1.35}s`);
  partyLayer.append(balloon);
}
function soltarConfetes(quantidade = 65) {
  const camada = document.createElement('div'); camada.className = 'confetti'; document.body.append(camada);
  for (let index = 0; index < quantidade; index += 1) {
    const confete = document.createElement('span');
    confete.className = `confetti-piece ${index % 3 === 0 ? 'blue' : index % 5 === 0 ? 'white round' : ''}`;
    confete.style.left = `${Math.random() * 100}%`; confete.style.setProperty('--fall', `${3.2 + Math.random() * 2.3}s`);
    confete.style.setProperty('--rotate', `${Math.random() * 360}deg`); camada.append(confete);
  }
  setTimeout(() => camada.remove(), 6200);
}
soltarConfetes(); document.querySelector('.button-primary').addEventListener('click', () => soltarConfetes(30));

document.querySelectorAll('.detail-card').forEach(card => {
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.setAttribute('aria-pressed', 'false');
  const alternarDestaque = () => {
    const vaiAtivar = !card.classList.contains('active');
    document.querySelectorAll('.detail-card.active').forEach(outro => { outro.classList.remove('active'); outro.setAttribute('aria-pressed', 'false'); });
    card.classList.toggle('active', vaiAtivar);
    card.setAttribute('aria-pressed', String(vaiAtivar));
  };
  card.addEventListener('click', alternarDestaque);
  card.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); alternarDestaque(); } });
});

document.querySelector('#calendarButton').addEventListener('click', () => {
  const evento = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Convite 18 anos//PT-BR', 'BEGIN:VEVENT',
    'DTSTART:20261011T120000', 'DTEND:20261011T180000',
    'SUMMARY:Festa de 18 anos', 'LOCATION:Recanto dos Teixeira\\, Mogi das Cruzes - SP',
    'DESCRIPTION:Uma tarde de música\\, piscina\\, futebol e comemoração.', 'END:VEVENT', 'END:VCALENDAR'
  ].join('\r\n');
  const arquivo = new Blob([evento], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a'); link.href = URL.createObjectURL(arquivo); link.download = 'festa-de-18-anos.ics'; link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 500);
});

const scrollCelebration = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('scrolled-in'); scrollCelebration.unobserve(entry.target); } }), { threshold: .18 });
document.querySelectorAll('.section, .rsvp').forEach(section => scrollCelebration.observe(section));

const messageForm = document.querySelector('#messageForm'); const messageWall = document.querySelector('#messageWall'); const messageStatus = document.querySelector('#messageStatus');
const messageStorageKey = 'convite-18-recados';
function lerRecados() { try { return JSON.parse(localStorage.getItem(messageStorageKey)) || []; } catch { return []; } }
function mostrarRecados() {
  const recados = lerRecados(); messageWall.replaceChildren();
  if (!recados.length) { const vazio = document.createElement('p'); vazio.className = 'empty-wall'; vazio.textContent = 'Seja a primeira pessoa a deixar um recado ✨'; messageWall.append(vazio); return; }
  recados.slice(-8).reverse().forEach(recado => { const nota = document.createElement('article'); nota.className = 'message-note'; const nome = document.createElement('strong'); nome.textContent = recado.name; const texto = document.createElement('p'); texto.textContent = recado.message; nota.append(nome, texto); messageWall.append(nota); });
}
messageForm.addEventListener('submit', event => { event.preventDefault(); const dados = new FormData(messageForm); const name = dados.get('name').trim(); const message = dados.get('message').trim(); if (!name || !message) return; const recados = lerRecados(); recados.push({ name, message }); localStorage.setItem(messageStorageKey, JSON.stringify(recados.slice(-30))); messageForm.reset(); mostrarRecados(); messageStatus.textContent = 'Recado publicado no mural!'; setTimeout(() => messageStatus.textContent = '', 3500); });
mostrarRecados();
