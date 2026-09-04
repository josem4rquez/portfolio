/* Gerador das páginas estáticas do portfólio.
 *
 *   node tools/build.mjs
 *
 * Escreve HTML puro na raiz do projeto e em projetos/. A saída não depende de
 * nada em tempo de execução: abrir index.html direto no navegador funciona.
 * O que existe aqui é só para o cabeçalho, o rodapé e as oito fichas não
 * saírem de sincronia — o conteúdo mora em tools/conteudo.js.
 *
 * ATENÇÃO: editar o HTML gerado à mão funciona, mas a próxima execução
 * sobrescreve. Mudanças duradouras vão em conteudo.js ou neste arquivo.
 */

import { writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import {
  marca,
  notaRodape,
  contato,
  navegacao,
  projetos,
  entregasNoFear,
  servicosNoFear,
  colecao,
} from './conteudo.js';

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..');

/* --- utilidades ---------------------------------------------------------- */

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const paragrafos = (linhas, classe = 'type-body-md u-measure', espaco = 'var(--space-lg)') =>
  linhas
    .map(
      (t, i) =>
        `<p class="${classe}"${
          i < linhas.length - 1 ? ` style="margin-bottom:${espaco}"` : ''
        }>${esc(t)}</p>`
    )
    .join('\n          ');

/* --- componentes --------------------------------------------------------- */

/** SiteHeader: assinatura à esquerda, navegação em caixa alta à direita.
 *  Item atual em tinta (não é destino); os demais em Nogueira. */
function cabecalho(atual, base) {
  const links = (classe) =>
    navegacao
      .map(
        (item) =>
          `<a href="${base}${item.href}"${
            item.id === atual ? ' aria-current="page"' : ''
          }>${esc(item.label)}</a>`
      )
      .join(classe === 'uv-nav' ? '\n        ' : '\n        ');

  return `<div class="u-page">
    <header class="uv-header">
      <div class="uv-header__bar">
        <a class="uv-brand" href="${base}index.html">${esc(marca)}</a>
        <nav class="uv-nav" aria-label="Principal">
        ${links('uv-nav')}
        </nav>
        <button class="uv-menu-toggle" type="button" data-menu-open aria-expanded="false" aria-controls="menu-mobile">Menu</button>
      </div>
      <div class="uv-menu" id="menu-mobile" data-menu hidden>
        <button class="uv-menu-toggle uv-menu__close" type="button" data-menu-close>Fechar</button>
        <nav aria-label="Principal">
        ${links('menu')}
        </nav>
        <div class="uv-menu__foot">
          <hr class="uv-rule--light" style="margin-bottom:var(--space-md)">
          <div class="type-body-sm">${esc(contato.email)}</div>
        </div>
      </div>
    </header>
  </div>`;
}

/** Footer: Calce Sombreada, 120px de respiro. Contato é texto, sem ícones. */
function rodape(base) {
  return `<footer class="uv-footer" data-reveal-self>
    <div class="u-page">
      <div class="uv-footer__cols">
        <div class="uv-footer__brand">
          <div class="uv-footer__mark">${esc(marca)}</div>
          <div class="uv-footer__note">${esc(notaRodape)}</div>
        </div>
        <div class="uv-footer__col">
          <h2>Índice</h2>
          <a href="${base}projetos.html">Projetos</a>
          <a href="${base}colecao.html">Coleção de Criações</a>
        </div>
        <div class="uv-footer__col">
          <h2>Contato</h2>
          <a href="mailto:${esc(contato.email)}">${esc(contato.email)}</a>
          <a href="${esc(contato.githubHref)}" rel="noreferrer noopener">${esc(contato.github)}</a>
        </div>
        <div class="uv-footer__col">
          <h2>No Fear</h2>
          <a href="${base}no-fear.html">A empresa</a>
          <span>${esc(contato.cnpj)}</span>
        </div>
      </div>
    </div>
  </footer>`;
}

/** IndexRow: a linha inteira é o link, não só o nome. */
function linhaIndice(p, base, { coluna = 'disciplina', resumo = false } = {}) {
  const disc = coluna === 'origem' ? p.origem : p.disciplina;
  const nofear = coluna === 'origem' && p.origem === 'No Fear';
  const nome = resumo
    ? `<span class="idx-title">${esc(p.nome)}</span><span class="idx-sub">${esc(p.resumo)}</span>`
    : esc(p.nome);
  return `<a class="u-index-row uv-index-row" href="${base}projetos/${p.slug}.html">
        <span class="idx-num">${esc(p.numero)}</span>
        <span class="idx-name">${nome}</span>
        <span class="idx-disc${nofear ? ' idx-disc--nofear' : ''}">${esc(disc)}</span>
        <span class="idx-year">${esc(p.ano)}</span>
      </a>`;
}

/** ProjectIndex: o componente central do site. */
function indice(itens, base, opcoes) {
  return `<div class="uv-index">
      ${itens.map((p) => linhaIndice(p, base, opcoes)).join('\n      ')}
    </div>`;
}

/** Cabeça de seção: rótulo à esquerda, contagem à direita, mesma linha de base. */
function cabecaSecao(rotulo, contagem, tag = 'h2') {
  return `<div class="uv-sec-head">
      <${tag} class="type-label-caps">${esc(rotulo)}</${tag}>
      ${contagem ? `<span class="type-meta-num">${esc(contagem)}</span>` : ''}
    </div>`;
}

/** Vaga de imagem dentro do passe-partout. */
function figura(vaga, proporcao, legenda, mat = 'uv-mat') {
  return `<figure class="uv-fig">
        <div class="${mat}"><div class="uv-slot" style="--ratio:${proporcao}" data-slot="${esc(vaga)}"></div></div>
        ${legenda ? `<figcaption>${esc(legenda)}</figcaption>` : ''}
      </figure>`;
}

/** Plate: substitui a imagem quando não há foto à altura. */
function placa(titulo, meta, proporcao, legenda) {
  return `<figure class="uv-plate">
        <div class="uv-plate__field" style="--ratio:${proporcao}">
          <div class="uv-plate__title">${esc(titulo)}</div>
          ${meta ? `<div class="uv-plate__meta">${esc(meta)}</div>` : ''}
        </div>
        ${legenda ? `<figcaption>${esc(legenda)}</figcaption>` : ''}
      </figure>`;
}

/* --- documento ----------------------------------------------------------- */

function documento({ titulo, descricao, atual, base, conteudo }) {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(titulo)}</title>
<meta name="description" content="${esc(descricao)}">
<meta name="color-scheme" content="light">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${base}assets/css/uliveto/styles.css">
<link rel="stylesheet" href="${base}assets/css/site.css">
<script src="${base}assets/js/site.js" defer></script>
</head>
<body>
<a class="uv-skip" href="#conteudo">Ir para o conteúdo</a>
${cabecalho(atual, base)}
<main class="u-page" id="conteudo" data-reveal>
${conteudo}
</main>
${rodape(base)}
</body>
</html>
`;
}

/* --- páginas ------------------------------------------------------------- */

/* 3a — Quem sou eu (home) */
function paginaHome() {
  const conteudo = `  <div class="u-grid-12" style="padding-top:var(--space-xxl)">
    <div class="u-content-span">
      <h1 class="type-display">José Marques</h1>
    </div>
    <div class="uv-col" style="--col:9 / span 4;padding-top:14px">
      <div class="type-label-caps-sm">Back-end · Dados</div>
      <div class="type-meta-num" style="margin-top:var(--space-sm)">Brasil · Desde 2021</div>
    </div>
  </div>

  <p class="type-body-lg u-measure" style="margin-top:var(--space-xl)">Trabalho com back-end e dados: sistemas que precisam rodar todos os dias sem ninguém olhando.</p>

  <div class="u-grid-12" style="padding-top:var(--space-xxl)">
    <div class="u-content-span">
      <p class="type-body-md u-measure" style="margin-bottom:var(--space-lg)">A maior parte do que faço é integração: fazer conversar sistemas que não foram feitos para isso, e deixar o número certo na tela de quem precisa decidir. Escrevo em Go, Python e SQL, e cuido do que vem depois — fila, retentativa, log, o dia em que a API do outro lado cai.</p>
      <p class="type-body-md u-measure">Em 2024 abri a <strong>No Fear</strong> para levar esse trabalho até o fim com as empresas que me procuram. Antes disso foram três anos de faculdade e de projetos que ninguém pediu; boa parte deles está no índice.</p>
    </div>
    <div class="uv-col" style="--col:8 / span 5">
      ${figura('Retrato 4:5 — coloque uma foto aqui', '4 / 5', 'Retrato em 4:5. Avatar redondo não existe no sistema.')}
    </div>
  </div>

  <section class="uv-sec--far">
    <hr>
    <div class="u-grid-12" style="padding-top:var(--space-lg)">
      <div class="uv-col" style="--col:1 / span 3">
        <h2 class="type-label-caps">A No Fear</h2>
      </div>
      <div class="uv-col" style="--col:5 / span 6">
        <h3 class="type-headline-md" style="margin-bottom:var(--space-lg)">Software sob medida, entregue em partes</h3>
        <p class="type-body-md" style="margin-bottom:var(--space-lg)">A empresa existe para uma coisa: assumir o sistema interno que a planilha não aguenta mais. Escopo fechado, entrega em partes, código no repositório do cliente.</p>
        <a href="no-fear.html">Ver a No Fear</a>
      </div>
    </div>
  </section>

  <section class="uv-sec" style="padding-bottom:var(--space-xxxl)">
    <hr class="uv-rule--light">
    <div class="u-grid-12" style="padding-top:var(--space-lg)">
      <div class="uv-col" style="--col:1 / span 3">
        <h2 class="type-label-caps">Onde me achar</h2>
      </div>
      <div class="uv-stack uv-col" style="--col:5 / span 6">
        <a href="mailto:${esc(contato.email)}">${esc(contato.email)}</a>
        <a href="${esc(contato.githubHref)}" rel="noreferrer noopener">${esc(contato.github)}</a>
        <a href="${esc(contato.linkedinHref)}" rel="noreferrer noopener">${esc(contato.linkedin)}</a>
      </div>
    </div>
  </section>`;

  return documento({
    titulo: 'José Marques — Back-end e dados',
    descricao:
      'Portfólio de José Marques: back-end, dados e integração. Oito projetos e a No Fear, empresa de software sob medida.',
    atual: 'home',
    base: '',
    conteudo,
  });
}

/* 3b — Projetos, índice com linha de resumo */
function paginaProjetos() {
  const porDisciplina = (d) => projetos.filter((p) => p.disciplina === d);
  const bloco = (rotulo) => {
    const itens = porDisciplina(rotulo);
    return `  <section class="uv-sec">
    ${cabecaSecao(rotulo, String(itens.length).padStart(2, '0'))}
    <hr>
    ${indice(itens, '', { coluna: 'origem', resumo: true })}
  </section>`;
  };

  const anos = projetos.map((p) => p.ano);
  const conteudo = `  <div class="u-grid-12" style="padding-top:var(--space-xxl)">
    <div class="u-content-span">
      <h1 class="type-headline-lg" style="margin-bottom:var(--space-lg)">Projetos</h1>
      <p class="type-body-md u-measure">Oito sistemas que ficaram de pé, em ordem de disciplina e não de data. Cada linha abre a ficha com o problema, a stack e o código.</p>
    </div>
    <div class="uv-col" style="--col:9 / span 4;padding-top:10px">
      <div class="type-meta-num">${String(projetos.length).padStart(2, '0')} entradas · ${Math.min(...anos)}—${Math.max(...anos)}</div>
    </div>
  </div>

${bloco('Back-end')}

${bloco('Dados')}

  <div class="uv-tail"></div>`;

  return documento({
    titulo: 'Projetos — José Marques',
    descricao:
      'Oito sistemas de back-end e dados, em ordem de disciplina: o problema, a stack e o código de cada um.',
    atual: 'projetos',
    base: '',
    conteudo,
  });
}

/* 3f — Ficha de projeto */
function paginaFicha(p, anterior, proximo) {
  const base = '../';
  const capa = p.capa
    ? figura(p.capa, '3 / 2', p.capaLegenda)
    : placa(p.nome, `${p.disciplina} · ${p.ano}`, '3 / 2', 'Placa tipográfica: a resposta do sistema quando não há foto à altura.');

  const prints = p.prints
    ? `  <div class="uv-pair uv-sec">
    ${p.prints
      .map((pr) => `<div>${figura(pr.vaga, '1 / 1', pr.legenda, 'uv-mat--sm')}</div>`)
      .join('\n    ')}
  </div>`
    : '';

  return documento({
    titulo: `${p.nome} — José Marques`,
    descricao: p.resumo,
    atual: 'projetos',
    base,
    conteudo: `  <div style="padding-top:var(--space-lg)">
    <a class="uv-back type-label-caps" href="${base}projetos.html">Voltar ao índice</a>
  </div>

  <div class="u-grid-12" style="padding-top:var(--space-xl)">
    <div class="u-content-span">
      <div class="type-meta-num" style="margin-bottom:var(--space-md)">${esc(p.numero)}</div>
      <h1 class="type-headline-lg">${esc(p.nome)}</h1>
    </div>
    <div class="uv-stack uv-col" style="--col:9 / span 4;padding-top:38px">
      <div class="type-label-caps-sm">${esc(p.disciplina)} · ${esc(p.ano)}</div>
      <div class="type-label-caps-sm">${esc(p.papel)}</div>
      <div class="type-label-caps-sm">${p.origem === 'No Fear' ? 'Cliente No Fear' : esc(p.origem)}</div>
    </div>
  </div>

  <div style="padding-top:var(--space-xl)">
    ${capa}
  </div>

  <div class="u-grid-12" style="padding-top:var(--space-xxl)">
    <div class="u-content-span">
      <h2 class="type-label-caps">O problema</h2>
      <div style="margin:var(--space-md) 0 var(--space-xl)">
          ${paragrafos(p.problema)}
      </div>
      <h2 class="type-label-caps">O que construí</h2>
      <div style="margin-top:var(--space-md)">
          ${paragrafos(p.construcao)}
      </div>
    </div>
    <div class="uv-col" style="--col:9 / span 4">
      <hr class="uv-rule--light">
      <div style="padding-top:var(--space-md)">
        <h2 class="type-label-caps">Stack</h2>
        <div class="uv-chips" style="margin-top:var(--space-md)">
          ${p.chips.map((c) => `<span class="uv-chip">${esc(c)}</span>`).join('\n          ')}
        </div>
      </div>
      <div style="padding-top:var(--space-xl)">
        <h2 class="type-label-caps">Resultado</h2>
        <div class="type-headline-md" style="margin-top:var(--space-md)">${esc(p.resultado)}</div>
      </div>
      <div style="padding-top:var(--space-xl)">
        <h2 class="type-label-caps">Código</h2>
        <div style="margin-top:var(--space-md)">
          <a href="${esc(p.repoHref)}" target="_blank" rel="noreferrer noopener">${esc(p.repo)}</a>
        </div>
      </div>
    </div>
  </div>

${prints}

  <nav class="uv-sec" style="padding-bottom:var(--space-xxxl)" aria-label="Outros projetos">
    <hr>
    <div class="uv-pager">
      <a class="type-label-caps" href="${base}projetos/${anterior.slug}.html">Anterior · ${esc(anterior.nome)}</a>
      <a class="type-label-caps" href="${base}projetos/${proximo.slug}.html">Próximo · ${esc(proximo.nome)}</a>
    </div>
  </nav>`,
  });
}

/* 3g — No Fear */
function paginaNoFear() {
  const servicos = servicosNoFear
    .map(
      (s) => `    <div class="uv-svc">
      <span class="type-meta-num uv-svc__num">${esc(s.numero)}</span>
      <span class="type-index-title uv-svc__name">${esc(s.nome)}</span>
      <span class="type-body-sm uv-svc__text">${esc(s.texto)}</span>
    </div>`
    )
    .join('\n');

  const conteudo = `  <div class="u-grid-12" style="padding-top:var(--space-xxl)">
    <div class="uv-col" style="--col:1 / span 8">
      <div class="type-label-caps">A empresa</div>
      <h1 class="type-headline-lg" style="margin:var(--space-md) 0 var(--space-lg);max-width:22ch">Software sob medida para empresas</h1>
      <p class="type-body-lg u-measure">A No Fear existe para assumir o sistema interno que a planilha não aguenta mais. Escopo fechado antes de começar, entrega em partes, código no repositório do cliente.</p>
    </div>
    <div class="uv-col" style="--col:10 / span 3;text-align:right;padding-top:6px">
      <div class="type-meta-num">Fundada em 2024</div>
    </div>
  </div>

  <section class="uv-sec">
    <h2 class="type-label-caps" style="margin-bottom:var(--space-md)">O que a No Fear faz</h2>
    <hr>
${servicos}
  </section>

  <section class="uv-sec">
    ${cabecaSecao('Entregas da No Fear', String(entregasNoFear.length).padStart(2, '0'))}
    <hr>
    ${indice(entregasNoFear, '', { coluna: 'disciplina' })}
  </section>

  <div class="u-grid-12" style="padding-top:var(--space-xxl);padding-bottom:var(--space-xxxl);align-items:center">
    <div class="uv-col" style="--col:1 / span 6">
      <a class="uv-btn uv-btn--primary" href="contato.html">Falar sobre um projeto</a>
    </div>
    <div class="uv-col" style="--col:9 / span 4;text-align:right">
      <a href="mailto:${esc(contato.email)}">${esc(contato.email)}</a>
    </div>
  </div>`;

  return documento({
    titulo: 'No Fear — Software sob medida para empresas',
    descricao:
      'A No Fear assume o sistema interno que a planilha não aguenta mais: escopo fechado, entrega em partes, código no repositório do cliente.',
    atual: 'nofear',
    base: '',
    conteudo,
  });
}

/* 3i — Coleção de Criações */
function paginaColecao() {
  const celulas = colecao
    .map((item, i) => {
      const corpo =
        item.tipo === 'placa'
          ? placa(item.nome, item.meta, item.proporcao, item.legenda)
          : figura(item.vaga, item.proporcao, null, 'uv-mat--sm');
      const legenda =
        item.tipo === 'placa'
          ? ''
          : `\n      <div class="type-caption" style="margin-top:6px">${esc(item.legenda)}</div>`;
      return `    <div${i % 2 === 1 ? ' class="uv-media-grid__offset"' : ''}>
      ${corpo}
      <div class="uv-media-head">
        <span class="type-index-title">${esc(item.nome)}</span>
        <span class="type-meta-num">${esc(item.ano)}</span>
      </div>${legenda}
    </div>`;
    })
    .join('\n');

  const conteudo = `  <div class="u-grid-12" style="padding-top:var(--space-xxl)">
    <div class="u-content-span">
      <h1 class="type-headline-lg" style="margin-bottom:var(--space-lg)">Coleção de Criações</h1>
      <p class="type-body-md u-measure">Arte, vídeo, áudio e foto. É o que faço quando o problema não é de software, e está aqui porque é a mesma disciplina em outro material.</p>
    </div>
    <div class="uv-col" style="--col:10 / span 3;text-align:right;padding-top:10px">
      <div class="type-meta-num">${String(colecao.length).padStart(2, '0')} entradas</div>
    </div>
  </div>

  <div class="uv-media-grid uv-sec">
${celulas}
  </div>

  <div class="uv-tail"></div>`;

  return documento({
    titulo: 'Coleção de Criações — José Marques',
    descricao:
      'Arte, vídeo, áudio e foto: o que faço quando o problema não é de software.',
    atual: 'colecao',
    base: '',
    conteudo,
  });
}

/* 3l — Contato */
function paginaContato() {
  const conteudo = `  <div class="u-grid-12" style="padding-top:var(--space-xxl);padding-bottom:var(--space-xxxl)">
    <div class="uv-col" style="--col:1 / span 6">
      <h1 class="type-headline-lg" style="margin-bottom:var(--space-lg)">Contato</h1>
      <p class="type-body-md" style="margin-bottom:var(--space-xl);max-width:30rem">Escreva o que precisa em duas ou três frases. Se for projeto, diga o prazo que você tem em mente.</p>

      <form class="uv-stack--lg" method="post" action="#" data-form-contato>
        <div class="uv-field">
          <label for="nome">Nome</label>
          <input id="nome" name="nome" type="text" autocomplete="name" required>
          <div class="uv-field__error" data-erro="nome" hidden>Escreva seu nome para eu saber com quem falo.</div>
        </div>
        <div class="uv-field">
          <label for="email">E-mail</label>
          <input id="email" name="email" type="email" autocomplete="email" required>
          <div class="uv-field__error" data-erro="email" hidden>Escreva um e-mail com @ para eu poder responder.</div>
        </div>
        <div class="uv-field">
          <label for="mensagem">O que você precisa</label>
          <textarea id="mensagem" name="mensagem" rows="5" required></textarea>
          <div class="uv-field__error" data-erro="mensagem" hidden>Escreva duas ou três frases sobre o que você precisa.</div>
        </div>
        <div style="padding-top:var(--space-md)">
          <button class="uv-btn uv-btn--primary" type="submit">Enviar</button>
        </div>
      </form>
    </div>

    <div class="uv-col" style="--col:8 / span 5;padding-top:16px">
      <hr class="uv-rule--light">
      <div style="padding-top:var(--space-md)">
        <h2 class="type-label-caps">Ou direto</h2>
        <div class="uv-stack" style="margin-top:var(--space-md)">
          <a href="mailto:${esc(contato.email)}">${esc(contato.email)}</a>
          <a href="${esc(contato.githubHref)}" rel="noreferrer noopener">${esc(contato.github)}</a>
        </div>
        <p class="type-body-sm" style="margin-top:var(--space-xl);max-width:24rem">Respondo em até dois dias úteis. Se for urgente, escreva direto para o e-mail.</p>
      </div>
    </div>
  </div>`;

  return documento({
    titulo: 'Contato — José Marques',
    descricao: 'Fale comigo sobre um projeto de back-end, dados ou integração.',
    atual: 'contato',
    base: '',
    conteudo,
  });
}

/* --- execução ------------------------------------------------------------ */

const escritos = [];
async function escrever(caminho, html) {
  const destino = join(raiz, caminho);
  await mkdir(dirname(destino), { recursive: true });
  await writeFile(destino, html, 'utf8');
  escritos.push(caminho);
}

await escrever('index.html', paginaHome());
await escrever('projetos.html', paginaProjetos());
await escrever('no-fear.html', paginaNoFear());
await escrever('colecao.html', paginaColecao());
await escrever('contato.html', paginaContato());

for (let i = 0; i < projetos.length; i += 1) {
  const anterior = projetos[(i - 1 + projetos.length) % projetos.length];
  const proximo = projetos[(i + 1) % projetos.length];
  await escrever(
    `projetos/${projetos[i].slug}.html`,
    paginaFicha(projetos[i], anterior, proximo)
  );
}

console.log(`${escritos.length} páginas geradas:`);
for (const c of escritos) console.log(`  ${c}`);
