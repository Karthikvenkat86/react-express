var config = {
   entry: './app.js',
	
   output: {
      path:'./',
      filename: 'final.js',
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	node: {
      fs: "empty",
      net: 'empty',
      tls: 'empty',
      dns: 'empty'
   },
   target: 'node',
   module: {

      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
            loader: 'json-loader',
            test: /\.json$/
        },
        { test: /\.js?$/, exclude: /node_modules/, loader: 'babel'},
        { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel'},
        { test: /\.css$/, exclude: /static/, loader: 'style!css'}
      ]
   }
}

module.exports = config;