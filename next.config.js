const nextTranslate = require('next-translate');

const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  ...nextTranslate(),
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
    };
  },
  basePath: debug ? '' : process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: debug ? '' : process.env.NEXT_PUBLIC_BASE_PATH,
};
