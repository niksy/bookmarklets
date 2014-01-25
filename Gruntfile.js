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
		}

	});

	grunt.loadNpmTasks('grunt-markdown');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadTasks('tasks');

	grunt.registerTask('default', ['uglify:dist', 'bookmarkletize:dist', 'markdown:pages']);

};
