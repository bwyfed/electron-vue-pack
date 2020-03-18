module.exports = {
  pages: {
    index: 'src/main.js',
    subpage: 'src/subpage/main.js'
  },
  pluginOptions: {
    electronBuilder: {
      outputDir: 'dist', // default is dis_electron
      mainProcessFile: '../../../main/index.js'
    }
  }
};
