/* Conteúdo do site, em um arquivo só.
   Este é o arquivo a editar para trocar os projetos de exemplo pelos reais —
   é exatamente o passo que a tela de alta fidelidade previa. Depois de mexer
   aqui, rode `node tools/build.mjs` para regerar as páginas. */

export const marca = 'NoFear';

/* No rodapé a marca aparece com espaço: lá ela é assinatura, não logotipo. */
export const marcaRodape = 'No Fear';

/* Ficha de stack da home: rótulo e ferramentas, uma linha por grupo. */
export const stack = [
  ['Linguagens', 'Python · SQL'],
  ['Dados', 'Postgres · Pandas · Power BI · Numpy'],
  ['Frameworks', 'FastAPI · Spring Boot'],
  ['Infraestrutura', 'Docker · Caddy · Linux (VPS)'],
];

/* Retrato da home. */
export const retrato = {
  src: 'assets/img/jose-marques.jpg',
  alt: 'José Marques, de jaqueta preta sobre camiseta branca, em pé num corredor de shopping.',
  ratio: '4 / 5',
  largura: 1200,
  altura: 1500,
};

export const notaRodape =
  'Portfólio de back-end e dados. Site estático, sem rastreamento.';

export const contato = {
  email: 'josebermarques@gmail.com',
  github: 'github.com/josem4rquez',
  githubHref: 'https://github.com/josem4rquez',
  linkedin: 'linkedin.com/in/josé-marques-myperfil',
  linkedinHref: 'https://www.linkedin.com/in/josé-marques-myperfil',
  cnpj: '', // sai do rodapé enquanto for número de exemplo
};

/* Ordem e rótulos vêm do cabeçalho da tela 3a; o `id` liga a página ao item
   atual, que é o único da navegação que aparece em tinta e não em Nogueira. */
export const navegacao = [
  { id: 'home', label: 'Quem sou eu', href: 'index.html' },
  { id: 'projetos', label: 'Projetos', href: 'projetos.html' },
  { id: 'nofear', label: 'No Fear', href: 'no-fear.html' },
  { id: 'colecao', label: 'Coleção de Criações', href: 'colecao.html' },
  { id: 'contato', label: 'Contato', href: 'contato.html' },
];

/* Texto ainda por escrever. Fica explícito na página em vez de virar um
   estudo de caso inventado — a ficha já está diagramada e espera o relato. */
const A_ESCREVER = [
  'Este projeto ainda não tem o relato escrito. A ficha está diagramada e espera o texto: o que estava quebrado antes, o que foi construído e onde a coisa ficou difícil.',
];

