module.exports = (grunt) ->
  pkg = grunt.file.readJSON('package.json')

  grunt.initConfig
    clean:
      main: ['_site']

    jekyll:
      server:
        options:
          src: "src"
          dest: "_site"
          trace: true

    watch:
      options:
        livereload: true
      dev:
        files: ['src/', '!src/_data']
        tasks: ['clean', 'jekyll']

    connect:
      main:
        options:
          port: 9000
          base: '_site/'
          livereload: true

  grunt.loadNpmTasks name for name of pkg.dependencies when name[0..5] is 'grunt-'

  grunt.registerTask 'default', ['clean', 'jekyll', 'connect', 'watch']