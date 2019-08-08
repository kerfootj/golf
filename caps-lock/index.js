/*
 * No A, just CAPS LOCK
 *
 * https://codegolf.stackexchange.com/questions/158132/no-a-just-caps-lock/189556
 */
f =
  s => s.split(/a|A/).map((x, i) => (i % 2 ? x.toUpperCase() : x)).join('')

console.log(f("The quick brown fox jumps over the lazy dog."));
console.log(f("Compilation finished successfully."));
console.log(f("What happens when the CapsLock key on your keyboard doesn't have a notch in it?"));
console.log(f("The end of the institution, maintenance, and administration of government, is to secure the existence of the body politic, to protect it, and to furnish the individuals who compose it with the power of enjoying in safety and tranquillity their natural rights, and the blessings of life: and whenever these great objects are not obtained, the people have a right to alter the government, and to take measures necessary for their safety, prosperity and happiness."));
console.log(f("aAaaaaAaaaAAaAa"));
console.log(f("CapsLock locks cAPSlOCK"));
console.log(f("wHAT IF cAPSlOCK IS ALREADY ON?"));