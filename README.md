Example repo for https://github.com/standard-things/esm/issues/231

Repro steps:

1. `yarn install`
2. `node index.js`

Throws the error:

```
TypeError: Path must be a string. Received null
    at assertPath (path.js:28:11)
    at dirname (path.js:1364:5)
    at Object.<anonymous> (file:///Users/sergio/temp/example-esm-diraname/node_modules/express/lib/response.js:15:14)
``

Comment out express import in server.js (line 1) and it will work as expected.