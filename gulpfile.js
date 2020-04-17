var gulp = require("gulp");
var del = require("del");

gulp.task("clean:output",
  function () {
    return del([
      "build/",
      "coverage/",
      "src/generated/",
      "cache"
    ]);
  });
