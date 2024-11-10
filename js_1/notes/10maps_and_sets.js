/*
! Maps & Sets
* While arrays and objects are what devs will work with the most, sets and maps are still relevant.

? Arrays:
- Store nested data of any kind and length
- Iterable, also many special array methods available
- Order is guaranteed, duplicates are allowed, zero-based index to access elements.

? Sets:
- Store nested data of any kind and length
- Iterable, also some special set methods available
- Order is NOT guaranteed, duplicates are NOT allowed, no index-based access.
! See example exercise.
? Used for instances like managing ids that are in use by logged-in users, you want to ensure a single ID cannot be used more than once at a time.

? Maps:
- Store key-value data of any kind and length, any key values are allowed.
*   While this sounds like an object, objects only allows strings or numbers (or symbols) as keys; maps allow anything.
- Iterable, also some special map methods available.
- Order is guaranteed, duplicate keys are NOT allowed, key-based access
* Maps can provide better performance for large quantites of data, objects are great for small/medium-sized sets of data
* Maps are better performing when adding / removing data frequently, objects are easier / quicker to create and also better with overall performance.

! In 98% of cases, you'll probably be using arrays and objects.

! WeakSets
* See example in the 'sets' exercise.

! WeakMaps
* See example in the 'maps' exercise
*/