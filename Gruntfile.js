module.exports = function ( grunt ) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		copy: {
			originals: {
				files: [{
					expand: true,
					cwd: 'src',
					src: '**/*.original.js',
					dest: 'dist'
				}]
			}
		},

		uglify: {
			dist: {
				files: [{
					expand: true,
					cwd: 'src',
					src: [
						'*.js',
						'!*.original.js',
						'!facebook-like.js',
						'!gplus-one.js'
					],
					dest: 'dist'
				}]
			},
			browserify: {
				files: [{
					expand: true,
					cwd: 'src/out',
					src: ['*.js'],
					dest: 'dist'
				}]
			}
		},

		bookmarkletize: {
			dist: {
				files: [{
					expand: true,
					cwd: 'dist',
					src: ['*.js','!*.original.js'],
					dest: 'dist'
				}]
			}
		},

		markdown: {
			pages: {
				options: {
					template: 'dist/pages/template.jst',
					postCompile: function ( src, context ) {

						var fs = require('fs');
						var files = src.match(/(dist\/.+.js)/gm);

						files.forEach(function( file ){

							var contents = fs.readFileSync(file,'utf-8');
							var r = new RegExp('{{ ' + file + ' }}','gm');

							src = src.replace(r, '<textarea rows="10" cols="40">' + contents + '</textarea>');

						});

						return src;

					}
				},
				files: [{
					expand: true,
					flatten: true,
					cwd: 'dist/pages',
					src: ['*.md'],
					dest: 'dist/pages',
					ext: '.html'
				}]
			}
		},

		jscs: {
			main: {
				options: {
					config: '.jscsrc'
				},
				files: {
					src: [
						'src/**/*.js',
						'!src/out/**/*.js',
						'!src/**/*.original.js'
					]
				}
			}
		},

		jshint: {
			main: {
				options: {
					jshintrc: '.jshintrc'
				},
				src: [
					'src/**/*.js',
					'!src/out/**/*.js',
					'!src/**/*.original.js'
				]
			}
		},

		browserify: {
			dist: {
				files: [{
					expand: true,
					cwd: 'src',
					src: [
						'facebook-like.js',
						'gplus-one.js'
					],
					dest: 'src/out'
				}]
			}
		},
		
		bump: {
			options: {
				files: ['package.json'],
				updateConfigs: ['pkg'],
				commit: true,
				commitMessage: 'Release %VERSION%',
				commitFiles: ['-a'],
				createTag: true,
				tagName: '%VERSION%',
				tagMessage: '',
				push: false
			}
		}

	});

	grunt.loadNpmTasks('grunt-markdown');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-jscs');
	grunt.loadNpmTasks('grunt-bump');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadTasks('tasks');

	grunt.registerTask('stylecheck', ['jshint:main', 'jscs:main']);
	grunt.registerTask('default', ['stylecheck', 'browserify:dist', 'uglify:dist', 'uglify:browserify', 'bookmarkletize:dist', 'markdown:pages']);
	grunt.registerTask('releasePatch', ['bump-only:patch', 'default', 'bump-commit']);
	grunt.registerTask('releaseMinor', ['bump-only:minor', 'default', 'bump-commit']);
	grunt.registerTask('releaseMajor', ['bump-only:major', 'default', 'bump-commit']);

};
