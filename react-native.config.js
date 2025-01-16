module.exports = {
	dependency: {
		platforms: {
			ios: {
				// Commented due to error: "Package react-native-sqlite-storage contains invalid configuration: "dependency.platforms.ios.project" is not allowed."
				// project: './platforms/ios/SQLite.xcodeproj'
			},
			android: {
				sourceDir: './platforms/android'
			},
			windows: {
				sourceDir: './platforms/windows',
				solutionFile: 'SQLitePlugin.sln',
				projects: [
				  {
					projectFile: 'SQLitePlugin/SQLitePlugin.vcxproj',
					directDependency: true,
				  }
				],
			}
		}
	}
}
