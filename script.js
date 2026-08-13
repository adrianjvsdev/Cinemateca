/* ==========================================================
   NOSSA CINEMATECA — script.js
   ========================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------
     0. DADOS DOS FILMES
     Para trocar um trailer, poster ou texto: edite aqui.
  ------------------------------------------------------ */
  const filmes = [
    {
      id: "brilho-eterno",
      titulo: "Brilho Eterno de uma Mente sem Lembranças",
      ano: 2004,
      genero: "Romance / Ficção científica",
      duracao: "108 min",
      categorias: ["top3", "romance"],
      numero: "01",
      poster: "assets/images/brilho-eterno.jpg",
      sinopse:
        "Depois do fim do relacionamento, Clementine apaga da memória tudo o que viveu com Joel. Arrasado, ele decide fazer o mesmo procedimento — até perceber, já no meio do processo, que não quer mais esquecer.",
      motivo:
        "Não é um filme sobre esquecer alguém. É sobre perceber que, mesmo nas partes difíceis, a gente escolheria viver tudo de novo. Acho que é um pouco sobre isso que eu queria falar com você: nem tudo numa relação precisa ser perfeito pra valer a pena guardar.",
      trailer: "https://www.youtube.com/watch?v=0-sPkez7OqI"
    },
    {
      id: "interestelar",
      titulo: "Interestelar",
      ano: 2014,
      genero: "Ficção científica / Drama",
      duracao: "169 min",
      categorias: ["top3"],
      numero: "02",
      poster: "assets/images/interestelar.jpg",
      sinopse:
        "Cooper deixa a Terra — e a filha — para atravessar um buraco de minhoca em busca de um novo lar para a humanidade. O tempo passa de um jeito diferente para cada um deles, e a distância vira o maior obstáculo entre os dois.",
      motivo:
        "Tem uma parte em que uma hora lá fora equivale a anos aqui, e mesmo assim ele continua escolhendo voltar. Gosto da ideia de que, não importa o tempo ou a distância, tem gente que continua importando do mesmo jeito. Queria assistir esse com você porque acho que ele fala sobre isso melhor do que eu conseguiria.",
      trailer: "https://www.youtube.com/watch?v=i6avfCqKcQo"
    },
    {
      id: "obsessao",
      titulo: "Obsessão",
      ano: 2026,
      genero: "Terror / Suspense",
      duracao: "108 min",
      categorias: ["top3"],
      numero: "03",
      poster: "assets/images/obsessao.jpg",
      sinopse:
        "Depois de encontrar uma misteriosa caixa capaz de realizar um desejo, Bear decide usá-la para conquistar Nikki, a garota por quem é apaixonado. O que parecia ser a realização de um sonho, porém, rapidamente se transforma em algo muito mais sombrio e perturbador.",
      motivo:
        "Esse aqui é bem diferente dos outros dois. É mais estranho, pesado e perturbador, mas justamente por isso acho que seria muito legal assistir com você. A ideia de alguém conseguir exatamente aquilo que deseja e descobrir que talvez não fosse tão simples assim me chamou bastante atenção. Acho que esse vai render uns bons comentários depois kkkkk.",
      trailer: "https://www.youtube.com/watch?v=OYueQyeNgOk
    },
    {
      id: "diario-de-uma-paixao",
      titulo: "O Diário de uma Paixão",
      ano: 2004,
      genero: "Romance / Drama",
      duracao: "123 min",
      categorias: ["romance"],
      poster: "assets/images/diario-de-uma-paixao.jpg",
      sinopse:
        "Noah e Allie se apaixonam num verão dos anos 1940, são separados pela vida e pela diferença de classe social, e passam anos tentando — ou tentando não — voltar um para o outro.",
      motivo: "O clássico que não podia ficar de fora da nossa lista.",
      trailer: "https://www.youtube.com/watch?v=ZqN355uZj8o"
    },
    {
      id: "homem-aranha",
      titulo: "O Espetacular Homem-Aranha",
      ano: 2012,
      genero: "Ação / Aventura",
      duracao: "136 min",
      categorias: ["aventura"],
      poster: "assets/images/homem-aranha.jpg",
      sinopse:
        "Peter Parker investiga o desaparecimento do pai e, no meio do caminho, se torna o Homem-Aranha — enquanto enfrenta o Lagarto pelas ruas de Nova York.",
      motivo: "Pipoca, ação e aquele climinha de primeiro encontro entre o Peter e a Gwen.",
      trailer: "https://www.youtube.com/watch?v=6nzNdpJ3qMo"
    },
    {
      id: "homem-aranha-2",
      titulo: "O Espetacular Homem-Aranha 2",
      ano: 2014,
      genero: "Ação / Aventura",
      duracao: "142 min",
      categorias: ["aventura"],
      poster: "assets/images/homem-aranha-2.jpg",
      sinopse:
        "Peter tenta equilibrar a vida como Homem-Aranha com o relacionamento com Gwen, enquanto Electro e o Duende Verde colocam a cidade em risco.",
      motivo: "Pra continuar de onde paramos.",
      trailer: "https://www.youtube.com/watch?v=PfUDLzyC1cM"
    },
    {
      id: "castelo-animado",
      titulo: "O Castelo Animado",
      ano: 2004,
      genero: "Animação / Fantasia",
      duracao: "119 min",
      categorias: ["noite"],
      poster: "assets/images/castelo-animado.jpg",
      sinopse:
        "Sophie é transformada numa senhora idosa por uma bruxa e vai parar no castelo ambulante do misterioso feiticeiro Howl, onde nada é bem o que parece.",
      motivo: "Pra quando a gente só quiser sentar, respirar e ficar bonito por dentro.",
      trailer: "https://www.youtube.com/watch?v=PWhl-xGTraE"
    },
    {
      id: "antes-do-amanhecer",
      titulo: "Antes do Amanhecer",
      ano: 1995,
      genero: "Romance / Drama",
      duracao: "101 min",
      categorias: ["noite"],
      poster: "assets/images/antes-do-amanhecer.jpg",
      sinopse:
        "Jesse e Céline se conhecem em um trem e decidem passar a noite juntos caminhando por Viena, conversando sobre tudo — sabendo que, pela manhã, cada um segue seu caminho.",
      motivo: "É basicamente duas pessoas conversando a noite inteira. Simples assim, e ainda funciona.",
      trailer: "https://www.youtube.com/watch?v=6MUcuqbGTxc"
    },
    {
      id: "a-origem",
      titulo: "A Origem",
      ano: 2010,
      genero: "Ficção científica / Suspense",
      duracao: "148 min",
      categorias: ["pensar"],
      poster: "assets/images/a-origem.jpg",
      sinopse:
        "Dom Cobb rouba segredos infiltrando os sonhos das pessoas. Sua última missão é o oposto: plantar uma ideia na cabeça de alguém sem que ela perceba.",
      motivo: "Vamos brigar sobre se o pião cai ou não.",
      trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0"
    },
    {
      id: "ilha-do-medo",
      titulo: "Ilha do Medo",
      ano: 2010,
      genero: "Suspense / Mistério",
      duracao: "138 min",
      categorias: ["pensar"],
      poster: "assets/images/ilha-do-medo.jpg",
      sinopse:
        "Dois marechais federais investigam o desaparecimento de uma paciente num hospital psiquiátrico isolado numa ilha — e nada ali é confiável, nem a própria memória.",
      motivo: "Esse final vai ficar ecoando por dias.",
      trailer: "https://www.youtube.com/watch?v=gN02XJ9pDAU"
    },
    {
      id: "your-name",
      titulo: "Your Name",
      ano: 2016,
      genero: "Animação / Romance",
      duracao: "106 min",
      categorias: ["chorar"],
      poster: "assets/images/your-name.jpg",
      sinopse:
        "Mitsuha e Taki, dois adolescentes que nunca se conheceram, começam a trocar de corpo sem explicação — e aos poucos percebem que talvez estejam ligados por algo maior que os dois.",
      motivo: "Bonito, triste e um pouco mágico. Separa um lenço.",
      trailer: "https://www.youtube.com/watch?v=soQXM3XVvIU"
    },
    {
      id: "vantagens-de-ser-invisivel",
      titulo: "As Vantagens de Ser Invisível",
      ano: 2012,
      genero: "Drama",
      duracao: "103 min",
      categorias: ["chorar"],
      poster: "assets/images/vantagens-de-ser-invisivel.jpg",
      sinopse:
        "Charlie, um adolescente introvertido, encontra amizade e um lugar no mundo com Sam e Patrick no primeiro ano do colégio, enquanto lida com questões do próprio passado.",
      motivo: "Pra lembrar como certas amizades marcam a vida inteira.",
      trailer: "https://www.youtube.com/watch?v=10R4HJFj0JE"
    },
    {
      id: "10-coisas-que-odeio-em-voce",
      titulo: "10 Coisas que Eu Odeio em Você",
      ano: 1999,
      genero: "Comédia romântica",
      duracao: "97 min",
      categorias: ["rir"],
      poster: "assets/images/10-coisas-que-odeio-em-voce.jpg",
      sinopse:
        "Cameron banca alguém para namorar Kat, a irmã mais velha e \"impossível\" de Bianca, só para poder sair com ela — e nada sai como planejado.",
      motivo: "Comédia romântica old school, dessas que sempre funcionam.",
      trailer: "https://www.youtube.com/watch?v=QeOoTiINw4E"
    },
    {
      id: "questao-de-tempo",
      titulo: "Questão de Tempo",
      ano: 2013,
      genero: "Romance / Fantasia",
      duracao: "123 min",
      categorias: ["rir"],
      poster: "assets/images/questao-de-tempo.jpg",
      sinopse:
        "Aos 21 anos, Tim descobre que os homens da sua família conseguem viajar no tempo — e usa esse dom para tentar acertar o que mais importa: as pessoas que ama.",
      motivo: "Leve, engraçado e emocionante na medida certa.",
      trailer: "https://www.youtube.com/watch?v=-0gX9g4Lxm8"
    }
  ];

  const CHAVE_SELECAO = "cinemateca:filme-escolhido";

  /* ------------------------------------------------------
     1. UTILITÁRIOS
  ------------------------------------------------------ */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const reduzMovimento = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function encontrarFilme(id) {
    return filmes.find((f) => f.id === id) || null;
  }

  /* ------------------------------------------------------
     2. RENDERIZAÇÃO DO CATÁLOGO
  ------------------------------------------------------ */
  function criarTop3Card(filme) {
    const el = document.createElement("article");
    el.className = "top3-card reveal";
    el.tabIndex = 0;
    el.setAttribute("role", "button");
    el.setAttribute("aria-label", `Ver detalhes de ${filme.titulo}`);
    el.dataset.id = filme.id;

    el.innerHTML = `
      <span class="top3-card__numero" aria-hidden="true">${filme.numero}</span>
      <div class="top3-card__poster">
        <img src="${filme.poster}" alt="Pôster do filme ${filme.titulo}" loading="lazy"
             onerror="this.src='assets/images/placeholder.svg'">
      </div>
      <div class="top3-card__corpo">
        <h4 class="top3-card__titulo">${filme.titulo}</h4>
        <p class="top3-card__meta">${filme.ano} • ${filme.genero} • ${filme.duracao}</p>
        <p class="top3-card__sinopse">${filme.sinopse}</p>
        <span class="top3-card__tag">Ver mais →</span>
      </div>
    `;

    el.addEventListener("click", () => abrirModal(filme.id));
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        abrirModal(filme.id);
      }
    });

    return el;
  }

  function criarCard(filme) {
    const el = document.createElement("article");
    el.className = "card reveal";
    el.tabIndex = 0;
    el.setAttribute("role", "button");
    el.setAttribute("aria-label", `Ver detalhes de ${filme.titulo}`);
    el.dataset.id = filme.id;

    el.innerHTML = `
      <div class="card__poster">
        <img src="${filme.poster}" alt="Pôster do filme ${filme.titulo}" loading="lazy"
             onerror="this.src='assets/images/placeholder.svg'">
      </div>
      <div class="card__corpo">
        <h4 class="card__titulo">${filme.titulo}</h4>
        <p class="card__meta">${filme.ano} • ${filme.duracao}</p>
      </div>
    `;

    el.addEventListener("click", () => abrirModal(filme.id));
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        abrirModal(filme.id);
      }
    });

    return el;
  }

  function renderizarCatalogo() {
    // TOP 3, ordenado pelo campo "numero"
    const top3 = filmes
      .filter((f) => f.categorias.includes("top3"))
      .sort((a, b) => a.numero.localeCompare(b.numero));
    const top3Lista = $("#top3-lista");
    top3.forEach((f) => top3Lista.appendChild(criarTop3Card(f)));

    // Demais categorias
    const categorias = ["romance", "aventura", "noite", "pensar", "chorar", "rir"];
    categorias.forEach((cat) => {
      const container = $(`[data-categoria-lista="${cat}"]`);
      if (!container) return;
      const filmesDaCategoria = filmes.filter((f) => f.categorias.includes(cat));
      filmesDaCategoria.forEach((f) => container.appendChild(criarCard(f)));
    });

    observarRevelacoes();
  }

  /* ------------------------------------------------------
     3. ANIMAÇÃO DE ENTRADA (IntersectionObserver)
  ------------------------------------------------------ */
  function observarRevelacoes() {
    const alvos = $$(".reveal");
    if (reduzMovimento() || !("IntersectionObserver" in window)) {
      alvos.forEach((el) => el.classList.add("em-vista"));
      return;
    }
    const obs = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("em-vista");
            obs.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    alvos.forEach((el) => obs.observe(el));
  }

  /* ------------------------------------------------------
     4. MODAL
  ------------------------------------------------------ */
  let filmeAtualId = null;
  let ultimoFocoAntesDoModal = null;

  function abrirModal(id) {
    const filme = encontrarFilme(id);
    if (!filme) return;
    filmeAtualId = id;

    $("#modal-poster").src = filme.poster;
    $("#modal-poster").alt = `Pôster do filme ${filme.titulo}`;
    $("#modal-poster").onerror = function () {
      this.onerror = null;
      this.src = "assets/images/placeholder.svg";
    };
    $("#modal-titulo").textContent = filme.titulo;
    $("#modal-meta").textContent = `${filme.ano} • ${filme.duracao} • ${filme.genero}`;
    $("#modal-sinopse").textContent = filme.sinopse;
    $("#modal-motivo").textContent = filme.motivo;
    $("#modal-trailer").href = filme.trailer;
    $("#modal-feedback").textContent = "";

    ultimoFocoAntesDoModal = document.activeElement;
    const modal = $("#modal");
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    $("#modal-fechar").focus();
  }

  function fecharModal() {
    const modal = $("#modal");
    modal.hidden = true;
    document.body.style.overflow = "";
    filmeAtualId = null;
    if (ultimoFocoAntesDoModal) ultimoFocoAntesDoModal.focus();
  }

  function configurarModal() {
    $("#modal-fechar").addEventListener("click", fecharModal);
    $("#modal-fundo").addEventListener("click", fecharModal);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !$("#modal").hidden) fecharModal();
    });
    $("#modal-escolher").addEventListener("click", () => {
      if (filmeAtualId) {
        selecionarFilme(filmeAtualId);
        $("#modal-feedback").textContent = "Então temos um escolhido. ❤️";
        mostrarToast("Esse entrou para a nossa sessão. ❤️");
      }
    });
  }

  /* ------------------------------------------------------
     5. SELEÇÃO / LOCALSTORAGE
  ------------------------------------------------------ */
  function selecionarFilme(id) {
    try {
      localStorage.setItem(CHAVE_SELECAO, id);
    } catch (e) {
      console.warn("Não foi possível salvar a seleção localmente.", e);
    }
    renderizarSessao();
  }

  function recuperarSelecao() {
    try {
      return localStorage.getItem(CHAVE_SELECAO);
    } catch (e) {
      return null;
    }
  }

  function renderizarSessao() {
    const container = $("#sessao-conteudo");
    const id = recuperarSelecao();
    const filme = id ? encontrarFilme(id) : null;

    if (!filme) {
      container.innerHTML = `<p class="sessao__vazio">Ainda não escolhemos o primeiro filme...</p>`;
      return;
    }

    container.innerHTML = `
      <div class="sessao__escolhido">
        <img src="${filme.poster}" alt="Pôster do filme ${filme.titulo}"
             onerror="this.src='assets/images/placeholder.svg'">
        <h4>${filme.titulo}</h4>
        <p>Temos um filme. Agora só falta decidir quando. 🍿</p>
      </div>
    `;
  }

  /* ------------------------------------------------------
     6. TOAST
  ------------------------------------------------------ */
  let toastTimeout = null;
  function mostrarToast(mensagem) {
    const toast = $("#toast");
    toast.textContent = mensagem;
    toast.classList.add("visivel");
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove("visivel");
    }, 2600);
  }

  /* ------------------------------------------------------
     7. INTRODUÇÃO NARRATIVA
  ------------------------------------------------------ */
  const frasesIntro = [
    "Separei alguns filmes que eu gostaria de assistir com você...",
    "Porque acho que algumas histórias ficam ainda melhores quando são compartilhadas.",
    "Então pensei em separar alguns para nós.",
    "Escolha um."
  ];

  function iniciarSequenciaIntro() {
    const intro = $("#intro");
    const elFrase = $("[data-frase]", intro);
    intro.classList.add("ativo");
    intro.setAttribute("aria-hidden", "false");

    if (reduzMovimento()) {
      finalizarIntro();
      return;
    }

    let indice = 0;
    let cancelado = false;
    const timeouts = [];

    function limpar() {
      timeouts.forEach((t) => clearTimeout(t));
    }

    function mostrarProximaFrase() {
      if (cancelado) return;
      elFrase.textContent = frasesIntro[indice];
      elFrase.classList.remove("visivel");
      // força reflow para reiniciar a transição
      void elFrase.offsetWidth;
      elFrase.classList.add("visivel");

      const ultima = indice === frasesIntro.length - 1;
      const tempoVisivel = ultima ? 1300 : 1100;

      timeouts.push(
        setTimeout(() => {
          if (cancelado) return;
          elFrase.classList.remove("visivel");
          if (ultima) {
            timeouts.push(setTimeout(finalizarIntro, 500));
            return;
          }
          timeouts.push(
            setTimeout(() => {
              indice += 1;
              mostrarProximaFrase();
            }, 350)
          );
        }, tempoVisivel)
      );
    }

    mostrarProximaFrase();

    $("#btn-pular").onclick = () => {
      cancelado = true;
      limpar();
      finalizarIntro();
    };
  }

  function finalizarIntro() {
    const intro = $("#intro");
    intro.classList.remove("ativo");
    intro.setAttribute("aria-hidden", "true");
    revelarCatalogo();
  }

  function revelarCatalogo() {
    const hero = $("#hero");
    const catalogo = $("#catalogo");
    hero.style.display = "none";
    catalogo.hidden = false;
    window.scrollTo({ top: 0, behavior: "auto" });
    // pequeno atraso pra garantir que o layout já existe antes de observar
    requestAnimationFrame(observarRevelacoes);
  }

  /* ------------------------------------------------------
     8. PARTÍCULAS DISCRETAS NO FUNDO
  ------------------------------------------------------ */
  function iniciarParticulas() {
    if (reduzMovimento()) return;
    const canvas = $("#particulas");
    if (!canvas || !canvas.getContext) return;
    const ctx = canvas.getContext("2d");
    let largura, altura, particulas;
    const QUANTIDADE = window.innerWidth < 768 ? 22 : 40;

    function redimensionar() {
      largura = canvas.width = window.innerWidth;
      altura = canvas.height = window.innerHeight;
    }

    function criarParticulas() {
      particulas = Array.from({ length: QUANTIDADE }, () => ({
        x: Math.random() * largura,
        y: Math.random() * altura,
        r: Math.random() * 1.4 + 0.4,
        vy: Math.random() * 0.12 + 0.03,
        alpha: Math.random() * 0.25 + 0.05
      }));
    }

    function desenhar() {
      ctx.clearRect(0, 0, largura, altura);
      particulas.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(217,112,122,${p.alpha})`;
        ctx.fill();
        p.y -= p.vy;
        if (p.y < -4) {
          p.y = altura + 4;
          p.x = Math.random() * largura;
        }
      });
      requestAnimationFrame(desenhar);
    }

    redimensionar();
    criarParticulas();
    desenhar();
    window.addEventListener("resize", () => {
      redimensionar();
      criarParticulas();
    });
  }

  /* ------------------------------------------------------
     9. INICIALIZAÇÃO
  ------------------------------------------------------ */
  function init() {
    renderizarCatalogo();
    renderizarSessao();
    configurarModal();
    iniciarParticulas();

    $("#btn-entrar").addEventListener("click", iniciarSequenciaIntro);
    $("#btn-escolher").addEventListener("click", () => {
      $("#catalogo").scrollIntoView({
        behavior: reduzMovimento() ? "auto" : "smooth"
      });
      const topo = $("#top3");
      if (topo) {
        setTimeout(() => {
          topo.scrollIntoView({ behavior: reduzMovimento() ? "auto" : "smooth" });
        }, 350);
      }
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
