/*
 * Dropsort
 *
 * https://codegolf.stackexchange.com/questions/61808/lossy-sorting-implement-dropsort
 */
f =
  // 59 bytes
  z => z.map((x, i, a) => a[i - 1] ? a[i - 1] <= x ? x : '' : x).filter(x => x != '')

console.log(f([1, 2, 5, 4, 3, 7]))
console.log(f([10, -1, 12]))
console.log(f([-7, -8, -5, 0, -1, 1]))
console.log(f([9, 8, 7, 6, 5]))
console.log(f([10, 13, 17, 21]))
console.log(f([10, 10, 10, 9, 10]))