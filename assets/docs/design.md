---
version: alpha
name: Uliveto
description: Sistema visual para o site-portfolio de um estudio de design - registro old money italiano, estatico (apenas frontend), tema claro unico.

omitted:
  - section: rounded
    reason: "Raio zero e uma propriedade fixa da direcao, nao uma escala. Nenhum elemento do sistema tem canto arredondado, entao um token de raio existiria apenas para ser violado."

colors:
  primary: "#373D20"
  secondary: "#717744"
  tertiary: "#766153"
  neutral: "#BCBD8B"
  surface: "#EFF1ED"
  surface-sunken: "#E3E6DD"
  error: "#8A3D26"

typography:
  display:
    fontFamily: EB Garamond
    fontSize: 104px
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: -0.035em
  headline-lg:
    fontFamily: EB Garamond
    fontSize: 60px
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: -0.025em
  headline-md:
    fontFamily: EB Garamond
    fontSize: 34px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.015em
  index-title:
    fontFamily: EB Garamond
    fontSize: 26px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: -0.01em
  body-lg:
    fontFamily: EB Garamond
    fontSize: 21px
    fontWeight: 400
    lineHeight: 1.65
  body-md:
    fontFamily: EB Garamond
    fontSize: 19px
    fontWeight: 400
    lineHeight: 1.7
  body-sm:
    fontFamily: EB Garamond
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  smallcaps:
    fontFamily: EB Garamond
    fontSize: 19px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0.04em
    fontFeature: '"smcp" 1, "onum" 1'
  caption:
    fontFamily: EB Garamond
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.55
  label-caps:
    fontFamily: Archivo
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0.16em
  label-caps-sm:
    fontFamily: Archivo
    fontSize: 10px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.2em
  meta-num:
    fontFamily: Archivo
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 0.06em
    fontFeature: '"tnum" 1'

spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  xxl: 120px
  xxxl: 200px
  gutter: 32px
  margin: 96px
  measure: 36rem

components:
  page:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    padding: "{spacing.margin}"
  index-item:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.index-title}"
    padding: "{spacing.lg}"
  index-item-hover:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    typography: "{typography.index-title}"
    padding: "{spacing.lg}"
  index-meta:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.meta-num}"
  rule:
    backgroundColor: "{colors.neutral}"
    height: 1px
  rule-structural:
    backgroundColor: "{colors.secondary}"
    height: 1px
  link:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.tertiary}"
    typography: "{typography.body-md}"
  link-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.surface}"
    typography: "{typography.label-caps}"
    padding: "{spacing.md}"
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.label-caps}"
    padding: "{spacing.md}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.tertiary}"
    typography: "{typography.label-caps}"
    padding: "{spacing.md}"
  figure-mat:
    backgroundColor: "{colors.surface-sunken}"
    textColor: "{colors.primary}"
    typography: "{typography.caption}"
    padding: "{spacing.xl}"
  chip-discipline:
    backgroundColor: "{colors.surface-sunken}"
    textColor: "{colors.primary}"
    typography: "{typography.label-caps-sm}"
    padding: "{spacing.sm}"
  team-name:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.smallcaps}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.body-sm}"
    padding: "{spacing.sm}"
  input-error:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.error}"
    typography: "{typography.body-sm}"
    padding: "{spacing.sm}"
  footer:
    backgroundColor: "{colors.surface-sunken}"
    textColor: "{colors.primary}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xxl}"
---

# Uliveto

## Overview

Uliveto é o sistema visual de um site-portfólio estático de estúdio de design. O público é pequeno e qualificado: clientes em avaliação, diretores de arte e possíveis colaboradores. Cada um deles chega uma vez, por dois ou três minutos, quase sempre por um link enviado por outra pessoa. O site não precisa converter, reter ou explicar — precisa deixar claro, na primeira tela, que quem fez aquilo sabe o que está fazendo.

