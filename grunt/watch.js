module.exports = {
  options: { livereload: true }, // options
  html: {
    files: [
      '<%= paths.src %>/**/*.html',
      '<%= paths.src %>/inc/**/*.inc'
    ],
    tasks: ['ssi']
  },
  scss: {
    files: [
      '<%= paths.src %>/scss/**/*.scss'
    ],
    tasks: ['compass']
  }
};
