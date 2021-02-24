const gulp = require("gulp"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer");

// tareas
gulp.task("sass", () => {
    return gulp
        .src("./styles.scss")
        .pipe(
            sass({
                // seleciona el tipo de salida que va tener el archivo css
                outputStyle: "compressed",
                //outputStyle: "expanded"
                // comenta la ubicacion de la liena del codigo en el archivo original antes de ser compilados
                //sourceComments: true
            })
        )
        .pipe(
            autoprefixer({
                versions: ["last 2 browsers"],
            })
        )
        .pipe(gulp.dest("./"));
});

gulp.task("watch", () => {
    return gulp.watch("./styles.scss", gulp.series("sass"));
});