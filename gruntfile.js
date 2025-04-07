module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      files: {
        "main.css": "main.less"
      },
      options: {
        compress: true
      }
    },
    uglify: {
      target: {
        files: {
          "main.min.js": "main.js"
        }
      }
    }
  });
};

grunt.loadNpmTasks("grunt-contrib-less");
grunt.loadNpmTasks("grunt-contrib-uglify");

grunt.registerTask("default", ["grunt-contrib-less", "grunt-contrib-uglify"]);
