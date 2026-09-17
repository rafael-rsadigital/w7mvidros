# Auditoria do repositório W7M Vidros: Astro, velocidade e SEO local

**Data da análise:** 17 de setembro de 2026  
**Repositório analisado:** `rafael-rsadigital/w7mvidros`  
**Domínio observado:** `w7mvidros.com.br`

## Conclusão executiva

**Não compensa refazer tudo imediatamente apenas para ganhar SEO ou velocidade.** O projeto atual já é um site estático em HTML, que é uma base potencialmente rápida e rastreável. Migrá-lo para Astro, sem alterar arquitetura de conteúdo, imagens, dados estruturados e medição de leads, poderia melhorar a manutenção, mas não produziria automaticamente uma melhora relevante de posicionamento.

**Compensa adotar Astro como uma segunda etapa de engenharia**, caso a empresa realmente vá aumentar o número de páginas de serviços, projetos, bairros e conteúdos. O valor principal seria centralizar layout, navegação, SEO técnico e dados de conteúdo em componentes e coleções. A migração deve ser incremental, mantendo as URLs existentes e comparando Search Console, conversões e Core Web Vitals antes e depois.

O problema comercial relatado — receber leads principalmente da região norte, com maior sensibilidade a desconto — não será resolvido por Astro sozinho. Ele exige uma combinação de **segmentação geográfica explícita, páginas locais úteis, portfólio e prova social relacionados ao público de maior poder aquisitivo, mensagem de valor premium e rastreamento da origem dos leads**.

## O que encontrei no repositório

O projeto tem dez páginas HTML independentes, uma folha de estilos compartilhada e um JavaScript central. Não há `package.json`, pipeline de build ou framework frontend identificado. Isso caracteriza um site estático tradicional, não uma aplicação pesada que precise ser substituída para ficar rápida.

O HTML totaliza aproximadamente 288 KB, sem contar CSS, JavaScript, imagens e vídeo. As páginas repetem grande parte do cabeçalho, rodapé, estilos inline e scripts inline. Essa repetição aumenta o custo de manutenção e torna fácil publicar alterações inconsistentes.

A página inicial possui um bloco JSON-LD de `FAQPage`. As demais páginas analisadas não apresentam dados estruturados equivalentes. Também não encontrei `LocalBusiness` estruturado no conjunto auditado. A documentação do Google recomenda informar dados como nome, endereço, telefone, URL, horário, faixa de preço e, quando aplicável, coordenadas geográficas em uma página que contenha informações sobre o negócio.[1]

Seis páginas usam essencialmente o mesmo conjunto de cinco perguntas frequentes. Entre elas estão a home, blog, depoimentos, esquadrias de alumínio, fachada ACM e galeria. A página de cortina tem uma variação próxima; a página de box também varia. As perguntas são genéricas e não estão contextualizadas ao serviço de cada URL. Isso reduz a diferenciação entre páginas e desperdiça uma oportunidade de responder às objeções reais de cada tipo de projeto.

Os títulos e as descrições são, em geral, específicos e existe canonical em todas as páginas verificadas. O sitemap lista as principais URLs e o `robots.txt` aponta para ele. Isso é uma boa base, mas não substitui conteúdo exclusivo, links internos bem planejados, schema coerente e validação no Search Console.

Há sinais claros de oportunidade de performance:

- As imagens não possuem atributos explícitos de `width` e `height` nas páginas verificadas. Isso pode contribuir para instabilidade visual e piora de CLS.
- Não identifiquei uso consistente de `loading="lazy"` nas imagens.
- O repositório contém imagens PNG grandes, incluindo arquivos de aproximadamente 1,6 MB e 2,2 MB, além de imagens de serviços na faixa de 1,3 MB a 3,1 MB.
- O vídeo da home tem aproximadamente 7,2 MB e pode ser pesado para a primeira visita em celular.
- Cada página contém uma quantidade relevante de CSS e JavaScript inline repetido.
- O JavaScript executa animações e listeners de scroll em várias páginas. O efeito visual é secundário e deve ser removido ou carregado de forma não bloqueante quando não contribuir para conversão.
- O domínio sem `www` responde com redirecionamento 307 para a versão com `www`. Isso não é necessariamente um problema, mas a versão canônica deve ser definida de maneira consistente no sitemap, canonicals, links internos e Search Console.

O Google recomenda acompanhar as métricas de experiência real do usuário: LCP abaixo de 2,5 segundos, INP abaixo de 200 ms e CLS abaixo de 0,1 para uma boa experiência.[2] A stack não determina esses resultados sozinha; peso de mídia, fontes, layout e JavaScript têm impacto direto.

