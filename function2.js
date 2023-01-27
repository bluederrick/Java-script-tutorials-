function person(name, age) {
  this.name = name;
  this.age = age;
}

const person_1 = new person("andrew", "34 ");
const person_2 = new person("victor ", "33");

console.log(person_1.age);

person_1.getfullname = function () {
  return this.name + " " + this.age;
};
console.log(person_1.getfullname());

function books(title, author) {
  this.title = title;
  this.author = author;

  function book_year(year) {
    console.log(`shakesspear is ${year}`);
  }
}

let book_ = new books("anomal farmland", "chiwedu obi");
console.log(book_.author);
