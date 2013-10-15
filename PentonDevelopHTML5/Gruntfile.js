module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        qunit: {
            all: ['js/specs/**/*.html']
        },
        cssmin: {
            sitecss: {
                options: {
                    banner: '/* My minified css file */'
                },
                files: {
                    'css/site.min.css': [
                        'css/debug/site.css',
                        'css/debug/animations.css',
                        'css/debug/toolbar.css',
                        'css/debug/touch.css',
                        'css/debug/panorama.css',
                        'css/debug/movie.app.home-view.css',
                        'css/debug/movie.app.forms.css',
                        'css/debug/movie-grid.css',
                        'css/debug/movie.app.movie-view.css',
                        'css/debug/movie.app.movies-view.css',
                        'css/debug/movie.app.nav.css'
                    ]
                }
            }
        },
        uglify: {
            options: {
                compress: true
            },
            //    options: {
            //        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            //'<%= grunt.template.today("yyyy-mm-dd") %> */'
            //    },

            applib: {
                src: [
                'js/libs/mbp.js',
                'js/libs/reqwest.js',
                'js/libs/backpack.js',
                'js/libs/deeptissue.js',
                'js/libs/toolbar.js',
                'js/libs/mustache.js',
                'js/libs/panorama.js',
                'js/libs/spa.js',
                'js/libs/rqData.js',
                'js/debug/movie.app.js',
                'js/debug/movie.app.api.js',
                'js/debug/movie.app.grid.js',
                'js/debug/movie.app.home-view.js',
                'js/debug/movie.app.movie-view.js',
                'js/debug/movie.app.movies-view.js',
                'js/debug/movie.app.bootstrap.js'
                ],
                dest: 'js/applib.js'
            },
            lib: {
                src: [
                'js/libs/mbp.js',
                'js/libs/reqwest.js',
                'js/libs/backpack.js',
                'js/libs/deeptissue.js',
                'js/libs/toolbar.js',
                'js/libs/mustache.js',
                'js/libs/panorama.js',
                'js/libs/spa.js',
                'js/libs/rqData.js'
                ],
                dest: 'js/lib.js'
            }

        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-qunit');

    // Default task.
    grunt.registerTask('default', ['qunit', 'uglify', 'cssmin']);

};