## Astro: quando vale a pena e quando não vale

### Ganhos prováveis

Astro pode renderizar a maior parte do site como HTML estático e enviar JavaScript apenas para componentes interativos. A própria documentação descreve esse modelo como uma arquitetura de ilhas, na qual componentes estáticos não recebem runtime de JavaScript e as ilhas interativas são hidratadas apenas quando necessário.[3]

Para este projeto, isso permitiria:

1. Criar um `Layout` único para `<head>`, navegação, rodapé, canonical, Open Graph e scripts.
2. Criar componentes reutilizáveis para FAQ, CTA, galeria, depoimentos, breadcrumbs e schema.
3. Manter os dados de serviços, bairros e projetos separados do layout.
4. Gerar páginas estáticas de maneira consistente, evitando copiar e colar dezenas de arquivos HTML.
5. Criar um pipeline de imagens e páginas com metadados uniformes.
6. Produzir páginas de serviço e localização em escala sem transformar cada página em uma edição manual.

### O que Astro não resolve sozinho

Astro não garante posições melhores, leads do sul ou Core Web Vitals bons. Se os mesmos textos, FAQs, imagens pesadas e scripts forem simplesmente transferidos para arquivos `.astro`, o resultado será uma versão mais organizada do mesmo problema.

Também não há justificativa técnica para reescrever tudo antes de corrigir o que é mais simples: otimizar mídia, remover duplicação, corrigir dimensões das imagens, estruturar dados locais, melhorar títulos e conteúdo e medir conversões.

### Recomendação

Adotar **migração incremental para Astro**, não um “big bang”:

1. Primeiro, criar uma linha de base com Search Console, Analytics, Lighthouse/PageSpeed e origem dos leads.
2. Depois, corrigir os problemas de maior retorno ainda no HTML atual.
3. Em seguida, montar um projeto Astro em branch separada com o mesmo conjunto de URLs.
4. Migrar primeiro home, layout global e uma página de serviço.
5. Comparar rastreamento, indexação, velocidade e conversão.
6. Migrar as demais páginas apenas depois de validar o modelo.

Todas as URLs existentes devem ser preservadas. Qualquer mudança de slug exige redirecionamento 301 e atualização do sitemap, canonicals, links internos e referências externas.

## Estratégia para atrair bairros do sul e público premium

A estratégia não deve consistir em criar várias páginas quase idênticas trocando apenas o nome do bairro. O Google alerta que páginas criadas somente para ampliar a presença nas buscas, sem valor claro e único, podem ser consideradas doorway pages.[4] A documentação de SEO também recomenda conteúdo útil, original, atualizado e escrito para pessoas, além de títulos únicos e descrições específicas por página.[5]

A prioridade inicial deve ser criar poucas páginas fortes e verdadeiramente úteis para áreas com potencial comercial. Eu começaria por:

- Jardim Aquarius;
- Vila Ema;
- Jardim São Dimas;
- Urbanova;
- Jardim das Colinas;
- Parque Residencial Aquárius, se a empresa realmente atender e tiver portfólio ou capacidade operacional nessa área.

Essas páginas devem ser publicadas somente quando houver conteúdo próprio para cada região. Cada uma deve explicar, com honestidade:

- quais serviços são mais procurados naquela região;
- como a empresa trabalha em apartamentos, casas, condomínios ou estabelecimentos comerciais;
- quais restrições de acesso, medição, instalação e aprovação em condomínio podem existir;
- quais soluções são adequadas para o perfil construtivo local;
- quais projetos ou fotos podem ser atribuídos à região, sem inventar endereço ou cliente;
- prazo de visita técnica, processo de orçamento e critérios de acabamento;
- perguntas específicas de quem compra um produto premium;
- CTA com mensagem de WhatsApp identificando o bairro e o serviço.

A página não deve prometer exclusividade, atendimento prioritário ou presença em um bairro se isso não for verdadeiro. Também não se deve usar linguagem que sugira que moradores de outras regiões não são atendidos; o objetivo é qualificar a demanda, não criar uma afirmação enganosa.

### Arquitetura sugerida de URLs

A estrutura abaixo é uma proposta inicial. Deve ser ajustada ao histórico de URLs e à confirmação comercial dos serviços:

```text
/
/servicos/
/servicos/esquadrias-de-aluminio/
/servicos/cortina-de-vidro/
/servicos/box-de-vidro/
/servicos/fachada-acm/
/regioes/jardim-aquarius/
/regioes/vila-ema/
/regioes/jardim-sao-dimas/
/regioes/urbanova/
/regioes/jardim-das-colinas/
/projetos/
/blog/
```

