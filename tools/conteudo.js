/* Conteúdo do site, em um arquivo só.
   Este é o arquivo a editar para trocar os projetos de exemplo pelos reais —
   é exatamente o passo que a tela de alta fidelidade previa. Depois de mexer
   aqui, rode `node tools/build.mjs` para regerar as páginas. */

export const marca = 'NoFear';

export const notaRodape =
  'Portfólio de back-end e dados. Site estático, sem rastreamento.';

export const contato = {
  email: 'jose@nofear.dev',
  github: 'github.com/josemarques',
  githubHref: 'https://github.com/josemarques',
  linkedin: 'linkedin.com/in/josemarques',
  linkedinHref: 'https://linkedin.com/in/josemarques',
  cnpj: 'CNPJ 00.000.000/0001-00',
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
    slug: 'conciliacao-de-pagamentos',
    nome: 'Conciliação de pagamentos',
    disciplina: 'Back-end',
    origem: 'No Fear',
    stack: 'Go · Postgres',
    chips: ['Go', 'Postgres', 'Docker', 'Grafana'],
    ano: 2026,
    resumo:
      'Fecha o dia de quatro adquirentes e aponta a diferença antes de o financeiro procurar.',
    papel: 'Sozinho, do banco ao deploy',
    problema: [
      'O fechamento do dia era feito em quatro planilhas, uma por adquirente, comparadas à mão por duas pessoas. Quando a diferença aparecia, já era o dia seguinte e ninguém sabia de qual arquivo ela tinha vindo.',
    ],
    construcao: [
      'Um serviço que lê os arquivos dos quatro adquirentes, casa cada transação com o pedido e escreve a divergência em uma tabela só. O que não casa vai para uma tela de exceção, com o motivo escrito em português.',
      'A parte difícil não foi o casamento: foi o arquivo que chega fora de ordem, repetido, ou com o mesmo identificador para duas cobranças. A regra de desempate está documentada e foi escrita junto com o financeiro.',
    ],
    resultado: 'De quatro planilhas para uma tela',
    repo: 'github.com/josemarques/conciliacao',
    repoHref: 'https://github.com/josemarques/conciliacao',
    capa: 'Foto ou diagrama 3:2 — coloque uma imagem aqui',
    capaLegenda: 'Sem foto à altura, esta posição vira placa tipográfica.',
    prints: [
      {
        vaga: 'Print da tela de exceção',
        legenda: 'Tela de exceção: motivo em português, não código de erro.',
      },
      {
        vaga: 'Print do fechamento do dia',
        legenda: 'Fechamento do dia, com a diferença já apontada.',
      },
    ],
  },
  {
    numero: '02',
    slug: 'api-de-autenticacao',
    nome: 'API de autenticação',
    disciplina: 'Back-end',
    origem: 'Pessoal',
    stack: 'Node · Redis',
    chips: ['Node', 'Redis', 'Postgres'],
    ano: 2025,
    resumo:
      'Sessão, token e recuperação de senha para três produtos sobre a mesma base.',
    papel: 'Sozinho',
    problema: A_ESCREVER,
    construcao: A_ESCREVER,
    resultado: 'Uma base de identidade para três produtos',
    repo: 'github.com/josemarques/auth',
    repoHref: 'https://github.com/josemarques/auth',
  },
  {
    numero: '03',
    slug: 'fila-de-processamento-de-notas',
    nome: 'Fila de processamento de notas',
    disciplina: 'Back-end',
    origem: 'No Fear',
    stack: 'Python · SQS',
    chips: ['Python', 'SQS', 'Postgres'],
    ano: 2024,
    resumo:
      'Absorve pico de emissão sem perder documento, com retentativa e trilha de erro.',
    papel: 'Sozinho, do banco ao deploy',
    problema: A_ESCREVER,
    construcao: A_ESCREVER,
    resultado: 'Pico de emissão sem documento perdido',
    repo: 'github.com/josemarques/fila-notas',
    repoHref: 'https://github.com/josemarques/fila-notas',
  },
  {
    numero: '04',
    slug: 'servico-de-importacao-de-catalogo',
    nome: 'Serviço de importação de catálogo',
    disciplina: 'Back-end',
    origem: 'Faculdade',
    stack: 'Go · S3',
    chips: ['Go', 'S3', 'Postgres'],
    ano: 2023,
    resumo:
      'Lê planilha de fornecedor em formato livre e devolve produto pronto para publicar.',
    papel: 'Trabalho de faculdade, em dupla',
    problema: A_ESCREVER,
    construcao: A_ESCREVER,
    resultado: 'Planilha livre virando produto publicável',
    repo: 'github.com/josemarques/catalogo',
    repoHref: 'https://github.com/josemarques/catalogo',
  },
  {
    numero: '05',
    slug: 'pipeline-de-vendas',
    nome: 'Pipeline de vendas',
    disciplina: 'Dados',
    origem: 'No Fear',
    stack: 'Airflow · dbt',
    chips: ['Airflow', 'dbt', 'Postgres'],
    ano: 2026,
    resumo:
      'ETL diário de seis fontes para um modelo que o time comercial consulta sozinho.',
    papel: 'Sozinho, do banco ao deploy',
    problema: A_ESCREVER,
    construcao: A_ESCREVER,
    resultado: 'Seis fontes em um modelo só',
    repo: 'github.com/josemarques/pipeline-vendas',
    repoHref: 'https://github.com/josemarques/pipeline-vendas',
  },
  {
    numero: '06',
    slug: 'modelo-de-evasao-de-clientes',
    nome: 'Modelo de evasão de clientes',
    disciplina: 'Dados',
    origem: 'Faculdade',
    stack: 'Python · sklearn',
    chips: ['Python', 'sklearn', 'Postgres'],
    ano: 2025,
    resumo:
      'Aponta quem provavelmente cancela no mês seguinte; a lista chega por e-mail.',
    papel: 'Trabalho de faculdade',
    problema: A_ESCREVER,
    construcao: A_ESCREVER,
    resultado: 'A lista chega antes do cancelamento',
    repo: 'github.com/josemarques/evasao',
    repoHref: 'https://github.com/josemarques/evasao',
  },
  {
    numero: '07',
    slug: 'painel-de-indicadores-da-operacao',
    nome: 'Painel de indicadores da operação',
    disciplina: 'Dados',
    origem: 'Pessoal',
    stack: 'SQL · Metabase',
    chips: ['SQL', 'Metabase', 'Postgres'],
    ano: 2024,
    resumo:
      'Sete números que a diretoria olha de manhã, direto do banco, sem planilha no meio.',
    papel: 'Sozinho',
    problema: A_ESCREVER,
    construcao: A_ESCREVER,
    resultado: 'Sete números, sem planilha no meio',
    repo: 'github.com/josemarques/painel-operacao',
    repoHref: 'https://github.com/josemarques/painel-operacao',
  },
  {
    numero: '08',
    slug: 'consolidacao-de-bases-de-rh',
    nome: 'Consolidação de bases de RH',
    disciplina: 'Dados',
    origem: 'No Fear',
    stack: 'Python · Postgres',
    chips: ['Python', 'Postgres'],
    ano: 2023,
    resumo:
      'Une três cadastros com regras de duplicidade escritas junto com o time de pessoas.',
    papel: 'Sozinho, do banco ao deploy',
    problema: A_ESCREVER,
    construcao: A_ESCREVER,
    resultado: 'Três cadastros, uma pessoa por linha',
    repo: 'github.com/josemarques/rh-consolidado',
    repoHref: 'https://github.com/josemarques/rh-consolidado',
  },
];

