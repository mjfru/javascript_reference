/*
TODO #1: 
Create a "Course" class which has three properties: "title", "length and "price" (all set up in the constructor). Instantiate the class twice (two dummy courses of your choice). Output the objects to the console.
*/

//! #1
class Course {
  //! #5
  #price;

  //! #4
  get price() {
    return '$' + this.#price
  }

  //! #4
  set price(value) {
    if (value < 0) {
      throw 'Invalid number!';
    }
    //! #4 & #5
    this.#price = value;
  }

  constructor(title, courseTime, price) {
    this.title = title;
    this.courseTime = courseTime;
    //! #4
    this._price = price;
  }

//! #2
  printValue() {
    const value = this.courseTime / Math.ceil(+this.#price);
    return `You get about ${value} hours of course time per dollar spent!`;
  }
  printSummary() {
    return `${this.title} is a ${this.courseTime}-hour course selling for ${this._price};`
  }
}
//! #1
const javaScript = new Course("JavaScript Complete", 80, "19.99")
const python = new Course("Python Review 2025", 65, "15.99");
console.log(javaScript, python);

/*
TODO #2:
Add two methods to the "Course" class: A method which calculates the length/price value ("how much length do you get for the amount paid") and one method that outputs a nice course summary (including title, length and price). Call these methods thereafter (and output the result to the console).
*/

//! #2
console.log(javaScript.printValue());
console.log(python.printSummary());

/*
TODO #3:
Create two new, more specialized, classes: "PracticalCourse" and "TheoreticalCourse". Both should be based on the "Course" class but "PracticalCourse" should also have a "numOfExercises" property "TheoreticalCourse" should have a "publish()" method (which just prints something to the console). Instantiate both and use the new AND old properties and methods.
*/

//! #3
class PracticalCourse extends Course {
  constructor(title, courseTime, price, numOfExercises) {
    super(title, courseTime, price);
    this.numOfExercises = numOfExercises;
  }
}

const jsPractical = new PracticalCourse("Practical JS", 35, 20.99, 55);
console.log(jsPractical.title, jsPractical.numOfExercises, jsPractical.printSummary());

class TheoreticalCourse extends Course {
  constructor(title, courseTime, price) {
    super(title, courseTime, price);
  }

  publish() {
    console.log("This course was published recently.")
  }
}

const theoJS = new TheoreticalCourse("Theoretical JS", 22, 11.99, 20);
console.log(theoJS.printSummary());
theoJS.publish();

/*
TODO #4:
Use getters and setters to ensure that the "price" property can only be set to a positive value and is returned with a "$" in front of it.
*/

/*
TODO #5:
Use private fields to harden the getter/ setter approach from before.
*/
