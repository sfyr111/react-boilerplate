const autoprefixer = require('autoprefixer')
const baseStylePlugins = [
  require('postcss-flexbugs-fixes'),
  autoprefixer({
    browsers: [
      '>1%',
      'last 4 versions',
      'Firefox ESR',
      'not ie < 9', // React doesn't support IE8 anyway
    ],
    flexbox: 'no-2009',
  }),
  require('postcss-plugin-px2rem')({
    rootValue: 37.5, // 这里对应的是750的设计图尺寸
    selectorBlackList: ['html'],
    mediaQuery: true,
    propBlackList: ['font-size'] // 如果要保持font-size不转换
  })
]

module.exports =  {
  basePostcssOption: {
    sourceMap: true,
    ident: 'postcss',
    plugins: () => baseStylePlugins,
  }
}