'use strict';

module.exports = function(grunt) {

	// Helper function to load pre-defined grunt tasks 
	require('load-grunt-tasks')(grunt);

	// Configures grunt tasks
	grunt.initConfig({

		copy: {
			dist: {
				files: [{
					expand: true,
					cwd: 'src/',
					dest: 'dist/',
					src: [
						'*.html',
						'styles/*.css'
					]
				}]
			}
		},

	  uglify: {
	    dist: {
				files: [{
          expand: true,
          cwd: 'src/scripts',
          dest: 'dist/scripts',
          src: '*.js'
      	}]	    
      }
	  },

		clean: {
			dist: {
				files: [{
					dot: true,
					src: ['dist']
				}]
			}
		},

		connect: {
			dist: {
				options: {
					port: 9000,
					base: 'dist',
					hostname: 'localhost',
					livereload: 35729,
					open: true
				}
			}
		},

		watch: {
			dist: {
				files: [
					'src/**/*.html',
					'src/**/*.js',
					'src/**/*.css'
					],
				tasks: ['build'],
				options: {
					livereload: true
				}
			}
		},

		bowercopy: {
			libs: {
				options: {
          destPrefix: 'src/scripts'
        },
				files: {
					'jquery.js': 'jquery/dist/jquery.js'
				}
			}
		}		


	});

	grunt.registerTask('serve', [
		'build',
		'connect',
		'watch'
		]);

	grunt.registerTask('build', [
		'copy',
		'uglify'
		])

	grunt.registerTask('default', [
		'clean',
		'build'
		]);

};