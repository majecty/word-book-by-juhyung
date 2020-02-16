module.exports = {
  env: {
    es6: true
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"]
      }
    }
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/jsx-filename-extension": [2, { extensions: [".tsx", "ts"] }],
    "import/extensions": [2, "never"],
    "react/jsx-curly-newline": "off",
    // ESlint does not handle type import
    "no-unused-vars": "off"
  }
};
