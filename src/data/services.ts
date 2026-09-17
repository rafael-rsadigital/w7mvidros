export type Service = {
  slug: string;
  path: string;
  name: string;
  shortName: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
  highlights: { title: string; text: string }[];
  applications: string[];
  faqs: { question: string; answer: string }[];
  relatedRegions: { name: string; href: string }[];
};

export const services: Service[] = [
  {
    slug: 'esquadrias-de-aluminio', path: '/esquadrias-aluminio/', name: 'Esquadrias de Alumínio', shortName: 'Esquadrias',
    title: 'Esquadrias de Alumínio Sob Medida em São José dos Campos | W7M Designer',
    description: 'Fabricação e instalação de esquadrias de alumínio sob medida em São José dos Campos. Portas, janelas, linhas Gold e Suprema para projetos residenciais e comerciais.',
    eyebrow: 'Esquadrias sob medida',
    intro: 'Esquadrias de alumínio que combinam precisão, acabamento e funcionalidade.',
    image: '/img/servicos/esquadrias-premium-sjc.webp', imageAlt: 'Esquadrias de alumínio sob medida em São José dos Campos',
    paragraphs: [
      'A W7M Designer fabrica e instala esquadrias de alumínio sob medida para casas, apartamentos, condomínios e espaços comerciais em São José dos Campos e região. A solução é definida a partir do vão, do tipo de abertura, do uso do ambiente e do acabamento desejado.',
      'Portas e janelas precisam ser especificadas para o projeto real. Por isso, o atendimento considera medidas, circulação, ventilação, entrada de luz e integração com a arquitetura, evitando escolher um modelo apenas pela aparência de uma foto.',
      'O orçamento pode começar pelo WhatsApp com fotos, medidas aproximadas e informações sobre a obra. Quando necessário, a equipe orienta a medição e os próximos passos para uma proposta mais precisa.'
    ],
    highlights: [
      { title: 'Sob medida', text: 'Cada esquadria é avaliada de acordo com o vão e as condições do projeto.' },
      { title: 'Linhas premium', text: 'Opções como Gold e Suprema podem ser especificadas conforme a necessidade do ambiente.' },
      { title: 'Instalação orientada', text: 'O processo considera acesso, preparação do local e acabamento final.' }
    ],
    applications: ['Portas de alumínio', 'Janelas de alumínio', 'Grandes vãos', 'Esquadrias para reformas', 'Projetos residenciais', 'Projetos comerciais'],
    faqs: [
      { question: 'A W7M fabrica esquadrias de alumínio sob medida?', answer: 'Sim. A especificação considera as medidas do vão, o tipo de abertura, o uso do ambiente e o acabamento desejado.' },
      { question: 'Quais linhas de esquadrias estão disponíveis?', answer: 'A empresa trabalha com soluções e linhas como Gold e Suprema, sempre de acordo com a aplicação e a disponibilidade do projeto.' },
      { question: 'Vocês atendem apartamentos e condomínios?', answer: 'Sim. O atendimento pode considerar as regras de acesso, medição e instalação de cada condomínio.' },
      { question: 'Como solicitar um orçamento de esquadrias?', answer: 'Envie bairro, tipo de imóvel, fotos do vão, medidas aproximadas e etapa da obra. A equipe orientará o próximo passo.' }
    ],
    relatedRegions: [{ name: 'Jardim Aquarius', href: '/regioes/jardim-aquarius/' }, { name: 'Vila Ema', href: '/regioes/vila-ema/' }, { name: 'Jardim São Dimas', href: '/regioes/jardim-sao-dimas/' }]
  },
  {
    slug: 'cortina-de-vidro', path: '/cortina-de-vidro/', name: 'Cortina de Vidro', shortName: 'Cortina de vidro',
    title: 'Cortina de Vidro em São José dos Campos | W7M Designer',
    description: 'Cortina de vidro sob medida para varandas e sacadas em São José dos Campos. Avaliação do vão, instalação e acabamento para apartamentos, casas e condomínios.',
    eyebrow: 'Integração para varandas',
    intro: 'Cortina de vidro para aproveitar a varanda com mais integração e acabamento.',
    image: '/img/servicos/cortina-de-vidro-sjc.webp', imageAlt: 'Cortina de vidro instalada em varanda em São José dos Campos',
    paragraphs: [
      'A cortina de vidro é uma solução para fechamento de varandas, sacadas e ambientes que precisam de integração visual. A W7M Designer avalia o vão, o uso do espaço e as condições de instalação antes de definir a proposta.',
      'Em apartamentos e condomínios, é importante conferir medidas, acesso, pontos de fixação e eventuais padrões do edifício. A avaliação técnica ajuda a alinhar o projeto ao ambiente e evita tratar cada varanda como se tivesse a mesma condição.',
      'O atendimento começa com informações básicas sobre o imóvel. Fotos, medidas aproximadas, bairro e objetivo do fechamento ajudam a equipe a orientar o orçamento inicial.'
    ],
    highlights: [
      { title: 'Mais integração', text: 'O fechamento preserva a entrada de luz e a relação visual com a área externa.' },
      { title: 'Avaliação do vão', text: 'Medidas e condições do local orientam a escolha do sistema e da instalação.' },
      { title: 'Condomínios', text: 'O projeto pode ser analisado considerando regras e padrões do edifício.' }
    ],
    applications: ['Varandas de apartamentos', 'Sacadas residenciais', 'Áreas gourmet', 'Fechamentos de vãos', 'Projetos em condomínios', 'Reformas residenciais'],
    faqs: [
      { question: 'A cortina de vidro pode ser instalada em qualquer varanda?', answer: 'A instalação depende das medidas, da estrutura, das condições de fixação e de eventuais regras do condomínio. A avaliação define a viabilidade.' },
      { question: 'A cortina de vidro deixa a varanda totalmente vedada?', answer: 'O nível de vedação depende do sistema, da instalação e das condições do vão. A equipe explica as características da solução indicada para o projeto.' },
      { question: 'Vocês atendem apartamentos em São José dos Campos?', answer: 'Sim. A equipe atende apartamentos e condomínios, considerando acesso, medição e os procedimentos necessários para a instalação.' },
      { question: 'O orçamento pode ser solicitado por WhatsApp?', answer: 'Sim. Envie fotos, medidas aproximadas, bairro e o objetivo do fechamento para receber uma orientação inicial.' }
    ],
    relatedRegions: [{ name: 'Jardim Aquarius', href: '/regioes/jardim-aquarius/' }, { name: 'Urbanova', href: '/regioes/urbanova/' }, { name: 'Jardim Esplanada', href: '/regioes/jardim-esplanada/' }]
  },
  {
    slug: 'box-de-vidro', path: '/box-de-vidro/', name: 'Box de Vidro', shortName: 'Box de vidro',
    title: 'Box de Vidro Sob Medida em São José dos Campos | W7M Designer',
    description: 'Box de vidro sob medida para banheiros em São José dos Campos. Soluções com avaliação das medidas, ferragens e acabamento para reformas e imóveis novos.',
    eyebrow: 'Acabamento para banheiros',
    intro: 'Box de vidro sob medida para um banheiro mais funcional e bem acabado.',
    image: '/img/servicos/box-vidro-sjc.webp', imageAlt: 'Box de vidro sob medida para banheiro em São José dos Campos',
    paragraphs: [
      'A W7M Designer instala box de vidro sob medida para banheiros em reformas e imóveis novos. O projeto considera largura, altura, circulação, posição dos pontos hidráulicos e o acabamento das ferragens.',
      'Antes de definir o modelo, é importante avaliar o espaço disponível e a condição do revestimento. Uma medição adequada reduz o risco de incompatibilidade e ajuda a escolher a abertura mais conveniente para o ambiente.',
      'O cliente pode iniciar o atendimento pelo WhatsApp enviando fotos do banheiro, medidas aproximadas e a cidade ou bairro. A equipe orienta quando é necessário agendar uma medição.'
    ],
    highlights: [
      { title: 'Medida correta', text: 'O box é dimensionado para o espaço disponível e para a circulação do banheiro.' },
      { title: 'Ferragens', text: 'O acabamento é escolhido conforme o projeto e a composição do ambiente.' },
      { title: 'Reforma ou obra nova', text: 'A instalação pode ser planejada para diferentes etapas do projeto.' }
    ],
    applications: ['Box de correr', 'Box de abrir', 'Box para reformas', 'Banheiros residenciais', 'Apartamentos', 'Casas e condomínios'],
    faqs: [
      { question: 'O box de vidro é feito sob medida?', answer: 'Sim. As medidas e condições do banheiro são consideradas para definir o tamanho e o tipo de abertura.' },
      { question: 'Posso escolher o acabamento das ferragens?', answer: 'As opções dependem do modelo e da disponibilidade. A equipe apresenta as alternativas adequadas ao projeto.' },
      { question: 'É preciso medir o banheiro antes do orçamento final?', answer: 'Para o orçamento definitivo, a medição ou informações confiáveis do local são importantes, especialmente em reformas.' },
      { question: 'Vocês instalam box em apartamentos?', answer: 'Sim. O serviço pode ser realizado em apartamentos, casas e condomínios, conforme as condições de acesso e instalação.' }
    ],
    relatedRegions: [{ name: 'Vila Adyana', href: '/regioes/vila-adyana/' }, { name: 'Vila Ema', href: '/regioes/vila-ema/' }, { name: 'Jardim São Dimas', href: '/regioes/jardim-sao-dimas/' }]
  },
  {
    slug: 'fachada-acm', path: '/fachada-acm/', name: 'Fachada ACM', shortName: 'Fachada ACM',
    title: 'Fachada ACM em São José dos Campos | W7M Designer',
    description: 'Fachada ACM para lojas, clínicas e empresas em São José dos Campos e Vale do Paraíba. Revestimento em alumínio composto com projeto e instalação.',
    eyebrow: 'Fachadas comerciais',
    intro: 'Fachada ACM para comunicar profissionalismo antes mesmo do cliente entrar.',
    image: '/img/servicos/fachada-acm-sjc.webp', imageAlt: 'Fachada de ACM para empresa em São José dos Campos',
    paragraphs: [
      'A W7M Designer trabalha com fachadas em ACM para lojas, clínicas, escritórios e outros espaços comerciais em São José dos Campos e região. O revestimento pode atualizar a presença visual do imóvel e organizar a composição da fachada.',
      'A solução precisa ser analisada em conjunto com a fachada existente, as dimensões, a identidade visual, os acessos e o uso comercial do imóvel. A proposta deve considerar o resultado esperado e as condições reais da obra.',
      'Para iniciar a conversa, envie fotos da fachada, endereço, medidas aproximadas e referências visuais. Com essas informações, a equipe consegue entender o escopo antes de avançar para uma avaliação técnica.'
    ],
    highlights: [
      { title: 'Identidade visual', text: 'O revestimento pode ser planejado para integrar cores, volumes e a comunicação da empresa.' },
      { title: 'Aplicação comercial', text: 'Indicado para diferentes fachadas, de acordo com o projeto e as condições do imóvel.' },
      { title: 'Planejamento', text: 'Medidas e análise do local ajudam a definir escopo, acabamento e instalação.' }
    ],
    applications: ['Lojas', 'Clínicas', 'Escritórios', 'Fachadas comerciais', 'Reformas de fachada', 'Entradas e marquises'],
    faqs: [
      { question: 'A W7M faz fachada ACM para lojas e clínicas?', answer: 'Sim. A equipe avalia fachadas comerciais de lojas, clínicas, escritórios e outros estabelecimentos.' },
      { question: 'O ACM pode ser aplicado sobre qualquer fachada?', answer: 'A indicação depende da estrutura existente, das medidas, do projeto e das condições do local. A avaliação define a solução adequada.' },
      { question: 'Posso enviar uma foto para iniciar o orçamento?', answer: 'Sim. Fotos, medidas aproximadas, endereço e referências visuais ajudam a entender o escopo inicial.' },
      { question: 'Vocês atendem empresas no Vale do Paraíba?', answer: 'A W7M atende São José dos Campos e região. Informe o endereço do imóvel para confirmar a disponibilidade.' }
    ],
    relatedRegions: [{ name: 'Jardim São Dimas', href: '/regioes/jardim-sao-dimas/' }, { name: 'Vila Ema', href: '/regioes/vila-ema/' }, { name: 'Jardim Aquarius', href: '/regioes/jardim-aquarius/' }]
  },
  {
    slug: 'vidracaria-sob-medida', path: '/servicos/vidracaria/', name: 'Vidraçaria Sob Medida', shortName: 'Vidraçaria',
    title: 'Vidraçaria Sob Medida em São José dos Campos | W7M Designer',
    description: 'Vidraçaria sob medida para projetos residenciais e comerciais em São José dos Campos. Vidros, fechamentos e soluções instaladas conforme o ambiente.',
    eyebrow: 'Soluções em vidro',
    intro: 'Vidraçaria sob medida para transformar ideias em soluções instaladas.',
    image: '/img/servico-vidracaria-sjc.webp', imageAlt: 'Serviço de vidraçaria sob medida em São José dos Campos',
    paragraphs: [
      'A vidraçaria sob medida reúne soluções em vidro para diferentes ambientes residenciais e comerciais. A W7M Designer avalia a aplicação, as medidas, a segurança, o acabamento e as condições de instalação antes de indicar o serviço.',
      'O termo vidraçaria pode representar necessidades diferentes, como fechamentos, divisórias, portas, peças para reforma e combinações com esquadrias de alumínio. Por isso, uma descrição clara do ambiente ajuda a evitar uma proposta genérica.',
      'Envie fotos, medidas aproximadas, bairro e objetivo do projeto. A equipe poderá identificar se a demanda é uma cortina de vidro, box, esquadria, fechamento ou outra solução específica.'
    ],
    highlights: [
      { title: 'Diagnóstico do ambiente', text: 'O serviço começa pela compreensão do uso, das medidas e da condição do local.' },
      { title: 'Solução adequada', text: 'A equipe direciona a demanda para o tipo de vidro, fechamento ou esquadria mais apropriado.' },
      { title: 'Residencial e comercial', text: 'Atendimento para reformas, obras novas e necessidades de estabelecimentos.' }
    ],
    applications: ['Fechamentos em vidro', 'Divisórias', 'Portas de vidro', 'Vidros para reformas', 'Ambientes comerciais', 'Projetos residenciais'],
    faqs: [
      { question: 'Que tipos de serviço entram em vidraçaria sob medida?', answer: 'A demanda pode envolver fechamentos, divisórias, portas, peças para reformas e soluções combinadas com esquadrias. A avaliação define o serviço correto.' },
      { question: 'A W7M atende projetos comerciais?', answer: 'Sim. A equipe atende necessidades residenciais e comerciais em São José dos Campos e região.' },
      { question: 'Como saber qual vidro devo usar?', answer: 'A escolha depende da aplicação, das dimensões, da segurança e das condições do ambiente. A equipe orienta a especificação após entender o projeto.' },
      { question: 'Preciso ter as medidas exatas para pedir orçamento?', answer: 'Medidas aproximadas e fotos ajudam na triagem, mas a proposta final pode exigir medição ou confirmação técnica do local.' }
    ],
    relatedRegions: [{ name: 'Vila Ema', href: '/regioes/vila-ema/' }, { name: 'Jardim Esplanada', href: '/regioes/jardim-esplanada/' }, { name: 'Vila Adyana', href: '/regioes/vila-adyana/' }]
  }
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
