module.exports = (grunt) ->
  pkg = grunt.file.readJSON('package.json')

  grunt.initConfig
    clean:
      main: ['_site']
      assets: ['assets']

    jekyll:
      build:
        options:
          trace: true
          base_url: "localhost:9000"

    sass:
      dist:
        options:
          style: 'expanded'
          debugInfo: true
        files: [
          expand: true
          cwd: '_assets/stylesheets'
          src: ['main.scss', 'post-list.scss', 'product.scss', 'home.scss', 'post.scss', 'docs.scss']
          dest: 'assets/stylesheets'
          ext: '.css'
        ]

    copy:
      main:
        expand: true
        cwd: '_assets/javascripts/'
        src: '**'
        dest: 'assets/javascripts/'

    watch:
      options:
        livereload: true
        debounceDelay: 25
        spawn: false
      main:
        files: ['**/*.html', '!**/*.sass', '**/*.md', '!**/*.js', '!node_modules', '!node_modules/**/*.js', '!_data/products.yml', '!_site', '!_site/**/*.*']
        tasks: ['clean:main', 'jekyll']
      assets:
        files: ['**/*.scss', '**/*.js', '!node_modules', '!node_modules/**/*.js', '!_data/products.yml', '!_site', '!_site/**/*.*']
        tasks: ['clean:assets', 'copy', 'sass', 'jekyll']

    connect:
      main:
        options:
          port: 9000
          base: '_site/'
          livereload: true

  grunt.loadNpmTasks name for name of pkg.dependencies when name[0..5] is 'grunt-'

  grunt.registerTask 'default', ['clean', 'copy', 'sass', 'jekyll', 'connect', 'watch']