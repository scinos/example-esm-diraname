require = require("@std/esm")(module, {
    "esm": "js",
    "cjs": {
        "vars": true
    }
});
require("./server.js").default();