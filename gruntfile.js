module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      minification: {
        options: {
          compress: true
        },
        files: {
          "main.min.css": "main.less"
        }
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

  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("minificar", ["less", "uglify"]);
  grunt.registerTask("default", ["minificar"]);
};
