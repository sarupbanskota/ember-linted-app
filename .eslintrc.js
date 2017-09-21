module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module"
  },
  extends: ["prettier"],
  env: {
    browser: true
  },
  plugins: ["prettier", "ember-suave"],
  rules: {
    // Formatting
    "prettier/prettier": "error",

    // ES6
    "arrow-parens": ["error", "always"],
    "generator-star-spacing": [
      "error",
      {
        before: false,
        after: true
      }
    ],
    "no-var": "error",
    "object-shorthand": ["error", "always"],
    "prefer-spread": "error",
    "prefer-template": "error",

    // Overrides for Ember
    "new-cap": [
      "error",
      {
        capIsNewExceptions: ["A"]
      }
    ],

    "ember-suave/no-const-outside-module-scope": "error",
    "ember-suave/no-direct-property-access": "error",
    "ember-suave/prefer-destructuring": "error",
    "ember-suave/require-access-in-comments": "error",
    "ember-suave/require-const-for-ember-properties": "error"
  }
};
