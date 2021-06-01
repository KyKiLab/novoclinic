"use strict";

import gulp from "gulp";
const smartgrid = require("smart-grid");

gulp.task("smart-grid", (cb) => {
    smartgrid("./src/styles/vendor/import/", {
        outputStyle: "scss",
        filename: "_smart-grid",
        columns: 12, // number of grid columns
        offset: "1.875rem", // gutter width - 30px
        mobileFirst: false,
        mixinNames: {
            container: "container"
        },
        container: {
            fields: "0.9375rem", // side fields - 15px
            maxWidth: "1430px",
        },
        breakPoints: {
            xs: {
                width: "20rem" // 320px
            },
            sm: {
                width: "600px" // 576px
            },
            md: {
                width: "768px" // 768px
            },
            lg: {
                width: "1024px" // 992px
            },
            xl: {
                width: "1200px" // 1200px
            },
            xxl: {
                width: "1440px" // 1200px
            }
        }
    });
    cb();
});
