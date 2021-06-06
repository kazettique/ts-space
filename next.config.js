const nextTranslate = require('next-translate');

module.exports = nextTranslate({
  i18n: {
    locales: ['en-US', 'zh-TW', 'zh-CN'],
    defaultLocale: 'en-US',
  },
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
});
