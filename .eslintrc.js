module.exports = {
    "env": {
        "browser": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parser": "@babel/eslint-parser",
    "parserOptions": {
        "sourceType": "module",
        "allowImportExportEverywhere": true,
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "requireConfigFile":false
    },
    "plugins": [
        "react"
    ],
    "settings":{
        "react":{
            "version":"detect"
        }
    },
    "rules": {
    }
}
