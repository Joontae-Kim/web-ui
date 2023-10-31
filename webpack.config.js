const path = require('path');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const TerserPlugin = require('terser-webpack-plugin')
const templatePath = path.resolve(__dirname, 'src/template');

module.exports = (env, argv) => {
  console.log(` ~ argv.mode => `, argv.mode);

  return {
    mode: argv.mode,

    output: {
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
        '@scripts': path.resolve(__dirname, 'src/js'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@scss': path.resolve(__dirname, 'src/scss'),
        '@images': path.resolve(__dirname, 'src/images')
      }
    },

    plugins: [
      // 빌드할 때 전에 빌드할 때 미리 만들어져있는 파일이 있다면 삭제하기(기본적으로 변경되는 부분만 바뀐다, 단 npm run dev를 하면 전체 삭제됨)
      new CleanWebpackPlugin({
        cleanAfterEveryBuildPatterns: ['dist']
      }),
      new HtmlBundlerPlugin({
        // path to templates
        entry: 'src/views/',
        js: {
          // output filename of compiled JavaScript
          filename: 'js/[name].[contenthash:8].js',
        },
        css: {
          test: /\.(css|scss|sass|less|styl)$/,
          inline: argv.mode === 'production',
          filename: 'styles/[name].[contenthash:8].css',
        },
        preload: [
          {
            test: /\.(png|jpe?g|webp|svg)$/,
            as: 'image',
          },
          {
            test: /\.(css|scss|less)$/,
            as: 'style',
          },
        ],
      }),
      // manifest파일을 자동으로 생성한다, 별다른 설정없이도 빌드할 때마다 manifest의 파일경로(src)가 바뀌는데 이 바뀌는 경로들이 자동으로 html파일에 적용된다.
      new WebpackManifestPlugin(),
    ],

    module: {
      rules: [
        // Babel 파일 로더 설정
        {
          test: /\.js$/i,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              // presets: [
              //   '@babel/preset-env'
              // ],
              presets: [['@babel/preset-env', {useBuiltIns: "usage", corejs: 3}]],
              plugins: [
                ["@babel/plugin-transform-runtime",{corejs: 3}],
                '@babel/plugin-syntax-dynamic-import'
              ],
            }
          }
        },
        {
          test: /\.(css|sass|scss)$/,
          use: [
            'css-loader',
            'sass-loader'
          ],
        },
        {
          test: /\.(ico|png|jp?g|svg)/,
          type: 'asset',
          use: [{
            loader: 'image-webpack-loader',
            options: {
              pngquant: {
                quality: [.90, .95],
              },
            }
          }],
          parser: {
            dataUrlCondition: {
              maxSize: 5 * 1024, // inline images < 5 KB
            },
          },
          generator: {
            filename: 'img/[name].[hash:8][ext]', // save to file images >= 2 KB
          }
        },
        { // font loader
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          loader: 'file-loader',
        },
        // {
        //   test: /\.html$/,
        //   use: [
        //     {
        //       loader: 'html-loader',
        //       options: {
        //         minimize: true,
        //         interpolation: false
        //       }
        //     }
        //   ]
        // }
      ],
    },

    stats: {
      loggingDebug: [
        'sass-loader'
      ],
    },
  
    // enable live reload
    devServer: {
      static: path.resolve(__dirname, 'dist'),
      watchFiles: {
        paths: ['src/**/*.*'],
        options: {
          usePolling: true,
        },
      },
    },

    optimization: argv.mode !== 'production'
      ? {}
      : {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            parallel: true,
            // minify: () => ({ extractComments: true }),
            terserOptions: {
              format: {
                comments: false,
              },
              compress: {
                drop_console: true
              },
              sourceMap: argv.mode !== 'production'
            }
          })
        ]
      }

  }
};
