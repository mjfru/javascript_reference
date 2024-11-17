const person1 = { name: "Matt" };
const person2 = { name: "Austin" };

//* A use case for a map might be if we want to attach some extra information to each but don't want to merge it into the object.

const example = new Map([["key", "some value"]]);

const personData = new Map([[person1, [{ data: "yesterday", price: 10 }]]]);
console.log(personData);

personData.set(person2, [{ date: "two weeks ago", price: 100 }]);

console.log(personData);
console.log(personData.get(person1));

for (const entry of personData.entries()) {
  console.log(entry);
}

//! OR, use some advanced array trickery...
for (const [key, value] of personData.entries()) {
  console.log(key, value);
}

//! OR to get just some data out...
for (const key of personData.keys()) {
  console.log(key);
}

for (const value of personData.values()) {
  console.log(value);
}

//! WeakMaps

const personalData = new WeakMap();
personalData.set(person1, 'Extra info...')

person = null;

console.log(personalData);
