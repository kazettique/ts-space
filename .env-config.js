const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.NEXT_PUBLIC_BASE_PATH': prod ? '/ts-space' : '',
};
