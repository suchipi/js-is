# `@suchipi/is`

Functions for testing the types of JavaScript values, cross-realm. Has testers for all standard built-in objects/values.

## Usage

```ts
import { is } from "@suchipi/is";

console.log(is.Object({})); // true
console.log(is.Array([])); // true
console.log(is.String(null)); // false

// etc
```

## Available functions

- `String`
- `string` (alias of `String`)
- `Number` (does not return true for `NaN`)
- `number` (alias of `Number`)
- `Boolean`
- `boolean` (alias of `Boolean`)
- `BigInt`
- `bigint` (alias of `BigInt`)
- `Symbol`
- `symbol` (alias of `Symbol`)
- `null`
- `undefined`
- `void`
- `Object` (does not return true for `null`)
- `object` (alias of `Object`)
- `Array`
- `Function`
- `function` (alias of `Function`)
- `tagged` (Object toString tag checker)
- `instanceOf` (same as `instanceof`)
- `Error` (matches Error subclasses, too)
- `Infinity`
- `NegativeInfinity`
- `NaN`
- `Date`
- `RegExp`
- `Map`
- `Set`
- `WeakMap`
- `WeakSet`
- `ArrayBuffer`
- `SharedArrayBuffer`
- `DataView`
- `TypedArray`
- `Int8Array`
- `Uint8Array`
- `Uint8ClampedArray`
- `Int16Array`
- `Uint16Array`
- `Int32Array`
- `Uint32Array`
- `Float32Array`
- `Float64Array`
- `Promise` (matches any thenable)
- `Generator` (only guaranteed to match generators that weren't compiled with Babel or etc)
- `GeneratorFunction` (only guaranteed to match generator functions that weren't compiled with Babel or etc)
- `AsyncFunction` (only guaranteed to match async functions that weren't compiled with Babel or etc)
- `AsyncGenerator` (only guaranteed to match async generators that weren't compiled with Babel or etc)
- `AsyncGeneratorFunction` (only guaranteed to match async generator functions that weren't compiled with Babel or etc)

## Notes

Two utility types, `TypedArray` and `TypedArrayConstructor`, are also exported from this package.

## License

MIT
