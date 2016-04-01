/**
 * @copyright 2016, Aleksey Rubtsov alan.rubtsov@gmail.com
 *
 * The decorator may be used on methods
 * ```
 * import debounce from 'debounce';
 * class Component {
 *   @decorate(debounce, 250)
 *   method () {}
 * }
 * ```
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = decorate;

/*
 * decorate function with result of applying custom function
 */
function decorate() {
    let [ func, ...args ] = arguments;

    return function(target, name, descriptor) {
        let value = func.apply(undefined, [].concat(descriptor.value, args));

        return {
            configurable: true,
            value: value || descriptor.value
        };
    };
 }

module.exports = exports['default'];
