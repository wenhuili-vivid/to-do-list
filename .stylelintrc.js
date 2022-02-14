module.exports = {
    extends: [
        "stylelint-config-recommended",
        "stylelint-config-styled-components"
    ],
    overrides: [
        {
            files: ['**/*.js'],
            customSyntax: '@stylelint/postcss-css-in-js',
        },
    ]
};

