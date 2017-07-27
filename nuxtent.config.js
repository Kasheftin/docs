const hljs = require('highlight.js')

module.exports = {
  content: [
    ['ency', {
      isPost: false,
      permalink: ':slug',
      routes: [
        {
          name: 'ency-lesson',
          method: 'get'
        },
        {
          name: 'ency',
          method: 'getAll'
        }
      ]
    }],
    ['vuency', {
      isPost: false,
      permalink: ':slug',
      routes: [
        {
          name: 'vuency-lesson',
          method: 'get'
        },
        {
          name: 'vuency',
          method: 'getAll'
        }
      ]
    }]
  ],

  parsers: {
    md: {
      highlight: (code, lang) => {
        if (!(lang && hljs.getLanguage(lang))) return ''
        return hljs.highlight(lang, code, true).value
      }
    }
  },

  api: {
    baseURL: (isProd) => isProd 
      ? 'https://ency.now.sh'
      : 'http://localhost:3000'
  }
}
