const ids = new Set(['Hi', 'from', 'set']);
console.log(ids); // Set(3) { 'Hi', 'from', 'set' };
console.log(ids[1]); // undefined!
console.log(ids.has(1)); // true

ids.add(2);

if (ids.has('Hi')) {
  ids.delete('Hi');
}
console.log(ids); 

for (const entry of ids.entries()) {
  console.log(entry[0]);
}
/*
[1, 1]
[2, 2]
[3, 3]
*/
//* Returns an interable of arrays where you have exactly two entries: the value twice.

//! WeakSets
//* If you will eventually 'let go' of data, you want to make sure the data goes to garbage collection.

const person1 = { name: "Matt" };
const person2 = { name: "Austin" };

const persons = new WeakSet();
persons.add(person1);

console.log(persons);