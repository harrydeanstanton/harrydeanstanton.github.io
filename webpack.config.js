var path = require("path");

module.exports={
    entry:"./js/.js",
    output: { filename: "./js/out.js", path: path.resolve(__dirname) },
    watch: true,
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [['env', {targets: {browsers: ['ie 10']}}]]
                }
            }
        }]
    }
};