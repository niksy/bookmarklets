module.exports = function ( grunt ) {

	grunt.registerMultiTask('bookmarkletize', 'Create bookmarklet.', function() {

		var bookmarkletify = require('bookmarkletify');
		var files = this.files;

		files.forEach(function( file ) {

			var src = grunt.file.read(file.src);
			var dest = bookmarkletify(src);

			grunt.file.write(file.dest, dest);
			grunt.log.writeln(file.src + ' -> ' + file.dest);

		});

	});

};
