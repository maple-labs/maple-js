import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import dts from 'rollup-plugin-dts'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        name: 'maple-js',
        file: 'dist/index.umd.js',
        format: 'umd',
        sourcemap: false
      },
      { file: 'dist/index.js', format: 'cjs', sourcemap: false },
      { file: 'dist/index.esm.js', format: 'es', sourcemap: false }
    ],
    plugins: [
      json(),
      typescript({ sourceMap: false, tsconfig: './tsconfig.typechain.json' }),
      nodeResolve(),
      commonjs()
    ]
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es', sourcemap: false }],
    plugins: [dts(), typescript({ sourceMap: false })]
  }
]
