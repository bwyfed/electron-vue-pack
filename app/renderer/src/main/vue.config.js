module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page'
    },
    subpage: {
      entry: 'src/subpage/main.js',
      template: 'public/subpage.html',
      filename: 'subpage.html',
      title: 'Second Page'
    }
  },
  pluginOptions: {
    electronBuilder: {
      outputDir: 'dist', // default is dis_electron
      mainProcessFile: '../../../main/index.js',
      chainWebpackRendererProcess: config => {
        // Chain webpack config for electron renderer process only
        // The following example will set IS_ELECTRON to true in your app
        config.plugin('define').tap(args => {
          console.log('args', args);
          args[0]['IS_ELECTRON'] = true;
          return args;
        });
      }
    }
  }
};
