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
					src: ['**/*.js','!**/*.original.js'],
					dest: 'dist'
				}]
			},
			deuglify: {
				options: {
					beautify: {
						beautify: true
					}
				},
				files: [{
					expand: true,
					cwd: 'src',
					src: '**/*.original.js',
					dest: 'src/original-expanded'
				}]
			}
		},

		bookmarkletize: {
			dist: {
				files: [{
					expand: true,
					cwd: 'dist',
					src: ['**/*.js','!**/*.original.js'],
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
						'src/**/*.js'
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
					'src/**/*.js'
				]
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
	grunt.loadTasks('tasks');

	grunt.registerTask('stylecheck', ['jshint:main', 'jscs:main']);
	grunt.registerTask('default', ['stylecheck', 'uglify:dist', 'bookmarkletize:dist', 'markdown:pages']);
	grunt.registerTask('releasePatch', ['bump-only:patch', 'default', 'bump-commit']);
	grunt.registerTask('releaseMinor', ['bump-only:minor', 'default', 'bump-commit']);
	grunt.registerTask('releaseMajor', ['bump-only:major', 'default', 'bump-commit']);

};
