module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'http://localhost:3000', // Pour le développement local
        'https://trad-index.com', // Domaine principal
        'https://www.trad-index.com', // Sous-domaine www (optionnel)
        'https://my-strapi-project-yysn.onrender.com', // URL de Strapi sur Render
        'https://my-nextjs-project-s1ua.vercel.app'
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization'],
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
