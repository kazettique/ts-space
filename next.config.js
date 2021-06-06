const nextTranslate = require('next-translate');

module.exports = {
  ...nextTranslate(),
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/info': { page: '/info' },
      '/rules': { page: '/rules' },
    };
  },
};
