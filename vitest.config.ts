export default {
  test: {
    environment: 'jsdom',
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache', 'e2e/*'],
    transformMode: {
      web: [/\.[jt]sx$/]
    }
  }
};
