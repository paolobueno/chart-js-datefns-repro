/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: {url: "/", static: true},
    src: {url: "/dist"},
  },
  alias: {
    "~/": "./src/",
  },
  exclude: ["**/node_modules/**/*", "**/*.test.ts?(x)"],
  plugins: [
    "@snowpack/plugin-webpack",
    "@snowpack/plugin-react-refresh",
    "@snowpack/plugin-typescript",
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    {
      match: "all",
      src: "(?!.*(.svg|.gif|.json|.jpg|.jpeg|.png|.js)).*",
      dest: "/index.html",
    },
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  env: {
    NODE_ENV: process.env.NODE_ENV,
  },
  packageOptions: {
    polyfillNode: true, // for node packages to run during testing using es imports
  },
};
