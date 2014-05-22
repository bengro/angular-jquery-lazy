module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'dist/angular.jquery.lazy.min.js': ['angular-jquery-lazy.js']
        }
      }
    }

  });

};