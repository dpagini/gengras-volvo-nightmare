module.exports = {
	options: {
		livereload: true,
		hostname: "localhost",
    port: 9001,
    open: {
      appName: 'Chrome'
    }
	},
	local: {
		options: {
			base: ["<%= paths.local %>","<%= paths.src %>"],
		}
	}
};
