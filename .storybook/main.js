const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');
const fs = require('fs');
const rootPath = path.resolve(__dirname, '../src');

module.exports = {
  stories: ['../stories/**/*.stories.js', '../stories/**/*.stories.ts'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register'
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.resolve.extensions.push('.ts', '.tsx', '.vue', '.css', '.less', '.scss', '.sass', '.html');
    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.ts$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
            transpileOnly: true // used with ForkTsCheckerWebpackPlugin
          }
        }
      ]
    });

    config.module.rules.push({
      test: /\.s(a|c)ss$/,
      loaders: ['vue-style-loader', 'css-loader', 'sass-loader']
    });

    config.resolve.alias['@'] = rootPath;
    config.resolve.alias['~'] = rootPath;

    // Return the altered config
    return config;
  }
};
