const path = require ('path');
const webpack = require('webpack'); //to access built-in plugins
//const HtmlWebpackPlugin = require('html-webpack-plugin');
//const webpack = require('webpack');

module.exports = {
	 mode: 'production',
	entry : {
		app : './src/js/app.js',
		

	},
	output:{
		path: path.resolve(__dirname, 'dist'),
		filename : '[name].js'
	},
	module:{
		rules:[			
			{
        		test: /\.(js|jsx)$/,
        		exclude: /(node_modules|bower_components)/,
        		use: 'babel-loader'
      		},
      		
      		{
         test: /\.scss$/,
        use: [{
           loader: 'style-loader'
         }, {
           loader: 'css-loader'
         }, {
          loader: 'sass-loader'
         }]
       },
       {
         test: /\.(png|svg|jpg|gif|jpeg|woff|woff2|eot|ttf|otf)$/,
        use: [
           {
            loader: 'file-loader'
           }
        ]
       }
		]
	},
	/*
	modules:{
		rules:[
			{
        		test: /\.txt$/i,
        		use: 'raw-loader',
      		},
		]
	},
	*/
	
	plugins:[
		//new HtmlWebpackPlugin({template:'./src/index.html'})
	]
	
}