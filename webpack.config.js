{
    "mode": "development",
    "entry": __dirname + "src/app.js",
    "output": {
        "path": __dirname + '/dist',
        "filename": "bundle.js"
    },
    "module": {
        "rules": [
            {
                "test": /\.scss$/,
                "use": [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
}
