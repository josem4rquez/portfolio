# Portfólio — José Marques / No Fear

Site estático de portfólio: back-end, dados e integração, mais a página da **No
Fear**, empresa de sistemas de gestão integrados a business intelligence.

HTML, CSS e JavaScript puro. Sem framework, sem build obrigatório, sem
dependência em tempo de execução e sem rastreamento. Abrir `index.html` no
navegador funciona.

Publicado no GitHub Pages em `https://<usuario>.github.io/portfolio/`.

## Tecnologias

- **HTML5** — 14 páginas estáticas, `lang="pt-BR"`, UTF-8, responsivas.
- **CSS** — design system próprio (**Uliveto**), escrito à mão em CSS puro:
  custom properties para os tokens, CSS Grid de 12 colunas, `@media` nos cortes
  de 1024px e 640px. Sem pré-processador, sem Tailwind, sem reset de terceiros.
- **JavaScript** — um único arquivo, ES5, IIFE, sem módulos e sem imports:
  menu de tela cheia, revelação por `IntersectionObserver` e validação do
  formulário de contato. O site funciona sem ele.
- **Google Fonts** — EB Garamond e Archivo, por enquanto via CDN
  (ver *Pendências*).
- **Node.js** — só no gerador em `tools/`, que é opcional e não roda no site.

## Estrutura

```
portfolio/
├── index.html                  Quem sou eu (home)
├── projetos.html               Índice dos oito projetos
├── no-fear.html                A empresa
├── colecao.html                Coleção de Criações
├── contato.html                Contato
├── README.md
├── .gitignore
├── projetos/                   Uma ficha por projeto (8 páginas)
│   ├── api-de-autenticacao.html
│   ├── conciliacao-de-pagamentos.html
│   ├── consolidacao-de-bases-de-rh.html
│   ├── fila-de-processamento-de-notas.html
│   ├── modelo-de-evasao-de-clientes.html
│   ├── painel-de-indicadores-da-operacao.html
│   ├── pipeline-de-vendas.html
│   └── servico-de-importacao-de-catalogo.html
├── assets/
│   ├── css/
│   │   ├── site.css            Componentes do site (header, índice, fichas, rodapé)
│   │   └── uliveto/
│   │       ├── styles.css      Ponto de entrada — @import dos tokens
│   │       └── tokens/         cores, tipografia, espaçamento, grade, filetes, motion
│   ├── js/
│   │   └── site.js             Menu, revelação de opacidade, validação
│   ├── img/
│   │   └── jose-marques.jpg    Retrato 4:5
│   └── docs/
│       ├── design.md           O design system Uliveto por escrito
│       └── specimen.html       Espécime tipográfico dos tokens
└── tools/                      Gerador de páginas (opcional, não vai para o ar)
    ├── conteudo.js             Textos, projetos e links
    └── build.mjs               Monta as 13 páginas a partir de conteudo.js
```

Todos os caminhos no HTML e no CSS são **relativos** — nenhum começa com `/`.
Isso é obrigatório: o site vive na subpasta `/portfolio/`, e um caminho
absoluto como `/assets/css/site.css` apontaria para a raiz do domínio e quebraria
em produção.

## Rodar localmente

O site é estático, então basta abrir o arquivo:

```
start index.html          # Windows
```

Para ver o site como ele fica no servidor (caminhos relativos, sem `file://`),
suba um servidor local com qualquer coisa que você já tenha:

```
python -m http.server 8000
```

e acesse `http://localhost:8000/`.

Nenhum dos dois exige instalar nada além do que você já tem — não há
`npm install`, não há `package.json`.

## O gerador em `tools/` (leia antes de usar)

`tools/build.mjs` monta as páginas a partir de `tools/conteudo.js`, para que o
cabeçalho, o rodapé e as oito fichas não saiam de sincronia:

```
node tools/build.mjs
```

**O gerador está desatualizado em relação ao HTML.** As 13 páginas foram
editadas à mão depois da última execução, e hoje elas são a fonte da verdade:
o HTML tem o e-mail real, a biografia atual, o retrato e as animações de
revelação, enquanto o gerador ainda tem e-mail e CNPJ de exemplo, a biografia
antiga e o retrato como vaga vazia. Rodar `node tools/build.mjs` como está
**apaga essas correções**.

Antes de voltar a usá-lo, transfira as edições feitas à mão para
`conteudo.js` e `build.mjs`.

## Pendências

- **Fontes.** `assets/docs/design.md` pede EB Garamond e Archivo servidas
  localmente, sem CDN de terceiros. Os binários OFL ainda não estão no
  repositório, então `assets/css/uliveto/tokens/fonts.css` carrega do Google
  Fonts. Ao receber os arquivos, coloque-os em `assets/fonts/`, apague o
  `@import` e descomente o bloco `@font-face` — os caminhos já estão certos.
- **Envio do formulário.** `contato.html` valida no navegador, mas o `action`
  está em `#`: não há endpoint para onde enviar. O GitHub Pages não executa
  código de servidor, então isso exige um serviço externo de formulário.
- **Texto das fichas 02–08.** Só a ficha 01 tem o relato escrito; as outras
  sete estão diagramadas com os dados reais e um parágrafo dizendo que o texto
  ainda não existe.
- **Links de repositório.** As fichas de projeto apontam para
  `github.com/josemarques/…`, enquanto a home e o rodapé apontam para
  `github.com/josem4rquez`. Um dos dois está errado.
- **Imagens.** Só a home tem foto; as demais figuras continuam como vaga
  (`.uv-slot`) com o texto do que deve entrar ali.

## Publicar no GitHub Pages

1. `git init`, commit e push para o repositório `portfolio`.
2. Em **Settings → Pages**, escolha *Deploy from a branch*, branch `main`,
   pasta `/ (root)`.
3. O site sai em `https://<usuario>.github.io/portfolio/`.

Não há passo de build: o que está no repositório é o que vai para o ar.

## Contato

- josebermarques@gmail.com
- github.com/josem4rquez
