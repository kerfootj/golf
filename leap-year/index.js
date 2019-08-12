// attempt 1 - 33 bytes
f = n => n % 4 == 0 && (n % 100 != 0 || n % 400 == 0)

// attempt 2 - 21 bytes

f = y => !(y % (y % 25 ? 4 : 16))

console.log(f(2000))
console.log(f(2004))
console.log(f(2020))
console.log(f(3000))