A direção é **luxo minimalista em registro italiano**. A referência de proporção não é um site: é a Villa Necchi Campiglio, em Milão (Portaluppi, 1935) — paredes largas e vazias, poucos objetos, cada um posto no lugar exato e nenhum pedindo atenção. Traduzido para a tela: margens enormes, poucos elementos por viewport, e a fotografia do trabalho como única fonte de cor saturada da página.

O princípio de comportamento é a **sprezzatura** — a ideia de Castiglione (*Il Cortegiano*, 1528) de que a arte verdadeira consiste em esconder o esforço. Na prática, isso é uma regra de engenharia, não uma metáfora: o site nunca anuncia o próprio trabalho. Nada entra com animação, nada pulsa, nada tem selo de "novo", nenhum número sobe contando. O trabalho aparece já pronto, como se sempre tivesse estado ali. Quando houver dúvida sobre adicionar um efeito, a resposta é não.

A estrutura é de **índice**: os projetos são uma lista numerada e tipográfica — número, nome, ano, disciplina, filete — e a imagem grande só aparece quando se entra no projeto. Essa escolha tem uma razão prática além da estética: um índice se sustenta com oito projetos ou com trinta, e não desmorona quando um deles não tem foto boa.

**O que este sistema abre mão, explicitamente:** densidade de informação, descobribilidade e clareza de affordance. Não há chamadas para ação competindo, nem hierarquia por cor, nem cartões destacando o que é clicável. Um visitante apressado vai achar o site econômico demais. Esse é o preço, e ele é aceito em troca de compostura.

**A dependência crítica:** esta direção aposta a identidade inteira na fotografia. Uma página de luxo minimalista com foto ruim não é minimalista — é vazia. O padrão fotográfico descrito na seção Components é parte do sistema, não uma sugestão.

## Colors

A paleta inteira vem de um olival ao meio-dia, e cada cor tem um referente físico. Cinco dos sete valores são fixos e fornecidos; os outros dois são derivados por necessidade estrutural e estão marcados como tal.

