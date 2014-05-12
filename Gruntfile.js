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
	      files: {
	        'dist/scripts/app.js': ['src/scripts/app.js']
	      }
	    }
	  }

	});

	grunt.registerTask('default', [
		'copy',
		'uglify'
		]);

};