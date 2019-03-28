// http://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/standard"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // allow paren-less arrow functions
    "arrow-parens": 0,
    // allow async-await
    "generator-star-spacing": "off",
    // 关 缩进
    indent: 0,
    // 关 最后一行必须留空
    "eol-last": 0,
    // 关 函数定义时括号前面要不要有空格
    "space-before-function-paren": 0,
    quotes: ["error", "single"],
    // 尾分号
    semi: ["error", "never"],
    // 关 定义数组或对象最后多余的逗号
    "comma-dangle": 0,
    "no-unused-vars": 0,
    "template-curly-spacing": "off",
    // 关 要求或禁止在函数标识符和其调用之间有空格
    "func-call-spacing": 0,
    // 关 强制圆括号内空格的一致性
    "space-in-parens": 0,
    // 关 && || 运算符要带()
    "no-mixed-operators": 0
  },
  globals: {
    // 小程序
    App: true,
    Page: true,
    wx: true,
    getApp: true,
    getPage: true,
    getCurrentPages: true,
    requirePlugin: true
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