export const projetos = [
  {
    numero: '01',
    slug: 'gestao-de-clinica-odontologica',
    nome: 'Gestão de clínica odontológica',
    disciplina: 'Back-end',
    origem: 'No Fear',
    stack: 'FastAPI · PostgreSQL',
    chips: [
      'FastAPI',
      'PostgreSQL 16',
      'SQLAlchemy',
      'Alembic',
      'React',
      'Vite',
      'Tailwind',
      'Docker',
      'Caddy',
    ],
    nota: '21 migrações versionadas. Tudo em Docker, atrás do Caddy com TLS automático, em VPS Linux.',
    ano: 2026,
    resumo:
      'Agenda, prontuário e financeiro de uma clínica inteira, com o isolamento no banco.',
    papel: 'Feito em Equipe: 2 Backend e 2 Frontend',
    problema: [
      'Agenda, prontuário e financeiro no mesmo lugar — com registro clínico que não se edita e dado que não passa de uma clínica para a outra.',
    ],
    construcao: [
      'Software de gestão em produção: agenda por cadeira, prontuário, odontograma, orçamento, financeiro e equipe.',
      '**Multi-tenancy no banco.** Cada clínica é um tenant, isolada por Row Level Security do PostgreSQL — não por WHERE.',
      '**Prontuário append-only.** Um gatilho impede editar ou apagar; corrigir é escrever a versão seguinte.',
      '**Permissão por papel.** Cinco papéis. A interface esconde; quem barra é a API, com 403.',
    ],
    resultado: 'Em produção, da agenda ao caixa',
    /* Software de cliente: sem repositório público. Sem href, o bloco Código
       vira texto em vez de link morto. */
    repo: 'Repositório privado do cliente.',
    repoHref: '',
    capaImg: {
      src: 'assets/img/clinica-inicio.png',
      alt: 'Tela de início do sistema: saudação do dia, próximos atendimentos, acessos rápidos e mural da equipe.',
      ratio: '1911 / 961',
      largura: 1911,
      altura: 961,
    },
    capaLegenda: 'Início: os próximos atendimentos, o mural da equipe e o atalho para onde se voltou por último.',
    prints: [
      {
        img: {
          src: 'assets/img/clinica-odontograma.png',
          alt: 'Odontograma do paciente: arcada superior e inferior numeradas, com a legenda de estados clínicos.',
          ratio: '1 / 1',
          largura: 1296,
          altura: 1296,
        },
        legenda: 'Odontograma: o estado de cada dente.',
      },
      {
        img: {
          src: 'assets/img/clinica-dashboard.png',
          alt: 'Dashboard do sistema: faturamento, gastos, saldo, passivo clínico e itens pendentes do período.',
          ratio: '1 / 1',
          largura: 1305,
          altura: 1305,
        },
        legenda: 'Dashboard: o que entrou e o que falta executar.',
      },
    ],
  },
  {
    numero: '02',
    slug: 'data-warehouse-de-e-commerce',
    nome: 'Data warehouse de e-commerce',
    disciplina: 'Back-end',
    origem: 'Pessoal',
    stack: 'MySQL · SQL',
    chips: ['MySQL', 'SQL'],
    ano: 2026,
    resumo:
      'Venda transacional vira esquema estrela: staging, oito dimensões e um fato consultável.',
    papel: 'Sozinho, da modelagem ao carregamento',
    problema: [
      'Dado de venda nasce transacional: para saber faturamento, venda por produto, por cliente, por forma de pagamento ou por período, cada pergunta vira um JOIN escrito na hora.',
    ],
    construcao: [
      'Um data warehouse em esquema estrela: cinco tabelas de staging, oito dimensões e o fato de vendas.',
      '**ETL em camadas.** Gerador SQL, staging, transformação, dimensões, fato — nessa ordem. Cada etapa é um script versionado, e o dado bruto fica intacto na camada de entrada.',
      '**Chave substituta em toda dimensão.** A chave do sistema de origem não vira chave do modelo, então mudança de cadastro não reescreve histórico de venda.',
    ],
    resultado: 'Cinco perguntas de negócio numa consulta só',
    repo: 'github.com/josem4rquez/ecommerce_dw',
    repoHref: 'https://github.com/josem4rquez/ecommerce_dw',
    capaImg: {
      src: 'assets/img/ecommerce-dw-estrela.png',
      alt: 'Diagrama do esquema estrela: fato_vendas ao centro, ligado às dimensões cliente, produto, vendedor, categoria, data, pagamento, fornecedor e estoque, com as tabelas de staging à direita.',
      ratio: '3 / 2',
      largura: 1436,
      altura: 957,
    },
    capaLegenda: 'Um fato de vendas ao centro, oito dimensões em volta.',
    prints: [
      {
        img: {
          src: 'assets/img/ecommerce-dw-modelo.png',
          alt: 'Modelo físico no MySQL Workbench: a tabela fato_vendas com as oito chaves estrangeiras e as dimensões em volta, com tipo de cada coluna.',
          ratio: '1 / 1',
          largura: 972,
          altura: 972,
        },
        legenda: 'O modelo físico: o fato de vendas e as chaves que chegam nele.',
      },
      {
        img: {
          src: 'assets/img/ecommerce-dw-notion.png',
          alt: 'Página do projeto no Notion, com links para visão geral, backlog, modelo de dados, dicionário de dados, ETL/cargas e integração com Power BI.',
          ratio: '1 / 1',
          largura: 908,
          altura: 908,
        },
        legenda: 'A documentação: visão geral, backlog, modelo, dicionário e cargas.',
      },
    ],
  },
  {
    numero: '03',
    slug: 'api-de-cadastro-de-clientes',
    nome: 'API de cadastro de clientes',
    disciplina: 'Back-end',
    origem: 'Estudo',
    stack: 'Java · Spring Boot',
    chips: [
      'Java 23',
      'Spring Boot 3.4',
      'Spring Data JPA',
      'H2',
      'OpenFeign',
      'Swagger',
      'Maven',
    ],
    ano: 2025,
    resumo:
      'CRUD de clientes em Spring Boot, com e-mail único, documentação Swagger e cliente Feign.',
    papel: 'Sozinho, projeto de bootcamp',
    problema: [
      'Aprender Spring Boot montando a espinha inteira de uma API REST: controller, serviço, repositório, documentação — e não só o caminho feliz do CRUD.',
    ],
    construcao: [
      'Uma API de cadastro de clientes em camadas: controller, service, repository e DTO, sobre Spring Data JPA com banco H2 em memória.',
      '**Regra no serviço, não no controller.** O e-mail é único: a criação é bloqueada se ele já existir, e quem decide isso é a camada de serviço.',
      '**Documentação que vem do código.** springdoc-openapi publica o Swagger UI a partir das próprias assinaturas, então a doc não envelhece separada da API.',
      '**Cliente HTTP declarativo.** OpenFeign para consumir serviço externo por interface, sem escrever chamada na mão.',
    ],
    resultado: 'CRUD documentado, com e-mail único garantido no serviço',
    repo: 'github.com/josem4rquez/projeto-informacoes',
    repoHref: 'https://github.com/josem4rquez/projeto-informacoes',
    capaImg: {
      src: 'assets/img/api-clientes-swagger.png',
      alt: 'Swagger UI da API: cliente-controller com GET, POST, PUT e DELETE em /api/clientes, home-controller e o schema Cliente.',
      ratio: '1445 / 963',
      largura: 1445,
      altura: 963,
    },
    capaLegenda: 'A documentação sai do código: Swagger UI gerado pelas assinaturas.',
    prints: [
      {
        img: {
          src: 'assets/img/api-clientes-post.png',
          alt: 'Swagger UI executando POST /api/clientes com nome e e-mail no corpo; a resposta é 201 com o cliente criado, já com id.',
          ratio: '1 / 1',
          largura: 1135,
          altura: 1135,
        },
        legenda: 'POST /api/clientes: 201 e o cliente criado de volta, com id.',
      },
      {
        img: {
          src: 'assets/img/api-clientes-estrutura.png',
          alt: 'Árvore de pastas do projeto: src/main/java com controller, dto, entity, openfeign, repository e service, mais resources, test e pom.xml.',
          ratio: '1 / 1',
          largura: 760,
          altura: 760,
        },
        legenda: 'Controller, service, repository e DTO, cada um no seu lugar.',
      },
    ],
  },
  {
    numero: '04',
    slug: 'dashboard-de-compras',
    nome: 'Dashboard de compras',
    disciplina: 'Dados',
    origem: 'Estudo',
    stack: 'Python · Streamlit',
    chips: ['Python', 'Pandas', 'Streamlit'],
    ano: 2026,
    resumo:
      'Painel de compras com filtro que recalcula na hora: faturamento por loja, vendedor e produto.',
    papel: 'Sozinho, do dataset ao painel',
    problema: [
      'Faturamento por loja, vendedor e produto — sem ferramenta de BI paga nem planilha atualizada à mão.',
    ],
    construcao: [
      'Painel em Streamlit sobre três bases cruzadas em Pandas: compras, produtos e lojas.',
      '**Filtro que refaz a conta.** Cada filtro recalcula os agregados, não recorta tabela pronta.',
      '**Base gerada por script.** O dataset sai do próprio repositório, então o painel roda em qualquer máquina.',
    ],
    resultado: 'Faturamento por loja, vendedor e produto numa tela',
    repo: 'github.com/josem4rquez/dashboard_compras',
    repoHref: 'https://github.com/josem4rquez/dashboard_compras',
    capaImg: {
      src: 'assets/img/dashboard-compras-tabela.png',
      alt: 'Painel em Streamlit: à esquerda, índice loja, coluna produto, valor comissao e métrica soma; à direita, a tabela dinâmica por loja e produto, com linha de total geral.',
      ratio: '1466 / 400',
      largura: 1466,
      altura: 400,
    },
    capaLegenda: 'Escolhe índice, coluna e métrica à esquerda; a tabela refaz a soma.',
    prints: [
      {
        img: {
          src: 'assets/img/dashboard-compras-numeros.png',
          alt: 'Painel de números do período: valor e quantidade de compras no total, na principal loja (Curitiba) e do principal vendedor, com a comissão.',
          ratio: '1 / 1',
          largura: 700,
          altura: 700,
        },
        legenda: 'Escolhido o período, o painel aponta a loja e o vendedor do topo.',
      },
      {
        img: {
          src: 'assets/img/dashboard-compras-nova.png',
          alt: 'Aviso "Compra adicionada com sucesso!" acima da tabela de compras, com a linha nova de id 2000 no fim.',
          ratio: '1 / 1',
          largura: 724,
          altura: 724,
        },
        legenda: 'Compra nova gravada: a linha entra no fim da tabela.',
      },
    ],
  },
  {
    numero: '05',
    slug: 'dashboard-de-vendas-power-bi',
    nome: 'Dashboard de vendas em Power BI',
    disciplina: 'Dados',
    origem: 'Estudo',
    stack: 'Power BI · Power Query',
    chips: ['Power BI', 'Power Query', 'Excel/CSV'],
    ano: 2026,
    resumo:
      'Relatório de vendas em Power BI: total, mapa e ranking por país, com o período filtrável.',
    papel: 'Sozinho, do ETL ao relatório',
    problema: [
      'Base de vendas crua não responde por país nem por período: cada pergunta vira uma tabela dinâmica nova.',
    ],
    construcao: [
      'Relatório em Power BI com duas páginas — vendas e quantidade — sobre a base tratada no Power Query.',
      '**ETL antes do gráfico.** Limpeza, transformação e padronização no Power Query, não no visual.',
    ],
    resultado: 'Vendas por país e por período, numa página',
    repo: 'github.com/josem4rquez/dashboard_sales_powerbi',
    repoHref: 'https://github.com/josem4rquez/dashboard_sales_powerbi',
    capaImg: {
      src: 'assets/img/powerbi-sales-report.png',
      alt: 'Página Sales Report do relatório: soma de UnitPrice e de Quantity, filtro de data, mapa por país e ranking de países por valor.',
      ratio: '1477 / 825',
      largura: 1477,
      altura: 825,
    },
    capaLegenda: 'Vendas: os totais, o mapa e o ranking por país.',
    prints: [
      {
        img: {
          src: 'assets/img/powerbi-quantity-report.png',
          alt: 'Página Quantity Report: tabela de quantidade e valor por país, indicador contra a meta, gráfico por país e rosca de participação.',
          ratio: '1476 / 826',
          largura: 1476,
          altura: 826,
        },
        legenda: 'Quantidade: a mesma base pela outra pergunta, contra a meta.',
      },
    ],
  },
  {
    numero: '06',
    slug: 'relatorio-de-vendas-e-lucro-power-bi',
    nome: 'Relatório de vendas e lucro em Power BI',
    disciplina: 'Dados',
    origem: 'Estudo',
    stack: 'Power BI · DAX',
    chips: ['Power BI', 'DAX', 'ETL'],
    ano: 2026,
    resumo:
      'Vendas, desconto e custo numa página; o lucro aberto por ano, país, segmento e trimestre nas outras.',
    papel: 'Sozinho — desafio de projeto da DIO',
    problema: [
      'Saber de onde vem o lucro — por segmento, por país e por trimestre — sem refazer tabela dinâmica a cada pergunta.',
    ],
    construcao: [
      'Relatório em Power BI com três páginas: vendas do período, lucro detalhado e lucro por segmento.',
      '**Medidas em DAX.** Total de vendas, unidades, desconto e custo saem de medidas, não de coluna calculada na base.',
      '**Do geral ao detalhe.** A árvore de decomposição abre o lucro por ano e por país; a cascata mostra o trimestre que puxou o ano.',
    ],
    resultado: 'Do total de vendas ao lucro por segmento',
    repo: 'github.com/josem4rquez/dashboard_powerbi',
    repoHref: 'https://github.com/josem4rquez/dashboard_powerbi',
    capaImg: {
      src: 'assets/img/powerbi-dio-vendas.png',
      alt: 'Página Sales Report: cartões de total de vendas, unidades, descontos e custo; série de vendas por mês; e quebras por segmento, produto e país.',
      ratio: '1413 / 783',
      largura: 1413,
      altura: 783,
    },
    capaLegenda: 'Vendas do período: os totais, a série mensal e as quebras.',
    prints: [
      {
        img: {
          src: 'assets/img/powerbi-dio-lucro.png',
          alt: 'Página de lucro detalhado: árvore de decomposição do lucro por ano e por país, treemap por segmento e cascata por trimestre.',
          ratio: '1400 / 769',
          largura: 1400,
          altura: 769,
        },
        legenda: 'O lucro aberto por ano, país e trimestre.',
      },
      {
        img: {
          src: 'assets/img/powerbi-dio-segmento.png',
          alt: 'Página de lucro por segmento: gráfico de pizza com a participação de cada segmento e dois mapas, de vendas e de lucro por país.',
          ratio: '1396 / 773',
          largura: 1396,
          altura: 773,
        },
        legenda: 'Participação por segmento, e o mesmo dado no mapa.',
      },
    ],
  },
  {
    numero: '07',
    slug: 'puceats',
    nome: 'PucEats',
    disciplina: 'Front-end',
    origem: 'Faculdade',
    stack: 'HTML · CSS · JS',
    chips: ['HTML', 'CSS', 'JavaScript', 'localStorage'],
    ano: 2026,
    resumo:
      'Delivery do campus da PUC: catálogo, busca em tempo real e carrinho que sobrevive ao reload.',
    papel: 'Em equipe, cinco pessoas',
    problema: [
      'Um delivery inteiro rodando no navegador: buscar, montar o carrinho, fechar o pedido. Sem framework, por escolha — o exercício era DOM, evento e armazenamento local na mão.',
    ],
    construcao: [
      'Quatro páginas: a home com catálogo e recomendações, o cardápio em modal, a listagem completa com busca e a autenticação.',
      '**Carrinho no localStorage.** O pedido sobrevive ao reload da página: a Web Storage API fazendo o trabalho que seria de um back-end.',
      '**Busca em tempo real.** A lista filtra conforme a pessoa digita, sem ida ao servidor.',
      '**IA no processo.** Parte do código e das telas saiu com apoio de IA.',
      'Feito com Rauhan Kniess, Eduardo Lopes, Gabriel Men e Ruan Eduardo Yamaguchi.',
    ],
    resultado: 'Pedido montado e mantido, sem back-end',
    repo: 'github.com/josem4rquez/PucEats',
    repoHref: 'https://github.com/josem4rquez/PucEats',
    capaImg: {
      src: 'assets/img/puceats-home.png',
      alt: 'Home do PUC Eats: barra de busca com filtro, chamada "Coma bem, estude melhor", botões para restaurantes e promoções, e os números de pratos, avaliação e tempo de entrega.',
      ratio: '1438 / 769',
      largura: 1438,
      altura: 769,
    },
    capaLegenda: 'A home: busca no topo, promoções e o tempo até o campus.',
    prints: [
      {
        img: {
          src: 'assets/img/puceats-cardapio.png',
          alt: 'Página de um restaurante: capa com nota, distância e tempo, abas de categoria, busca no cardápio e cards de item com preço e botão de adicionar.',
          ratio: '1394 / 929',
          largura: 1394,
          altura: 929,
        },
        legenda: 'O cardápio: abas por categoria, busca própria, item a item.',
      },
      {
        img: {
          src: 'assets/img/puceats-auth.png',
          alt: 'Tela de acesso com abas Entrar e Criar conta, campos de e-mail universitário e senha, lembrar de mim e recuperação.',
          ratio: '1268 / 845',
          largura: 1268,
          altura: 845,
        },
        legenda: 'Entrar ou criar conta, com e-mail da universidade.',
      },
    ],
  },
  {
    numero: '08',
    slug: 'esse-site',
    nome: 'Esse site :)',
    disciplina: 'Front-end',
    origem: 'Pessoal',
    stack: 'HTML · CSS · Node',
    chips: ['HTML', 'CSS', 'JavaScript', 'Node'],
    ano: 2026,
    resumo:
      'O portfólio que você está lendo: design system próprio, gerador em Node, zero dependência em runtime.',
    papel: 'Sozinho, do sistema visual ao deploy',
    problema: [
      'Doze páginas com o mesmo cabeçalho, o mesmo rodapé e o mesmo índice — e nenhuma vontade de repetir HTML à mão.',
    ],
    construcao: [
      'Site estático com design system próprio: tokens de cor, tipografia, espaçamento e uma grade de 12 colunas, tudo em CSS puro.',
      '**O conteúdo mora num arquivo só.** Um gerador em Node lê o conteudo.js e escreve as páginas; trocar um projeto é editar um objeto.',
      '**Nada em tempo de execução.** Sem framework, sem rastreamento: abrir o index.html no navegador funciona.',
      '**Feito com IA.** O design system, o gerador e as fichas foram escritos com Claude Code, usando as Skills dele. O que entra, o que sai e o texto final são decisão minha.',
    ],
    resultado: 'Doze páginas a partir de um arquivo de conteúdo',
    repo: 'github.com/josem4rquez/portfolio',
    repoHref: 'https://github.com/josem4rquez/portfolio',
    capaImg: {
      src: 'assets/img/esse-site-home.png',
      alt: 'Home do portfólio: nome em display, uma linha de apresentação, dois parágrafos, a ficha de stack e o retrato à direita.',
      ratio: '1141 / 986',
      largura: 1141,
      altura: 986,
    },
    capaLegenda: 'A home: margem larga, a ficha de stack e uma foto.',
    prints: [
      {
        img: {
          src: 'assets/img/esse-site-projetos.png',
          alt: 'Índice de projetos: seções por disciplina, cada linha com número, nome, resumo, origem e ano.',
          ratio: '1170 / 976',
          largura: 1170,
          altura: 976,
        },
        legenda: 'O índice: número, nome, disciplina, ano.',
      },
      {
        img: {
          src: 'assets/img/esse-site-nofear.png',
          alt: 'Página da No Fear: título, parágrafo de apresentação e a lista numerada do que a empresa faz.',
          ratio: '1177 / 956',
          largura: 1177,
          altura: 956,
        },
        legenda: 'A página da empresa, com a mesma grade e os mesmos filetes.',
      },
    ],
  },
];

