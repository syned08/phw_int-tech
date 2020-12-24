let project_folder = 'dist';
let source_code = 'src';

let path = {
    build: {
        html: project_folder + '/',
        css: project_folder + '/css/',
        js: project_folder + '/js/',
        img: project_folder + '/img/'
    },
    src: {
        html: [source_code + '/*.html', '!' + source_code + '/_*.html'],
        css: source_code + '/styles/*.scss',
        js: source_code + '/js/script.js',
        img: source_code + '/img/**/*.{jpg,png,mp3}'
    },
    watch: {
        html: source_code + '/**/*.html',
        css: source_code + '/styles/**/*.scss',
        js: source_code + '/js/**/*.js',
        img: source_code + '/img/**/*.{jpg,png}'
    },
    clean: './' + project_folder + '/' 
}

let {src,dest}  = require('gulp'),
    gulp = require('gulp'),
    browsersync = require('browser-sync').create(),
    fileinclude = require('gulp-file-include'),
    del = require('del'),
    scss = require('gulp-sass'),
    cleanCss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify-es').default,
    imagemin = require('gulp-imagemin'),
    concat = require('gulp-concat'),
    htmlmin = require('gulp-htmlmin');

function browserSync(params) {
    browsersync.init({
        server: {
            baseDir: './' + project_folder + '/'
        }, 
        port: 3000,
        notify: false,
        open: false
    })
}

function html() {
    return src(path.src.html)
    .pipe(fileinclude())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream())
}

function css() {
    return src(path.src.css)
    .pipe(concat('main.min.css'))
    .pipe(scss({
        outputStyle: 'expanded'
    }))
    .pipe(cleanCss())
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream())
}

function js() {
    return src(path.src.js)
    .pipe(fileinclude())
    .pipe(uglify())
    .pipe(rename({
        extname: '.min.js'
    }))
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream())
}

function images() {
    return src(path.src.img)
    .pipe(imagemin({
        progressive: true,
        optimizationLevel: 3
    }))
    .pipe(dest(path.build.img))
    .pipe(browsersync.stream())
}

function watchFiles(params) {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], images);
}

function clean(params) {
    return del(path.clean);
}

let build = gulp.series(clean, gulp.parallel(js, css, html, images));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
