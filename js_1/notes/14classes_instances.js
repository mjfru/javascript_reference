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
*/
