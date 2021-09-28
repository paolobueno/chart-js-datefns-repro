# `react-chartjs-2` adapter overwriting issue repro

> ✨ Bootstrapped with Create Snowpack App (CSA).

This repo is a reproduction of an issue that does not allow usage of `chartjs-adapter-date-fns` and likely other date adapters with `react-chartjs-2`.

These adapters affect the `chart.js` library by calling `_adapters._date.override()`, which modifies the prototype of a default internal stub adapter that throws on invocation of any of its methods.

Currently `react-chartjs-2` seems to ignore this override call when used.

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like "@snowpack/plugin-webpack" to your `snowpack.config.mjs` config file.

### npm test

Launches the application test runner.
Run with the `--watch` flag (`npm test -- --watch`) to run in interactive watch mode.
