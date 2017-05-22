module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
          server: {
            options: {
              target: 'http://localhost:8000',
              keepalive: true
            },
          },
        }
    });

};