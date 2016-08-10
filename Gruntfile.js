module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        shell: {
            genposts: {
                // generate md files from json posts. Only needed if program is updated. Slugify required.
                command: 'python3 splitter-json.py',
            }
        },
        less: {
            production: {
                options: {
                    paths: ["source"],
                    compress: true,
                    syncImport: true
                },
                files: {
                    "css/app.css": "source/app.less"
                }
            }
        },
        copy: {
            updatevars: {
                files: [
                  // backup before we replace it
                  {src: ['bootstrap/less/variables.less'], dest: 'bootstrap/less/variables.backup', filter: 'isFile'},
                  {expand: true, flatten: true, src: ['source/variables.less'], dest: 'bootstrap/less/', filter: 'isFile'},
                ]
            },
            production: {
                files: [
                  // includes files within path
                  // {expand: true, flatten: true, src: ['bootstrap/dist/css/bootstrap.min.css'], dest: 'httpdocs/css/', filter: 'isFile'},
                  {expand: true, flatten: true, src: ['bootstrap/dist/fonts/*'], dest: 'fonts/', filter: 'isFile'},
                  {expand: true, flatten: true, src: ['bootstrap/dist/js/*.min.js'], dest: 'js/', filter: 'isFile'}

                  // includes files within path and its sub-directories
                  //{expand: true, src: ['path/**'], dest: 'dest/'},

                  // makes all src relative to cwd
                  //{expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},

                  // flattens results to a single level
                  //{expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
                ]
            },
            restore: {
              files: [
                // restore original bootstrap less file
                {src: ['bootstrap/less/variables.backup'], dest: 'bootstrap/less/variables.less', filter: 'isFile'},
              ]
            }
        },
        clean: {
          backup: ['bootstrap/less/variables.backup']
        }
        // exec: {
        //     production: 'cd bootstrap;grunt dist'
        // },
        // watch: {
        //   updatevars: {
        //     files: ['source/*.less'],
        //     tasks: ['copy:updatevars']
        //   },
        //   production: {
        //     files: ['source/*.less'],
        //     tasks: ['less:production','copy:production']
        //   }
        // }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('default', ['shell:genposts','copy:updatevars','less:production','copy:production', 'copy:restore', 'clean:backup']);
};
