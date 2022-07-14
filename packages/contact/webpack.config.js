const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'http://localhost:8082'
    },
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        historyApiFallback: {
            index: 'index.html'
        },
        port: 8082,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: require.resolve("babel-loader"),
                options: {
                    presets: [require.resolve("@babel/preset-react")]
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html',
            title: 'App'
        }),
        new ModuleFederationPlugin({
            name: 'ContactApp',
            filename: 'RemoteEntry.js',
            exposes: {
                './ContactPage': './src/Contact'
            }
        })
    ]
}