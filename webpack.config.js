module.exports = {
   context: __dirname + '/src',
   entry: {
      'index':'./index.js'
   },
   output: {
      path: __dirname + '/dist',
      filename: 'bundle.js'
   },
   module: {
      rules: [
         {
            test: /.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
            // query: {
            //    presets: ['babel-preset-es2015', 'react']
            // }
         },
         {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader'],
         },
      ]
   }
}
