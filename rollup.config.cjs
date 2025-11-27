const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const postcss = require('rollup-plugin-postcss')
const terser = require('@rollup/plugin-terser')

module.exports = {
  input: 'src/index.js',

  output: [
    {
      file: 'dist/image-tune-plus.umd.js',
      format: 'umd',
      name: 'ImageTunePlus',
      exports: 'default'
    },
    {
      file: 'dist/image-tune-plus.esm.js',
      format: 'es'
    }
  ],

  plugins: [
    resolve(),
    commonjs(),

    postcss({
      inject: true,
      extract: false,
      minimize: true,
      sourceMap: false
    }),

    terser({
      mangle: true,
      compress: false
    })
  ]
}
