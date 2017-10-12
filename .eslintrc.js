module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],

    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "modules": true
        }
    },

    "rules": {
        "jsx-a11y/href-no-hash": 0,
        "import/no-unresolved": 0,
        "linebreak-style": 0,
        "space-in-parens": 0,
        "react/prefer-stateless-function": 0,
        "indent": 0,
        "react/jsx-filename-extension": 0,
        "react/jsx-indent": 0,
        "no-undef": 0,
        "import/extensions": 0,
        "arrow-parens": 0,
        "no-console": 0,
        "no-trailing-spaces": 0,
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "quote-props": 0,
        "global-require": 0,
        "import/no-extraneous-dependencies":0,
        "no-unused-vars": 0,
        "max-len": 0,
        "no-use-before-define": 0,
        "react/no-unescaped-entities": 0,
        "react/jsx-indent-props": 0,
        "quotes": 0,
        "import/prefer-default-export": 0,
        "camelcase": 0,
        "react/prop-types": 0,
    }
};