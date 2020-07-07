//module wrapper fuctions
//(function (exports, require, __filename, __dirname))

//console.log(__dirname, __filename);
class Person {
  constructor(course, unit) {
    this.course = course;
    this.unit = unit;
  }

  greeting() {
    console.log(
      `Am a ${this.course} student and ${this.unit} is my favourite.`
    );
  }
}

module.exports = Person;
