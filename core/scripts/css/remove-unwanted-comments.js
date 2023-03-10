// On import, remove the comments, so they don't appear as useless comments at the top of the autogenerated css files.
module.exports = opts => {
  return {
    postcssPlugin: 'remove-unwanted-comments',
    Once(css) {
      css.walk(node => {
        if (node.type === 'comment') {
          node.remove();
        }
      })
    }
  }
}
module.exports.postcss = true
