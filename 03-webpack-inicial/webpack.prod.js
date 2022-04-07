const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');



module.exports = {
    mode:'production',
    output:{
        clean: true,
        filename:'main.[contenthash].js'
    },
    module:{
        rules:[
            {
                test:/\.html$/,
                loader: 'html-loader',
                options:{
                    sources: false
                }
            },{
                test:/\.css$/,
                exclude: /style.css$/,
                use:['style-loader', 'css-loader']
            },{
                test: /style.css$/,
                use:[MiniCssExtractPlugin.loader, 'css-loader']
            },{
                test:/\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options:{
                    name:'[name].[ext]'
                }
            }
        ]
    },
    optimization:{
        minimize: true,
        minimizer:[
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ]
        
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'Mi Webpack App',
            // filename: 'index.html',
            template:'./src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'[name].[fullhash].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns:[{from:'src/assets/', to:'assets/'}]
        })
    ]
}