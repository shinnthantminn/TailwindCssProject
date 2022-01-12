module.exports = {
  content: [],
  theme: {
    extend: {
      screens: {
        'xs': '300px'
      },
      colors:{
        "primary":"#E3F8FF",
        "secondary":"#F9E7DF"
      },
      fontFamily:{
          "body":['Open Sans']
      },
      rotate:{
        "30":"30deg"
      },
      height:{
        "100":"100%"
      },
      width:{
        "100":"100%"
      },
      spacing:{
        "48min":"-48px"
      },
    },
  },
  plugins: [(function({ addUtilities, addComponents, e, prefix, config }) {
    const newUtilities = {
      '.horizontal-tb': {
        writingMode: 'horizontal-tb',
      },
      '.vertical-rl': {
        writingMode: 'vertical-rl'
      },
      '.vertical-lr': {
        writingMode: 'vertical-lr'
      }
    }
    addUtilities(newUtilities)
  })],
}
