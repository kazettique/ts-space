const nextTranslate = require('next-translate');

// const debug = process.env.NODE_ENV !== 'production';

module.exports = nextTranslate({
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
  // basePath: debug ? '' : process.env.NEXT_PUBLIC_BASE_PATH,
  // assetPrefix: debug ? '' : process.env.NEXT_PUBLIC_BASE_PATH,
});
