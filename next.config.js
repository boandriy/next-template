module.exports = {
  async rewrites() {
    return [{ source: '/home', destination: '/404' }];
  },
};
