module.exports = {
	'default': ['local'],

	'local': [
    'clean:local',
    'ssi:local',
    'compass:local',
    'connect:local',
    'watch'
	],
  // this task will build the project, and publish to gh-pages branch on github
  'publish': [
      'clean:build',
      'ssi:build',
      'compass:build',
      'copy:build',
      'gh-pages'
  ]
};
