
    module.exports.decorateConfig = config => {
      return Object.assign({}, config, {
        cursorColor: 'rgba(149, 61, 150, 0.5)',
        foregroundColor: '#464646',
        backgroundColor: '#ffffff',
        borderColor: '#ffffff',
        colors: {
          black: '#ffffff',
          red: '#e0383e',
          green: '#62ba46',
          yellow: '#fbb927',
          blue: '#007aff',
          magenta: '#f74f9e',
          cyan: '#10b9a6',
          white: '#464646',
          lightBlack: '#e0e0e0',
          lightRed: '#f7821c',
          lightGreen: '#62ba46',
          lightYellow: '#fbb927',
          lightBlue: '#007aff',
          lightMagenta: '#f74f9e',
          lightCyan: '#10b9a6',
          lightWhite: '#272727',
        },
      });
    };
  