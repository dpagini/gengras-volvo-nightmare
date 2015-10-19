module.exports = {
    options: {
        baseDir: '<%= paths.src %>',
        cache: 'all',
        cacheDir: '<%= paths.cache %>/ssi'
        // can 'files' be declared at an options level, and just set 'dest' on each task?
    },
    local: {
      files: [{
        expand: true,
        cwd: '<%= paths.src %>',
        src: '**/*.html',
        dest: '<%= paths.local %>'
      }]
    },
    build: {
      files: [{
        expand: true,
        cwd: '<%= paths.src %>',
        src: '**/*.html',
        dest: '<%= paths.build %>'
      }]
    }
};
