# Simple site with Webpack

- Automatically processing many HTML templates
- Automatically inline small images
- Using Sass
- Using JavaScript

Use the [HTML Builder Plugin](https://github.com/webdiscus/html-bundler-webpack-plugin) for Webpack
to compile and bundle source Sass and JavaScript in HTML.

## How to use

```sh
git clone https://github.com/webdiscus/html-bundler-webpack-plugin.git
cd examples/web-ui/
npm install
npm start
```

## References
### Webpack Configuration
- https://github.com/webdiscus/html-bundler-webpack-plugin
- https://maliethy.github.io/posts/webpackConfig-html_scss/
- https://pozafly.github.io/environment/webpack-boilerplate/
- https://yamoo9.gitbook.io/webpack/webpack/config-webpack-dev-environment/webpack-env-compatibility
- https://www.ivarprudnikov.com/static-website-multiple-html-pages-using-webpack-plus-github-example/#blog-post-title
- https://jeonghwan-kim.github.io/series/2019/12/22/frontend-dev-env-babel.html
- https://hackernoon.com/the-right-way-to-utilize-webpack-for-bundling-a-html-page-with-css-and-js
- https://m.blog.naver.com/thdbsgh3443/221638302452
- https://webpack.kr/configuration/optimization/#optimizationprovidedexports


## Color Systems
- Using [material-colors](https://github.com/shuhei/material-colors)
- Refer this official github official page https://github.com/shuhei/material-colors

### How to 
- CSS: Classes for prototyping such as `.color-red-100`, `.bg-red-100`, `.border-red-100`, `.fill-red-100` and `.stroke-red-100`.
- JSON: Raw data of colors. Key names are hypenated. e.g. `deep-purple`
- JavaScript: Color set object provided via AMD, CommonJS or global variable materialColor. Key names are camelCase. e.g. `deepPurple`
- Sass, Scss: Color variables such as `$md-red-100`.

### More...
- https://github.com/mrmrs/colors
  - Better default colors for the web. A collection of skin classes for faster prototyping and nicer looking sites.
