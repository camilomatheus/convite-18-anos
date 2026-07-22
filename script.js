/*=========================
AOS
=========================*/

AOS.init({

    duration:1200,

    once:false

});

/*=========================
EFEITO DIGITAÇÃO
=========================*/

const texto = "🎉 Meus 18 Anos 🎉";

let i = 0;

function escrever(){

    if(i < texto.length){

        document.getElementById("typing").innerHTML += texto.charAt(i);

        i++;

        setTimeout(escrever,120);

    }

}

escrever();

/*=========================
CONTAGEM REGRESSIVA
=========================*/

const destino = new Date("October 12, 2026 11:00:00").getTime();

const dias = document.getElementById("dias");

const horas = document.getElementById("horas");

const minutos = document.getElementById("minutos");

const segundos = document.getElementById("segundos");

setInterval(()=>{

    const agora = new Date().getTime();

    const distancia = destino - agora;

    const d = Math.floor(distancia/(1000*60*60*24));

    const h = Math.floor((distancia%(1000*60*60*24))/(1000*60*60));

    const m = Math.floor((distancia%(1000*60*60))/60000);

    const s = Math.floor((distancia%(60000))/1000);

    dias.innerHTML=d;

    horas.innerHTML=h;

    minutos.innerHTML=m;

    segundos.innerHTML=s;

},1000);

/*=========================
MÚSICA
=========================*/

const musica = document.getElementById("musica");
const musicButton = document.getElementById("musicButton");

musicButton.addEventListener("click", () => {

    if (musica.paused) {

        musica.play()
            .then(() => {
                musicButton.innerHTML = "⏸️";
            })
            .catch(err => {
                console.error(err);
                alert(err.message);
            });

    } else {

        musica.pause();
        musicButton.innerHTML = "🎵";

    }

});
/*=========================
BARRA DE PROGRESSO
=========================*/

window.addEventListener("scroll",()=>{

    const scroll = document.documentElement.scrollTop;

    const altura =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const porcentagem = (scroll / altura) * 100;

    document.getElementById("progress").style.width =
    porcentagem + "%";

});

/*=========================
BOTÃO VOLTAR AO TOPO
=========================*/

const topo = document.getElementById("topo");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topo.style.display="block";

    }else{

        topo.style.display="none";

    }

});

topo.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

/*=========================
CONFETES
=========================*/


/*=========================
BALÕES
=========================*/

function criarBalao(){

const balao=document.createElement("div");

balao.classList.add("balao");

balao.classList.add(

Math.random()>0.5?"azul":"amarelo"

);

balao.style.left=Math.random()*100+"vw";

balao.style.animationDuration=

8+Math.random()*8+"s";

document.body.appendChild(balao);

setTimeout(()=>{

balao.remove();

},16000);

}

setInterval(criarBalao,1200);
/*=========================
FOGOS DE ARTIFÍCIO
=========================*/
    

/*=========================
PARTÍCULAS BRILHANTES
=========================*/

const particulas=document.createElement("div");

particulas.className="particulas";

document.body.appendChild(particulas);

for(let i=0;i<80;i++){

    const p=document.createElement("span");

    p.style.left=Math.random()*100+"vw";

    p.style.animationDuration=(6+Math.random()*10)+"s";

    p.style.animationDelay=Math.random()*5+"s";

    particulas.appendChild(p);

}

/*=========================
GALERIA LIGHTBOX
=========================*/

const imagens=document.querySelectorAll(".galeria img");

const fundo=document.createElement("div");

fundo.style.position="fixed";
fundo.style.top="0";
fundo.style.left="0";
fundo.style.width="100%";
fundo.style.height="100%";
fundo.style.background="rgba(0,0,0,.9)";
fundo.style.display="none";
fundo.style.justifyContent="center";
fundo.style.alignItems="center";
fundo.style.zIndex="999999";

const foto=document.createElement("img");

foto.style.maxWidth="90%";
foto.style.maxHeight="90%";
foto.style.borderRadius="20px";
foto.style.border="5px solid #FFD000";

fundo.appendChild(foto);

document.body.appendChild(fundo);

