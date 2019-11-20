export default {
  compileEnhancements: false,
  extensions: ['ts'],
  files: ['src/__tests__/*'],
  sources: ['src/**/*.ts', '!src/__tests__/*', '!dist/*'],
  require: [
    'ts-node/register/transpile-only',
    // 'tsconfig-paths/register'
  ],
  verbose: true,
};
