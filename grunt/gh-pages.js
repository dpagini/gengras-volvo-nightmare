module.exports = {
	options: {
		base: "<%= paths.build %>",
		clone: "<%= paths.repo %>",
		message: "Grunt: Publishing Update"
	},
	src: ['*']
};