imagens.forEach(img=>{

    img.addEventListener("click",()=>{

        fundo.style.display="flex";

        foto.src=img.src;

    });

});

fundo.addEventListener("click",()=>{

    fundo.style.display="none";

});

/*=========================
ANIMAÇÃO AO ABRIR
=========================*/

window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition="opacity 1.2s";

        document.body.style.opacity="1";

    },200);

});
/*=========================
MENSAGEM DE BOAS-VINDAS
=========================*/

window.addEventListener("load",()=>{

    setTimeout(()=>{

        const aviso=document.createElement("div");

        aviso.innerHTML=`
        <h2>🎉 Seja bem-vindo!</h2>
        <p>Obrigado por visitar meu convite de aniversário.</p>
        `;

        aviso.style.position="fixed";
        aviso.style.top="30px";
        aviso.style.left="50%";
        aviso.style.transform="translateX(-50%)";
        aviso.style.background="rgba(0,60,157,.95)";
        aviso.style.color="#fff";
        aviso.style.padding="20px 35px";
        aviso.style.borderRadius="20px";
        aviso.style.border="3px solid #FFD000";
        aviso.style.zIndex="999999";
        aviso.style.textAlign="center";
        aviso.style.boxShadow="0 0 25px rgba(255,208,0,.5)";
        aviso.style.animation="fadeUp .8s";

        document.body.appendChild(aviso);

        setTimeout(()=>{

            aviso.style.opacity="0";
            aviso.style.transition=".8s";

            setTimeout(()=>{

                aviso.remove();

            },800);

        },4000);

    },800);

});

/*=========================
VOLUME DA MÚSICA
=========================*/

if(musica){

    musica.volume=0.35;

}

/*=========================
EFEITO NO BOLO
=========================*/

const bolo=document.querySelector(".cake");

if(bolo){

setInterval(()=>{

    bolo.animate([

        {transform:"translateY(0px)"},

        {transform:"translateY(-8px)"},

        {transform:"translateY(0px)"}

    ],{

        duration:2000

    });

},2200);

}

/*=========================
CURSOR COM BRILHO
=========================*/

const brilho=document.createElement("div");

brilho.style.position="fixed";
brilho.style.width="18px";
brilho.style.height="18px";
brilho.style.borderRadius="50%";
brilho.style.background="#FFD000";
brilho.style.pointerEvents="none";
brilho.style.zIndex="999999";
brilho.style.boxShadow="0 0 20px #FFD000";

document.body.appendChild(brilho);

document.addEventListener("mousemove",(e)=>{

    brilho.style.left=e.clientX-9+"px";

    brilho.style.top=e.clientY-9+"px";

});

/*=========================
EMOJIS FLUTUANDO
=========================*/

const emojis=["🎉","🎂","🎈","🎁","💙","💛","✨"];

function emoji(){

const e=document.createElement("span");

e.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

e.style.position="fixed";

e.style.left=Math.random()*100+"vw";

e.style.top="100vh";

e.style.fontSize=(20+Math.random()*20)+"px";

e.style.pointerEvents="none";

e.style.zIndex="9999";

document.body.appendChild(e);

e.animate([

{transform:"translateY(0)",opacity:1},

{transform:"translateY(-120vh)",opacity:0}

],{

duration:6000

});

setTimeout(()=>{

e.remove();

},6000);

}

setInterval(emoji,2500);
/*=========================================
EXPLOSÃO DE FOGOS AO ABRIR A PÁGINA
=========================================*/

window.addEventListener("load",()=>{

    let quantidade = 12;

    let intervalo = setInterval(()=>{

        criarFogo();

        quantidade--;

        if(quantidade<=0){

            clearInterval(intervalo);

        }

    },250);

});

/*=========================================
BOTÃO COPIAR PIX
=========================================*/

const pix = document.querySelector(".pixBox");

if(pix){

    pix.style.cursor="pointer";

    pix.title="Clique para copiar";

    pix.addEventListener("click",()=>{

        navigator.clipboard.writeText("54508658806");

        const antigo = pix.innerHTML;

        pix.innerHTML="✅ PIX copiado!";

        setTimeout(()=>{

            pix.innerHTML=antigo;

        },2000);

    });

}

