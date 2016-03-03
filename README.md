### A generator for a generic es6 module

Scaffold out a simple javascript module which takes advantage of es6 imports.

### Usage

To get started, simply run the following commands:

```
npm install -g yo generator-gulp-webpack-es6
yo gulp-webpack-es6
gulp serve
```

When being served locally, the temporary build files will be located in `.tmp/`

To build a release version, simply run:

```
gulp build
```

The result will be in the `dist` directory.


### Organization

The directory structure of the componenets generated using `gulp-webpack-es6`
is organized so that the configuration files are in the root directory, all of
the code is in the `app` subdirectory, unit tests are in `test` and the compiled
javascript is in `dist`:

```
.
├── app
│   ├── index.html
│   ├── scripts
│   │   ├── foo.js
│   │   └── helper_module.js
│   └── styles
│       └── foo.css
├── bower.json
├── dist
│   ├── index.html
│   └── scripts
│       └── foo.js
├── gulpfile.babel.js
├── package.json
└── webpack.config.js
```
