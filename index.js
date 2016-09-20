/**
 * @copyright 2016, Aleksey Rubtsov alan.rubtsov@gmail.com
 *
 * The decorator may be used on methods
 * ```
 * import debounce from 'debounce';
 * class Component {
 *   @apply(debounce, 250)
 *   method () {}
 * }
 * ```
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = apply;

/*
 * decorate function with result of applying custom function
 */
function apply(func, ...args) {
    return function(target, name, descriptor) {
        const value = func.apply(undefined, [].concat(descriptor.value, args));

        return {
            configurable: true,
            value: value || descriptor.value
        };
    };
 }

module.exports = exports['default'];
