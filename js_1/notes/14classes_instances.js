/*
! Classes & Instances
* Classes allow us to build objects in an easier way, almost as if following a blueprint.

Objects
"The things you work with in the code"
Instances of classes (= based on classes)
Class-based creation is an alternative to using object literals.

Classes
"Blueprints for objects"
Defined how objects look, which properties and methods they have
Classes make creation of multiple similar objects much easier

! Class Fields vs. Properties
class Product {
  //* Class Field (below)
  category = 'DEFAULT';
  constructor(title) {
  ? Class Property (below)
    this.title = title;
  }

  printInfo() {
    console.log(this.title, this.category)
  }

}

! Static Properties, Fields, & Methods
* These properties, fields, and methods are defined with the keyword 'static'.
* They are only accessible on the class itself, not on an instance of the class!
Typically, these are used in helper classes, global configuration, etc.

? Instance fields, properties, and methods
* These are defined -without- any keyword, are only accessible on the instances of the class, and are used for core, re-usable logic

! When to use Classes?
* Object literals are great for general data grouping or objects that you only create once; they are quick and easy with no overhead.

* Classes, however, are great when you re-create the same type of object over and over again
* More overhead initially but easy 'object duplication' thereafter.

! Inheritance
* A base class holds some properties or methods and can be extended to other classes.

? Base Class:
Post { title, text, creatorId }

? New Class:
ImagePost { title, text, creatorId, imageURL, imageDesc }

* Building multiple classes with all this duplication would be a pain.
! You can therefore extend the base class to the individual ones to avoid repeating yourself and creating DRY code.


*/
