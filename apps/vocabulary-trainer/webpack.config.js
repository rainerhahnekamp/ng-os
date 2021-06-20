const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, '../../tsconfig.base.json'), [
  '@ng-app-platform/types',
]);

module.exports = {
  output: {
    uniqueName: 'vocabularyTrainer',
    publicPath: 'auto',
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'vocabularyTrainer',
      filename: 'remoteEntry.js',
      exposes: {
        './Module':
          './libs/vocabulary-trainer/feature/src/lib/vocabulary-trainer-feature.module.ts',
      },

      shared: {
        '@angular/core': {
          singleton: true,
          strictVersion: true,
          requiredVersion: '^12.0.0',
        },
        '@angular/common': {
          singleton: true,
          strictVersion: true,
          requiredVersion: '^12.0.0',
        },
        '@angular/router': {
          singleton: true,
          strictVersion: true,
          requiredVersion: '^12.0.0',
        },

        ...sharedMappings.getDescriptors(),
      },
    }),
    sharedMappings.getPlugin(),
  ],
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
};
