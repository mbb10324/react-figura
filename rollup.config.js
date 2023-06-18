import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";

const rollupConfig = {
    input: "./src/lib/index.js", //source
    output: [
        {
            file: "dist/index.es.js", //ecma module
            format: "es",
            exports: "named",
        },
    ],
    plugins: [
        //bundles css into js and minifys
        postcss({
            plugins: [],
            minimize: true,
        }),
        //makes react work
        babel({
            exclude: "node_modules/**",
            presets: ["@babel/preset-react"],
        }),
        //ensures our peer deps are always required
        external(),
        //ensures we can find the users node_modules
        resolve(),
        //minifys our js
        terser(),
    ],
}

