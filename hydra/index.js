/*
 * Attacking the Hydra
 *
 * https://codegolf.stackexchange.com/questions/189999/attacking-the-hydra
 */

// attempt 1 -  91 bytes
(N, A) => { t = Array.from(Array(N)).map(x => 0); A.forEach((x, i) = (t.splice(x, 1, i + 1, i + 1))); return t }

// attempt 2 - 69 bytes
(N, A) => { t = Array(N).fill(0); A.forEach((x, i) = (t.splice(x, 1, i + 1, i + 1))); return t }

// best answer - 51 bytes
a => a.map(i => b.splice(i, 1, ++g, g), b = a.map(_ => g = 0)) && b