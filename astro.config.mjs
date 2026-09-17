import { defineConfig } from 'astro/config';

const homeSeoPlugin = {
  name: 'w7m-home-seo-normalization',
  enforce: 'pre',
  transform(code, id) {
    if (!id.endsWith('/src/pages/index.astro')) return code;

    return code
      .replace(
        'W7M Designer: Especialistas em esquadrias de alumínio, cortina de vidro e fachadas ACM em São José dos Campos. Fabricação própria e installation em SJC e região.',
        'W7M Designer: especialistas em esquadrias de alumínio, cortina de vidro e fachadas ACM em São José dos Campos. Fabricação própria e instalação em SJC e região.'
      )
      .replace('https://w7mvidros.com.br/', 'https://www.w7mvidros.com.br/')
      .replace(
        '<meta name="robots" content="index, follow" />',
        '<meta name="robots" content="index, follow, max-image-preview:large" />'
      )
      .replace(
        '<link rel="canonical" href="https://www.w7mvidros.com.br/" />',
        '<link rel="canonical" href="https://www.w7mvidros.com.br/" />\n  <meta property="og:locale" content="pt_BR" />\n  <meta property="og:type" content="website" />\n  <meta property="og:site_name" content="W7M Designer" />\n  <meta property="og:title" content="Esquadrias de Alumínio em São José dos Campos | W7M Designer" />\n  <meta property="og:description" content="W7M Designer: especialistas em esquadrias de alumínio, cortina de vidro e fachadas ACM em São José dos Campos. Fabricação própria e instalação em SJC e região." />\n  <meta property="og:url" content="https://www.w7mvidros.com.br/" />\n  <meta property="og:image" content="https://www.w7mvidros.com.br/img/esquadrias-aluminio-sjc-hero.webp" />\n  <meta property="og:image:alt" content="Esquadrias de alumínio em São José dos Campos | W7M Designer" />\n  <meta name="twitter:card" content="summary_large_image" />\n  <meta name="twitter:title" content="Esquadrias de Alumínio em São José dos Campos | W7M Designer" />\n  <meta name="twitter:description" content="W7M Designer: especialistas em esquadrias de alumínio, cortina de vidro e fachadas ACM em São José dos Campos. Fabricação própria e instalação em SJC e região." />\n  <meta name="twitter:image" content="https://www.w7mvidros.com.br/img/esquadrias-aluminio-sjc-hero.webp" />'
      )
      .replace(
        '</head>',
        `<script type="application/ld+json">${JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          '@id': 'https://www.w7mvidros.com.br/#organization',
          name: 'W7M Designer',
          alternateName: 'W7M Vidros',
          url: 'https://www.w7mvidros.com.br/',
          logo: 'https://www.w7mvidros.com.br/img/logotipo-fundo-transparente.png',
          telephone: '+55 12 98132-5798',
          sameAs: ['https://www.instagram.com/w7m_vidros/'],
          hasMap: 'https://www.google.com/maps/search/?api=1&query=W7M+Designer&query_place_id=ChIJv6r4315JzJQR7cN5PBC_aUk'
        })}</script>\n  <script type="application/ld+json">${JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          '@id': 'https://www.w7mvidros.com.br/#website',
          url: 'https://www.w7mvidros.com.br/',
          name: 'W7M Designer',
          publisher: { '@id': 'https://www.w7mvidros.com.br/#organization' },
          inLanguage: 'pt-BR'
        })}</script>\n</head>`
      );
  }
};

export default defineConfig({
  site: 'https://www.w7mvidros.com.br',
  output: 'static',
  vite: {
    plugins: [homeSeoPlugin]
  },
  build: {
    format: 'directory'
  }
});
