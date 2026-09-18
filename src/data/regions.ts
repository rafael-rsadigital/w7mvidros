export type Region = {
  slug: string;
  name: string;
  regionLabel: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  paragraphs: string[];
  services: { name: string; href: string; description: string; image: string }[];
  faqs: { question: string; answer: string }[];
};

export const regions: Region[] = [
  {
    slug: 'jardim-aquarius',
    name: 'Jardim Aquarius',
    regionLabel: 'Região oeste de São José dos Campos',
    title: 'Esquadrias e Cortina de Vidro no Jardim Aquarius | W7M Designer',
    description: 'Esquadrias de alumínio, cortina de vidro, box e vidraçaria sob medida para apartamentos e projetos no Jardim Aquarius, em São José dos Campos.',
    eyebrow: 'Atendimento no Jardim Aquarius',
    intro: 'Esquadrias, Cortina de Vidro e Box no Jardim Aquarius – São José dos Campos',
    paragraphs: [
      'A W7M Designer atende projetos no Jardim Aquarius com fabricação e instalação de esquadrias de alumínio, cortina de vidro, box e outras soluções em vidro. O atendimento começa pela compreensão do imóvel, das medidas e do resultado esperado para o ambiente.',
      'Em apartamentos e condomínios, a visita técnica ajuda a verificar acesso, medidas, pontos de fixação e eventuais exigências do edifício antes da definição do orçamento. Assim, a proposta considera o projeto real, e não apenas uma estimativa genérica por mensagem.',
      'Para quem busca um acabamento mais sofisticado, trabalhamos com especificação de materiais, ferragens e detalhes de instalação compatíveis com o padrão do ambiente. Solicite uma avaliação e informe o serviço desejado para receber uma orientação adequada.'
    ],
    services: [
      { name: 'Cortina de vidro', href: '/cortina-de-vidro/', description: 'Fechamento de varandas e sacadas com avaliação do vão e do uso do ambiente.', image: '/img/servicos/cortina-de-vidro-sjc.webp' },
      { name: 'Esquadrias de alumínio', href: '/esquadrias-aluminio/', description: 'Portas e janelas sob medida para reformas e projetos residenciais.', image: '/img/servicos/esquadrias-premium-sjc.webp' },
      { name: 'Box de vidro', href: '/box-de-vidro/', description: 'Box sob medida com escolha de ferragens e acabamento.', image: '/img/servicos/box-vidro-sjc.webp' }
    ],
    faqs: [
      { question: 'A W7M Designer atende apartamentos no Jardim Aquarius?', answer: 'Sim. A equipe pode avaliar apartamentos e condomínios no Jardim Aquarius, considerando medidas, acesso ao imóvel e as condições necessárias para a instalação.' },
      { question: 'É possível solicitar cortina de vidro para uma varanda em condomínio?', answer: 'É possível avaliar o projeto. Antes do orçamento final, é importante conferir as medidas do vão e eventuais padrões ou regras do condomínio.' },
      { question: 'O orçamento é feito somente com fotos?', answer: 'Fotos ajudam na triagem, mas a definição técnica depende das medidas e das condições do local. Quando necessário, a equipe orienta uma visita ou medição.' },
      { question: 'Quais serviços são mais procurados para apartamentos?', answer: 'Cortina de vidro, esquadrias de alumínio e box de vidro estão entre as soluções mais adequadas para diferentes etapas de uma reforma ou projeto residencial.' }
    ]
  },
  {
    slug: 'vila-ema',
    name: 'Vila Ema',
    regionLabel: 'Região central de São José dos Campos',
    title: 'Vidraçaria e Esquadrias na Vila Ema | W7M Designer',
    description: 'Vidraçaria, esquadrias de alumínio, cortina de vidro e box sob medida para imóveis residenciais e comerciais na Vila Ema, em São José dos Campos.',
    eyebrow: 'Atendimento na Vila Ema',
    intro: 'Vidros e esquadrias com acabamento sob medida para reformas, apartamentos e comércios na Vila Ema.',
    paragraphs: [
      'Na Vila Ema, a W7M Designer atende reformas residenciais, apartamentos e espaços comerciais que precisam de soluções em vidro e alumínio alinhadas ao projeto. Cada orçamento parte do tipo de ambiente, das medidas e do acabamento desejado.',
      'A variedade de imóveis da região exige atenção ao contexto de instalação. Por isso, a avaliação considera circulação, acesso, dimensões do vão, ferragens e integração com os elementos existentes.',
      'Se o projeto está em fase de reforma ou definição de acabamentos, envie fotos, medidas aproximadas e o bairro pelo WhatsApp. A equipe poderá indicar o próximo passo para uma proposta mais precisa.'
    ],
    services: [
      { name: 'Vidraçaria sob medida', href: '/servicos/', description: 'Soluções em vidro para ambientes residenciais e comerciais.', image: '/img/servico-vidracaria-sjc.webp' },
      { name: 'Esquadrias de alumínio', href: '/esquadrias-aluminio/', description: 'Portas, janelas e esquadrias especificadas para cada vão.', image: '/img/servicos/esquadrias-premium-sjc.webp' },
      { name: 'Box de vidro', href: '/box-de-vidro/', description: 'Instalação de box com acabamento compatível com o banheiro.', image: '/img/servicos/box-de-video-sjc.webp' }
    ],
    faqs: [
      { question: 'Vocês fazem projetos de vidraçaria para comércios na Vila Ema?', answer: 'Sim. A equipe pode avaliar aplicações residenciais e comerciais em vidro e alumínio, de acordo com as medidas, o uso do ambiente e o acabamento necessário.' },
      { question: 'Posso pedir orçamento para mais de um serviço?', answer: 'Sim. É possível enviar as informações do projeto e solicitar uma avaliação para combinar esquadrias, vidros, box ou outras soluções no mesmo atendimento.' },
      { question: 'A instalação pode ser feita durante uma reforma?', answer: 'A instalação depende da fase da obra e das condições do local. A medição ajuda a definir o momento adequado e evita retrabalho.' },
      { question: 'Quais informações devo enviar para começar?', answer: 'Informe o bairro, o tipo de imóvel, o serviço desejado, fotos do local e, se possível, as medidas aproximadas e a fase do projeto.' }
    ]
  },
  {
    slug: 'jardim-sao-dimas',
    name: 'Jardim São Dimas',
    regionLabel: 'Região central de São José dos Campos',
    title: 'Esquadrias de Alumínio no Jardim São Dimas | W7M Designer',
    description: 'Esquadrias de alumínio, vidraçaria e box sob medida para reformas e imóveis no Jardim São Dimas, em São José dos Campos.',
    eyebrow: 'Atendimento no Jardim São Dimas',
    intro: 'Projetos de esquadrias, vidros e acabamentos para imóveis em reforma ou construção no Jardim São Dimas.',
    paragraphs: [
      'A W7M Designer atende o Jardim São Dimas com soluções sob medida em esquadrias de alumínio, vidros, box e fechamentos. O objetivo é alinhar desempenho, segurança e acabamento ao uso real do imóvel.',
      'Em reformas, a análise do vão existente e dos elementos que serão preservados é essencial para escolher a solução correta. A equipe pode orientar o levantamento das informações necessárias antes da elaboração da proposta.',
      'Para agilizar o atendimento, envie o tipo de imóvel, o serviço desejado, imagens do ambiente e a etapa atual da obra. Isso ajuda a separar uma consulta inicial de uma visita técnica.'
    ],
    services: [
      { name: 'Esquadrias de alumínio', href: '/esquadrias-aluminio/', description: 'Soluções sob medida para portas, janelas e vãos residenciais.', image: '/img/esquadrias-aluminio-sjc-hero.webp' },
      { name: 'Cortina de vidro', href: '/cortina-de-vidro/', description: 'Fechamento de varandas e áreas que precisam de integração visual.', image: '/img/cortina-de-vidro-sjc.webp' },
      { name: 'Fachada ACM', href: '/fachada-acm/', description: 'Revestimento e atualização visual para estabelecimentos comerciais.', image: '/img/servicos/fachada-acm-sjc.webp' }
    ],
    faqs: [
      { question: 'Vocês fazem esquadrias sob medida no Jardim São Dimas?', answer: 'Sim. As esquadrias são avaliadas de acordo com o vão, o projeto, o tipo de abertura e o acabamento desejado.' },
      { question: 'A W7M atende reformas de apartamentos?', answer: 'Sim. O atendimento pode considerar as condições do apartamento, o acesso para medição e as necessidades da obra.' },
      { question: 'Fachada ACM é indicada para qualquer comércio?', answer: 'A indicação depende da fachada existente, do projeto, do uso do imóvel e do resultado esperado. A avaliação técnica define a solução mais adequada.' },
      { question: 'Como funciona a primeira conversa?', answer: 'Você informa bairro, serviço, tipo de imóvel e estágio do projeto. Com fotos e medidas disponíveis, a equipe consegue orientar melhor o próximo passo.' }
    ]
  },
  {
    slug: 'jardim-esplanada',
    name: 'Jardim Esplanada',
    regionLabel: 'Região central de São José dos Campos',
    title: 'Esquadrias e Vidraçaria no Jardim Esplanada | W7M Designer',
    description: 'Esquadrias de alumínio, cortina de vidro, box e vidraçaria sob medida para casas e apartamentos no Jardim Esplanada, em São José dos Campos.',
    eyebrow: 'Atendimento no Jardim Esplanada',
    intro: 'Acabamentos em vidro e alumínio para projetos residenciais e comerciais no Jardim Esplanada.',
    paragraphs: [
      'Projetos no Jardim Esplanada podem envolver reforma de apartamentos, casas e espaços comerciais. A W7M Designer trabalha com soluções sob medida para que os elementos em vidro e alumínio se integrem ao desenho do imóvel.',
      'A escolha do sistema depende do vão, da abertura, da ventilação, da exposição e do uso cotidiano. Por isso, a equipe orienta o cliente sobre as informações que precisam ser verificadas antes da fabricação.',
      'O atendimento pode começar pelo WhatsApp. Envie uma descrição do projeto e fotos do local para receber uma orientação inicial sobre o serviço mais adequado.'
    ],
    services: [
      { name: 'Esquadrias de alumínio', href: '/esquadrias-aluminio/', description: 'Portas e janelas para projetos residenciais sob medida.', image: '/img/servicos/esquadrias-premium-sjc.webp' },
      { name: 'Cortina de vidro', href: '/cortina-de-vidro/', description: 'Solução para varandas e ambientes integrados.', image: '/img/servicos/cortina-de-vidro-esquadrias-w7m.webp' },
      { name: 'Box de vidro', href: '/box-de-vidro/', description: 'Box planejado para diferentes dimensões e acabamentos.', image: '/img/servicos/box-de-vidro-sjc-2.webp' }
    ],
    faqs: [
      { question: 'A W7M atende casas e apartamentos no Jardim Esplanada?', answer: 'Sim. A equipe avalia o tipo de imóvel, as medidas e as condições do local para indicar a solução adequada.' },
      { question: 'Posso contratar apenas a instalação?', answer: 'A possibilidade depende do material, das medidas e das condições do serviço. A equipe verifica o escopo antes de confirmar a proposta.' },
      { question: 'A cortina de vidro substitui uma janela?', answer: 'A função e o desempenho dependem do projeto. A cortina de vidro deve ser especificada para o vão e o uso previstos, após avaliação técnica.' },
      { question: 'Vocês atendem projetos em fase de arquitetura?', answer: 'Sim. Quanto mais cedo forem compartilhadas as medidas e definições do projeto, melhor será o alinhamento da solução.' }
    ]
  },
  {
    slug: 'vila-adyana',
    name: 'Vila Adyana',
    regionLabel: 'Região central de São José dos Campos',
    title: 'Vidraçaria e Box de Vidro na Vila Adyana | W7M Designer',
    description: 'Vidraçaria, box de vidro, esquadrias de alumínio e soluções sob medida para imóveis na Vila Adyana, em São José dos Campos.',
    eyebrow: 'Atendimento na Vila Adyana',
    intro: 'Soluções em vidro e alumínio para reformas e projetos residenciais na Vila Adyana.',
    paragraphs: [
      'A W7M Designer atende a Vila Adyana com vidraçaria, box, esquadrias de alumínio e outras soluções sob medida. O atendimento leva em conta o ambiente, as dimensões e o padrão de acabamento esperado.',
      'Em imóveis já ocupados, a organização da instalação e o cuidado com o espaço são pontos importantes para o planejamento. A equipe orienta quais imagens, medidas e informações ajudam a avaliar o serviço antes da visita.',
      'Para receber uma proposta mais alinhada, informe no primeiro contato o bairro, o tipo de imóvel e se o projeto é uma reforma, construção ou substituição de peças existentes.'
    ],
    services: [
      { name: 'Box de vidro', href: '/box-de-vidro/', description: 'Box sob medida para reformas e atualizações de banheiros.', image: '/img/servicos/box-de-video-sjc.webp' },
      { name: 'Vidraçaria', href: '/servicos/', description: 'Soluções em vidro para necessidades residenciais e comerciais.', image: '/img/servico-vidracaria-sjc.webp' },
      { name: 'Esquadrias de alumínio', href: '/esquadrias-aluminio/', description: 'Esquadrias especificadas para cada abertura e ambiente.', image: '/img/servicos/esquadrias-premium-sjc.webp' }
    ],
    faqs: [
      { question: 'Vocês fazem box de vidro sob medida na Vila Adyana?', answer: 'Sim. O box é definido de acordo com as medidas do banheiro, o espaço disponível e o acabamento escolhido.' },
      { question: 'É possível trocar apenas o vidro ou a ferragem?', answer: 'A equipe precisa avaliar o conjunto existente para verificar a compatibilidade e indicar se a substituição parcial é adequada.' },
      { question: 'Como preparar o imóvel para a medição?', answer: 'Deixe o acesso ao ambiente livre e informe se há peças existentes, revestimentos em execução ou alguma restrição de horário.' },
      { question: 'A W7M atende outros bairros próximos?', answer: 'Sim. A empresa atende São José dos Campos e região. Informe o endereço ou bairro para confirmar a disponibilidade de atendimento.' }
    ]
  }
];

export const getRegion = (slug: string) => regions.find((region) => region.slug === slug);