/* Entregas da No Fear — os projetos cujo cliente é a empresa. */
export const entregasNoFear = projetos.filter((p) => p.origem === 'No Fear');

/* O que a No Fear faz — as três linhas da tela 3g. */
export const servicosNoFear = [
  {
    numero: '01',
    nome: 'Sistemas de gestão',
    texto:
      'Cadastro, aprovação e rotina de operação para quem hoje trabalha em três abas abertas ao mesmo tempo.',
  },
  {
    numero: '02',
    nome: 'Integrações e APIs',
    texto:
      'Ligação entre ERP, banco e loja, com retentativa e registro de tudo que passou.',
  },
  {
    numero: '03',
    nome: 'Dados e relatórios',
    texto:
      'Um lugar só com o número certo, atualizado sozinho, no formato que a diretoria já usa.',
  },
];

/* Coleção de Criações. `tipo: 'placa'` é a resposta do sistema quando a peça
   não tem imagem — áudio, por exemplo, vira placa tipográfica. */
export const colecao = [
  {
    tipo: 'imagem',
    nome: 'Prêmio de melhor apresentação',
    midia: 'Foto',
    ano: '2026',
    proporcao: '3 / 4',
    img: {
      src: 'assets/img/premio-apresentacao.jpg',
      alt: 'Quatro amigos sorrindo na sala de aula, segurando o certificado de reconhecimento da universidade.',
      ratio: '3 / 4',
      largura: 1200,
      altura: 1600,
    },
    legenda: 'Quando eu e meus amigos ganhamos esse prêmio na disciplina de Experiência Criativa.',
  },
  {
    tipo: 'imagem',
    nome: 'Meu último GCEM em Paranaguá',
    midia: 'Foto',
    ano: '',
    proporcao: '4 / 3',
    img: {
      src: 'assets/img/gcem-paranagua.jpg',
      alt: 'Selfie de um grupo grande de amigos amontoados na sala, todos sorrindo para a câmera.',
      ratio: '4 / 3',
      largura: 1600,
      altura: 1200,
    },
    legenda: 'Dias antes de me mudar para Curitiba.',
  },
  {
    tipo: 'imagem',
    nome: 'Viagem para Itapoá',
    midia: 'Foto',
    ano: '',
    proporcao: '3 / 4',
    img: {
      src: 'assets/img/itapoa-praia.jpg',
      alt: 'Caranguejo na areia, de frente para a câmera; ao fundo, chinelos, uma esteira listrada, o mar e uma ilha no horizonte.',
      ratio: '3 / 4',
      largura: 1200,
      altura: 1600,
    },
    legenda: 'Praia mais linda que eu já vi.',
  },
  {
    tipo: 'imagem',
    nome: 'Com os amigos em Gaspar',
    midia: 'Foto',
    ano: '2025',
    proporcao: '960 / 1280',
    img: {
      src: 'assets/img/gaspar-amigos.jpg',
      alt: 'Selfie no espelho de um quarto de hotel, com o grupo de amigos posando em duas fileiras.',
      ratio: '960 / 1280',
      largura: 960,
      altura: 1280,
    },
    legenda: '',
  },
  {
    tipo: 'imagem',
    nome: 'Primeira vez jogando tênis',
    midia: 'Foto',
    ano: '2026',
    proporcao: '3 / 4',
    img: {
      src: 'assets/img/tenis-primeira-vez.jpg',
      alt: 'Raquete de tênis segura na mão, vista de cima, sobre a quadra de saibro.',
      ratio: '3 / 4',
      largura: 1200,
      altura: 1600,
    },
    legenda: 'Horas de pesquisa apenas para aprender a jogar.',
  },
  {
    tipo: 'imagem',
    nome: 'Viagem de formatura para Gaspar',
    midia: 'Foto',
    ano: '2025',
    proporcao: '3 / 4',
    img: {
      src: 'assets/img/gaspar-formatura.jpg',
      alt: 'Saguão de hotel visto de baixo: varandas em vãrios andares, pipas de festa junina penduradas do teto e uma igrejinha de cenãrio no chão.',
      ratio: '3 / 4',
      largura: 1200,
      altura: 1600,
    },
    legenda: 'Nunca comi tão bem.',
  },
  {
    tipo: 'imagem',
    nome: 'Jogo do Brasil',
    midia: 'Foto',
    ano: '',
    proporcao: '3 / 4',
    img: {
      src: 'assets/img/jogo-do-brasil.jpg',
      alt: 'Turma de amigos amontoada na sala de um apartamento, de camisa amarela, posando para a selfie durante o jogo.',
      ratio: '3 / 4',
      largura: 1200,
      altura: 1600,
    },
    legenda: 'Nunca fui tão iludido.',
  },
  {
    tipo: 'imagem',
    nome: 'Primeira vez entrando na biblioteca da PUC',
    midia: 'Foto',
    ano: '',
    proporcao: '3 / 4',
    img: {
      src: 'assets/img/puc-biblioteca.jpg',
      alt: 'Vitrais coloridos cobrindo as paredes altas da biblioteca, vistos de cima, com as fileiras de mesas de estudo lá embaixo.',
      ratio: '3 / 4',
      largura: 1200,
      altura: 1600,
    },
    legenda: 'Esses detalhes de vidro são incríveis.',
  },
  {
    tipo: 'placa',
    nome: 'Solo de Guitarra que Toquei',
    midia: 'Áudio',
    ano: '0:31 · 2026',
    meta: 'Áudio · 0:31 · 2026',
    proporcao: '1 / 1',
    duracao: '0:31',
    audio: 'assets/audio/faixa-em-casa.m4a',
    legenda: 'Solo da Música: Colossenses e Suas Linhas de Amor',
  },
  {
    tipo: 'imagem',
    nome: 'Mais uma Porsche',
    midia: 'Foto',
    ano: '',
    proporcao: '3 / 4',
    img: {
      src: 'assets/img/porsche-puc.jpg',
      alt: 'Porsche 911 azul estacionado no pátio de pedra da universidade, entre dois carros comuns, no fim da tarde.',
      ratio: '3 / 4',
      largura: 1200,
      altura: 1600,
    },
    legenda: 'Eu tenho um pequeno hiperfoco em Porsches.',
  },
  {
    tipo: 'imagem',
    nome: 'Meu setup de trabalho',
    midia: 'Foto',
    ano: '',
    proporcao: '3 / 4',
    img: {
      src: 'assets/img/setup-trabalho.jpg',
      alt: 'Mesa com dois monitores empilhados, teclado mecânico claro, mouse e caixas de som, iluminados de azul no escuro.',
      ratio: '3 / 4',
      largura: 1200,
      altura: 1600,
    },
    legenda: '',
  },
  {
    tipo: 'imagem',
    nome: 'The Send 2026, com os amigos',
    midia: 'Foto',
    ano: '2026',
    proporcao: '3 / 4',
    img: {
      src: 'assets/img/the-send-amigos.jpg',
      alt: 'Quatro amigos caminhando de costas por uma calçada de pedra, em dia de sol.',
      ratio: '3 / 4',
      largura: 1200,
      altura: 1600,
    },
    legenda: '',
  },
  {
    tipo: 'imagem',
    nome: 'Visita à exposição de Monet em Curitiba',
    midia: 'Foto',
    ano: '',
    proporcao: '9 / 16',
    img: {
      src: 'assets/img/monet-curitiba.jpg',
      alt: 'Quadro de Monet, mulher com sombrinha, em moldura dourada sobre parede verde-azulada na sala da exposição.',
      ratio: '9 / 16',
      largura: 720,
      altura: 1280,
    },
    legenda: 'Eu AMO as pinturas de Monet, Van Gogh e Michelangelo.',
  },
  {
    tipo: 'imagem',
    nome: 'Jantar de formatura do ensino médio',
    midia: 'Foto',
    ano: '',
    proporcao: '1280 / 960',
    img: {
      src: 'assets/img/formatura-jantar.jpg',
      alt: 'Selfie da turma de formatura, todos de traje social, amontoados para caber no quadro.',
      ratio: '1280 / 960',
      largura: 1280,
      altura: 960,
    },
    legenda: '',
  },
  {
    tipo: 'imagem',
    nome: 'Mag The First',
    midia: 'Arte',
    ano: '2026',
    proporcao: '4 / 5',
    destaque: true,
    img: {
      src: 'assets/img/mag-the-first.jpg',
      alt: 'Cartaz roxo com o título THE FIRST em letras brancas acesas, MAG CURITIBA acima e a data do encontro abaixo.',
      ratio: '4 / 5',
      largura: 1200,
      altura: 1500,
    },
    legenda: 'Arte que fiz para o primeiro culto de jovens da minha igreja.',
  },
];
