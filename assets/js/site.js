/* Uliveto aplicado — o pouco de JavaScript que o site tem.
   Duas coisas, e nada além: o menu de tela cheia no mobile e a revelação de
   opacidade de 400ms, que é a única transição do sistema inteiro. */
(function () {
  'use strict';

  /* --- Menu de tela cheia -------------------------------------------------
     O cabeçalho já traz a navegação inteira no HTML; abaixo de 640px o CSS
     esconde a barra e mostra o botão. Aqui só se liga o botão à sobreposição,
     para que a página funcione sem JavaScript até esse ponto. */
  function instalarMenu() {
    var menu = document.querySelector('[data-menu]');
    var abrir = document.querySelector('[data-menu-open]');
    var fechar = document.querySelector('[data-menu-close]');
    if (!menu || !abrir) return;

    var ultimoFoco = null;

    function definir(aberto) {
      menu.hidden = !aberto;
      abrir.setAttribute('aria-expanded', String(aberto));
      document.documentElement.style.overflow = aberto ? 'hidden' : '';
      if (aberto) {
        ultimoFoco = document.activeElement;
        var alvo = fechar || menu.querySelector('a');
        if (alvo) alvo.focus();
      } else if (ultimoFoco) {
        ultimoFoco.focus();
      }
    }

    abrir.addEventListener('click', function () { definir(true); });
    if (fechar) fechar.addEventListener('click', function () { definir(false); });
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') definir(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !menu.hidden) definir(false);
    });
    // Voltar ao desktop com o menu aberto não pode deixar a página travada.
    window.matchMedia('(min-width:640px)').addEventListener('change', function (mq) {
      if (mq.matches && !menu.hidden) definir(false);
    });
  }

  /* --- Revelação de opacidade ---------------------------------------------
     400ms ease-out por bloco, escalonada em 70ms até o quinto. Só na primeira
     exibição: o observador solta o elemento assim que ele entra. */
  function instalarRevelacao() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;

    var alvos = Array.prototype.slice.call(
      document.querySelectorAll('[data-reveal] > *, [data-reveal-self]')
    );

    /* Quem contém outro alvo não anima sozinho: anima o de dentro. Sem isto a
       seção inteira desvaneceria junto com cada uma de suas linhas, e — pior —
       uma lista alta revelaria de uma vez só, quando apenas sua borda superior
       aparecesse, deixando o resto já visível antes de a pessoa chegar nele. */
    alvos = alvos.filter(function (el) {
      return !alvos.some(function (outro) {
        return outro !== el && el.contains(outro);
      });
    });

    /* Espaçador não é conteúdo: não gasta um degrau do escalonamento. */
    alvos = alvos.filter(function (el) {
      return el.tagName === 'HR' || el.firstElementChild || el.textContent.trim() !== '';
    });

    if (!alvos.length) return;

    alvos.forEach(function (el) { el.classList.add('rv'); });
    void document.body.offsetHeight; // aplica o estado inicial antes de revelar a primeira tela

    var io = new IntersectionObserver(function (entradas, obs) {
      var i = 0;
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        var el = entrada.target;
        el.style.transitionDelay = Math.min(i, 4) * 70 + 'ms';
        i += 1;
        el.classList.add('rv-in');
        obs.unobserve(el);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.06 });

    /* A primeira tela só pode revelar depois que o navegador realmente pintou
       a página. Ao trocar de aba o Chrome segura a pintura da página nova
       ("paint holding"): sem esta espera a transição de 400ms corria com a
       tela ainda mostrando a página anterior e terminava antes de aparecer —
       era por isso que a animação só se via ao rolar. O que entra por scroll
       não muda: aí a página já está pintada. */
    function aposPrimeiraPintura(cb) {
      var feito = false;
      function uma() {
        if (feito) return;
        feito = true;
        // dois quadros: o primeiro entrega a pintura, o segundo já transiciona.
        requestAnimationFrame(function () { requestAnimationFrame(cb); });
      }
      if (typeof PerformanceObserver === 'function') {
        try {
          var po = new PerformanceObserver(function (lista) {
            var e = lista.getEntries();
            for (var i = 0; i < e.length; i += 1) {
              if (e[i].name === 'first-contentful-paint') { po.disconnect(); uma(); return; }
            }
          });
          po.observe({ type: 'paint', buffered: true });
        } catch (erro) { /* sem paint timing: cai no prazo abaixo */ }
      }
      setTimeout(uma, 1000); // rede de segurança
    }

    aposPrimeiraPintura(function () {
      alvos.forEach(function (el) { io.observe(el); });
    });

    // Rede de segurança: impressão, captura ou aba oculta nunca ficam em branco.
    function revelarTudo() {
      document.querySelectorAll('.rv').forEach(function (el) {
        el.getAnimations().forEach(function (a) { a.finish(); });
        el.classList.remove('rv', 'rv-in');
        el.style.transitionDelay = '';
      });
    }
    window.addEventListener('beforeprint', revelarTudo);
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'hidden') revelarTudo();
    });
  }

  /* --- Validação do formulário de contato ---------------------------------
     Mensagem em Cotto dizendo o que fazer, não o que falhou. */
  function instalarFormulario() {
    var form = document.querySelector('[data-form-contato]');
    if (!form) return;

    form.setAttribute('novalidate', '');
    form.addEventListener('submit', function (e) {
      var primeiroInvalido = null;
      form.querySelectorAll('[data-erro]').forEach(function (campo) {
        var alvo = document.getElementById(campo.getAttribute('data-erro'));
        var invalido = !alvo.checkValidity();
        alvo.setAttribute('aria-invalid', String(invalido));
        campo.hidden = !invalido;
        if (invalido && !primeiroInvalido) primeiroInvalido = alvo;
      });
      if (primeiroInvalido) {
        e.preventDefault();
        primeiroInvalido.focus();
      }
    });
  }

  /* --- Tocador de áudio ---------------------------------------------------
     O <audio controls> nativo já toca sem JavaScript, e é ele que fica no HTML.
     Quando o script roda, ele é escondido e trocado por tipografia: um botão de
     texto e um relógio em algarismos tabulares. O player do navegador era a
     única peça da página com canto arredondado e cor de sistema operacional. */
  function instalarTocadores() {
    document.querySelectorAll('[data-player]').forEach(instalarTocador);
  }

  function instalarTocador(caixa) {
    var audio = caixa.querySelector('audio');
    if (!audio) return;

    // Quando a placa ao lado é o botão, é ela que toca: o player nativo some e
    // nada de texto novo entra na página.
    var placa = caixa.parentElement && caixa.parentElement.querySelector('[data-player-botao]');
    if (placa) {
      audio.removeAttribute('controls');
      caixa.classList.add('uv-player--pronto');
      placa.addEventListener('click', function () {
        if (audio.paused) audio.play(); else audio.pause();
      });
      audio.addEventListener('play', function () {
        placa.setAttribute('data-tocando', '');
        placa.setAttribute('aria-label', 'Pausar ' + placa.querySelector('.uv-plate__title').textContent);
      });
      function parou() {
        placa.removeAttribute('data-tocando');
        placa.setAttribute('aria-label', 'Ouvir ' + placa.querySelector('.uv-plate__title').textContent);
      }
      audio.addEventListener('pause', parou);
      audio.addEventListener('ended', parou);
      return;
    }

    function relogio(s) {
      if (!isFinite(s) || s < 0) s = 0;
      var m = Math.floor(s / 60);
      var r = Math.floor(s % 60);
      return m + ':' + (r < 10 ? '0' : '') + r;
    }

    var botao = document.createElement('button');
    botao.type = 'button';
    botao.className = 'uv-player__botao';
    botao.textContent = 'Ouvir';

    var tempo = document.createElement('span');
    tempo.className = 'uv-player__tempo';
    tempo.textContent = relogio(0);

    audio.removeAttribute('controls');
    caixa.classList.add('uv-player--pronto');
    caixa.appendChild(botao);
    caixa.appendChild(tempo);

    function marcar() {
      tempo.textContent = relogio(audio.currentTime) + ' / ' + relogio(audio.duration);
    }

    botao.addEventListener('click', function () {
      if (audio.paused) audio.play(); else audio.pause();
    });
    audio.addEventListener('play', function () { botao.textContent = 'Pausar'; });
    audio.addEventListener('pause', function () { botao.textContent = 'Ouvir'; });
    audio.addEventListener('ended', function () { botao.textContent = 'Ouvir'; });
    audio.addEventListener('loadedmetadata', marcar);
    audio.addEventListener('timeupdate', marcar);
  }

  function iniciar() {
    instalarMenu();
    instalarFormulario();
    instalarTocadores();
    // Esconder tem de acontecer ANTES da primeira pintura, e sem transição,
    // senão o bloco pisca. Em documento oculto não se esconde nada: a página
    // fica visível como está, que era o motivo do rAF que havia aqui.
    if (document.visibilityState !== 'hidden') instalarRevelacao();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar);
  } else {
    iniciar();
  }
})();
