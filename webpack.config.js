// arquivo de configuração para webpacl. É daqui que ele vai obter todas as informações sobre onde e como compilar os recursos que ele vai gerenciar.
var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker'); 
module.exports = {
  entry:  path.join(__dirname, 'static/src/js/index'), //ponto de entrada da applicação o arquivo 
  output: {
    path: path.join(__dirname, 'static/dist'), //saída para os .js compilados e ter um padrão de arquivos 
    filename: '[name]-[hash].js'
  },
  plugins: [
    new BundleTracker({
      path: __dirname,
      filename: 'webpack-stats.json' //armazena o status final do processo, a mesma mensagem que aparece no terminal quando rodamos o Webpack.
    }),
  ],
  module.exports = {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
      ],
    },}
}
