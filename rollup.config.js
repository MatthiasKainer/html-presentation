import { terser } from "rollup-plugin-terser";
import resolve from "rollup-plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import filesize from "rollup-plugin-filesize";
import pkg from "./package.json";

const input = `./src/index.ts`

const plugins = [
    typescript(),
    replace({ "Reflect.decorate": "undefined", preventAssignment: true }),
    commonjs(),
    resolve(),
    terser({
        module: true,
        warnings: true,
        mangle: {
            properties: {
                regex: /^__/,
            },
        },
    }),
    filesize({
        showBrotliSize: true,
    }),
]

const esmDemoBundle = {
    input,
    output: {
        file: `public/app.js`,
        format: "esm",
        sourcemap: true
    },
    plugins
};

const mainBundle = {
    input,
    output: {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
    plugins,
  };
  
  const cjsBundle = {
    input,
    output: {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    plugins,
  };
  
  const systemBundle = {
    input,
    output: {
      file: pkg.system,
      format: "system",
      sourcemap: true,
    },
    plugins,
  };

export default [esmDemoBundle, mainBundle, cjsBundle, systemBundle];