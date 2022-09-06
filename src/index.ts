export type TypedArray =
  | Int8Array
  | Uint8Array
  | Uint8ClampedArray
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Float32Array
  | Float64Array;

export type TypedArrayConstructor =
  | Int8ArrayConstructor
  | Uint8ArrayConstructor
  | Uint8ClampedArrayConstructor
  | Int16ArrayConstructor
  | Uint16ArrayConstructor
  | Int32ArrayConstructor
  | Uint32ArrayConstructor
  | Float32ArrayConstructor
  | Float64ArrayConstructor;

const ObjectPrototypeToString = Object.prototype.toString;

function getTag(value: any): string {
  return (
    value[Symbol.toStringTag] ||
    ObjectPrototypeToString.call(value).slice(8, -1)
  );
}

const gen = function* () {};
const Generator = gen().constructor;
const GeneratorFunction = gen.constructor;
const AsyncFunction = async function () {}.constructor;
const asgen = async function* () {};
const AsyncGenerator = asgen().constructor;
const AsyncGeneratorFunction = asgen.constructor;

export const is = {
  ["string"](value: any): value is string {
    return typeof value === "string";
  },

  ["String"](value: any): value is string {
    return typeof value === "string";
  },

  ["number"](value: any): value is number {
    return typeof value === "number" && !is.NaN(value);
  },

  ["Number"](value: any): value is number {
    return typeof value === "number" && !is.NaN(value);
  },

  ["boolean"](value: any): value is boolean {
    return typeof value === "boolean";
  },

  ["Boolean"](value: any): value is boolean {
    return typeof value === "boolean";
  },

  ["bigint"](value: any): value is bigint {
    return typeof value === "bigint";
  },

  ["BigInt"](value: any): value is BigInt {
    return typeof value === "bigint";
  },

  ["symbol"](value: any): value is symbol {
    return typeof value === "symbol";
  },

  ["Symbol"](value: any): value is symbol {
    return typeof value === "symbol";
  },

  ["null"](value: any): value is null {
    return value === null;
  },

  ["undefined"](value: any): value is undefined {
    return typeof value === "undefined";
  },

  ["void"](value: any): value is undefined | null {
    return value == null;
  },

  ["object"](
    value: any
  ): value is { [key: string | number | symbol]: unknown } {
    return typeof value === "object" && value != null;
  },

  ["Object"](
    value: any
  ): value is { [key: string | number | symbol]: unknown } {
    return typeof value === "object" && value != null;
  },

  ["Array"](value: any): value is Array<unknown> {
    return Array.isArray(value);
  },

  ["function"](
    value: any
  ): value is Function & { [key: string | number | symbol]: unknown } {
    return typeof value === "function";
  },

  ["Function"](
    value: any
  ): value is Function & { [key: string | number | symbol]: unknown } {
    return typeof value === "function";
  },

  ["tagged"](value: any, tag: string): boolean {
    const valueTag = getTag(value);
    return tag === valueTag;
  },

  ["instanceOf"]<T>(value: any, klass: { new (...args: any): T }): value is T {
    return value instanceof klass;
  },

  ["Error"](value: any): value is Error {
    return (
      value instanceof Error ||
      (is.object(value) &&
        is.string(value.message) &&
        is.string(value.name) &&
        value.name.endsWith("Error") &&
        getTag(value) === value.name)
    );
  },

  ["Infinity"](value: any): value is number {
    return value === Infinity;
  },

  ["NegativeInfinity"](value: any): value is number {
    return value === -Infinity;
  },

  ["NaN"](value: any): value is number {
    return Number.isNaN(value);
  },

  ["Date"](value: any): value is Date {
    return value instanceof Date || is.tagged(value, "Date");
  },

  ["RegExp"](value: any): value is RegExp {
    return value instanceof RegExp || is.tagged(value, "RegExp");
  },

  ["Map"](value: any): value is Map<unknown, unknown> {
    return value instanceof Map || is.tagged(value, "Map");
  },

  ["Set"](value: any): value is Set<unknown> {
    return value instanceof Set || is.tagged(value, "Set");
  },

  ["WeakMap"](value: any): value is Map<unknown, unknown> {
    return value instanceof Map || is.tagged(value, "Map");
  },

  ["WeakSet"](value: any): value is Set<unknown> {
    return value instanceof Set || is.tagged(value, "Set");
  },

  ["ArrayBuffer"](value: any): value is ArrayBuffer {
    return value instanceof ArrayBuffer || is.tagged(value, "ArrayBuffer");
  },

  ["SharedArrayBuffer"](value: any): value is SharedArrayBuffer {
    return (
      value instanceof SharedArrayBuffer ||
      is.tagged(value, "SharedArrayBuffer")
    );
  },

  ["DataView"](value: any): value is DataView {
    return value instanceof DataView || is.tagged(value, "DataView");
  },

  ["TypedArray"](value: any): value is TypedArray {
    return ArrayBuffer.isView(value) && !is.DataView(value);
  },

  ["Int8Array"](value: any): value is Int8Array {
    return value instanceof Int8Array || is.tagged(value, "Int8Array");
  },

  ["Uint8Array"](value: any): value is Uint8Array {
    return value instanceof Uint8Array || is.tagged(value, "Uint8Array");
  },

  ["Uint8ClampedArray"](value: any): value is Uint8ClampedArray {
    return (
      value instanceof Uint8ClampedArray ||
      is.tagged(value, "Uint8ClampedArray")
    );
  },

  ["Int16Array"](value: any): value is Int16Array {
    return value instanceof Int16Array || is.tagged(value, "Int16Array");
  },

  ["Uint16Array"](value: any): value is Uint16Array {
    return value instanceof Uint16Array || is.tagged(value, "Uint16Array");
  },

  ["Int32Array"](value: any): value is Int32Array {
    return value instanceof Int32Array || is.tagged(value, "Int32Array");
  },

  ["Uint32Array"](value: any): value is Uint32Array {
    return value instanceof Uint32Array || is.tagged(value, "Uint32Array");
  },

  ["Float32Array"](value: any): value is Float32Array {
    return value instanceof Float32Array || is.tagged(value, "Float32Array");
  },

  ["Float64Array"](value: any): value is Float64Array {
    return value instanceof Float64Array || is.tagged(value, "Float64Array");
  },

  ["Promise"](value: any): value is Promise<unknown> {
    return is.object(value) && is.function(value.then);
  },

  ["Generator"](value: any): value is Generator {
    return value instanceof Generator || is.tagged(value, "Generator");
  },

  ["GeneratorFunction"](value: any): value is GeneratorFunction {
    return (
      value instanceof GeneratorFunction ||
      is.tagged(value, "GeneratorFunction")
    );
  },

  ["AsyncFunction"](value: any): value is ((
    ...args: any
  ) => Promise<unknown>) & {
    [key: string | number | symbol]: unknown;
  } {
    return value instanceof AsyncFunction || is.tagged(value, "AsyncFunction");
  },

  ["AsyncGenerator"](value: any): value is AsyncGenerator {
    return (
      value instanceof AsyncGenerator || is.tagged(value, "AsyncGenerator")
    );
  },

  ["AsyncGeneratorFunction"](value: any): value is AsyncGeneratorFunction {
    return (
      value instanceof AsyncGeneratorFunction ||
      is.tagged(value, "AsyncGeneratorFunction")
    );
  },
};
