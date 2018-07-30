const webpack = require('webpack'),
    path = require('path')

const config = {
    context: __dirname + "/src", entry: ['core-js/fn/promise', './index.js'],

    output:
        {
            filename: "bundle.js",
            path: __dirname + "/dist",
        },

    module:
        {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {presets: ['react', 'env', "es2015", "stage-0"]}
                },
                {
                    test: /\.jsx$/, exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {presets: ['react', 'env']}
                },
                {
                    test: /\.(jpe?g|png|gif)$/i, //to support eg. background-image property
                    loader: "file-loader", query: {
                        name: '[name].[ext]',
                        outputPath: 'images/' //the images will be emmited to public/assets/images/ folder //the images will be put in the DOM <style> tag as eg. background: url(assets/images/image.png);
                    }
                },

                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, //to support @font-face rule
                    loader: "url-loader", query: {
                        limit: '10000', name: '[name].[ext]', outputPath: 'fonts/' //the fonts will be emmited to public/assets/fonts/ folder //the fonts will be put in the DOM <style> tag as eg. @font-face{ src:url(assets/fonts/font.ttf);
                    }
                },
                {test: /\.css$/, loaders: ["style-loader", "css-loader"]}],
        },
    plugins: []
};

// if (process.env.NODE_ENV === 'production') {
//     config.plugins.push(
//         new webpack.optimize.UglifyJsPlugin({
//             compress: {
//                 screw_ie8: true
//             }
//         })
//     )
//     babelSettings.plugins.push("transform-react-inline-elements");
//     babelSettings.plugins.push("transform-react-constant-elements");
//
// } else {
//     config.devtool = "#cheap-module-source-map"
//     config.devServer = {
//         contentBase: './public',
//         hot: true,
//         inline: true,
//         host: "0.0.0.0",
//         port: 2708
//     }
//     config.plugins.push(
//         new webpack.HotModuleReplacementPlugin()
//     );
// }

module.exports = env => {
    if (env != undefined) {
        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify(env.NODE_ENV),
                    'APP_URL' : JSON.stringify(env.APP_URL)
                }
            })
        );
    }
    return config;
}


// module.exports = config;