import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import dts from 'rollup-plugin-dts'

const production = process.env.NODE_ENV === 'production'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        name: 'maple-js',
        file: 'dist/index.umd.js',
        format: 'umd',
        sourcemap: !production
      },
      { file: 'dist/index.js', format: 'cjs', sourcemap: !production },
      { file: 'dist/index.esm.js', format: 'es', sourcemap: !production }
    ],
    plugins: [typescript({ sourceMap: !production }), nodeResolve(), commonjs()]
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es', sourcemap: !production }],
    plugins: [dts(), typescript({ sourceMap: !production })]
  },
  {
    input: 'scripts/build-typechain.js',
    output: [
      {
        file: 'dist/scripts/build-typechain.js'
      }
    ]
  }
]
