/* eslint-disable @typescript-eslint/indent */

/**
 * Reverses the key and value of the passed-in `value` object,
 * such that the value becomes the key and the key becomes the value.
 *
 * @example
 * ```ts
 * const foo = {
 *   bar: 'baz',
 *   baf: 'bap',
 * };
 *
 * reverseObjectKv(foo);
 *
 * {
 *   baz: 'bar',
 *   bap: 'baf',
 * }
 * ```
 * @since 1.0.3
 */
export const reverseObjectKv = <
  TKey extends string,
  TValue extends string,
>(value: Record<TKey, TValue>): Record<TValue, TKey> => Object.entries(value || {})
  .reduce((prev, [k, v]: [TKey, TValue]) => {
    prev[v] = k;

    return prev;
  }, <Record<TValue, TKey>> {});

/* eslint-enable @typescript-eslint/indent */
