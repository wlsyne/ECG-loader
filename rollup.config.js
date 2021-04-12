import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';

// 区分开发环境
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: 'src/main.ts',
  output: [
    {
      name: 'index',
      format: 'es',
      file: 'dist/es/index.js',
    },
    {
      name: 'index',
      format: 'umd',
      file: 'dist/lib/index.js',
    },
  ],
  external: ['react', 'react-dom', /@babel\/runtime/],
  plugins: [
    typescript(),
    babel({
      exclude: '**/node_modules/**',
      babelHelpers: 'runtime',
      extensions,
    }),
    commonjs(),
    postcss({
      extract: true,
      extensions: ['.less', '.css'],
      minimize: true,
      plugins: [autoprefixer()],
    }),
  ],
};
