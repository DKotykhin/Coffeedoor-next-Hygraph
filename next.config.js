const nextTranslate = require('next-translate');

module.exports = nextTranslate({
    images: {
        domains: ['media.graphassets.com'],
    },
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });

        return config;
    }
});