import { configDefaults, defineConfig } from 'vitest/config'
export default defineConfig({
  test: {
    environment: 'jsdom',
    exclude: [...configDefaults.exclude, 'e2e/*'],
    transformMode: {
      web: [/\.[jt]sx$/]
    }
  }
});
