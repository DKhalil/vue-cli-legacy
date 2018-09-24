module.exports = {
  outputDir: '../assets',
  configureWebpack: config => {
    config.output.filename = 'vue-cart.js'
  },
  chainWebpack: config => {
    config.optimization.delete('splitChunks')
    config.plugins.delete('html')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.plugins.delete('html-index')
    config.plugins.delete('preload-index')
    config.plugins.delete('prefetch-index')
    config.plugins.delete('html-subpage')
    config.plugins.delete('preload-subpage')
    config.plugins.delete('prefetch-subpage')
  
    if (config.plugins.has('extract-css')) {
      const extractCSSPlugin = config.plugin('extract-css')
      extractCSSPlugin && extractCSSPlugin.tap(() => [{
        filename: 'vue-cart.css',
        chunkFilename: 'vue-cart.css'
      }])
    }
  }
}
