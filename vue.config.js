const path = require('path')

module.exports = {
    // 生产环境不需要map文件
    productionSourceMap: false,

    // 打包路径
    outputDir: `build_${process.env.VUE_APP_OUTPUT_DIR || ''}`,

    integrity: true,

    chainWebpack: config => {
        // 设置导入前缀映射
        config.resolve.alias.set('@', path.join(__dirname, 'src'))
    },

    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/styles/var.scss";`
            }
        }
    }
}
