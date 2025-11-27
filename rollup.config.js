import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'
import postcss from 'rollup-plugin-postcss'

export default [
  // UMD
  {
    input: 'src/index.js',
    output: {
      file: 'dist/image-tune-plus.umd.js',
      format: 'umd',
      name: 'ImageTunePlus',
      exports: 'default'
    },
    plugins: [
      resolve(),
      commonjs(),
      postcss({ inject: true, minimize: true }),
      terser()
    ]
  },

  // ES Module
  {
    input: 'src/index.js',
    output: {
      file: 'dist/image-tune-plus.esm.js',
      format: 'es'
    },
    plugins: [
      resolve(),
      commonjs(),
      postcss({ inject: true, minimize: true }),
      terser()
    ]
  }
]