/*=========================================
VIBRAÇÃO (CELULAR)
=========================================*/

document.querySelectorAll("a,.botao,.maps,.whatsapp").forEach(botao=>{

    botao.addEventListener("click",()=>{

        if(navigator.vibrate){

            navigator.vibrate(50);

        }

    });

});

/*=========================================
EFEITO NOS NÚMEROS DO CONTADOR
=========================================*/

const caixas=document.querySelectorAll(".contador div");

caixas.forEach(caixa=>{

    setInterval(()=>{

        caixa.animate([

            {

                transform:"scale(1)"

            },

            {

                transform:"scale(1.08)"

            },

            {

                transform:"scale(1)"

            }

        ],{

            duration:400

        });

    },1000);

});

/*=========================================
EFEITO NOS BOTÕES
=========================================*/

document.querySelectorAll(".botao,.maps,.whatsapp").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.animate([

            {transform:"scale(1)"},

            {transform:"scale(1.08)"}

        ],{

            duration:250,

            fill:"forwards"

        });

    });

    btn.addEventListener("mouseleave",()=>{

        btn.animate([

            {transform:"scale(1.08)"},

            {transform:"scale(1)"}

        ],{

            duration:250,

            fill:"forwards"

        });

    });

});

/*=========================================
REVELAR ELEMENTOS
=========================================*/

const revelar=document.querySelectorAll("section");

const observer=new IntersectionObserver((itens)=>{

    itens.forEach(item=>{

        if(item.isIntersecting){

            item.target.style.opacity="1";

            item.target.style.transform="translateY(0)";

        }

    });

});

revelar.forEach(sec=>{

    sec.style.opacity="0";

    sec.style.transform="translateY(60px)";

    sec.style.transition="1s";

    observer.observe(sec);

});
/*=========================================
MODO NOTURNO AUTOMÁTICO
=========================================*/

const hora = new Date().getHours();

if(hora >= 18 || hora <= 6){

    document.body.style.filter="brightness(.97)";

}

/*=========================================
EFEITO NAS IMAGENS
=========================================*/

document.querySelectorAll(".galeria img").forEach(img=>{

    img.addEventListener("mouseover",()=>{

        img.style.transform="scale(1.08) rotate(2deg)";

    });

    img.addEventListener("mouseout",()=>{

        img.style.transform="scale(1)";

    });

});

/*=========================================
MENSAGEM QUANDO CHEGAR O DIA
=========================================*/

function verificarData(){

    const agora = new Date();

    const festa = new Date("October 12, 2026 11:00:00");

    if(agora >= festa){

        document.querySelector(".hero h1").innerHTML="🎉 O GRANDE DIA CHEGOU! 🎉";

        document.querySelector(".hero p").innerHTML=

        "A festa começou! Muito obrigado pela sua presença! 💙💛";

    }

}

setInterval(verificarData,1000);

/*=========================================
ATALHO TECLADO
=========================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="Home"){

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

});

/*=========================================
SCROLL SUAVE LINKS
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",(e)=>{

        e.preventDefault();

        const destino=document.querySelector(

            link.getAttribute("href")

        );

        destino.scrollIntoView({

            behavior:"smooth"

        });

    });

});

/*=========================================
ANIMAÇÃO DOS CARDS
=========================================*/

document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});

/*=========================================
EFEITO NO PIX
=========================================*/

const pixBox=document.querySelector(".pixBox");

if(pixBox){

pixBox.addEventListener("mouseenter",()=>{

pixBox.style.boxShadow="0 0 30px #FFD000";

});

pixBox.addEventListener("mouseleave",()=>{

pixBox.style.boxShadow="0 0 10px rgba(255,208,0,.4)";

});

}

/*=========================================
CONSOLE
=========================================*/

console.clear();

console.log("%c🎉 Convite de 18 anos carregado com sucesso! 💙💛",

"color:#FFD000;font-size:18px;font-weight:bold;");

/*=========================================
FIM DO SCRIPT
=========================================*/

