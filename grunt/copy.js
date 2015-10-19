module.exports = {
  build: {
    files: [
      // images
      {
        expand: true,
        cwd: '<%= paths.src %>',
				src: 'images/**/*',
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
          "favicon.ico",
          "gerry-email.pdf",
          "CNAME",
          "robots.txt"
				],
        dest: '<%= paths.build %>'
      }
    ]
  }
};
