const path = require('path');

module.exports = {
    entry : './src/app.js',
    output : {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
    },
    mode:'production',
    module:{
        rules:[
            // style and css loader 
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    }
}