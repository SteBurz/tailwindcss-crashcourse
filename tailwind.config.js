module.exports = {
  purge: {
    enabled: true,
    content:[
    './dist/*.html',
    './src/style.css',
    './dist/main.js'
  ]
  },
  darkMode: false, // or 'media' or 'class'
  plugins: [],
  theme: {
    fontFamily: {
      'nunito-bold': ['nunito-bold'],
      'nunito-regular': ['nunito-regular']
    },
    screens: {
      'mobile': '425px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('images/hero-pattern.png')",
        'portfolio-pattern': "url('images/portfolio-pattern.png')",
        'about-pattern': "url('images/about-pattern.png')",
        'form-pattern': "url('images/form-pattern.png')",
        'portfolio-work-background': "url('images/portfolio-work-background.svg')"
       }),
      colors: {
        'primary': '#83D483',
        'secondary': '#6C6C6C',
        'formBackground': '#73D48C',
        'formFieldBorder': '#26547C',
        'formButtonBackground': '#EF476F'
      },
      width: {
          '495': '495px'
      },
      height: {
        '285': '285px'
      }
    }
  }
}
