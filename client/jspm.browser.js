SystemJS.config({
  baseURL: "/",
  paths: {
    "github:*": "client/jspm_packages/github/*",
    "npm:*": "client/jspm_packages/npm/*",
    "ccdaview/": "client/"
  }
});
