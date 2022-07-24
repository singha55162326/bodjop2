module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
      includeLocales: false,
      enableBridge: true
    }
  },
  "devServer": {
    "port": 8080,
    "proxy": {
      "/api": {
        "target": "http://localhost:3000/api",
        "changeOrigin": true
      }
    }
  }
 
}