/* Entregas da No Fear — os projetos cujo cliente é a empresa. */
export const entregasNoFear = projetos.filter((p) => p.origem === 'No Fear');

/* O que a No Fear faz — as três linhas da tela 3g. */
export const servicosNoFear = [
  {
    numero: '01',
    nome: 'Sistemas internos',
    texto:
      'Cadastro, aprovação e relatório para quem hoje trabalha em três abas abertas ao mesmo tempo.',
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
    nome: 'Estudo em nanquim',
    midia: 'Arte',
    ano: '2026',
    proporcao: '3 / 2',
    vaga: 'Arte — 3:2',
    legenda: 'Doze folhas feitas em três noites, sem esboço a lápis.',
  },
  {
    tipo: 'imagem',
    nome: 'Curta de fim de semana',
    midia: 'Vídeo · 2:14',
    ano: '2:14 · 2025',
    proporcao: '3 / 2',
    vaga: 'Vídeo — quadro 3:2',
    legenda: 'Gravado em um sábado, montado no domingo.',
  },
  {
    tipo: 'imagem',
    nome: 'Ensaio na chuva',
    midia: 'Foto',
    ano: '2025',
    proporcao: '4 / 5',
    vaga: 'Foto — 4:5',
    legenda: 'Filme preto e branco, revelado em casa.',
  },
  {
    tipo: 'placa',
    nome: 'Faixa gravada em casa',
    midia: 'Áudio',
    ano: '3:41 · 2024',
    meta: 'Áudio · 3:41 · 2024',
    proporcao: '1 / 1',
    duracao: '3:41',
    legenda: 'Áudio não tem imagem: vira placa tipográfica.',
  },
];
