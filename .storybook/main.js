module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    ''
  ],
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: 'ts-loader',
        // enforce: 'pre',
        // loader: 'tslint-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
