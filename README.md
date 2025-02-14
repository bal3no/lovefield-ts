# Lovefield-TS
![Build Status](https://github.com/arthurhsu/lovefield-ts/actions/workflows/ga.yaml/badge.svg)
[![codecov](https://codecov.io/gh/arthurhsu/lovefield-ts/branch/master/graph/badge.svg?token=IBWJVD4VIJ)](https://codecov.io/gh/arthurhsu/lovefield-ts)

[Lovefield](https://github.com/google/lovefield) Typescript port and
modernization.

The port attempts to maintain API compatibility as much as possible.

## How to use this library?

[Documentation of how to use this library can be found here](docs/index.md).

## Expectations

### Supported

* Most of original Lovefield features (except Firebase and static schema).
* NEW: NodeJS support: NodeJS 10+ will be supported (with memory store only).

### Unsupported

* Legacy browsers and technologies. Please assume ES6 throughout.
  * As of Apr 2020, Chrome 60+, Firefox 60+, Safari 10+, Edge are supported.
  * Currently only continuously tested on latest Chrome given resource shortage.
* Firebase is no longer supported.
  * This project is not sponsored by Google and the developers do not have
    unlimited access for this project.
  * Firebase API changed and legacy Lovefield code cannot be used.
* Static schema: it was designed for use with Closure compiler. Since the tool
  chain has moved to TypeScript, it makes no sense to support it.

### Dist changes

* Lovefield-TS no longer ships minified JavaScript file. Instead, it provides
  * A concatenated TypeScript file that you can directly include in your
    TypeScript project and compile to any module system you would like to use.
  * Pre-compiled ES5/ES6 modules with source map and TypeScript declarations.
    Just import it and use your existing packing/minifying config.
* Lovefield-TS no longer uses flags to do compile-time control. Instead, a
  runtime options object will be used. The interface is defined in
  `lib/base/lovefield_options.ts`. Users are supposed to define an object
  following that interface and set options via the new API `lf.options.set()`.
  * By default, an options object not providing error message explanations is
    provided for better minify performance. If you wish to include detailed
    error message in your package, use or copy `testing/debug_options.ts`.

### API changes

* All namespaces are flattened. For example:
  * `lf.Order` is flattened to `Order`
  * `lf.schema.DataStoreType` is flattened to `DataStoreType`

  Please note, in ES6 modules, we usually do
  ```javascript
  import * as lf from './node_modules/lovefield-ts/dist/es6/lf.js';
  const order = lf.Order.DESC;  // still prefixed by lf, ES6 module syntax
  ```

  In CommonJS module system used by Node.js, we usually do
  ```javascript
  const lf = require('lovefield-ts');
  const order = lf.Order.DESC;  // still prefixed by lf, CommonJS syntax.
  ```

* TypeScript users cannot refer column by name, use `.col()` API.
  ```javascript
  const item = db.getSchema().table('Item');

  // Use .col() API to refer to column here.
  // TypeScript indexed property forces everything to be typed the same.
  // This is a language limit and not much Lovefield authors can do here.
  //
  // item['orderDate']  <== this will cause type errors
  // item.col('orderDate')  <== this will give perfect type checking
  return db.select().from(item).orderBy(item.col('orderDate')).exec();
  ```

### Test changes

* API tester and performance benchmarks are implemented in ES6 and removed
  dependencies on Closure Libraries completely. They can be found in
  `external` directory. Currently they are not part of the automated test
  process yet.


### Directory structures

* `lib`: Lovefield main library source code
* `testing`: Facility code used for testing
* `tests`: Tests for Lovefield main library
* `docs`: Documents
* `out`: Temporary directory used to store intermediate files from tool chain
* `dist`: Generated dist files
* `coverage`: Code coverage report generated by Karma
* `external`: Demos and tests that test Lovefield-ts as an external module
