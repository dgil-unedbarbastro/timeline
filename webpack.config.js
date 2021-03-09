const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'

const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode: mode,

    // entry: './src/index.js',
    // output: {
    //    path: '/lib',
    //    filename: 'yourlib.js',
    //    libraryTarget: 'var',
    //   library: 'EntryPoint'
    // },

    plugins: [new MiniCssExtractPlugin()],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    // without additional settings, this will reference .babelrc
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(sc|c)ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
                // use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },

    devServer: {
        contentBase: './dist'
    },

    devtool: "source-map",
};