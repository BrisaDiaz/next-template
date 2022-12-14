const path = require('path')

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../components/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y'
  ],
  staticDirs: ['../public', '../static'],

  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },

  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, '../components'),
      '@common': path.resolve(__dirname, '../common'),
      '@hooks': path.resolve(__dirname, '../hooks')
    }
    return config
  }
}
