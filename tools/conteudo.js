/* Conteúdo do site, em um arquivo só.
   Este é o arquivo a editar para trocar os projetos de exemplo pelos reais —
   é exatamente o passo que a tela de alta fidelidade previa. Depois de mexer
   aqui, rode `node tools/build.mjs` para regerar as páginas. */

export const marca = 'NoFear';

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
    numero: '03',
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
    numero: '04',
    slug: 'data-warehouse-de-e-commerce',
    nome: 'Data warehouse de e-commerce',
    disciplina: 'Dados',
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
        vaga: 'Print do modelo dimensional',
        legenda: 'O fato de vendas e as chaves que chegam nele.',
      },
      {
        vaga: 'Print de uma consulta e seu resultado',
        legenda: 'Faturamento por período, sem JOIN escrito na hora.',
      },
    ],
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
