// postCss配置文件
module.exports = {
  // 配置要使用的postCss插件
  plugins: {
    // 配置使用postcss-pxtorem插件
    // 作用:把px转为rems
    'postcss-pxtorem': {
      rootValue ({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      // 配置要转换css属性
      // 表示所有
      propList: ['*']
    }
  }
}
