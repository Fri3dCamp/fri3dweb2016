module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            production: {
                options: {
                    paths: ["source"],
                    compress: true,
                    syncImport: true
                },
                files: {
                    "httpdocs/css/app.css": "source/app.less"
                }
            }
        },
        copy: {
            updatevars: {
                files: [                    
                  {expand: true, flatten: true, src: ['source/variables.less'], dest: 'bootstrap/less/', filter: 'isFile'},
                ]
            },
            production: {
                files: [
                  // includes files within path
                  // {expand: true, flatten: true, src: ['bootstrap/dist/css/bootstrap.min.css'], dest: 'httpdocs/css/', filter: 'isFile'},
                  {expand: true, flatten: true, src: ['bootstrap/dist/fonts/*'], dest: 'httpdocs/fonts/', filter: 'isFile'},
                  {expand: true, flatten: true, src: ['bootstrap/dist/js/*.min.js'], dest: 'httpdocs/js/', filter: 'isFile'}

                  // includes files within path and its sub-directories
                  //{expand: true, src: ['path/**'], dest: 'dest/'},

                  // makes all src relative to cwd
                  //{expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},

                  // flattens results to a single level
                  //{expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
                ]
            }
        },
        exec: {
            production: 'cd bootstrap;grunt dist'
        },
        watch: {
          updatevars: {
            files: ['source/*.less'],
            tasks: ['copy:updatevars']
          },
          production: {
            files: ['source/*.less'],
            tasks: ['less:production','copy:production']
          }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-exec');
    grunt.registerTask('default', ['copy:updatevars','less:production','copy:production']);
};