- **Primary (#373D20) — *Verde Oliva Escuro*.** A face sombreada da folha da oliveira. É a tinta: todo texto do site, do display de 104px à legenda de 15px. A 9,98:1 sobre o papel, sustenta leitura longa sem esforço.
- **Secondary (#717744) — *Oliva Seca*.** O chão do olival sob sol direto. Esta cor tem uma restrição documentada: a 4,18:1 sobre o papel ela **reprova em WCAG AA**, então o sistema a proíbe como texto e lhe dá o trabalho estrutural — ela é a **linha que separa um projeto do seguinte**. É o único filete forte do sistema, e é o que dá ritmo ao índice.
- **Tertiary (#766153) — *Nogueira*.** Nogueira e travertino na sombra. É a **única cor quente num campo inteiramente frio**, e por isso é o único sinal de interação: links, ação primária, e nada mais. Se alguma coisa é dessa cor, ela é clicável — a recíproca também vale.
- **Neutral (#BCBD8B) — *Salva Seca*.** O verso prateado da folha, o lado que o vento vira. Faz dois trabalhos: o filete leve (1px, 1,71:1 sobre o papel — quase invisível, e isso é intencional) e o campo que preenche a linha do índice sob o cursor.
- **Surface (#EFF1ED) — *Calce*.** Parede caiada com cal, não papel branco. É o fundo de toda página. Note que ela é tingida de verde, não neutra — não existe cinza puro em lugar nenhum deste sistema.
- **Surface-sunken (#E3E6DD) — *Calce Sombreada*** *(derivada)*. Um segundo papel, meio tom abaixo. Existe porque a profundidade aqui é tonal, não projetada: é o passe-partout atrás das imagens e o campo do rodapé.
- **Error (#8A3D26) — *Cotto*** *(derivada)*. Terracota de Impruneta — a Nogueira empurrada para mais saturação e um pouco mais para o vermelho, para permanecer visivelmente da mesma família em vez de ser um vermelho de alerta importado de outro sistema. Único uso: validação do formulário de contato.

Não existe cor de sucesso, de aviso ou de informação, e não deve passar a existir. Ênfase neste sistema é feita com **tamanho, espaço e caixa** — nunca com cor. Essa é a regra que mantém a Nogueira significando alguma coisa.

## Typography

Duas famílias, ambas livres (SIL OFL) e servidas localmente — o site é estático, então nenhuma delas deve vir de CDN de terceiros.

**EB Garamond** carrega a voz: display, títulos, corpo, legendas. A escolha é linhagem, não gosto — as garaldes descendem do romano cortado por **Francesco Griffo para Aldo Manuzio, em Veneza, 1495**. É a forma de letra italiana original, e é a única razão pela qual este site consegue parecer antigo sem parecer fantasia. A EB Garamond é o revival livre mais sério disponível, e traz o que o sistema realmente usa: **versaletes verdadeiros** (`smcp`) e **algarismos antigos** (`onum`), ambos ativados no nível `smallcaps`. Ela tem altura-x pequena, então é composta um passo maior do que o instinto pede — corpo a 19px, não 16px. Fallback: `"EB Garamond", "Iowan Old Style", Georgia, serif`.

**Archivo** carrega o aparato: rótulos de seção, disciplinas, anos, navegação. É uma grotesca neutra, e o contraste com a Garamond é de **classificação**, não de peso — que é a única forma de pareamento que o olho lê como decisão. Ela aparece exclusivamente em caixa alta, entre 10px e 12px, com entreletra de 0,16em a 0,2em. Caixa alta composta sem esse espaçamento parece quebrada, não enfática. Os anos no índice usam `tnum` para alinhar em coluna. Fallback: `Archivo, "Helvetica Neue", Arial, sans-serif`.

**Um peso por família.** A Garamond aparece só em 400 — do display de 104px à legenda. Não existe título em negrito neste sistema; hierarquia é feita por tamanho e espaço, e essa é a decisão tipográfica central. A Archivo usa 500 apenas porque caixa alta a 10–11px precisa de compensação óptica para não sumir; o 400 dela fica reservado aos algarismos, que não têm esse problema. Ou seja: dois pesos existem, e nenhum dos dois é um degrau de hierarquia.

A escala é uma quarta justa (1,333) a partir de 19px — 19, 25, 34, 45, 60 — com o topo **quebrado à mão** para 104px. O salto de 19 para 104 é o único gesto alto do site e precisa ser um salto, não uma progressão. O entrelinhamento move inversamente ao tamanho (1,02 no display, 1,7 no corpo) e a entreletra também (−0,035em no display, 0 no corpo, positiva em tudo que é caixa alta).

Itálico da Garamond é usado com significado, não como ênfase genérica: nomes de projetos citados dentro de texto corrido e legendas de imagem. Ênfase dentro de parágrafo é feita com versaletes.

## Layout

Grade de 12 colunas, largura máxima de 1440px, com **margem externa de 96px no desktop** — deliberadamente maior do que o confortável. A margem é o material principal do sistema; se ela encolher, a direção morre.

A composição é **assimétrica e comprometida com isso**. O padrão é conteúdo alinhado à esquerda ocupando as colunas 1–7, deixando as colunas 8–12 vazias em quase toda página. Esse vazio à direita não é espaço sobrando à espera de conteúdo: é onde o ano, o rótulo de disciplina e as anotações marginais vivem, e onde nada mais deve entrar. Texto centralizado não é usado em lugar nenhum, em nenhum tamanho.

A medida do corpo é fixa em **36rem (≈66 caracteres na Garamond a 19px)**. Parágrafo em largura total é proibido.

O ritmo vertical **varia por intenção**: 200px separa seções que não têm relação entre si, 120px separa blocos dentro de uma mesma seção, e 32px separa linhas do índice. Um site com espaçamento uniforme entre seções não tem fraseado, e o fraseado é boa parte do que se está comprando aqui.

O índice de projetos é uma tabela de quatro campos alinhados: número (`meta-num`, coluna 1), nome (`index-title`, colunas 2–7), disciplina (`label-caps-sm`, colunas 8–10) e ano (`meta-num`, coluna 12, alinhado à direita). Um filete estrutural de 1px em Oliva Seca fecha cada linha.

Breakpoints: abaixo de 1024px a margem cai para 48px e a grade vira 6 colunas; abaixo de 640px, margem de 24px, coluna única, e o índice colapsa em duas linhas por projeto (nome; disciplina · ano). O display cai para 56px no mobile — o tipo grande é o primeiro a ceder, a margem é o último.

## Elevation & Depth

**Não há sombras em lugar nenhum deste sistema.** Nenhuma. A propriedade `box-shadow` não deve aparecer no CSS, com a única exceção do contorno de foco de teclado.

Profundidade é feita por três meios, nesta ordem de preferência:

1. **Espaço.** A maioria dos problemas de agrupamento é, na verdade, problema de distância, e é assim que devem ser resolvidos aqui.
2. **Camada tonal.** Uma superfície rebaixada em Calce Sombreada (#E3E6DD) sob a superfície de Calce (#EFF1ED). A diferença é de meio tom e é intencionalmente quase imperceptível — o suficiente para separar o passe-partout de uma imagem do papel da página, e não mais que isso.
3. **Filete de 1px.** Dois pesos apenas: o estrutural em Oliva Seca, que divide conteúdo, e o leve em Salva Seca, que apenas sugere um limite.

Nada no site flutua, porque nada no site está acima de outra coisa. Não há modais, dropdowns ou overlays — um portfólio estático não precisa deles, e a ausência é parte da direção. Se um menu mobile for necessário, ele ocupa a tela inteira em Calce sólida, sem transparência e sem desfoque; *glassmorphism* está fora.

## Shapes

**Raio zero em absolutamente tudo** — imagens, botões, campos de formulário, retratos da equipe, o menu mobile. Não existe token de raio neste sistema porque não existe decisão de raio a tomar. Canto reto é a posição estrutural da direção, e um único canto arredondado em qualquer lugar denuncia o resto.

Retratos da equipe são **retangulares em corte 4:5 (retrato)**. Avatar circular está proibido: é o gesto que mais rápido derruba este registro para o genérico.

Bordas, quando existem, são sempre `1px solid` e usam exclusivamente Oliva Seca (#717744) para divisão estrutural ou Salva Seca (#BCBD8B) para limite leve — a Nogueira nunca é usada como borda, porque ela significa "clicável" e uma caixa com borda de Nogueira mente sobre isso. O botão secundário é a única exceção deliberada: filete de 1px em Nogueira, fundo transparente, porque ele *é* clicável.

Imagens são exibidas em três proporções apenas — 3:2 (paisagem), 4:5 (retrato) e 1:1 — para que a grade de um projeto nunca fique irregular por acidente.

## Components

**Índice de projetos.** O componente central do site. Cada linha inteira é o link, não só o nome. O estado de hover preenche a linha com Salva Seca (#BCBD8B, 5,83:1 com a tinta) sem transição animada — a troca é instantânea, porque a sprezzatura não inclui *fade*. O número do projeto é de dois dígitos com zero à esquerda (01, 02 … 24) e não se reinicia a cada ano.

**Links em texto corrido.** Nogueira, com sublinhado de 1px deslocado 0,15em da linha de base (`text-underline-offset`). No hover, o texto vira tinta e o sublinhado permanece em Nogueira. Sem transição.

**Botões.** Existem exatamente dois: primário (campo sólido de Nogueira, texto em Calce, 5,12:1) e secundário (fantasma, filete de Nogueira, texto de Nogueira sobre o papel, 5,12:1). Ambos usam `label-caps` — caixa alta a 11px com entreletra. Botões não têm ícone. **No máximo um botão primário por tela**, e na maior parte das páginas não há nenhum.

**Figuras.** Imagem sobre passe-partout de Calce Sombreada, com 64px de folga em volta. Legenda logo abaixo em `caption`, no itálico da Garamond. Sem moldura, sem sombra, sem legenda sobreposta à imagem.

**Padrão fotográfico — parte do sistema, não recomendação.** Todo projeto entra com no mínimo uma imagem de 2000px no lado maior, corte consistente, exposição corrigida e sem marca d'água. Um projeto que não tem imagem à altura **não entra com imagem ruim**: entra com uma placa tipográfica — nome do projeto em `headline-lg` sobre Calce Sombreada, ocupando exatamente a proporção que a imagem ocuparia. Uma placa composta com cuidado lê como decisão; um JPEG de 800px lê como descuido, e desmonta a página inteira.

**Equipe.** Lista, não cartões. Nome em `smallcaps` (versaletes verdadeiros da Garamond, algarismos antigos), função abaixo em `label-caps-sm`, retrato opcional em corte 4:5. Sem ícones de rede social — links de contato são texto.

**Formulário de contato.** Campos com filete inferior de 1px em Salva Seca apenas — sem caixa, sem preenchimento, sem raio. Rótulo em `label-caps` acima do campo, nunca *placeholder* fazendo as vezes de rótulo. Estado de erro: filete inferior e mensagem em Cotto (#8A3D26, 6,65:1), com o texto dizendo o que fazer, não o que falhou.

**Foco de teclado.** Contorno de 2px em Nogueira com 2px de deslocamento, em todo elemento interativo. Esta é a única exceção à regra de "sem efeitos" e ela não é negociável — é acessibilidade, não decoração.

**Movimento.** Existe uma única transição no sistema: opacidade de 400ms com `ease-out` na primeira exibição de imagens já carregadas. **Nada mais anima** — nem hover, nem entrada de seção, nem rolagem, nem números. Sem *fade-up on scroll*, sem *parallax*, sem cursor customizado. Se o site precisar de movimento para ficar interessante, o problema é o trabalho exposto, não o site.

## Do's and Don'ts

- **Do** usar Nogueira (#766153) exclusivamente para o que é clicável. Se algo dessa cor não é link nem botão, é bug.
- **Don't** usar Oliva Seca (#717744) como cor de texto em nenhum tamanho — ela reprova em WCAG AA a 4,18:1. O lugar dela é o filete estrutural.
- **Do** criar ênfase com tamanho, espaço em branco e versaletes. **Don't** criar ênfase com cor ou com negrito — não existe peso 700 neste sistema.
- **Do** manter a margem externa de 96px no desktop mesmo quando parecer desperdício. É o material principal da direção, não sobra.
- **Don't** centralizar texto em nenhum lugar, em nenhum tamanho. O alinhamento é sempre à esquerda, com bandeira à direita.
- **Do** deixar as colunas 8–12 vazias. **Don't** preencher esse vazio com "conteúdo relacionado", newsletter ou depoimentos.
- **Don't** arredondar nenhum canto, e em especial não usar avatar circular na seção da equipe.
- **Don't** escrever `box-shadow` em lugar nenhum, exceto no contorno de foco de teclado.
- **Do** publicar uma placa tipográfica quando não houver foto à altura. **Don't** publicar foto de baixa resolução, mal cortada ou com exposição irregular — esta direção não sobrevive a isso.
- **Don't** adicionar animação de entrada, *fade-up on scroll*, *parallax* ou cursor customizado. A única transição permitida é a de opacidade das imagens.
- **Do** limitar o corpo de texto a 36rem. **Don't** deixar parágrafo em largura total.
- **Don't** introduzir uma segunda cor de destaque, nem cores de sucesso/aviso/informação. Sete tokens é o sistema inteiro.
- **Do** servir EB Garamond e Archivo localmente com `font-display: swap`. **Don't** carregar de CDN de terceiros num site que é só frontend.
- **Don't** usar ícones decorativos. Se um rótulo em caixa alta resolve, ele é a resposta.
