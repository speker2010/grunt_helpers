module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        htmllint: {
            all: ['src/html/*.html']
        },
        jslint: {
            client: {
                src: [
                    'src/js/**/*.js'
                ],
                directives: {
                    browser: true,
                    predef: [
                        'jQuery',
                        '$'
                    ]
                },
                options: {
                    failOnError: false,
                    devel: true
                }
            }
        },
        scsslint: {
            allfiles: [
                'src/scss/**/*.scss'
            ],
            options: {
                force: true
                //exclude: ['./src/styles/scss/bourbon/**']//если не примут мой pull request то не будет работать
            }
        },
        sass: {
            main: {
                files: {
                    'src/styles/styles.css': 'src/scss/styles.scss'
                }
            }
        },
        watch: {
            styles: {
                files: ['src/scss/**/*.scss'],
                tasks: ['styles']
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'src/styles/*.css',
                        'src/html/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './src/html'
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-html');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-scss-lint');


    grunt.registerTask('default', ['styles', 'html', 'watch', 'browserSync']);
    grunt.registerTask('styles', ['scsslint','sass']);
    grunt.registerTask('html', ['htmllint']);
    grunt.registerTask('js', ['jslint']);

};