Não é necessário reorganizar as URLs atuais imediatamente. Em uma primeira fase, é mais seguro manter `/cortina-de-vidro/`, `/box-de-vidro/`, `/esquadrias-aluminio/` e `/fachada-acm/`, adicionando apenas novas páginas quando houver conteúdo e demanda que justifiquem a expansão.

## Como substituir as FAQs repetidas

A FAQ deve ser parte da estratégia de conversão, não um bloco genérico copiado para preencher a página. A pergunta deve refletir a intenção do usuário daquela URL.

| Página | Temas de FAQ que fazem mais sentido |
|---|---|
| Cortina de vidro | vedação, vento e chuva, manutenção, tipo de abertura, visita técnica, instalação em varanda de apartamento |
| Esquadrias de alumínio | linhas Gold e Suprema, conforto térmico e acústico, prazo, personalização, medição, garantia |
| Box de vidro | espessura e segurança, ferragens, medidas, instalação, manutenção, box até o teto |
| Fachada ACM | aplicação comercial, cores e acabamento, resistência, manutenção, prazo de obra, compatibilidade com a fachada existente |
| Jardim Aquarius | regras de condomínio, acesso para medição, integração com varanda, padrão de acabamento, atendimento local |
| Vila Ema | reformas residenciais, apartamentos, soluções para ambientes compactos, prazo e logística |
| Jardim São Dimas | casas e apartamentos, esquadrias sob medida, adequação ao projeto arquitetônico, orçamento e instalação |
| Urbanova/Jardim das Colinas | projetos residenciais de maior porte, grandes vãos, desempenho, acabamento, cronograma de obra |

As respostas precisam conter informações verdadeiras da operação. Se a empresa não tiver política formal de garantia, prazo ou desempenho acústico, não se deve publicar números genéricos. É preferível responder com o processo real e encaminhar para avaliação técnica.

O FAQ visível pode permanecer como conteúdo útil mesmo sem buscar rich result. A presença de `FAQPage` não deve ser tratada como promessa de destaque no Google. O mais importante é que perguntas e respostas estejam na página, sejam específicas e ajudem o usuário a decidir.

## SEO técnico prioritário

### Prioridade 1: corrigir antes da migração

1. Reduzir e converter PNGs grandes para WebP ou AVIF quando a qualidade permitir.
2. Criar versões responsivas com `srcset` e `sizes`.
3. Definir `width` e `height` corretos em todas as imagens.
4. Usar `loading="lazy"` em imagens abaixo da dobra e reservar o carregamento prioritário para o hero.
5. Avaliar poster, compressão e carregamento posterior do vídeo da home.
6. Remover CSS duplicado e extrair estilos comuns para um único arquivo.
7. Reduzir JavaScript inline e evitar animações de scroll desnecessárias.
8. Garantir que a navegação, o conteúdo principal e o CTA funcionem sem JavaScript.
9. Validar a versão canônica com `www` e atualizar sitemap e links internos para a mesma origem.
10. Corrigir o texto misto em português/inglês observado na descrição da home, que contém “installation”.

### Prioridade 2: entendimento semântico e local

1. Implementar `LocalBusiness` ou o subtipo mais específico aplicável, com dados reais do negócio.
2. Implementar `Organization` na home quando fizer sentido para a identidade da empresa.
3. Usar `BreadcrumbList` nas páginas internas.
4. Usar `Service` nas páginas de serviço quando o conteúdo visível sustentar o markup.
5. Criar títulos, descriptions, H1 e imagens hero realmente distintos por serviço e região.
6. Adicionar Open Graph completo para compartilhamento.
7. Criar links internos contextuais entre serviço, região, projetos e blog.
8. Usar nomes de arquivos e `alt` que descrevam o projeto real, sem empilhar palavras-chave.
9. Criar uma página de projetos com localização aproximada e contexto, sem expor dados privados de clientes.

### Prioridade 3: conversão qualificada

O CTA deve pedir dados que ajudem a separar oportunidade premium de consulta por preço. O formulário ou WhatsApp pode solicitar, de forma simples, **bairro, tipo de imóvel, serviço desejado, fase do projeto e fotos ou medidas disponíveis**. A mensagem automática deve identificar a página de origem, por exemplo:

```text
Olá, vim pela página de Esquadrias de Alumínio para Jardim Aquarius. Meu imóvel é [casa/apartamento/comercial], estou na fase [projeto/reforma/obra] e gostaria de agendar uma avaliação.
```

A comunicação comercial deve enfatizar projeto sob medida, fabricação, especificação, acabamento, segurança, prazo e acompanhamento. Isso filtra melhor do que simplesmente anunciar “menor preço”. A empresa deve testar a mensagem com o responsável comercial para que ela reflita a entrega real.

## Medição para confirmar se a estratégia funcionou

Sem medição, não será possível afirmar que a mudança para Astro ou o reforço de bairros melhorou o negócio. Recomendo acompanhar, por página e por região:

- impressões, cliques, CTR e posição média no Search Console;
- sessões orgânicas e landing page de entrada;
- cliques no WhatsApp e chamadas telefônicas;
- formulários enviados;
- bairro informado pelo lead;
- serviço solicitado;
- faixa de orçamento ou estágio do projeto;
- taxa de lead qualificado, não apenas volume total de leads;
- taxa de fechamento e ticket médio por região.

Criar eventos separados como `whatsapp_click`, `phone_click`, `quote_start` e `quote_submit`, com parâmetros de `service`, `neighborhood` e `landing_page`. O objetivo não é trazer qualquer lead do sul, mas aumentar a proporção de oportunidades qualificadas e o ticket médio sem reduzir a capacidade de atendimento.

O período mínimo de comparação deve considerar sazonalidade e volume suficiente. Recomendo comparar uma linha de base de pelo menos quatro semanas antes da publicação, acompanhar a implantação semanalmente e avaliar o resultado após oito a doze semanas. A migração de stack e a criação de páginas locais não devem ser feitas todas no mesmo dia, pois isso dificulta atribuir causa aos resultados.

## Plano de execução recomendado

### Fase 1 — Base e diagnóstico

Registrar os dados atuais de Search Console, Analytics, PageSpeed, cliques de WhatsApp e leads por região. Corrigir canonical/origem, mídia pesada, dimensões de imagem, texto da home e problemas evidentes de conteúdo duplicado.

### Fase 2 — Serviço e conversão

Reescrever as FAQs por serviço. Melhorar as páginas de cortina de vidro, esquadrias, box e fachada ACM com prova de processo, critérios técnicos, fotos reais e CTA rastreável. Implementar schema local e breadcrumbs com dados reais.

### Fase 3 — Primeiras páginas locais

Publicar Jardim Aquarius, Vila Ema e Jardim São Dimas somente com conteúdo específico. Criar links a partir da home, páginas de serviço e projetos. Publicar Urbanova e Jardim das Colinas depois de validar qualidade e capacidade de atendimento.

### Fase 4 — Migração controlada para Astro

Criar componentes e coleções de conteúdo. Migrar primeiro o layout global, a home e uma página de serviço. Gerar HTML estático, validar o HTML final, rastreamento, canonicals, sitemap, imagens, schema e performance. Expandir para as demais páginas somente após a comparação.

### Fase 5 — Otimização baseada em dados

Após oito a doze semanas, comparar leads qualificados, ticket médio, consultas por bairro, conversão e desempenho orgânico. Expandir somente os bairros e serviços que demonstram demanda e capacidade comercial.

## Decisão final

**Não recomendo refazer tudo agora exclusivamente em Astro.** A prioridade é aproveitar o site estático atual para corrigir performance, eliminar FAQs repetidas, melhorar a relevância local e medir leads. **Recomendo migrar gradualmente para Astro se a empresa confirmar a intenção de criar e manter muitas páginas de serviço, projetos e bairros**, porque nesse cenário a componentização e a geração estática reduzem risco de inconsistência e aceleram a produção.

Para o objetivo comercial apresentado, a ordem correta é:

**medir → corrigir base técnica → diferenciar serviços → criar poucas páginas locais fortes → qualificar o CTA → testar Astro em uma migração controlada.**

## Referências

[1]: https://developers.google.com/search/docs/appearance/structured-data/local-business "Local Business structured data — Google Search Central"

[2]: https://developers.google.com/search/docs/appearance/core-web-vitals "Understanding Core Web Vitals and Google search results — Google Search Central"

[3]: https://docs.astro.build/en/concepts/islands/ "Islands architecture — Astro Documentation"

[4]: https://developers.google.com/search/blog/2015/03/an-update-on-doorway-pages "An update on doorway pages — Google Search Central Blog"

[5]: https://developers.google.com/search/docs/fundamentals/seo-starter-guide "SEO Starter Guide — Google Search Central"
