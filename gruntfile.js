module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-modernizr');
  grunt.loadNpmTasks('grunt-ssi');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      options: { livereload: true }, // options
      html: {
        files: ['ui/**/*.html','ui/inc/**/*.inc'],
        tasks: ['ssi:dev']
      },
      sass: {
        files: ['ui/scss/**/*.scss'],
        tasks: ['compass:dev']
      }
    },
    compass: {
      dev: {
        options: {
          config: 'config.rb'
        }
      }
    },
    connect: {
      dev: {
        options: {
          hostname: 'localhost',
          port: 9001,
          base: ['.tmp','ui'],
          open: {
            appName: 'Chrome'
          }
        }
      }
    },
    modernizr: {
      dist: {
        devFile: 'node_modules/grunt-modernizr/lib/modernizr-dev.js'
      }
    },
    ssi: {
      options: {
        baseDir: 'ui',
        cacheDir: '.tmp/.ssiCache'
      },
      dev: {
        options: {
          cache: 'all'
        },         
        files: [{
            expand: true,
            cwd: 'ui',
            src: '**/*.html',
            dest: '.tmp'
        }]
      }
    }
  });

  // Default task(s).
  grunt.registerTask('default', ['ssi:dev','connect:dev','watch']);
};