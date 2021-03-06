module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    "postcss-pxtorem": {
       // If you modify rootValue, you also need to modify rem in static/responsive.js
       rootValue: 100, // 1rem=100px
       propWhiteList: ['*','!border','!font-size'],
       // minPixelValue: '1px', //设置小于多少尺寸将不会进行转换。
       selectorBlackList: ['.px-'] // 过滤掉.px-开头的class，不进行rem转换
    }
  }
}
