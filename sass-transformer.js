const sass = require('sass');

module.exports = {
  process(src, filename) {
    const result = sass.renderSync({ file: filename });
    return result.css.toString('utf8');
  },
};
