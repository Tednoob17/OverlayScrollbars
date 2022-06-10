const path = require('path');
const { babel: rollupBabelInputPlugin } = require('@rollup/plugin-babel');
const { terser: rollupTerser } = require('rollup-plugin-terser');
const rollupTs = require('rollup-plugin-ts');

const babelConfigUmd = require('./babel.config.umd');
const babelConfigEsm = require('./babel.config.esm');
const { rollupCommonjs, rollupResolve, rollupAlias } = require('./pipeline.common.plugins');
const { extensions } = require('../../resolve.config.json');

const createOutputWithMinifiedVersion = (output, esm, buildMinifiedVersion) =>
  [output].concat(
    buildMinifiedVersion
      ? [
          {
            ...output,
            compact: true,
            file: output.file.replace('.js', '.min.js'),
            sourcemap: false,
            plugins: [
              ...(output.plugins || []),
              rollupTerser({
                ecma: esm ? 2015 : 5,
                safari10: true,
                mangle: {
                  safari10: true,
                  properties: {
                    regex: /^_/,
                  },
                },
                compress: {
                  evaluate: false,
                },
              }),
            ],
          },
        ]
      : []
  );

module.exports = (esm, options, declarationFiles = false) => {
  const { rollup, paths, versions, alias } = options;
  const { output: rollupOutput, input, plugins = [], ...rollupOptions } = rollup;
  const { name, file, globals, exports, sourcemap: rawSourcemap, ...outputConfig } = rollupOutput;
  const { minified: buildMinifiedVersion } = versions;
  const { src: srcPath, dist: distPath, types: typesPath } = paths;
  const sourcemap = rawSourcemap;

  const output = createOutputWithMinifiedVersion(
    {
      ...outputConfig,
      ...(!esm && {
        name,
        globals,
        exports,
      }),
      sourcemap,
      format: esm ? 'esm' : 'umd',
      generatedCode: esm ? 'es2015' : 'es5',
      file: path.resolve(distPath, `${file}${esm ? '.esm' : ''}.js`),
    },
    esm,
    buildMinifiedVersion
  );

  return {
    input,
    output,
    ...rollupOptions,
    plugins: [
      rollupAlias(alias),
      rollupTs({
        tsconfig: (resolvedConfig) => ({
          ...resolvedConfig,
          declaration: declarationFiles,
          declarationDir: typesPath,
        }),
        include: ['*.ts+(|x)', '**/*.ts+(|x)'],
        exclude: ['node_modules', '**/node_modules/*'],
      }),
      rollupResolve(srcPath),
      rollupCommonjs(sourcemap),
      rollupBabelInputPlugin({
        ...(esm ? babelConfigEsm : babelConfigUmd),
        assumptions: {
          iterableIsArray: true,
          noNewArrows: true,
          noClassCalls: true,
          ignoreToPrimitiveHint: true,
          ignoreFunctionLength: true,
        },
        plugins: [
          '@babel/plugin-transform-runtime',
          ['@babel/plugin-proposal-class-properties', { loose: true }],
          ['@babel/plugin-proposal-private-methods', { loose: true }],
        ],
        babelHelpers: 'runtime',
        shouldPrintComment: () => false,
        caller: {
          name: 'babel-rollup-build',
        },
        extensions,
      }),
      ...plugins,
    ],
  };
};
