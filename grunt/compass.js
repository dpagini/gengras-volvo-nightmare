module.exports = {
	options: {
		require: ["compass-normalize","susy"],
		sassDir: "<%= paths.src %>/scss",
		cacheDir: "<%= paths.cache %>/scss"
  },
	local: {
		options: {
			cssDir: "<%= paths.local %>/css" // overwrite config.rb
		}
	},
	build: {
		options: {
			cssDir: "<%= paths.build %>/css" // overwrite config.rb
		}
	}
};
