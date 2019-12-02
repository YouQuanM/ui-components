module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "autoprefixer": {},
    "postcss-pxtorem": {
      // If you modify rootValue, you also need to modify rem in static/responsive.js
      rootValue: 100, // 1rem=100px
      propWhiteList: ['*','!border'],
      // minPixelValue: '1px', //设置小于多少尺寸将不会进行转换。
      selectorBlackList: ['.px-'] // 过滤掉.px-开头的class，不进行rem转换
    }
  }
}
