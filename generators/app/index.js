'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var shelljs = require('shelljs');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();
    
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the exceptional ' + chalk.red('generator-gulp-webpack-es-6') + ' generator!'
    ));

    // get potential default values from user's gitconfig
    // from https://github.com/yeoman/generator/issues/190
    this.gitInfo = {
        name: shelljs.exec('git config user.name', {silent: true}).output.replace(/\n/g, ''),
        email: shelljs.exec('git config user.email', {silent: true}).output.replace(/\n/g, ''),
        github: shelljs.exec('git config github.user', {silent: true}).output.replace(/\n/g, ''),
    };

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: this.appname
    },{

      type: 'input',
      name: 'description',
      message: 'A description of your project',
      default: ''
    }, 
    {
        type: 'input',
        name: 'homepage',
        message: 'The home page of the project',
        default: ''
    },
    { 
        type: 'input',
        name: 'author',
        message: "Author's name",
        default: this.gitInfo.name
    },
    {
        type: 'input',
        name: 'email',
        message: "Author's email",
    default: this.gitInfo.email
    }

    ];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: function () {
      var passedOptions = {
          name: this.props.name,
          description: this.props.description,
          homepage: this.props.homepage,
          author: this.props.author,
          email: this.props.email
    }

    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'), 
      passedOptions
    );

    this.fs.copyTpl(
      this.templatePath('_bower.json'),
      this.destinationPath('bower.json'), 
      passedOptions
    );

    this.fs.copy(
        this.templatePath('gulpfile.babel.js'),
        this.destinationPath('gulpfile.babel.js')
    );

    this.fs.copy(
        this.templatePath('webpack.config.js'),
        this.destinationPath('webpack.config.js')
    );

    this.fs.copy(
        this.templatePath('.eslintrc'),
        this.destinationPath('.eslintrc')
    );

    this.fs.copy(
        this.templatePath('.babelrc'),
        this.destinationPath('.babelrc')
    );

    this.fs.copy(
        this.templatePath('app/index.html'),
        this.destinationPath('app/index.html')
    );

    this.fs.copy(
        this.templatePath('app/scripts/mymodule.js'),
        this.destinationPath('app/scripts/mymodule.js')
    );

    this.fs.copy(
        this.templatePath('app/scripts/helper_module.js'),
        this.destinationPath('app/scripts/helper_module.js')
    );

    this.fs.copy(
        this.templatePath('app/styles/mymodule.css'),
        this.destinationPath('app/styles/mymodule.css')
    );
  },

  install: function () {
    this.installDependencies();
  }
});


