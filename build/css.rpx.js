const postcss = require('postcss');

module.exports = postcss.plugin('jmazm-postcss-rpx', options => (css, result) => {
	result.root = postcss.parse(css.toString().replace(/\b(\d+(\.\d+)?)rpx\b/g, ($0, $1) => `${$1 / 100}rem`));
});
