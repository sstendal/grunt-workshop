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
						'*.html'
					]
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
			},

			src: {
				options: {
					port: 9000,
					base: 'src',
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
		},

		useminPrepare: {
 			html: 'src/index.html'
		},

		usemin: {
 			html: 'dist/index.html'
		}		

	});

	// Starts webserver and reloads browser when something changes
  grunt.registerTask('serve', function(target) {

		var tasks;
		if(target === 'dist') {
			tasks = [
				'build',
				'connect:dist',
				'watch'
				];
		} else {
			tasks = [
				'build',
				'connect:src',
				'watch'
				];
		}

		grunt.task.run(tasks);
	});

	grunt.registerTask('build', [
		'copy',
		'useminPrepare',
		'concat',
		'uglify',
		'cssmin',
		'usemin'
		])

	grunt.registerTask('default', [
		'clean',
		'build'
		]);

};