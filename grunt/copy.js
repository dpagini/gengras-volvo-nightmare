module.exports = {
  build: {
    files: [
      // images
      {
        expand: true,
        cwd: '<%= paths.src %>',
				src: 'images/*',
				dest: '<%= paths.build %>'
      },
      // js
      {
        expand: true,
        cwd: '<%= paths.src %>',
				src: 'js/*',
				dest: '<%= paths.build %>'
      },
      // other files
      {
        expand: true,
				cwd: '<%= paths.src %>',
				src: [
					"contactengine.php",
          "recaptchalib.php",
          "favicon.ico",
          "gerry-email.pdf"
				],
        dest: '<%= paths.build %>'
      }
    ]
  }
};
